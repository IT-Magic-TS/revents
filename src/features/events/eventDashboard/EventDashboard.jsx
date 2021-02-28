import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'

import sampleData from '../../../app/api/sampleData'

export default function EventDashboard () {
  const [events, setEvents] = useState(sampleData);

  // function handleCreateEvent (event) {
  //   setEvents([...events, event]);
  //   setFormOpen(false);
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   console.log('Updated Event: ', updatedEvent)
  //   setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt ));
  // }

  function deleteEvent(eventId) {
    setEvents(events.filter(evt => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={deleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  )
}
