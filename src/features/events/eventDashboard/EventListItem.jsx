import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { deleteEvent } from '../eventAction';

export default function EventListItem({event}) {
  const {title, date, description, hostedBy, venue, attendees, hostPhotoURL} = event;
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header content={title} />
              <Item.Description>
                Hosted by {hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {JSON.stringify(date)}
          <Icon name='marker' /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {
            attendees.map(attendee => (
              <EventListAttendee key={attendee.id} attendee={attendee} />
            ))
          }
        </List>
      </Segment>
      <Segment clearing>
        <div>{description}</div>
        <Button 
          color='red' 
          floated='right' 
          content='Delete' 
          onClick={() => dispatch(deleteEvent(event.id))} 
        />
          <Button 
          color='teal' 
          floated='right' 
          content='View' 
          as={Link} to={`/events/${event.id}`}
        />
      </Segment>
    </Segment.Group>
  )
}