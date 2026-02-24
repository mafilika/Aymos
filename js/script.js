// Simple image popup
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";

        const bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.style.width = "80%";
        bigImg.style.maxWidth = "800px";
        bigImg.style.borderRadius = "10px";

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.onclick = () => overlay.remove();
    });
});
