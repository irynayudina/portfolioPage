/*var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth|| docElem.clientWidth|| body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
alert(x + ' ' + y);*/

function lookedAt(elem){
document.getElementById(elem.id).style.backgroundColor = "rgb(12, 201, 53)";
document.getElementById(elem.id).style.transform = "scale(1.1)";
}
function lookedAway(elem){
    document.getElementById(elem.id).style.backgroundColor = "rgb(21, 209, 203)";
    document.getElementById(elem.id).style.transform = "scale(1)";
    }