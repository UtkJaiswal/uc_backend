import mongoose from "mongoose";
import { IArea } from "../area/area";

export interface IServiceCategory {
    _id: mongoose.Types.ObjectId;
    name: string;
    description: string;
}


export interface IService {
    _id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    price: number;
    duration: number;
    serviceCategoryId: mongoose.Types.ObjectId | IServiceCategory;
}

export interface IServiceArea {
    _id: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId | IService;
    areaId: mongoose.Types.ObjectId | IArea;
    isActive: boolean
}