import mongoose from "mongoose";
import { IBooking } from "../booking/booking";

export interface IReview {
    bookingId: mongoose.Types.ObjectId | IBooking;
    rating: number;
    comment: string;
}