// 平滑滾動效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 滾動到頂部按鈕
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let slideIndex = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');

// 顯示幻燈片
function showSlides() {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = 'block';
}

// 開始幻燈片切換
function startSlideShow() {
    slideInterval = setInterval(showSlides, 5000); // 每5秒切換一次
}

// 停止幻燈片切換
function stopSlideShow() {
    clearInterval(slideInterval);
}

// 初始化幻燈片顯示
showSlides();
startSlideShow();

// 停止和開始幻燈片切換的事件處理
const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseover', stopSlideShow);
slideshowContainer.addEventListener('mouseout', startSlideShow);