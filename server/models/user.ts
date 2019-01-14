import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  salt: String,
});

// Passport-Local Mongoose adds username, hash and salt field to store the username, the hashed password and the salt value.
// It supports Passport/Passport-Local by implementing a LocalStrategy and serializeUser/deserializeUser functions.
userSchema.plugin(passportLocalMongoose);

// Compile model from schema
const User = mongoose.model('User', userSchema);

export default User;
