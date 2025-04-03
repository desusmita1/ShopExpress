import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '365d'
    });
    // set JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.nNODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 365 * 24 * 60 * 60 * 1000 // 365 days
    });
};

export default generateToken;