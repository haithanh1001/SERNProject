let db = require("../models/index");
import CRUDService from "../services/CRUDService";
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

let getCRUD = async (req, res) => {
  return res.render("crud");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  return res.send(message);
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log(data);
  return res.render("displayCRUD", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);

    return res.render("editCRUD", {
      user: userData,
    });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  await CRUDService.updateUserData(data);
  return res.redirect("/get-crud");
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.redirect("/get-crud");
  } else {
    res.send("user not found");
  }
};
module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
