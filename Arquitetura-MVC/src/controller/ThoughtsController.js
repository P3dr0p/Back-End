const Thought = require("../models/Thought");

module.exports = {
    async dashboard(request, response){
        const thoughts = await Thought.findAll({ raw: true })
        return response.render("thoughts/dashboard", { thoughts })
    },

    async findAllThoughts(request, response) {
        const thoughts = await Thought.findAll({ raw: true });

        return response.json(thoughts);
    },

    async createThought(request, response) {
        const { title, description } = request.body

        const thought = await Thought.create({title, description})

        try{
            if(thought) {
                return response.redirect("/thoughts/dashboard")
            }
        } catch(error) {
            console.error(error);
        }

        return response.json(thought);
    },

    async findThought(request, response) {
        const { id } = request.params

        const thought = await Thought.findOne({ where: {id: id} });

        return response.json(thought);
    },

    async showPageEditthought(request, response) {
        const { id } = request.params;

        const thought = await Thought.findOne({ where: { id: id }, raw: true });
    
        return response.render("thoughts/edit")
    },

    async updateThought(request, response) {
        const { id } = request.params
        const { title, description } = request.body

        const thought = await Thought.update(
            {
                title, description
            },
            {
                where: { id: id }
            }
        );
        return response.json(thought);
    },

    async deleteThought(request, response) {
        const { id } = request.params

        const thought = await Thought.destroy({ where: {id: id} });

        return response.json({ message: "Pensamento deletado com sucesso" });
    }
}

