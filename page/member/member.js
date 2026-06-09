fetch("./member.json")
.then(response => response.json())
.then(data => {

    const memberGrid =
    document.getElementById("memberGrid");

    data.members.forEach(member => {

        const card =
        document.createElement("div");

        card.className =
        "memberCard";

        card.innerHTML = `

            <img src="${member.image}">

            <div class="memberName">
                ${member.name}
            </div>

            <div class="memberRole role-${member.role}">
                ${member.role}
            </div>

        `;

        memberGrid.appendChild(card);

    });

});
