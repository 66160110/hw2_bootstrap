let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 10000); // เปลี่ยนภาพทุกๆ 10 วินาที
}

function plusSlides(n) {
    slideIndex += n - 1; // ปรับ slideIndex
    showSlides();
}
