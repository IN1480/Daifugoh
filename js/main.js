const title = document.getElementById("title-screen");
const game = document.getElementById("game-screen");

document.getElementById("start-button").addEventListener("pointerup", () => {
    title.classList.add("hidden");
    game.classList.remove("hidden");
});