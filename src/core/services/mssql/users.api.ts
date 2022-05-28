import { Injectable } from "@nestjs/common";
import { IUsers } from "src/core/interfaces/IUsers";
const { usersDB } = require('../../../../db');


export class UsersApiService implements IUsers {  
  getUsers = async () => {
    const retVal = usersDB.filter(item => delete item.password);
    return retVal;
  };
}