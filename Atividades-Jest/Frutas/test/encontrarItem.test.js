const frutas = ['Maçã', 'pera', 'uva', 'pitaya', 'kiwi'];

test("Verifica se existe 'pitaya' na lista", () => {
    expect(frutas).toContain('pitaya');
});

test("Verifica se existe 'abacaxi'", () => {
    expect(frutas).not.toContain('abacaxi');
});