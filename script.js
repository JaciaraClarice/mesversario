const photos = [];

for(let i = 1; i <= 6; i++){
    photos.push(`img/foto${i}.jpeg`);
}

const gallery = document.getElementById("gallery");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const readLetterBtn = document.getElementById("readLetterBtn");
const finalMessage = document.getElementById("finalMessage");

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

startBtn.addEventListener("click", ()=>{

    music.play();

    document.getElementById("intro")
    .style.display = "none";

    let delay = 0;

    photos.forEach((src)=>{

    const img = document.createElement("img");

    img.src = src;

    img.classList.add("photo","show");

    gallery.appendChild(img);

});

    setTimeout(()=>{

        readLetterBtn.style.display = "block";

    }, delay + 1000);

});

readLetterBtn.addEventListener("click", ()=>{

    finalMessage.style.display = "flex";

    readLetterBtn.style.display = "none";

});
