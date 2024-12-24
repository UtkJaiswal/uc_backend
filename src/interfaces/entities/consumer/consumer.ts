import mongoose from "mongoose";
import { IUser } from "../user/user";
import { IPaymentType } from "../../paymentType/paymentType";

export interface IConsumerDetails {
    userId: mongoose.Types.ObjectId | IUser;
    rating: number;
    isPremiumMember: Boolean
    wallet: number
}
