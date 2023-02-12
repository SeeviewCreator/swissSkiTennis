window.onload = function(){
    document.getElementById("fade").style.display = "none";
    document.getElementById("popupMail").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
}
var zaehler = 0;
function popupMail() {
    debugger;
    if (zaehler == 0){
        $('html,body').scrollTop(0);
        document.getElementById("fade").style.display = "block";
        document.getElementById("popupMail").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";
        zaehler++;
    } else if (zaehler == 1){
        document.getElementById("fade").style.display = "none";
        document.getElementById("popupMail").style.display = "none";
        document.getElementById("body").style.overflow = "auto";
        zaehler--;
    }
}