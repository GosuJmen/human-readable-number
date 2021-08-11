module.exports = function toReadable (number) {
    let result = '';
    let uno = '';
    let dos = '';
    let tres = '';
    let numberToText = `${number}`;
    
    if ( (number > 99) && (numberToText[1] !== '1') ) { //Сотни без десятков
  
      switch (numberToText[2]) {
        case '0':
        break;
        case '1':
          tres = ' one'
        break;
        case '2':
          tres = ' two'
        break;
        case '3':
          tres = ' three'
        break;
        case '4':
          tres = ' four'
        break;
        case '5':
          tres = ' five'
        break;
        case '6':
          tres = ' six'
        break;
        case '7':
          tres = ' seven'
        break;
        case '8':
          tres = ' eight'
        break;
        case '9':
          tres = ' nine'
        break;
      }
      switch (numberToText[1]) {
        case '0':
        break;
        case '2':
          dos = ' twenty'
        break;
        case '3':
          dos = ' thirty'
        break;
        case '4':
          dos = ' forty'
        break;
        case '5':
          dos = ' fifty'
        break;
        case '6':
          dos = ' sixty'
        break;
        case '7':
          dos = ' seventy'
        break;
        case '8':
          dos = ' eighty'
        break;
        case '9':
          dos = ' ninety'
        break;
      }
      switch (numberToText[0]) {
        case '1':
          uno = 'one hundred'
        break;
        case '2':
          uno = 'two hundred'
        break;
        case '3':
          uno = 'three hundred'
        break;
        case '4':
          uno = 'four hundred'
        break;
        case '5':
          uno = 'five hundred'
        break;
        case '6':
          uno = 'six hundred'
        break;
        case '7':
          uno = 'seven hundred'
        break;
        case '8':
          uno = 'eight hundred'
        break;
        case '9':
          uno = 'nine hundred'
        break;
      }
  
    } else if ( (number > 99) && (numberToText[1] === '1') ) { //Сотни с десятками
  
      switch (numberToText[2]) {
        case '0':
          dos = ' ten'
        break;
        case '1':
          dos = ' eleven'
        break;
        case '2':
          dos = ' twelve'
        break;
        case '3':
          dos = ' thirteen'
        break;
        case '4':
          dos = ' fourteen'
        break;
        case '5':
          dos = ' fifteen'
        break;
        case '6':
          dos = ' sixteen'
        break;
        case '7':
          dos = ' seventeen'
        break;
        case '8':
          dos = ' eighteen'
        break;
        case '9':
          dos = ' nineteen'
        break;
      }
      switch (numberToText[0]) {
        case '1':
          uno = 'one hundred'
        break;
        case '2':
          uno = 'two hundred'
        break;
        case '3':
          uno = 'three hundred'
        break;
        case '4':
          uno = 'four hundred'
        break;
        case '5':
          uno = 'five hundred'
        break;
        case '6':
          uno = 'six hundred'
        break;
        case '7':
          uno = 'seven hundred'
        break;
        case '8':
          uno = 'eight hundred'
        break;
        case '9':
          uno = 'nine hundred'
        break;
      }
  
    } else if ( (number > 19) & (number < 100) ) { //Десятки до 19
  
      switch (numberToText[1]) {
        case '1':
          dos = ' one'
         break;
         case '2':
          dos = ' two'
        break;
        case '3':
          dos = ' three'
        break;
        case '4':
          dos = ' four'
        break;
        case '5':
          dos = ' five'
        break;
        case '6':
          dos = ' six'
        break;
        case '7':
          dos = ' seven'
        break;
        case '8':
          dos = ' eight'
        break;
        case '9':
          dos = ' nine'
        break;
        }
      switch (numberToText[0]) {
        case '2':
          uno = 'twenty'
        break;
        case '3':
          uno = 'thirty'
        break;
        case '4':
          uno = 'forty'
        break;
        case '5':
          uno = 'fifty'
        break;
        case '6':
          uno = 'sixty'
        break;
        case '7':
          uno = 'seventy'
        break;
        case '8':
          uno = 'eighty'
        break;
        case '9':
          uno = 'ninety'
        break;
      }
  
    } else if ( (number > 9) & (number < 20) ) {
  
        switch (numberToText[1]) {
          case '0':
            uno = 'ten'
          break;
          case '1':
            uno = 'eleven'
          break;
          case '2':
            uno = 'twelve'
          break;
          case '3':
            uno = 'thirteen'
          break;
          case '4':
            uno = 'fourteen'
          break;
          case '5':
            uno = 'fifteen'
          break;
          case '6':
            uno = 'sixteen'
          break;
          case '7':
            uno = 'seventeen'
          break;
          case '8':
            uno = 'eighteen'
          break;
          case '9':
            uno = 'nineteen'
          break;
      }
  
    } else {
  
      switch (numberToText[0]) {
        case '0':
          uno = 'zero'
        break;
        case '1':
          uno = 'one'
        break;
        case '2':
          uno = 'two'
        break;
        case '3':
          uno = 'three'
        break;
        case '4':
          uno = 'four'
        break;
        case '5':
          uno = 'five'
        break;
        case '6':
          uno = 'six'
        break;
        case '7':
          uno = 'seven'
        break;
        case '8':
          uno = 'eight'
        break;
        case '9':
          uno = 'nine'
        break;
      }
  
    }
  
    result = uno + dos + tres;
  
    return result;
  
  }
