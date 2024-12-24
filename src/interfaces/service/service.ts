import mongoose from "mongoose";

export interface IServiceCategory {
    name: string;
    description: string;
}


export interface IService {
    name: string;
    description: string;
    price: number;
    duration: number;
    serviceCategoryId: mongoose.Types.ObjectId | IServiceCategory;
}