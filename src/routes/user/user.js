const express = require("express");
const router = express.Router();
const {
  user,
  registation,
  login,
  updateUser,
  deleteUser,
  registationExistingInfoVerification,
} = require("../../controllers/user/user");

router.get("/:id", user);
router.post(
  "/registation/data_verification",
  registationExistingInfoVerification
);
router.post("/registation", registation);
router.post("/login", login);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
