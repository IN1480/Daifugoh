// playerUI.js
export function createPlayerBox(player, parent) {
    const box = document.createElement("div");
    box.classList.add("player-box");

    const name = document.createElement("div");
    name.classList.add("player-name");
    name.textContent = player.name;

    const count = document.createElement("div");
    count.classList.add("card-count");
    count.textContent = `残り ${player.hand.length} 枚`;

    box.appendChild(name);
    box.appendChild(count);

    parent.appendChild(box);

    return box;
}