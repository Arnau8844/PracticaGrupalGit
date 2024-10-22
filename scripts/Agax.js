function loadXMLDoc(){
    var xmlhttp;
    if (window.XMLHttpRequest)  {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    }       
    xmlhttp.open("POST", "<<url of web address>>", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("fname=Henry&lname=Ford");
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Estás navegando a: ${this.textContent}`);
            window.location.hash = this.getAttribute('href');
        });
    });
});
