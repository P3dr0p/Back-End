const Thought = require("../models/Thought");

module.exports = {
    async findAllThoughts(request, response) {
        const thoughts = await Thought.findAll({ raw: true });

        return response.json(thoughts);
    },

    async createThought(request, response) {
        const { title, description } = request.body

        const thought = await Thought.create({title, description})

        return response.json(thought);
    },

    async updateUser(request, response) {
        const { id, title, description } = request.body

        const thought = await thought.update(
            {
                title,
                description
            },
            {
                where: { id: id }
            }
        );

        return response.json(thought);
    },

    async deleteUser(request, response) {
        const { id, title, description } = request.params

        const thought = await thought.destroy({ where: {id: id} });

        return response.json({ message: "Pensamento deletado com sucesso" });
    }
}

