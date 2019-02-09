import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const skillSchema = new mongoose.Schema({
  skill: String,
  strength: Number,
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  level: String,
  dept: String,
  image: String,
  skills: [skillSchema],
  hash: String,
  salt: String,
});

userSchema.plugin(passportLocalMongoose);

// Compile model from schema
const User = mongoose.model('User', userSchema);

export default User;
