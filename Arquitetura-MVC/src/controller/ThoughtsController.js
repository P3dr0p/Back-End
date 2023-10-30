const Thought = require("../models/Thought");

module.exports = {
    async dashboard(request, response){
        const thoughts = await Thought.findAll({ raw: true })
        return response.render("thoughts/dashboard", { thoughts })
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
    },

    async findThought(request, response) {
        const { id } = request.params

        const thought = await Thought.findOne({ where: {id: id} });

        return response.json(thought);
    },

    async showPageEditthought(request, response) {
        const { id } = request.params;

        const thought = await Thought.findOne({ where: { id: id }, raw: true });
    
        return response.render("thoughts/edit", { thought });
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
        
        try{
            if(thought){
                return response.redirect("/thoughts/dashboard")
            }
        }catch(error){
            console.error(error);
        }
    },

    async deleteThought(request, response) {
        const { id } = request.params

        const thought = await Thought.destroy({ where: {id: id} });

        try{
            if(thought) {
                return response.redirect("/thoughts/dashboard");
            }
            }catch(error) {
                console.error(error)
            }
        }
    }