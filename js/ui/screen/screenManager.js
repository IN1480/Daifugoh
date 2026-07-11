//screenManager.js
export function screenManager(currentScreen, nextScreen){    
    currentScreen.classList.add("hidden");
    nextScreen.classList.remove("hidden");
}