import Skill from "../models/skill";

export const createSkill = (req, res) => {
    // need a user id and skills id
    new Skill(req.body).save(function (err, result) {
        res.json(result);
    });
}