import { Trainer } from "./trainer.model";

export class Course{
    constructor(public id?:number,public courseCode ?: string,public courseName ?: string,public fees ?: number,public trainer ?: Trainer,public courseCategory ?: string){

    }
}