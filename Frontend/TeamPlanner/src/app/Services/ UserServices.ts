import { Injectable } from "@angular/core";
import { DummyUser } from "../Model/DummyUser";
import { UserModel } from "../Model/UserModel";

@Injectable({providedIn: 'root'})
export class UserServices {
    
    async getAllUser(): Promise<UserModel[]>{
        const respond = await fetch("http://localhost:5053/getAllUser");
        if (!respond.ok) {
            throw new Error("http request failed");
        }
            console.log('daten geladen');
            const data: UserModel[] = await respond.json();
            return data;
    }

    addNewUser(_name: string){
        let newUser = {
            id: Math.random(),
            name: _name
        }
        DummyUser.push(newUser);
    }
}