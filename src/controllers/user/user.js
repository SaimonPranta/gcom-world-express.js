const userCollection = require("../../db/models/userModel");

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
    const checkisUserIDExist = await userCollection.findOne({
      userID,
    });
    const checkisphoneNumberExist = await userCollection.findOne({
      phoneNumber,
    });
     const checkIsRefferIDExist = await userCollection.findOne({
       userID: referID,
     });
      const checkIsPlacementIDExist = await userCollection.findOne({
        userID: placementID,
      });

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
    console.log(error)
    return res.status(200).json({
      failed: "Something is wrong please try again letter.",
    });
  }
};
exports.registation = async (req, res) => {
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
      password,
    } = req.body;
    console.log("hi");

    const processData = await new userCollection({
      ...req.body,
      placementID: req.body.referID,
    });
    const data = await processData.save();
    console.log("data are ok", data);
    return res.status(200).json({});
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({});
  }
};
exports.login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
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
