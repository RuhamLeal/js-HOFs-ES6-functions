const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const open = 'The zoo is open';
const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Se não for passado nenhum dia e nenhum horario retorna o objeto hours', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Se for passado um dia ou um horario que nao abre retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '12:13-AM')).toBe(closed);
    expect(getOpeningHours('monDaY', '02:13-PM')).toBe(closed);
    expect(getOpeningHours('Tuesday', '02:13-AM')).toBe(closed);
  });
  it('Se for passado um dia valido e uma horario valido que o zoo esta aberto retorna a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:13-AM')).toBe(open);
    expect(getOpeningHours('Saturday', '06:13-PM')).toBe(open);
    expect(getOpeningHours('fridaY', '10:13-AM')).toBe(open);
  });
  it('Se for passado um horario no formato errado lança uma mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', 'pedro:13-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '11:pedro-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '11:13-pedro')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Tuesday', '15:13-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '11:108-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Se for passado uma string diferente de uma dia da semana retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Pedro', '11:10-AM')).toThrow('The day must be valid. Example: Monday');
  });
});

/* it('', () => {});   /^$/ */
