const express = require("express");
const { authenticateToken } = require("../middleware/login");
const router = express.Router();
let Resume = require('../models/resume');


router.route('/').get((req, res) => {
  Resume.find()
    .then(Resumes => res.json(Resumes))
    .catch(err => res.status(400).json('Error: ' + err));
});

exports.getResume = async (req, res) => {
  const { user_id } = req;
  const resume = await Resume.findOne({ user_id: `${user_id}` });
  res.status(200).json({
    success: true,
    resume,
  });
};

exports.postResume = async (req, res) => {
  const { user_id } = req;
  const {
    firstName,
    lastName,
    currentCity,
    postalCode,
    email,
    phone,
    degree,
    fieldOfStudy,
    college,
    year,
    jobTitle,
    company,
    jobCity,
    jobYear,
    jobDesc,
    skills,
  } = req.body;

  const resume = await Resume.create({
    user_id,
    firstName,
    lastName,
    currentCity,
    postalCode,
    email,
    phone,
    degree,
    fieldOfStudy,
    college,
    year,
    jobTitle,
    company,
    jobCity,
    jobYear,
    jobDesc,
    skills,
  });

  res.status(200).json({
    success: true,
    resume,
  });
};



router.route('/add').post((req, res) => {
  router
  .route("/resume")
  .get(authenticateToken, getResume)
  .post(authenticateToken, postResume);
  });



module.exports = router;
