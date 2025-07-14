function changeStyle(sheet) {
    document.getElementById("css").setAttribute("href", sheet);
}

function dreamy() {
    changeStyle("../assets/styles/themes/dreamy.css")
    setCookie('theme', 'dreamy', 365)

}
function green() {
    changeStyle("../assets/styles/themes/turquoise.css")
    setCookie('theme', 'turquoise', 365)

}
function cotton() {
     changeStyle("../assets/styles/themes/cotton-candy.css")
     setCookie('theme', 'cotton-candy', 365)

}

function dark() {
    changeStyle("../assets/styles/themes/monochrome.css")
    setCookie('theme', 'dark', 365)
}

function changelog() {
    changeStyle("../assets/styles/themes/changelog.css")
    setCookie('theme', 'changelog', 365)
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteCookie() {
    setCookie('theme', 'dreamy', -1);
    location.reload();
}


function checkCookie() {
    // We use a switch statement because I REALLY don't feel like doing magic, and they're in here for SOMETHING
    let theme = getCookie("theme");
    if (theme !== "") {
        switch (theme) {
            case "turquoise":
                green()
                break;
            case "cotton-candy":
                cotton()
                break;
            case "dreamy":
                dreamy()
                break;
            case "dark":
                dark()
                break;
            case "changelog":
                changelog()
                break;
            case "delete":
                deleteCookie()
                break;
            case "default":
                // We set the default case (Not a valid cookie) to delete it IMMEDIATELY - I don't feel like dealing with cookies too much
                document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                break;
        }
    } else {
        // console.log("Temporal code - can an else be empty?")
        // THe answer is, yes :3
    }
}

checkCookie();