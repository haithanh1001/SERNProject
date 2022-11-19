let db = require("../models/index");

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("index", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about");
};

module.exports = {
  getHomePage,
  getAboutPage,
};
