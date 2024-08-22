
document.querySelector(".tog-menu").onclick = () => {
    document.querySelector(".down").classList.toggle("drop");
    window.onscroll = () => {
        document.querySelector(".down").classList.remove("drop");
    };
};

document.querySelector(".toggler").onclick = () => {
    document.querySelector("ul").classList.toggle("active");
    window.onscroll = () => {
        document.querySelector(".nav-items").classList.remove("active"); 
    };
};