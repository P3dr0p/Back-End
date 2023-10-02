const usuario = require('../test/sintaxe');

test("Verifica se a função retorna nome, idade e email", () => {
    expect(usuario('igor', 27, 'igor@alves.com')).toBe('igor, 27, igor@alves.com');
});