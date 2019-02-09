import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';
import * as bcrypt from 'bcrypt';

const skillSchema = new mongoose.Schema({
  skill: String,
  strength: Number,
});

interface IUser extends mongoose.Document{
  email: string;
  password: string;
  name: string;
}

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  level: String,
  dept: String,
  image: String,
  skills: [skillSchema],
  hash: String,
  salt: String,
});

// hashing the password before saving
userSchema.pre<IUser>('save', function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

// when returning the user object remove the password
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.local.password;
    return ret;
  }
});

userSchema.plugin(passportLocalMongoose);

// Compile model from schema
const User = mongoose.model('User', userSchema);

export default User;
