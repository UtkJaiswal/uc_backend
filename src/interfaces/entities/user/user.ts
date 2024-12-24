import mongoose from "mongoose";
import { IUserRole } from "../userRole/userRole";

export interface IUser {
    name: string;
    phoneNumber:number;
    email: string;
    userRole: mongoose.Types.ObjectId | IUserRole;
    isActive: Boolean
}

export interface IUserOtp {
    userId: mongoose.Types.ObjectId | IUser;
    otpHash: string,
    expiredAt: Date
}