import { Injectable } from "@angular/core";
import { DummyUser } from "../Model/DummyUser";

@Injectable({providedIn: 'root'})
export class UserServices {
    
    getAllUser(){
        console.log('hier sind die dummy user')
        console.log(DummyUser);
        return DummyUser;
    }
}