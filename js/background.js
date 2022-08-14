const images = ["0.png", "1.png", "3.jpg", "4.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


