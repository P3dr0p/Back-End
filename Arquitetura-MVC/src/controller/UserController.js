const User = require("../models/User");

module.exports = {
    async createUser(request, response) {
        const { name, email, password, confirm_password } = request.body

        const users = await User.create({
            name,
            email,
            password,
            confirm_password
        });

        console.log(users);

        return response.json(User);
    },

    async findAllUsers(request, response) {
        const users = await User.findAll({ raw: true });

        return response.json(users)
    },
    
    async findUser(request, response) {
        const { id } = request.params

        const users = await User.findOne({ where: {id: id} });

        return response.json(users);
    },

    async updateUser(request, response) {
        const { id } = request.params
        const { name, email, password, confirm_password } = request.body

        const users = await User.update(
            {
                name,
                email,
                password,
                confirm_password
            },
            {
                where: { id: id }
            }
        );

        return response.json(users);
    },

    async deleteUser(request, response) {
        const { id } = request.params

        const users = await User.destroy({ where: {id: id} });

        return response.json({ message: "Usuário deletado com sucesso" });
    }
}