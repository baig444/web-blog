const Post = require("../models/Postmodel");

// get post 
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get post by id
exports.getPostbyId = async (req, res) => {
  const { id } = req.params;
  try {
    // Log the ID received in the request
    console.log('Request received for post ID:', id);

    const post = await Post.findById(id);
    // Log the result of the database query
    console.log('Post found:', post);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Send the post back in the response if found
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    // Better error handling - send 500 status code for server errors
    res.status(500).json({ error: "Internal server error" });
  }
}



// Add post 

exports.addPost = async (req, res) => {
  try {
    const { category, title, image, description, Date } = req.body;

    // Create a new post instance
    const newPost = new Post({
      category,
      title,
      image,
      description,
      Date
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    // Return the saved post with HTTP status 201 (Created)
    res.status(201).json(savedPost);
  } catch (error) {
    // Handle any errors and return a 409 status with error message
    res.status(409).json({ message: error.message });
  }
}



// delete post 


exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ data: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



