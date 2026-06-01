fetch("./top.json")
.then(response => response.json())
.then(data => {

```
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

document.getElementById("groupLink").href =
    data.socials.group;

document.getElementById("youtubeLink2").href =
    data.socials.youtube;

document.getElementById("groupLink2").href =
    data.socials.group;

const memberList =
    document.getElementById("memberList");

data.members.forEach(member => {

    memberList.innerHTML += `
        <div class="member-card">
            <img src="${member.icon}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.rank}</p>
        </div>
    `;

});
```

})
.catch(error => {
console.error("JSON Load Error:", error);
});

/* Theme Save */

const savedTheme =
localStorage.getItem("theme");

const themeToggle =
document.getElementById("themeToggle");

if (savedTheme === "light") {

```
document.body.classList.add("light");

themeToggle.textContent = "☀️";
```

}

themeToggle.addEventListener("click", () => {

```
document.body.classList.toggle("light");

const isLight =
    document.body.classList.contains("light");

themeToggle.textContent =
    isLight ? "☀️" : "🌙";

localStorage.setItem(
    "theme",
    isLight ? "light" : "dark"
);
```

});

/* Tabs */

document
.querySelectorAll(".tab-btn")
.forEach(button => {

```
button.addEventListener("click", () => {

    document
    .querySelectorAll(".tab-btn")
    .forEach(btn =>
        btn.classList.remove("active")
    );

    button.classList.add("active");

    document
    .querySelectorAll(".tab-content")
    .forEach(tab =>
        tab.classList.remove("active")
    );

    const target =
        document.getElementById(
            button.dataset.tab
        );

    if (target) {
        target.classList.add("active");
    }

});
```

});
