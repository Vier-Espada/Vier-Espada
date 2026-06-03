// ギルド情報など（必要なら拡張）
fetch("./top.json")
.then(res => res.json())
.then(data => {

    document.getElementById("guildName").textContent = data.guildName;
    document.getElementById("youtubeLink").href = data.youtube;
    document.getElementById("vrchatLink").href = data.vrchat;

});

// 🔽 スクロール画像クリックで拡大
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.querySelectorAll(".scrollTrack img").forEach(img => {

    img.addEventListener("click", () => {

        lightboxImg.src = img.src;
        lightbox.classList.add("show");

    });

});

// 🔽 クリックで閉じる
lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");
    lightboxImg.src = "";

});
