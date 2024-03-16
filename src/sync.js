"use strict"

const { BlogCategory, BlogPost } = require('./models/blog.model')
//gecmis kayitlara caegory id eklemek icin bu kodu kullanabiliriz
module.exports = async () => {

    /* BlogCategory */

    // Get first blogCategory:
    const blogCategory = await BlogCategory.findOne()
    // console.log(blogCategory._id)

    if (blogCategory) {
        BlogPost.updateMany({ //? Filter:
            "blogCategoryId": { $exists: false } // field yok ise
        }, { //? Update:
            "blogCategoryId": blogCategory._id // kaydı ata
        }).catch(err => console.log(err))
    }

    // End:
    console.log('* Synchronized *')
    /* Finished */
}