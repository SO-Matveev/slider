function init() {
    const btnPrev = document.querySelector('.slider-prev');
    const btnNext = document.querySelector('.slider-next');
    const slides = document.querySelectorAll('.slider-item');
    const pagination = document.querySelector('.slider-pagination');
    let currentIndex = 0;

    function showSlide(index){
        for (let i=0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
        pagination.textContent = `${index + 1}/${slides.length}`;
    }

    showSlide(currentIndex);
    
    btnNext.addEventListener('click', function (){
        currentIndex = currentIndex < slides.length-1 ? currentIndex + 1 : 0;
        showSlide(currentIndex);

    });
    btnPrev.addEventListener('click', function (){
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length-1;
        showSlide(currentIndex);

    });

}
window.onload = init;

