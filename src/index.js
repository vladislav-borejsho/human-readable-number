module.exports = function toReadable (number) {
    const a = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const b = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let res = '';
  
    let str = number.toString();
    let n = str.length;
    if (n === 1) { 
        return res += `${a[number]}`;    
    }
    if (n === 2 && number < 20) { 
        return res += `${b[str[1]]}`;
    }
    if (n === 2 && number > 19 && number < 100) {
      if (str[1] == 0) {
        return res += `${c[str[0]-2]}`;
      } else {
        return res += `${c[str[0]-2]} ${a[str[1]]}`;
      }
    }
    if (n === 3) {
      if(((str[1]+str[2]) < 20) && (str[1] != 0)) {
        return res = `${a[str[0]]} hundred ${b[(str[1]+str[2])-10]}`;
      } else {
        if ((str[1] == 0) && (str[2] != 0)) {
        return res = `${a[str[0]]} hundred ${a[str[2]]}`;
      } else if ((str[2] == 0) && (str[1] != 0)) {
        return res = `${a[str[0]]} hundred ${c[str[1]-2]}`;
      } else if ((str[1] == 0) && (str[2] == 0)) {
        return res = `${a[str[0]]} hundred`;
      }
        else if ((str[1] != 0) && (str[2] != 0)) {
        return res = `${a[str[0]]} hundred ${c[str[1]-2]} ${a[str[2]]}`;
        }  
      }     
    }
}
