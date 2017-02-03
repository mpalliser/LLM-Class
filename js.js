window.onload = function(){
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  gestionarXml(this);
 }
};
xhttp.open("GET", "xml.xml", true);
xhttp.send();

function gestionarXml(dadesXml){
var xmlDoc = dadesXml.responseXML;
document.getElementById("r1").innerHTML = xmlDoc.getElementById("1").childNodes[1].innerHTML;

}
