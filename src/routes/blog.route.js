"use strict"
/* ====================================================== */
/*                     BLOG API Routes               */
/* ====================================================== */
const router = require("express").Router()

//const { route } = require("express/lib/router")
const { BlogCategory, BlogPost } = require("../controllers/blog.controller")

//Blog category
router.route('/categories')
    .get(BlogCategory.list)
    .post(BlogCategory.create)

router.route('/posts/:categoryId')
    .get(BlogCategory.read)
    .put(BlogCategory.update) // put patch aynı
    .patch(BlogCategory.update)
    .delete(BlogCategory.delete)

//Blog post
router.route('/posts')
    .get(BlogPost.list)
    .post(BlogPost.create)

router.route('/posts/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update) // put patch aynı
    .patch(BlogPost.update)
    .delete(BlogPost.delete)


module.exports = router