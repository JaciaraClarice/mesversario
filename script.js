const photos = [];

for(let i = 1; i <= 6; i++){
    photos.push(`img/foto${i}.jpeg`);
}

const gallery = document.getElementById("gallery");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const readLetterBtn = document.getElementById("readLetterBtn");
const letterMessage = document.getElementById("letterMessage");

// Borboletas

for(let i = 0; i < 18; i++){

    const butterfly = document.createElement("div");

    butterfly.classList.add("butterfly");

    butterfly.innerHTML = "🦋";

    butterfly.style.top =
    Math.random() * 100 + "%";

    butterfly.style.left =
    Math.random() * 100 + "%";

    butterfly.style.animationDelay =
    Math.random() * 10 + "s";

    document.body.appendChild(butterfly);
}

// Iniciar homenagem

startBtn.addEventListener("click", ()=>{

    music.play();

    document.getElementById("intro")
    .style.display = "none";

    photos.forEach((src)=>{

        const img =
        document.createElement("img");

        img.src = src;

        img.classList.add("photo");

        gallery.appendChild(img);

        setTimeout(()=>{
            img.classList.add("show");
        },100);

    });

    readLetterBtn.style.display = "block";

});

// Abrir carta

readLetterBtn.addEventListener("click", ()=>{

    letterMessage.style.display = "flex";

    readLetterBtn.style.display = "none";

});
