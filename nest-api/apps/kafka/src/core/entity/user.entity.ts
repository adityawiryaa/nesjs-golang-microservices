 import { v4 as uuid } from "uuid";

export class User {
    id : string = uuid();
    email : string;
    password : string;
}