// Fungsi untuk mengganti halaman
function nextPage(pageNumber) {
    let pages = document.querySelectorAll(".page");
    
    // Sembunyikan semua halaman
    pages.forEach(page => {
        page.classList.remove("active");
        setTimeout(() => {
            page.style.display = "none";
        }, 800);
    });

    // Tampilkan halaman yang dipilih
    let nextPage = document.getElementById("page" + pageNumber);
    setTimeout(() => {
        nextPage.style.display = "block";
        setTimeout(() => {
            nextPage.classList.add("active");
        }, 50);
    }, 800);
}

// Fungsi untuk membuat efek love jatuh
function createLove() {
    let love = document.createElement("div");
    love.classList.add("love");
    love.innerHTML = "❤";
    document.getElementById("love-container").appendChild(love);

    // Posisi random
    let startPos = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;

    love.style.left = startPos + "px";
    love.style.animationDuration = duration + "s";

    // Hapus love setelah jatuh
    setTimeout(() => {
        love.remove();
    }, duration * 1000);
}

// Buat love setiap 300 milidetik
setInterval(createLove, 300);
