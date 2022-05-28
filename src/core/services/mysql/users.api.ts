import { Injectable } from "@nestjs/common";
const { usersDB } = require('../../../../db2');


export class UsersApiService{  
  getUsers = async () => {
    const retVal = usersDB.filter(item => delete item.password);
    return retVal;
  };
}