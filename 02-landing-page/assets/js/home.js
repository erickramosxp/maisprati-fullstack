let idx = 0;
let img = document.getElementById('imgs_carrosel');
let imgs = document.querySelectorAll('#imgs_carrosel img');

let carrosel = () => {
    idx++;
    
    if (idx > imgs.length - 1){
        idx = 0;
    }
    console.log(imgs.length);
    img.style.transform = `translateX(${-idx * 700}px)`;
};

setTimeout(carrosel, 600);