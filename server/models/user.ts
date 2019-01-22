import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  rank: String,
  hash: String,
  salt: String,
});

userSchema.plugin(passportLocalMongoose);

// Compile model from schema
const User = mongoose.model('User', userSchema);

export default User;
