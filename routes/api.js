const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');


const corsOptions = {
    origin: "https://edusorrentino10.github.io/Mural-de-posts/"
}


router.use(cors(corsOptions));

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    console.log(description);

    posts.newPost(title, description);

    res.send("Post adicionado");
});

router.delete("/del", bodyParser.json(), (req, res) => {
    
    let id = req.body.id;

    posts.deletePost(id);

    res.send("Post removido");
}) 

module.exports = router;