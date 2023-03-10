const userCollection = require("../../db/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.user = async (req, res) => {
  try {
  } catch (error) {}
};

exports.registationExistingInfoVerification = async (req, res) => {
  console.log("ok");
  try {
    const {
      fullName,
      fatherName,
      motherName,
      gender,
      phoneNumber,
      userID,
      email,
      address,
      country,
      nid,
      referID,
      placementID,
      password,
    } = req.body;
    if (
      !fullName ||
      !fatherName ||
      !motherName ||
      !gender ||
      !phoneNumber ||
      !userID ||
      !email ||
      !address ||
      !country ||
      !nid ||
      !referID ||
      !password
    ) {
      console.log("data are missing");
      return res.status(200).json({});
    }
    const checkisUserIDExist = await userCollection.findOne(
      {
        userID,
      },
      {
        _id: 1,
      }
    );
    const checkisEmailExist = await userCollection.findOne(
      {
        email,
      },
      {
        _id: 1,
      }
    );
    const checkisphoneNumberExist = await userCollection.findOne(
      {
        phoneNumber,
      },
      {
        _id: 1,
      }
    );
    const checkIsRefferIDExist = await userCollection.findOne(
      {
        userID: referID,
      },
      {
        _id: 1,
      }
    );
    const checkIsPlacementIDExist = await userCollection.findOne(
      {
        userID: placementID,
      },
      {
        _id: 1,
      }
    );

    if (checkisUserIDExist?._id) {
      return res.status(200).json({
        failed: "Sorry, Your provided User ID is already exist.",
      });
    }
    if (checkisphoneNumberExist?._id) {
      return res.status(200).json({
        failed: "Sorry, Your provided Phone Number is already exist.",
      });
    }
    if (checkisEmailExist?._id) {
      return res.status(200).json({
        failed: "Sorry, Your provided Email is already exist.",
      });
    }
    if (!checkIsRefferIDExist) {
      return res.status(200).json({
        failed:
          "Please provide correct Refferal ID, Your provided Refferal ID is not exist.",
      });
    }
    if (!checkIsPlacementIDExist) {
      return res.status(200).json({
        failed:
          "Please provide correct Placement ID, Your provided Placement ID is not exist.",
      });
    }
    return res.status(200).json({
      sucess: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      failed: "Something is wrong please try again letter.",
    });
  }
};
exports.registation = async (req, res) => {
  try {
    const { password, productID } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const processData = await new userCollection({
      ...req.body,
      packages: [productID],
      password: hashedPassword,
    });

    const data = await processData.save();

    if (data?._id) {
      const token = await jwt.sign(
        {
          userID: data.userID,
          id: data._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "3d" }
      );
      data.password = null;

      return res.status(201).json({
        data: data,
        sucess: "sucessfully created your accout",
        token: token,
      });
    }
    res.status(200).json({
      failed: "Failed to create your account, please try again latter",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      failed: "Something is wrong, please try again latter",
    });
  }
};

exports.login = async (req, res) => {
  console.log("ok", req.body);
  try {
    const { userID, password } = await req.body;
    const user = await userCollection.findOne({ userID });
    if (!user._id) {
      return res.json({
        failed: "User or Password are invalid, please try again",
      });
    }
    const hashing = await bcrypt.compare(password, user.password);
    if (hashing && user?._id) {
      user.password = await "";
      const token = await jwt.sign(
        {
          userID: user.userID,
          id: user._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "3d" }
      );

      return res.json({
        data: user,
        token: token,
      });
    }
    res.json({
      failed: "User or Password are invalid, please try again",
    });
  } catch (error) {
    console.log(error);
    res.json({
      failed: "User or Password are invalid, please try again",
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
exports.deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
