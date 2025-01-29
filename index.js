const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");

// Empêcher le comportement par défaut de l'événement de glissement
["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
    dropArea.addEventListener(event, (e) => e.preventDefault());
});

// Ajouter un effet au survol
dropArea.addEventListener("dragenter", () => dropArea.classList.add("active"));
dropArea.addEventListener("dragleave", () =>
    dropArea.classList.remove("active")
);
dropArea.addEventListener("drop", () => dropArea.classList.remove("active"));

// Gestion du glisser-déposer
dropArea.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

// Gestion du clic
dropArea.addEventListener("click", () => fileInput.click());

// Gestion de la sélection de fichier
fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    handleFile(file);
});

function handleFile(file) {
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
        const reader = new FileReader();
        reader.onload = () => {
            preview.innerHTML = `<img src="${reader.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Veuillez sélectionner une image JPG ou PNG !");
    }
}
