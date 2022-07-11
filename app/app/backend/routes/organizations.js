const router = require('express').Router();
let Organization = require('../models/organization.model');

router.route('/').get((req, res) => {
  Organization.find()
    .then(Organizations => res.json(Organizations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const orgname = req.body.orgname;
  const description = req.body.description;
  const start = Date.parse(req.body.start);

  const newOrganization = new Organization({
    orgname,
    description,
    start
  });

  newOrganization.save()
  .then(() => res.json('Organization added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;