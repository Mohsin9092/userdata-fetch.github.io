document.addEventListener("DOMContentLoaded", () => {
    const userContainer = document.getElementById("user-container");
    const errorMessage = document.getElementById("error-message");
    const reloadBtn = document.getElementById("reload-btn");

    const users = [
        { name: "Adil", email: "shin.zuwul@example.in", address: { street: "Dal Lake Rd", city: "Srinagar" } },
        { name: "Zahid", email: "gaash.prazalwun@example.in", address: { street: "Hari Parbat St", city: "Srinagar" } },
        { name: "Junaid Khan", email: "sonzal.harud@example.in", address: { street: "Lal Chowk Ave", city: "Srinagar" } },
        { name: "Azhar", email: "shirin.modur@example.in", address: { street: "Boulevard Rd", city: "Pahalgam" } },
        { name: "Abrar", email: "tsandiram.zoon@example.in", address: { street: "Main Bazar", city: "Gulmarg" } }
    ];

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function fetchUsers() {
        userContainer.innerHTML = "<p style='text-align:center;'>Loading...</p>";
        errorMessage.textContent = "";

        setTimeout(() => {
            userContainer.innerHTML = "";
            const shuffledUsers = shuffleArray([...users]);

            shuffledUsers.forEach(user => {
                const card = document.createElement("div");
                card.classList.add("user-card");

                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                `;
                userContainer.appendChild(card);
            });
        }, 500);
    }

    reloadBtn.addEventListener("click", fetchUsers);

    fetchUsers();
});
