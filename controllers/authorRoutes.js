const express = require("express");
const Author = require("../models/Author");
const Cookbook = require("../models/Cookbook");
const { route } = require("./cookbookRoutes");
const router = express.Router();

// Write the route to list all authors

router.get(`/`, async (req, res) => {
  const author = await Author.find({});
  res.json({
    status: 200,
    data: author,
  });
});

// Write the route to get authors by firstname
router.get(`/`, async (req, res) => {
  const author = await Author.find(req.params.firstName);
  res.json({ status: 200, data: author });
});

// Write the route to create an author:
router.post(`/`, async (req, res) => {
  const author = await Author.create(req.body);
  res.json({ status: 200, data: author });
});

// Write the route to update an author
router.put(`/`, async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ status: 200, data: author });
});

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)

router.delete(`/:authorName/deleteCookbook/:cookbookid`, async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.firstName);
  const cookbook = await Cookbook.findByIdAndDelete(req.params.id, {
    $push: { cookbook: cookbook.id },
    new: true,
  });
  res.json({ status: 200, data: author });
});

module.exports = router;
