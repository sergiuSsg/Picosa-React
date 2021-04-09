export function getClass(i) {
   //console.log(i)
    if (i % 8 === 0) {
        return 'big';
    }
    else if (i % 7 === 0) {
        return 'wide'
    }
}