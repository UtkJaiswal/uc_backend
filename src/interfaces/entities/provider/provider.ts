import mongoose from "mongoose";
import { IUser } from "../user/user";
import { IService } from "../../service/service";

export enum VerificationStatus {
    Verified = "Verified",
    Pending = "Pending",
    Rejected = "Rejected"
}

export interface IProviderDetails {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId | IUser;
    profilePicture: string;
    rating: number;
    address: string;
    pincode: number;
    aadhaarNumber: number;
    aadhaarNumberVerificationStatus: VerificationStatus;
}

export interface IProviderService {
    _id: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId | IUser;
    serviceId: mongoose.Types.ObjectId | IService;
    price: number;
    rating: number;
    skillCertificate: string;
    skillCertificateVerificationStatus: VerificationStatus;
}