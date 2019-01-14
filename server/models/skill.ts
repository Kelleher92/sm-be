import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const skillSchema = new mongoose.Schema({
    skill: String,
    strength: Number,
    userID : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
    hash: String,
    salt: String,
});

// Passport-Local Mongoose adds username, hash and salt field to store the username, the hashed password and the salt value.
// It supports Passport/Passport-Local by implementing a LocalStrategy and serializeUser/deserializeUser functions.
skillSchema.plugin(passportLocalMongoose);

// Compile model from schema
const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
