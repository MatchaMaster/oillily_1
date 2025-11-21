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
document.querySelectorAll('.common_slider').forEach((sliderWrap) => {
    const swiperEl = sliderWrap.querySelector('.swiper');

    new Swiper(swiperEl, {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: sliderWrap.querySelector('.swiper-button-next'),
            prevEl: sliderWrap.querySelector('.swiper-button-prev'),
        },
        on: {
            init() {
                const prevBtn = sliderWrap.querySelector(".swiper-button-prev");
                if (prevBtn) prevBtn.style.display = "none";
            },
            slideChange(swiper) {
                const prevBtn = sliderWrap.querySelector(".swiper-button-prev");
                if (swiper.activeIndex === 0) {
                    prevBtn.style.display = "none";
                } else {
                    prevBtn.style.display = "block";
                }
            }
        }
    });
});

});

new Swiper(".swiperlookbook_slider", {
    slidesPerView: 4,        // 한 화면에 보이는 슬라이드 개수
    spaceBetween: 20,        // 슬라이드 간 간격
    grabCursor: true,        // 마우스로 잡아당기는 커서
    centeredSlides: false,   // 가운데 정렬 X
    freeMode: true,          // 자유롭게 드래그 가능
    loop: false,             // 반복 X (원하면 true)
});


