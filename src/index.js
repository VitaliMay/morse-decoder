const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    const ABC = {'**********': ' '}  // объявляем алфавит с цифровым ключём, учитывая что в Морзе нет пробела)
    const digit = Object.keys(MORSE_TABLE) // достаём ключи из Морзе
    for (let i = 0; i < digit.length; i++) {
        // формируем цифровой алфавит из Морзе
        ABC[('0000000000' + digit[i].replace(/\./g, '10').replace(/\-/g, '11')).slice(-10)] = MORSE_TABLE[digit[i]]
    }
    let text = '' // здесь будет формироваться результат декодирования
    for (let i = 0; i < expr.length; i=i+10) {
        text = text + ABC[expr.substring(i, i+10)] // декодируем входящую строку
    }
    return text

}

module.exports = {
    decode
}