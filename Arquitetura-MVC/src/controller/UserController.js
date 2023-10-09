const { update } = require("../models/User");
const User = require("../models/User");

module.exports = {
    async createUser(request, response) {
        const { name, email, password, confirm_password} = request.body

        const user = await User.create({
            name,
            email,
            password,
            confirm_password
        });

        console.log(user);

        return response.json(User);
    },

    async findAllUsers(request, response) {
        const users = await User.findAll({ raw: true });

        return response.json(users)
    },
    
    async findUser(request, response) {
        const { id } = request.params

        const User = await User.findOne({ where: {id: id} });

        return response.json(User);
    },

    async updateUser(request, response) {
        const { id } = request.params
        const { name, email, password, confirm_password } = request.body

        const User = await User.update(
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

        return response.json(User);
    },

    async deleteUser(request, response) {
        const { id } = request.params

        const User = await User.destroy({ where: {id: id} });

        return response.json({ message: "Usuário deletado com sucesso" });
    }
}