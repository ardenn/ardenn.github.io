const miniMenu = document.getElementById('minimenu');
function toggleMiniBar() {
    if (miniMenu.classList.contains("show")) {
        miniMenu.classList.remove("show");
    } else {
        miniMenu.classList.add("show");
    }
}
function closeMiniBar() {
    miniMenu.classList.remove("show");
}