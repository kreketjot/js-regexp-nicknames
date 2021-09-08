export default class Validator {
  static validateUsername(nickname) {
    const errorLength = nickname.length < 2 || nickname.length > 32;
    const errorAvailableSymbols = /[^\w-]/.test(nickname);
    const errorConsecutiveNumbers = /\d{4,}/.test(nickname);
    const errorEdge = /(^[\d_-]|[\d_-]$)/.test(nickname);

    const errors = [];
    if (errorLength) {
      errors.push('Минимальная длина имени - 2, максимальная - 32');
    }
    if (errorAvailableSymbols) {
      errors.push('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (errorConsecutiveNumbers) {
      errors.push('Имя не должно содержать подряд более трёх цифр');
    }
    if (errorEdge) {
      errors.push('Имя не должно начинаться и заканчиваться цифрами (0-9), символами подчёркивания _ или тире - .');
    }
    return errors;
  }
}
