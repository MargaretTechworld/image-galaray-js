let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

backBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -scrollContainer.clientWidth,
        behavior: "smooth"
    });
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: scrollContainer.clientWidth,
        behavior: "smooth"
    });
});

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();

    scrollContainer.scrollBy({
        left: event.deltaY > 0 ? 100 : -100,
        behavior: "smooth"
    });
});