const express = require ("express");
const { addUsers, deleteUsers } = require("../controlusers/users");
const router = express.Router();


router.route("/").get(getUsers) ;

router.route("/").post(addUsers);

router.route("/").delete(deleteUsers);

router.route('/:userId').get(getsingleUsers );





module .exports ={

    routes,
};