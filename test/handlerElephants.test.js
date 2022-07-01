const handlerElephants = require('../src/handlerElephants');

const paramInvalido = 'Parâmetro inválido, é necessário uma string';

describe('Testes da função HandlerElephants', () => {
  it('Se passada a string count como parametro retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se for passada a string names como parametro retorna um array com o nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Se for passada a string averageAge como parametro retorna a media da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Se for passada uma string diferente de count, names, averageAge e nao seja equivalente ao nome de nenhuma chave do objeto elephants retorna null', () => {
    expect(handlerElephants('stringaleatorio')).toBeNull();
    expect(handlerElephants('123456789')).toBeNull();
    expect(handlerElephants('NAMES')).toBeNull();
  });
  it('Se nao for passado nenhum parametro retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Se for passado um parametro que nao seja uma STRING retorna => Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(45)).toBe(paramInvalido);
    expect(handlerElephants(true)).toBe(paramInvalido);
    expect(handlerElephants([1, 2])).toBe(paramInvalido);
  });
  it('Se for passado uma chave do objeto Elephants como parametro retorna o conteudo da chave', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual([{ name: 'Ilana', sex: 'female', age: 11 }, { name: 'Orval', sex: 'male', age: 15 }, { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
  });
});
