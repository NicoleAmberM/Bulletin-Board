module.exports = (sequelize, DataTypes) => {

    const Articles = sequelize.define("articles", {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        article_title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        article_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        // soft delete
        paranoid: true
    }
    )

    return Articles;
}