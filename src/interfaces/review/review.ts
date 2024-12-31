import mongoose from "mongoose";
import { IBooking } from "../booking/booking";

export interface IReview {
    _id: mongoose.Types.ObjectId;
    bookingId: mongoose.Types.ObjectId | IBooking;
    rating: number;
    comment: string;
}