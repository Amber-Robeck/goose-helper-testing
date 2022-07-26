import { check, validationResult } from "express-validator";

const userValidation = [
    check('userName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('A username is required!')
        .isLength({ min: 5, max: 25 })
        .withMessage('Username needs to be between 5 and 25 characters!'),
    check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be a valid email address!'),
    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('A password is required!')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long!'),


];

const validate = (req, res, next) => {
    const errors = validationResult(req).array();
    if (!errors.length) {
        return next();
    }
    res.status(400).json({ success: false, errors: errors.map(error => error.msg) });
};

export { userValidation, validate };