import mongoose from "mongoose";
import { IUser } from "../user/user";

export interface IConsumerDetails {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId | IUser;
    rating: number;
    isPremiumMember: Boolean
    wallet: number
}

export interface IConsumerAddress {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId | IUser;
    address: string;
    pincode: number;
    name: string;
    phoneNumber: number
}