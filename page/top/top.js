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

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

// スクロール画像クリックで拡大
document.querySelectorAll(".scrollTrack img").forEach(img => {

    img.addEventListener("click", () => {

        lightboxImg.src = img.src;
        lightbox.classList.add("show");

    });

});

// 背景クリックで閉じる
lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");
    lightboxImg.src = "";

});
