
const button = document.getElementById("toggle-ocean");
const canvas = document.getElementById("ocean-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isOceanActive = false;

let waveOffset = 0;

function drawOcean() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const waveHeight = 40;
    const waveFrequency = 0.05;

    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        const y =
            Math.sin((x * waveFrequency) + waveOffset) * waveHeight +
            canvas.height / 2;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();

    waveOffset += 0.1;

    if (isOceanActive) {
        requestAnimationFrame(drawOcean);
    }
}

button.addEventListener("click", () => {
    isOceanActive = !isOceanActive;

    if (isOceanActive) {
        canvas.style.display = "block";
        button.style.display = "none";
        drawOcean();
    } else {
        canvas.style.display = "none";
        button.style.display = "block";
    }
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
