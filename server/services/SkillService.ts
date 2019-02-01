import Skill from "../models/skill";

export const createSkill = (req, res) => {
    new Skill(req.body).save(function (err, result) {
        res.json(result);
    });
}