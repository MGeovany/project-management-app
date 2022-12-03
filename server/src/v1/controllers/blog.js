const Blog=require('../models/blog')

exports.create = async (req, res) => {
  const content= req.body.content
    try {
      const blog = await Blog.create(
        {
          user: req.user._id,
          content:content
        }
      )
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

  exports.update = async (req, res) => {
    const { blogId } = req.params
    const newUpdate=req.body
    try {
      const blog = await Blog.findByIdAndUpdate(
        blogId,newUpdate 
      )
      res.status(200).json(blog)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  exports.getAll = async (req,res)=>{
    try {
      const blogs = await Blog.find().sort('-position')
      res.status(200).json(blogs)
    } catch (err) {
      res.status(500).json(err)
    }
  
  }
