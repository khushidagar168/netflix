function showHome(){
    document.getElementById("home").style.display="flex";
    document.getElementById("about").style.display="none";
    document.getElementById("contact-us").style.display="none";


}
function showAbout(){
    document.getElementById("home").style.display="none";
    document.getElementById("about").style.display="flex";
    document.getElementById("contact-us").style.display="none";


}
function showContact(){
    document.getElementById("home").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("contact-us").style.display="flex";


}
