function includeHTML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("header-placeholder").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "/templates/navbar.html", true);
    xhr.send();
}