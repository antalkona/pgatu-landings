
const hoverBox = document.getElementById('hoverBox');
const hoverImg = document.getElementById('hoverImg');
hoverBox.addEventListener('mouseenter', function() {
    hoverImg.src = newImagePath;
});
hoverBox.addEventListener('mouseleave', function() {
    hoverImg.src = defaultImagePath;
});


const hoverBox2 = document.getElementById('hoverBox2');
const hoverImg2 = document.getElementById('hoverImg2');
hoverBox2.addEventListener('mouseenter', function() {
    hoverImg2.src = newImagePath;
});
hoverBox2.addEventListener('mouseleave', function() {
    hoverImg2.src = defaultImagePath;
});

const hoverBox3 = document.getElementById('hoverBox3');
const hoverImg3 = document.getElementById('hoverImg3');
hoverBox3.addEventListener('mouseenter', function() {
    hoverImg3.src = newImagePath;
});
hoverBox3.addEventListener('mouseleave', function() {
    hoverImg3.src = defaultImagePath;
});

const hoverBox4 = document.getElementById('hoverBox4');
const hoverImg4 = document.getElementById('hoverImg4');
hoverBox4.addEventListener('mouseenter', function() {
    hoverImg4.src = newImagePath;
});
hoverBox4.addEventListener('mouseleave', function() {
    hoverImg4.src = defaultImagePath;
});

const newImagePath = './img/Arrow-hover.png';
const defaultImagePath = hoverImg.src;
