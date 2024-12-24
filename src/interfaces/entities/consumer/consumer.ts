import mongoose from "mongoose";
import { IUser } from "../user/user";

export interface IConsumerDetails {
    user_id: mongoose.Types.ObjectId | IUser;
    rating: number;
    isPremiumMember: Boolean
    wallet: number
}