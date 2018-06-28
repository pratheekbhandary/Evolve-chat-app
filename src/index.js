import React from 'react';
import ReactDOM from 'react-dom';
import UserDb from './db';

let users=new UserDb();
console.log(users.getUsers());
console.log(users.sortMessages('0M9J7syHh9O4tGSnLeMOiobxnzT2'))
ReactDOM.render(<div>Evovle Chat App</div>, document.querySelector('.container'));
 