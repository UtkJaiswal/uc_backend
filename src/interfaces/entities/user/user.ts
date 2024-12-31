import mongoose, { Model } from "mongoose";
import { IUserRole } from "../userRole/userRole";

export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    phoneNumber:number;
    email: string;
    userRole: mongoose.Types.ObjectId | IUserRole;
    isActive: Boolean
}

export interface IUserOtp {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId | IUser;
    otpHash: string,
    expiredAt: Date
}

export interface IUserOtpModel extends Model<IUserOtp> {
    hashOtp(otp: string): string;
}