// .....digital....

setInterval((_digit) ,1000)
function _digit(){
    let x = new Date()
    document.getElementById('digi').innerHTML = x.toLocaleTimeString()
}
// .....analog.....

setInterval((_clock),1000)
let _hand = document.querySelectorAll('span')
function _clock(){
    let x = new Date()
    let s = x.getSeconds()
    let m = x.getMinutes()*60
    let h = (((x.getHours()))*3600)
    _hand[0].style.transform = 'rotate('+(s*6)+'deg)'
    _hand[1].style.transform = 'rotate('+(m*0.1)+'deg)'
    _hand[2].style.transform = 'rotate('+((h*0.0085))+'deg)'

}
_clock()
_digit()