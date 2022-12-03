const blog = require('../models/blog')
const Blog=require('../models/blog')

exports.create = async (req, res) => {
    try { 
      const blog = new Blog({
      user: req.body.user,
      content:req.body.content
    })
    blog.save()
      res.status(201).json(blog)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  exports.delete = async (req,res) =>{
    const {blogId} = req.params;
    try {
        const blog = await Blog.findByIdAndRemove(blogId);
        res.status(201).json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
  }
