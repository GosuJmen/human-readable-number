module.exports = function toReadable (number) {
    let result = '';
    let uno = '';
    let des = '';
    let quatro = '';
    let numberToText = `${number}`;
  //Сотни
    if (numberToText[2] !== undefined) {
  //Сотни без десяти
      if (numberToText[1] !== 1) {
        switch (numberToText[2]) {
          case 0:
          break;
          case 1:
            quatro = ' one'
          break;
          case 2:
            quatro = ' two'
          break;
          case 3:
            quatro = ' three'
          break;
          case 4:
            quatro = ' four'
          break;
          case 5:
            quatro = ' five'
          break;
          case 6:
            quatro = ' six'
          break;
          case 7:
            quatro = ' seven'
          break;
          case 8:
            quatro = ' eight'
          break;
          case 9:
            quatro = ' nine'
          break;
        }
        switch (numberToText[1]) {
          case 0:
          break;
          case 2:
            des = ' twenty'
          break;
          case 3:
            des = ' thirty'
          break;
          case 4:
            des = ' forty'
          break;
          case 5:
            des = ' fifty'
          break;
          case 6:
            des = ' sixty'
          break;
          case 7:
            des = ' seventy'
          break;
          case 8:
            des = ' eighty'
          break;
          case 9:
            des = ' ninety'
          break;
        }
        switch (numberToText[0]) {
          case 1:
            uno = 'one hundred'
          break;
          case 2:
            uno = 'two hundred'
          break;
          case 3:
            uno = 'three hundred'
          break;
          case 4:
            uno = 'four hundred'
          break;
          case 5:
            uno = 'five hundred'
          break;
          case 6:
            uno = 'six hundred'
          break;
          case 7:
            uno = 'seven hundred'
          break;
          case 8:
            uno = 'eight hundred'
          break;
          case 9:
            uno = 'nine hundreds'
          break;
        }
        result = uno + des + quatro;
  //Сотни с десять
      } else if (numberToText[1] === 1) {
        switch (number[2]) {
          case 0:
            des = ' ten'
          break;
          case 1:
            des = ' eleven'
          break;
          case 2:
            des = ' twelve'
          break;
          case 3:
            des = ' thirteen'
          break;
          case 4:
            des = ' fourteen'
          break;
          case 5:
            des = ' fifteen'
          break;
          case 6:
            des = ' sixteen'
          break;
          case 7:
            des = ' seventeen'
          break;
          case 8:
            des = ' eighteen'
          break;
          case 9:
            des = ' nineteen'
          break;
      }
      switch (numberToText[0]) {
        case 1:
          uno = 'one hundred '
        break;
        case 2:
          uno = 'two hundred '
        break;
        case 3:
          uno = 'three hundred '
        break;
        case 4:
          uno = 'four hundred '
        break;
        case 5:
          uno = 'five hundred '
        break;
        case 6:
          uno = 'six hundred '
        break;
        case 7:
          uno = 'seven hundred '
        break;
        case 8:
          uno = 'eight hundred '
        break;
        case 9:
          uno = 'nine hundreds '
        break;
      }
      result = uno + des;
  //Десятки
    } else if (numberToText[1] !== undefined) {
  //Десятки без десятки=) Эка я шутканул
      if (numberToText[0] !== 1) {
        switch (numberToText[1]) {
          case 1:
            des = 'one'
          break;
          case 2:
            des = 'two'
          break;
          case 3:
            des = 'three'
          break;
          case 4:
            des = 'four'
          break;
          case 5:
            des = 'five'
          break;
          case 6:
            des = 'six'
          break;
          case 7:
            des = 'seven'
          break;
          case 8:
            des = 'eight'
          break;
          case 9:
            des = 'nine'
          break;
        }
        switch (numberToText[0]) {
          case 2:
            uno = 'twenty '
          break;
          case 3:
            uno = 'thirty '
          break;
          case 4:
            uno = 'forty '
          break;
          case 5:
            uno = 'fifty '
          break;
          case 6:
            uno = 'sixty '
          break;
          case 7:
            uno = 'seventy '
          break;
          case 8:
            uno = 'eighty '
          break;
          case 9:
            uno = 'ninety '
          break;
        }
        result = uno + des;
      } else if (numberToText[0] === 1) {
        switch (numberToText[1]) {
          case 0:
            uno = 'ten'
          break;
          case 1:
            uno = 'eleven'
          break;
          case 2:
            uno = 'twelve'
          break;
          case 3:
            uno = 'thirteen'
          break;
          case 4:
            uno = 'fourteen'
          break;
          case 5:
            uno = 'fifteen'
          break;
          case 6:
            uno = 'sixteen'
          break;
          case 7:
            uno = 'seventeen'
          break;
          case 8:
            uno = 'eighteen'
          break;
          case 9:
            uno = 'nineteen'
          break;
      }
      result = uno + des;
  //Единицы    
      } else {
        switch (numberToText[0]) {
          case 0:
          result = 'zero'
          break;
          case 1:
            result = 'one'
          break;
          case 2:
            result = 'two'
          break;
          case 3:
            result = 'three'
          break;
          case 4:
            result = 'four'
          break;
          case 5:
            result = 'five'
          break;
          case 6:
            result = 'six'
          break;
          case 7:
            result = 'seven'
          break;
          case 8:
            result = 'eight'
          break;
          case 9:
            result = 'nine'
          break;
      }
    }
  }
}
}
