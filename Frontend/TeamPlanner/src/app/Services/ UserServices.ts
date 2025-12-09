import { Injectable } from "@angular/core";
import { DummyUser } from "../Model/DummyUser";

@Injectable({providedIn: 'root'})
export class UserServices {
    
    getAllUser(){
        return DummyUser;
    }
}