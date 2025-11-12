const bestSwiper = new Swiper(".best_pro_slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            const prevButton = document.querySelector(".swiper-button-prev");
            if (this.activeIndex === 0) {
                prevButton.style.display = "none";
            } else {
                prevButton.style.display = "block";
            }
        },
    },
});

// 첫 진입 시 prev 버튼 숨기기
document.querySelector(".swiper-button-prev").style.display = "none";
