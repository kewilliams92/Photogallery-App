const router = require("express").Router();
const { Photographer } = require("../db");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
        const updatedUser = await Photographer.findByIdAndUpdate(req.params.id, {
        $set: req.body,
        });
        res.status(200).json(updatedUser, "Account has been updated");
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(401).json("You can update only your account");
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await Photographer.findOne({ userName: req.body.userName });
    !user && res.status(404).json("Wrong credientials");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong credientials");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;