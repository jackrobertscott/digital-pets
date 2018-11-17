import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Use this to login users.
 */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: { getters: true },
  }
);

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
userSchema.method('toGraph', function toGraph(this: any) {
  return {
    ...this.toObject(),
  };
});

/**
 * Has a user's password when the change it.
 */
userSchema.pre('save', function preSave(this: any, next) {
  if (!this.isModified('password')) {
    next();
  } else {
    bcrypt
      .genSalt(5)
      .then(salt => bcrypt.hash(this.password, salt))
      .then(hash => {
        this.password = hash;
        next();
      })
      .catch(next);
  }
});

/**
 * Compare hashed passwords.
 */
userSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model('User', userSchema);
