const arrow = document.querySelector(".arrow");

function hideArrow() {
    setTimeout(() => {
        arrow.style.opacity = 0;
        setTimeout(() => {
            arrow.style.opacity = 1;
            hideArrow(); // Рекурсивный вызов функции для повторения анимации
        }, 1000);
    }, 1000);
}

hideArrow();


document.getElementById('catalog').addEventListener('click', function(){
    document.querySelector('.place').scrollIntoView({ behavior: 'smooth' });
});
