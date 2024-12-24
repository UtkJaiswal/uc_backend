import mongoose from "mongoose";
import { IUser } from "../user/user";

export enum VerificationStatus {
    Verified = "Verified",
    Pending = "Pending",
    Rejected = "Rejected"
}

export interface IProviderDetails {
    userId: mongoose.Types.ObjectId | IUser;
    profilePicture: string;
    rating: number;
    address: string;
    pincode: number;
    aadhaarNumber: number;
    aadhaarNumberVerificationStatus: VerificationStatus;
}