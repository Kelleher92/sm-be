import User from '../models/user'

export const userLogin = (req, res) => {
    // new logic

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

