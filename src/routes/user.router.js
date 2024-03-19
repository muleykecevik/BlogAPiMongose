"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */
const router = require("express").Router()

const User = require("../controllers/user.controller")

router.post('/login', User.login)
router.get('/logout', User.logout) //veri gonderimi olmayacak router.all da diyebiliriz. guvenligi onemsiz
// User:
router.route('/')
    .get(User.list)
    .post(User.create)
router.route('/:userId')
    .get(User.read)
    .put(User.update) // put patch aynı
    .patch(User.update)
    .delete(User.delete)



module.exports = router