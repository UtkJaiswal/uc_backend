import mongoose from "mongoose";
import { IUser } from "../entities/user/user";

export interface IRefer {
    _id: mongoose.Types.ObjectId;
    referredBy: mongoose.Types.ObjectId |IUser;
    referralCode: string;
}