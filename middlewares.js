import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "chatting";
    res.locals.loggedInUser = req.session.user;
    console.log(res.locals);
    next();
}

export const uploadFiles = multer({
    dest:"uploads/"
})