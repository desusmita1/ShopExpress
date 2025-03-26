const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 400;
        message = 'Resource Not Found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack, // Pancake emoji in production
    });
};

export { notFound, errorHandler };
// This file contains two middleware functions. The first one is notFound. This function is used to handle requests for non-existent routes. It creates an error object with a message of Not Found and passes it to the next middleware function. The second middleware function is errorHandler. This function is used to handle errors that occur in the application. It sets the status code of the response based on the error and sends a JSON response with the error message and stack trace. If the application is running in production mode, it sends a pancake emoji instead of the stack trace. These middleware functions are used in the server.js file to handle errors and not found routes.