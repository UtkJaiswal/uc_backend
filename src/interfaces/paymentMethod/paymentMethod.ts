import mongoose from "mongoose"
import { IUser } from "../entities/user/user"
import { IPaymentType } from "../paymentType/paymentType";

export interface ICardDetails {
    userId: mongoose.Types.ObjectId | IUser;
    paymentType: mongoose.Types.ObjectId | IPaymentType;
    nameOnCard: string;
    cardNumber: number,
    cvv: number,
    expiryDate: Date
}

export interface IUPIDetails {
    userId: mongoose.Types.ObjectId | IUser;
    paymentType: mongoose.Types.ObjectId | IPaymentType;
    upiId: string;
}

export interface IBankDetails {
    userId: mongoose.Types.ObjectId | IUser;
    paymentType: mongoose.Types.ObjectId | IPaymentType;
    name: string,
    bankName: string,
    accountNumber: number,
    ifscCode: string
}