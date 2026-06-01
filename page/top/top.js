fetch("./top.json")
.then(response => response.json())
.then(data => {

    document.getElementById("guildName").textContent =
        data.guildName;

    document.getElementById("guildNameNav").textContent =
        data.guildName;

    document.getElementById("guildDescription").textContent =
        data.description;

    document.getElementById("bannerImage").src =
        data.banner;

    document.getElementById("guildIcon").src =
        data.icon;

    document.getElementById("youtubeLink").href =
        data.socials.youtube;

    document.getElementById("discordLink").href =
        data.socials.discord;

    document.getElementById("xLink").href =
        data.socials.x;

    document.getElementById("youtubeLink2").href =
        data.socials.youtube;

    document.getElementById("discordLink2").href =
        data.socials.discord;

    document.getElementById("xLink2").href =
        data.socials.x;

    const memberList =
        document.getElementById("memberList");

    data.members.forEach(member => {

        memberList.innerHTML += `
            <div class="member-card">
                <img src="${member.icon}">
                <h3>${member.name}</h3>
                <p>${member.rank}</p>
            </div>
        `;
    });

});

/* Theme */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    themeToggle.textContent =
        document.body.classList.contains("light")
        ? "☀️"
        : "🌙";
});

/* Tabs */

document.querySelectorAll(".tab-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".tab-content")
            .forEach(tab =>
                tab.classList.remove("active")
            );

        document
            .getElementById(
                button.dataset.tab
            )
            .classList.add("active");

    });

});
