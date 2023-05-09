const Author = require("./model");

const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({
            authorName: req.body.authorName,
        });

        const successResponse = {
            message: "success",
            author: author,
        };

        res.status(201).json(successResponse);

    } catch (error) {
        console.log(error)
    }
};

const getAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        const successResponse = {
            message: "success",
            authors: authors,
        };
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error)
    }
}

const updateAuthors = async (req, res) => {
    try {
        await Author.update({
            authorName: req.body.authorName
        })
        const successResponse = {
            message: "success",
        }
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error)
    }
};

const deleteAuthors = async (req, res) => {
    try {
        await Author.destroy({
            where: { id: req.params.id }
        })
        const successResponse = {
            message: "success",
        }
    } catch (error) {
        res.status(200).json(successResponse);
    }
}

module.exports = {
    addAuthor,
    getAuthors,
    updateAuthors,
    deleteAuthors
};