document.addEventListener("DOMContentLoaded", () => {
    const modelos = [
        { nombre: "Casa de campo", precio: "$200,000", img: "img1.png" },
        { nombre: "Casa de playa", precio: "$250,000", img: "img2.png" },
        { nombre: "Casa de montaña", precio: "$180,000", img: "img3.png" },
        { nombre: "Casa de la ciudad", precio: "$300,000", img: "img4.png" }
    ];
    
    const container = document.getElementById("modelos");
    modelos.forEach(m => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${m.img}" alt="${m.nombre}"><h3>${m.nombre}</h3><p>${m.precio}</p>`;
        container.appendChild(div);
    });
});
