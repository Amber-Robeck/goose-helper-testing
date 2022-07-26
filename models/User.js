import mongoose from 'mongoose';
import argon2 from 'argon2';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const hash = await argon2.hash(this.password);
        this.password = hash;
    }

    next();
});

userSchema.methods.checkPassword = async function (password) {
    const result = await argon2.verify(this.password, password);
    // console.log(result);
    return result;
};

const User = mongoose.model('User', userSchema);

export default User;