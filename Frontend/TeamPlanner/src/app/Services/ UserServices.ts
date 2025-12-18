import { Injectable } from '@angular/core';
import { DummyUser } from '../Model/DummyUser';
import { UserModel } from '../Model/UserModel';

@Injectable({ providedIn: 'root' })
export class UserServices {

  async getAllUser(): Promise<UserModel[]> {
    const respond = await fetch('http://localhost:5053/getAllUser');
    if (!respond.ok) {
      throw new Error('http request failed');
    }
    console.log('daten geladen');
    const data: UserModel[] = await respond.json();
    return data;
  }

  async addNewUser(_name: string) {
    const url = 'http://localhost:5053/addUser';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_name),
      });
      if (!response.ok) {
        console.log('error with post request');
      }
    } catch (error) {
      console.log(error);
    }
  }

  deleteUser(id: number){
    console.log('delete following user '+ id);
  }
}
