document.addEventListener("DOMContentLoaded", () => {
    const carouselImage = document.getElementById("carouselImage");

    // Vérifier que l'élément existe avant de récupérer les images
    if (!carouselImage) {
        console.error("Élément carouselImage introuvable");
        return;
    }

    const imagesData = carouselImage.getAttribute("data-images");
    const images = imagesData ? JSON.parse(imagesData) : [];

    if (!images.length) {
        console.error("Aucune image trouvée pour le carrousel");
        return;
    }

    let currentIndex = 0;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Vérifier s'il y a au moins 2 images avant d'ajouter les événements
    if (images.length > 1) {
        function updateImage() {
            carouselImage.src = images[currentIndex];
        }

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });

        updateImage();
    }
});
