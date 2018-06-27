import React from 'react';
import ReactDOM from 'react-dom';
import UserDb from './db';

let users=new UserDb();
console.log(users.getUsers());
ReactDOM.render(<div>Evovle Chat App</div>, document.querySelector('.container'));
 