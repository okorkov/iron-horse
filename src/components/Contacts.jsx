import React from 'react';


const Contacts = () => {

  const email = 'address@gmail.com';

  return (
    <div id="contacts">
      <input type="email" maxlength="50" placeholder="Title..." value="" />
      <textarea rows="8" maxlength="500" placeholder="Contents..." />
      <a href="mailto:address@gmail.com?subject=Hello there&amp;body=I wanted to ask" target="_blank" rel="noopener noreferrer">Send E-mail</a>
    </div>
  );
}

export default Contacts;
