import {ObjectId} from "mongodb";

export interface IGoal {
    _id?: ObjectId
    userId: ObjectId
    name: string;
    targetAmount: number;
    currentAmount: number;
    tag: string;
}