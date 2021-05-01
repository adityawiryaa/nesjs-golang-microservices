
import { v4 as uuid } from "uuid";

export class Product {
    id      : string = uuid();
    name    : string;
    price   : number;
    desc    : string;
}