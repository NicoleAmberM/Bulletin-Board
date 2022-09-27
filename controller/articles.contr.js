const db = require('../model/db');

const Article = db.articles;

const articleController = {
    getAll: async (req, res) => {
        const articles = await Article.findAll();
        res.status(200).render("index", { articles });
    },

    get: async (req, res) => {
        const article = await Article.findByPk(req.params.id);
        if(article === null) {
            res.status(500).json({ message: "Article does not exist" });
            return;
        }
        res.status(200).render("view", { article });
    },

    add: (req, res) => {
        const { article_title, article_content} = req.body;

        let data = {
            article_title: article_title,
            article_content: article_content
        }

        Article.create(data).then(() => {
            res.status(201).redirect("/");
        }).catch((e) => {
            res.status(500).json({ message: "Error creating article", error: e});
        })
    },

    update: (req, res) => {
        Article.update(req.body, { where : { id: req.params.id }})
        .then(() => {
            res.status(201).json({ message: "Article updated "});
        }).catch((e) => {
            res.status(500).json({ message: "Error updating article", error: e});
        })
    }, 

    delete: (req, res) => {
        Article.destroy({ where : { id: req.params.id }})
        .then(() => {
            res.status(201).json({ message: "Article deleted "});
        }).catch((e) => {
            res.status(500).json({ message: "Error deleting article", error: e});
        })
    }
}

module.exports = articleController;