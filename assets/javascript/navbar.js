function fixNavbarPaths() {
    const depth = window.location.pathname
        .split('/')
        .filter(Boolean)
        .length - 1;

    const prefix = depth > 0 ? '../'.repeat(depth) : '';

    document.querySelectorAll('[data-path]').forEach(link => {
        link.href = prefix + link.dataset.path;
    });
}

/* Run AFTER includeHTML finishes */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");

    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");

        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) elmnt.innerHTML = this.responseText;
                    if (this.status == 404) elmnt.innerHTML = "Page not found.";

                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();

                    /* 🔑 run here */
                    fixNavbarPaths();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}