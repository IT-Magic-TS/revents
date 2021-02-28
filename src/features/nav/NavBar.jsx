import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignInMenu from './SignInMenu';


export default function NavBar({setFormOpen}) {

  const history = useHistory();
  const [auth, setAuth] = useState(false);

  function handleSignOut() {
    setAuth(false);
    history.push('/');
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item exact as={NavLink} to='/' header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: '15px'}}/>
          Re-vents
        </Menu.Item> 
        <Menu.Item exact as={NavLink} to='/events' name='events' />
        {auth && 
          <Menu.Item exact as={NavLink} to='/createEvent'>
            <Button
              positive 
              inverted 
              content='Create Event' 
            />
          </Menu.Item>
        }

        {auth ? <SignInMenu signOut={handleSignOut} /> : <SignedOutMenu setAuth={setAuth} />}
    
      </Container>
    </Menu>
  )
}