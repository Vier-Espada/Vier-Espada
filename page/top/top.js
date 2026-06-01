fetch("./top.json")
.then(response => response.json())
.then(data => {

    document.getElementById("guildName").textContent =
        data.guildName;

});
