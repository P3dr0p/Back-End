const { usuario, getUser } = require('../test/objeto');

test("Verifica se a função retorna nome, idade e email", () => {
    expect(usuario('igor', 27, 'igor@alves.com')).toBe('igor, 27, igor@alves.com');
});

test('Verifica se a função retorna nome, idade e email', () => {
    const usuario = {
        nome: 'igor',
        idade: 27,
        email: 'igor@igor.com'
    };
    expect(getUser('igor', 27, 'igor@igor.com')).toEqual(usuario)
});