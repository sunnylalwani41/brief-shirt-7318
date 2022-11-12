let arr=["./img/1.jpg", "./img/2.jpg", "./img/3.jpg","./img/4.jpg", "./img/5.jpg", "./img/6.jpg", "./img/7.jpg", "./img/8.jpg", "./img/9.jpg", "./img/10.jpg"];
let count=0;
let image=document.querySelector(".movingImage>img");
let id;
movingImage()
function movingImage(){
    id=setInterval(()=>{
        if(count>=10){
            count=0;
        }
        
        image.src=arr[count];
        count++;
        // console.log(count);
    }, 2000);
}
let setTime;
document.querySelector(".left").addEventListener("click", ()=>{
    clearTimeout(setTime);
    clearInterval(id);
    console.log(count);
    if(count==0){
        count=9;
    }
    else{
        count--;
    }
    console.log(count);
    image.src=arr[count];
    setTime=setTimeout(()=>{count++,movingImage()}, 4000);
});
document.querySelector(".right").addEventListener("click", ()=>{
    clearTimeout(setTime);
    clearInterval(id);
    console.log(count);
    if(count>=9){
        count=0;
    }
    else{
        count++;
    }
    console.log(count);
    image.src=arr[count];
    setTime=setTimeout(()=>{count++,movingImage()}, 4000);
})
let hei=document.querySelector("nav");
let visibility=document.querySelector(".menu");
let burger=document.querySelector(".burger");
burger.addEventListener("click", ()=>{
    hei.classList.toggle("h-nav");
    visibility.classList.toggle("visibility")
})