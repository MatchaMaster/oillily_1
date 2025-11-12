document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // 메인 비주얼 슬라이더
    // =========================
    const mainSwiper = new Swiper("#main_visual_swiper", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 800,
        pagination: {
            el: "#main_visual_swiper .slideBtn",
            clickable: true,
            bulletClass: "slidedot",
            bulletActiveClass: "active",
            renderBullet: function (index, className) {
                return `<button class="${className}"></button>`;
            },
        },
    });

// =========================
// 스크롤 시 상단 공지 숨기기
// =========================
window.addEventListener("scroll", function () {
    const noti = document.querySelector(".noti");
    if (!noti) return;
    if (window.scrollY > 50) {
        noti.classList.add("hidden");
    } else {
        noti.classList.remove("hidden");
    }
});
// =========================
// 베스트상품 슬라이더 (순정버전)
// =========================
//on.init → 초기화 시 prev 버튼 숨김

//on.slideChange → 첫 슬라이드면 숨기고, 아니면 보이게

//slider.querySelector() 써서 각 슬라이더별 버튼 구분됨 (버튼 중복 안됨)

const bestSwiper = new Swiper(".best_pro_slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".best_pro_slider_wrap .swiper-button-next",
        prevEl: ".best_pro_slider_wrap .swiper-button-prev",
    },
    on: {
        init: function () {
            // 초기화 시 prev 버튼 숨기기
            if (this.navigation.prevEl) {
                this.navigation.prevEl.style.display = "none";
            }
        },
        slideChange: function () {
            // 첫 슬라이드면 prev 숨기고, 아니면 표시
            if (this.activeIndex === 0) {
                this.navigation.prevEl.style.display = "none";
            } else {
                this.navigation.prevEl.style.display = "block";
            }
            if (this.activeIndex >= this.slides.length - this.params.slidesPerView) {
                this.navigation.nextEl.style.display = "none";
            } else {
                this.navigation.nextEl.style.display = "block";
            }
        },
    },
});


});

