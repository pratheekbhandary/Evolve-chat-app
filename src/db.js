import db from './test';
import {get} from 'lodash';

export default class users{
    constructor(){
        this.dataBase=db;
        this.unNamedHumanCount=0;
    }

    getUsers(){
        let userList=[];
        for (var userId in this.dataBase) {
            const name=get(this.dataBase[userId],'name.current',undefined);
            userList.push(
                {
                    name:name?name:`UNNAMED Human ${++this.unNamedHumanCount}`,
                    id:userId
                });
        }
        return userList
    }

    /* Decodes ID of chat into corresponding Timestamp */
    decode(id){
        const PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"; 
        id = id.substring(0,8);
        let timestamp = 0;
        for (let i=0; i < id.length; i++) {
        let c = id.charAt(i);
        timestamp = timestamp * 64 + PUSH_CHARS.indexOf(c);
        }
        return timestamp;
   }

   sortMessages(userId){
       debugger;
    const messagesArray=Object.keys(this.dataBase[userId].messages)
    .map(messageId=>{
        return {'timeStamp':this.decode(messageId),
                ...this.dataBase[userId].messages[messageId]}
        });

        messagesArray.sort((msg1,msg2)=>{
            return parseInt(msg1.timeStamp)-parseInt(msg2.timeStamp)
        });
        return messagesArray;
    }
}
