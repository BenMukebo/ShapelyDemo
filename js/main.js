const headBtn = document.querySelector('.head-btn');
const icons = document.querySelector('.head-btn i');
const nav = document.querySelector('header .nav');

let showMenu = false;

icons.addEventListener('click', displayMenu);

function displayMenu (e){
    if(!showMenu){
        nav.classList.add('open');
        console.log(nav);

        showMenu = true;
    }else{
        nav.classList.remove('open');
        
        showMenu = false;
    }
}

window.addEventListener('scroll', function(){
    const parallax1 = document.querySelector('.home');
    // console.log(scrollPosition);
    const parallax2 = document.querySelector('.portof');
    const parallax3 = document.querySelector('.last-section');
    
    let scrollPosition = window.pageYOffset;

    parallax1.style.backgroundPositionY = -scrollPosition * 0.27  + "px";
    parallax3.style.backgroundPositionY = -scrollPosition * 0.27  + "px";

});


const carouselImg = document.querySelector('.carousel-section .carouselse');
const carouselBtns = document.querySelectorAll('.carousel-section .button');
const images = document.querySelectorAll('.carousel-caption .carousel');
const nbrOfImgs = images.length;

// console.log(images);

let imageIndex = 1;
let translate = 0;

carouselBtns.forEach(button => {
    button.addEventListener('click', event =>{
        if(event.target.id  === 'previous'){
            console.log(event.target.id);
            if(imageIndex !== 1){
                imageIndex--;
                translate += 100;
                console.log(imageIndex, translate);
            }
            else{
                imageIndex = 3;
                translate = -200;
                console.log(imageIndex, translate);
            }
        }else{
            console.log(event.target.id);            
            if (imageIndex !== nbrOfImgs){
                imageIndex++;
                translate -= 100;
                console.log(imageIndex, translate);
            }
            else{
                imageIndex = 1;
                translate = 0;
                console.log(imageIndex, translate);
            }
        }
        console.log(carouselImg)
        carouselImg.style.transform = `translateX(${translate}%)`;
    });
    
})

































// const arrs = [1,2,3,3,4,5,5,6,8,9,'9', true];
// let newArr=[];

// for(let i=0; i<arrs.length; i++){
//     if(typeof arrs[i] === 'number' && arrs[i] != arrs[i+1]){
//         newArr.push(arrs[i]);
//     } 
// }
// console.log(newArr);  
// console.log(Array.from(new Set(arrs)));














// let finalArr=[];

// for(let key of arrs){
//     if (typeof key === 'number'){
//         newArr.push(key);
//     }
// } 
//     console.log(newArr)

// for(let i=0; i<newArr.length; i++){
//     if(newArr[i] != newArr[i+1]){
//         finalArr.push(newArr[i]);
//     } 
// }
// console.log(finalArr);  

    

