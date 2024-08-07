

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
        // 只對錨點鏈接進行平滑滾動，其他鏈接保持默認行為
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-200px' || sidebar.style.left === '') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-200px';
    }
}

document.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${x - 15}px`;
    heart.style.top = `${y - 15}px`;

    document.body.appendChild(heart);

    // 觸發動畫效果
    requestAnimationFrame(() => {
        heart.style.transform = 'scale(1)';
        heart.style.opacity = '1';
    });

    // 刪除心形特效
    setTimeout(() => {
        heart.style.transform = 'scale(0)';
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 300); // 確保動畫完成後再刪除
    }, 1500);
});