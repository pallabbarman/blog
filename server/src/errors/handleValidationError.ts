/* eslint-disable comma-dangle */
import httpStatus from 'http-status';
import { Error } from 'mongoose';
import { IGenericErrorMessage, IGenericErrorResponse } from 'types/errors';

const handleValidationError = (error: Error.ValidationError): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
        (element: Error.ValidatorError | Error.CastError) => ({
            path: element?.path,
            message: element?.message,
        })
    );

    const statusCode = httpStatus.BAD_REQUEST;

    return {
        statusCode,
        message: 'Validation Error',
        errorMessages: errors,
    };
};

export default handleValidationError;

// mongodb+srv://blogusername:blogpass@blog.hkh5hun.mongodb.net/?retryWrites=true&w=majority
