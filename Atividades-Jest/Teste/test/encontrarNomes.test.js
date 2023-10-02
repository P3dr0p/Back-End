const frase = ["Roberto é um aluno exemplar"];

test("Verifica se há o nome 'Roberto'", () => {
    expect(frase).toMatch(/Roberto/);
});

const email = "igor#igor.com";

test("Verifica se não há um '@'", () => {
    expect(frase).not.toMatch(/@/);
});