function setHtmlFontSize(){
    let designWidth = 750;// 设计稿宽度  html font-size: 100px
    let deviceWidth = document.documentElement.clientWidth;// 设备宽度
    document.documentElement.style.fontSize = deviceWidth/designWidth*100+'px';
}
setHtmlFontSize();
window.onresize = function (){
    setHtmlFontSize();
}