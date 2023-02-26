const userCollection = require("../../db/models/userModel");

exports.user = async (req, res) => {
  try {
  } catch (error) {}
};
exports.registation = async (req, res) => {
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

  try {
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
      console.log("data are missing")
      return res.status(200).json({});
    }

    const processData = await new userCollection({
      ...req.body,
      placementID: req.body.referID,
    });
    const data = await processData.save();
      console.log("data are ok", data);
      return res.status(200).json({});


  } catch (error) {
    console.log(error);

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
