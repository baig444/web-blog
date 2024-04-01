const mongoose = require("mongoose");
const express = require("express");
const router = require("express").Router();
const { getPosts, addPost, deletePost, getPostbyId } = require("../controllers/PostController");


// post routes

router.get('/getpost',getPosts);
router.get('/getpost/:id',getPostbyId);
router.post('/addpost',addPost);
router.delete('/deletepost/:id',deletePost);


module.exports = router