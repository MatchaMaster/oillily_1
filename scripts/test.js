/* const tumblbugSwiper = new Swiper("#tumblbug_swiper", {
    autoplay:{delay:2500},
    loop:true,
    pagination: {
        el: "#tumblbug_swiper .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#tumblbug_swiper .swiper-button-next",
        prevEl: "#tumblbug_swiper .swiper-button-prev",
    },
});
 */


// 카테고리 탭 전환
const tabs = document.querySelectorAll('.category_menu li');
const sliders = document.querySelectorAll('.newSwiper');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 탭 스타일 변경
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // 카테고리 슬라이더 변경
        const cat = tab.dataset.category;
        sliders.forEach(sl => sl.style.display = 'none');
        document.querySelector(`.newSwiper.${cat}`).style.display = 'block';

        // Swiper 업데이트
        swipers[cat].update();
    });
});

