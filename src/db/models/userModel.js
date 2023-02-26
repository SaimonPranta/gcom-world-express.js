const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    nid: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true
    },
    referID: {
      type: String,
      required: true,
    },
    placementID: {
      type: String,
      required: true,
    },
    myVolioms: {
      voliomA: {
        type: String,
      },
      voliomB: {
        type: String,
      },
    },
    teamMembers: [
      new mongoose.Schema(
        {
          userID: {
            type: String,
          },
        },
        { timestamps: true }
      ),
    ],
    dailyPoints: {
      type: Number,
    },
    packages: {
      type: Array,
    },
    regularPoints: {
      type: Number,
    },
    accessPoints: {
      type: Number,
    },
    withdroawHistory: [
      new mongoose.Schema(
        {
          userID: {
            type: String,
            require: true,
          },
          amount: {
            type: Number,
            require: true,
          },
          points: {
            type: Number,
            require: true,
          },
        },
        { timestamps: true }
      ),
    ],
    rank: {
      type: String,
    },
    accountType: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    isTemporalyDeactivate: {
      type: Boolean,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userCollection = new mongoose.model("user_collection", userSchema);



module.exports = userCollection;

