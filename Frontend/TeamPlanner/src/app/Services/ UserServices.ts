import { Injectable } from "@angular/core";
import { DummyUser } from "../Model/DummyUser";

@Injectable({providedIn: 'root'})
export class UserServices {
    
    getAllUser(){
        return DummyUser;
    }

    addNewUser(_name: string){
        let newUser = {
            id: Math.random(),
            name: _name
        }
        DummyUser.push(newUser);
    }
}