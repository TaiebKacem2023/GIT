import { Property } from "./property";

export class Reservation {
    id!: number;
    name!: string;
    phoneNumber!: string;
    startDate!: number;
    endDate!: boolean;
    property!:Property;
}