// เปิด-ปิด Modal
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementsByClassName("close")[0];

// เปิด Modal
openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

// ปิด Modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// ปิด Modal เมื่อคลิกด้านนอก
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
