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
const slides = document.querySelectorAll('.slide');
let slideInterval;

// 顯示幻燈片
function showSlides() {
    slides.forEach((slide) => {
        slide.style.display = 'none';  // 隱藏所有幻燈片
    });

    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1; // 循環回到第一張幻燈片
    }  
    
    slides[slideIndex - 1].style.display = 'block';  // 顯示當前幻燈片
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

if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseover', stopSlideShow);
    slideshowContainer.addEventListener('mouseout', startSlideShow);
}

// 添加關閉按鈕功能
const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        slides[index].style.display = 'none'; // 隱藏相應的幻燈片
        // 停止幻燈片切換
        stopSlideShow();
    });
});
// 漢堡菜單功能
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// 平滑滾動效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});