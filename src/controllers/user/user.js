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
      return res.status.json({});
    }
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
