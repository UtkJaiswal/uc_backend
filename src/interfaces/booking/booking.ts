import mongoose from "mongoose";
import { IUser } from "../entities/user/user";
import { IService } from "../service/service";
import { VerificationStatus } from "../entities/provider/provider";
import { IConsumerAddress } from "../entities/consumer/consumer";


export interface IBooking {
    consumerId: mongoose.Types.ObjectId | IUser;
    serviceId: mongoose.Types.ObjectId | IService;
    providerId: mongoose.Types.ObjectId | IUser;
    bookingTime: Date;
    bookingStatus: VerificationStatus;
    totalPrice: number;
    totalTip: number;
    totalTax: number;
    quantity: number;
    consumerAddress: mongoose.Types.ObjectId | IConsumerAddress;
    servicePreference: string;
}