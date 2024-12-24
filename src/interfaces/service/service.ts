import mongoose from "mongoose";
import { IArea } from "../area/area";

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

export interface IServiceArea {
    serviceId: mongoose.Types.ObjectId | IService;
    areaId: mongoose.Types.ObjectId | IArea;
    isActive: boolean
}