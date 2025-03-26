const asyncHandler = (fn) => (req, res, next) =>{
    Promise.resolve(fn(req, res, next)).catch(next);
}
    // next is a function that passes control to the next middleware function   


export default asyncHandler;    