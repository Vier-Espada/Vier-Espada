fetch("./top.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("guildName").textContent =
            data.guildName;
    });

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "🌙";
    }

});
