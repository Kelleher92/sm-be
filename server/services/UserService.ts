import User from '../models/user'

export const userLogin = (req, res) => {
    new User(req.body).save(function (err, result) {
        res.json(result);
    });
}

export const createUser = (req, res) => {
    new User(req.body).save(function (err, result) {
        res.json(result);
    });
}

// EditUser

