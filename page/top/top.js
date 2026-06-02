fetch("./top.json")
.then(response => response.json())
.then(data => {

    document.getElementById("guildName").textContent =
    data.guildName;

    document.getElementById("youtubeLink").href =
    data.youtube;

    document.getElementById("vrchatLink").href =
    data.vrchat;

});
