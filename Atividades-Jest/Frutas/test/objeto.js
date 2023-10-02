function getUser(nome, idade, email) {
    return {
        nome,
        idade,
        email
    };
}

function usuario(nome, idade, email) {
    return `${nome}, ${idade}, ${email}`;
};

module.exports = { usuario, getUser };