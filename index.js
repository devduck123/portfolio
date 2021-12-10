// import "https://unpkg.com/open-props";
// import "https://unpkg.com/open-props/normalize.min.css";
// import "https://unpkg.com/open-props/open-props.tokens.json";

document.addEventListener("DOMContentLoaded", () => {
    const btnMore = document.querySelector("#btn-more");
    const aboutMe = document.querySelector("#about-me");

    btnMore.onclick = () => {
        if (aboutMe.style.display !== "flex") {
            aboutMe.style.display = "flex";
        } else {
            aboutMe.style.display = "none";
        }

    }
});