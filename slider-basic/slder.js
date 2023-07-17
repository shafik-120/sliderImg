
const prev = document.querySelector('.btn1')
const next = document.querySelector('.btn2')
let image = document.querySelector('img')

const img1 ='https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400'
const img2 = 'https://images.pexels.com/photos/1088614/pexels-photo-1088614.jpeg?auto=compress&cs=tinysrgb&w=400'
const img3 = 'https://images.pexels.com/photos/1926404/pexels-photo-1926404.jpeg?auto=compress&cs=tinysrgb&w=400'
const img4 = 'https://images.pexels.com/photos/947177/pexels-photo-947177.jpeg?auto=compress&cs=tinysrgb&w=400'
const img5 = 'https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?auto=compress&cs=tinysrgb&w=400'

let sliderimg = [img1, img2, img3, img4, img5]
let count = 0;
next.addEventListener('click', ()=>{
    count++
    if (count >= sliderimg.length) {
        count = 0;
        image.src = sliderimg[count]
    } else {
        image.src = sliderimg[count]
    }
    
})
prev.addEventListener('click', ()=>{
    count--
    if (count < 0) {
        count = sliderimg.length - 1;
        image.src = sliderimg[count]
    } else {
        image.src = sliderimg[count]
    }
})