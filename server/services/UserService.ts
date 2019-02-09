import User from '../models/user'
import { IUser } from '../models/user'
import * as bcrypt from 'bcrypt';

export const userLogin = (req, res) => {
    User.findOne({email: req.email})
        .exec(function (err, user : IUser) {
            if (err) {
                return err
            } else if (!user) {
                let err: { status?: number, message: string } = new Error('User or Password is incorrect');
                err.status = 401;
                return err;
            }
            bcrypt.compare(req.password, user.password, function (err, result) {
                if (result === true) {
                    return user;
                } else {
                    let err: { status?: number, message: string } = new Error('User or Password is incorrect');
                    err.status = 401;
                    return err;
                }
            })
        });
}

export const createUser = (req, res) => {
    new User(req.body).save(function (err, result) {
        res.json(result);
    });
}

export const listUsers = (req, res) => {
    User.find({}, function(err, users) {
        let userMap = {};
        users.forEach(function(user) {
            userMap[user._id] = user;
        });
        res.json(userMap);
    });
}



// EditUser

