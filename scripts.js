const hide_show_nav = () => {
    nav = document.querySelector("#nav");
    page = window.location.href;

    if (page.includes("index.html")) {
        nav.style.visibility = "hidden";
    } else {
        nav.style.visibility = "default";
    }
    
};

hide_show_nav();