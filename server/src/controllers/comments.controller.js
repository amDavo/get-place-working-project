const {Comments, User} = require('../../db/models');

const getAllComments = async (req, res) => {

    const place_id = req.params.id

    try {

        const comments = await Comments.findAll({
            where: {place_id},
            include: {
                model: User,
            }
        })

        return res.json({comments})

    } catch (error) {
        res.sendStatus(500);
    }
};
// /comments/:id
const addComments = async (req, res) => {
    const {id} = req.params
    try {
        const newComments = await Comments.create({
            user_id: req.session.user.id,
            place_id: id,
            body: req.body.text

        });
        const comments = await Comments.findAll({
            where: {place_id: id},
            include: {
                model: User,
            }
        })
        res.json(comments);


    } catch (error) {
        res.sendStatus(500);
    }
};

const deleteComments = async (req, res) => {
    const {id} = req.params

    try {
        const comments = await Comments.findByPk(id)
        if (comments.user_id === req.session.user.id) {
            await Comments.destroy({where: {id}});


            res.sendStatus(200);
        }


    } catch (error) {
        res.sendStatus(500);
    }
};


module.exports = {
    getAllComments,
    addComments,
    deleteComments
}
