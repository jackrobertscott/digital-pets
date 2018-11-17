import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Use this to login users.
 */
const petSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    name: {
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
petSchema.method('toGraph', function toGraph(this: any) {
  return {
    ...this.toObject(),
  };
});

export default mongoose.model('Pet', petSchema);
