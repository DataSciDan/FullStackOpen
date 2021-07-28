const Blog = require('../models/blog');
const cors = require('cors');
const express = require('express');
const router = express();

router.use(cors());
router.use(express.json());

router.get('/api/blogs', (request, response, next) => {
        Blog.find({}).then(blogs => {
                        response.json(blogs);
        }).catch(error => next(error));
});

router.post('/api/blogs', (request, response, next) => {
        const blog = new Blog(request.body);

        blog.save().then(result => {
                        response.status(201).json(result);
        }).catch(error => next(error));
});

module.exports = router;