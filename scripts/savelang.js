function setLang(lang) {
    window.localStorage.setItem("lang", lang);
}

function redirect() {
    switch (window.localStorage.getItem("lang"))
    {
        default: 
            break;
    
        case "fi":
            window.location.href = "fi/index.html";
            break;
                    
        case "en":
            window.location.href = "en/index.html";
            break;
        }
}