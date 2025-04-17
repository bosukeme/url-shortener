import { Request, Response, NextFunction } from "express";
import { IAppError } from "../types/interfaces";

export const errorHandler = (err: IAppError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
};