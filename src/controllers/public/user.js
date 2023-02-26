const userCollection = require("../../db/models/userModel");

exports.getPlacementID = async (req, res) => {
  try {
    const { userID } = await req.params;
    const referInfo = await userCollection.findOne(
      { userID },
      {
        myVolioms: 1,
        gender: 1,
      }
    );
    if (!referInfo) {
      return res.json({
        message: "Your provided Referral ID are invalid",
      });
    }
    if (!referInfo.myVolioms.voliomA || !referInfo.myVolioms.voliomB) {
      return res.json({
        message: "Your volume are not full yet",
      });
    }
    // const allFindedUser = await [];
    const allMemberOFReferer = await userCollection.find(
      { referID: userID },
      {
        userID: 1,
        myVolioms: 1,
      }
    );
    if (allMemberOFReferer.length <= 0) {
      const gender = (await referInfo.gender) == "male" ? "he" : "she";
      return res.json({
        message: `${gender} have no member yet`,
      });
    }
    const filterData = await allMemberOFReferer.filter((user) => {
      if (!user.myVolioms) {
        return true;
      } else {
        if (!user.myVolioms.voliomA || !user.myVolioms.voliomB) {
          return true;
        }
      }
    });
    res.json({
      data: filterData,
    });
  } catch (error) {
    res.json({});
  }
};
