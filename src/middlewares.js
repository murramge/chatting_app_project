import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import "dotenv/config"

const s3 = new aws.S3({
    credentials: {
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET
    }
})

const multerUploader = multerS3({
    s3: s3,
    bucket: 'hamstertalk',
    acl: 'public-read',
})

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "chatting";
    res.locals.loggedInUser = req.session.user;

    let today = new Date();
    let hours = today.getHours();
    hours = hours < 10 ? '0' + hours.toString() : hours.toString();
    let minute = today.getMinutes();
    minute = minute < 10 ? '0' + minute.toString() : minute.toString();
    res.locals.time = hours + ':' + minute;
    
    // console.log(res.locals);

    next();
}

export const uploadFiles = multer({
    dest:"uploads/",
    storage: multerUploader
})

