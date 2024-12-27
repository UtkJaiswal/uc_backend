import mongoose from "mongoose";
import { IUser } from "../entities/user/user";

export interface IRefer {
    referredBy: mongoose.Types.ObjectId |IUser;
    referralCode: string;
}