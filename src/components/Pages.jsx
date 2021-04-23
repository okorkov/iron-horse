import React from 'react';
import { FullPage, Slide } from 'react-full-page';
 
export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage scrollMode>
        <Slide>
          <h1>About</h1>
        </Slide>
        <Slide>
          <h1>Gallery</h1>
        </Slide>
        <Slide>
          <h1>Contacts</h1>
        </Slide>
      </FullPage>
    );
  }
}