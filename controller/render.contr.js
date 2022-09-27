const db = require('../model/db');

const Article = db.articles;

const renderController = {
    editView: async (req, res) => {
        const article = await Article.findByPk(req.params.id);
        if(article === null) {
            res.status(500).json({ message: "Article does not exist" });
            return;
        }
        res.status(200).render("edit", { article });
    },
}

module.exports = renderController;