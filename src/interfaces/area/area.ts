import mongoose from "mongoose";

export interface IArea {
    _id: mongoose.Types.ObjectId;
    city: string;
    state: string;
    country: string;
    pinCode: number;
}