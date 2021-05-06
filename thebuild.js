window.addEventListener('scroll',function()
{
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0)
})

const slider = () => {
    var lines = document.querySelector('.lines');
    var lists = document.querySelector('header ul');

    lines.addEventListener('click', () => {
     lists.classList.toggle('active');   
    })
    
}
slider()


//Slide show

const slideBox = document.querySelector('.slide-box');
const images = document.querySelectorAll('.slide-box div');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let count = 1;
const size = images[0].clientWidth;

slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';

nextBtn.addEventListener('click' , () => {
    if(count >= images.length - 1) return;
    slideBox.style.transition = 'transform 0.4s ease-in-out';
    count++;
    slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';

});

prevBtn.addEventListener('click' , () => {
    if(count <= 0) return;
    slideBox.style.transition = 'transform 0.4s ease-in-out';
    count-- ;
    slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';

});


slideBox.addEventListener('transitionend' , () => {
    if (images[count].id === 'lastClone')
    {
    slideBox.style.transition = 'none';
    count = images.length - 2;
    slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
    if (images[count].id === 'firstClone')
    {
    slideBox.style.transition = 'none';
    count = images.length - count;
    slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
});
