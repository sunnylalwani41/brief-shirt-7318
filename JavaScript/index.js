let arr=["./img/1.jpg", "./img/2.jpg", "./img/3.jpg","./img/4.jpg", "./img/5.jpg", "./img/6.png", "./img/7.jpg", "./img/8.jpg", "./img/9.avif", "./img/10.avif", "./img/11.jpg", "./img/12.jpg"];
let count=3;
let image=document.querySelectorAll(".movingImage>img");
let id;
movingImage()
function movingImage(){
    id=setInterval(()=>{
        if(count>=9){
            count=4;
        }
        for(let i=3; i>=0; i--){
            image[i].src=arr[count-i];
        }
        count++;
        console.log(count);
    }, 2000);
}
let setTime;
document.querySelector(".left").addEventListener("click", ()=>{
    clearTimeout(setTime);
    clearInterval(id);
    if(count<=3){
        count=11;
    }
    else{
        count--;
    }
    for(let i=3; i>=0; i--){
        image[i].src=arr[count-i];
    }
    setTime=setTimeout(()=>{count++,movingImage()}, 4000);
});
document.querySelector(".right").addEventListener("click", ()=>{
    clearTimeout(setTime);
    clearInterval(id);
    if(count>=11){
        count=3;
    }
    else{
        count++;
    }
    for(let i=3; i>=0; i--){
        image[i].src=arr[count-i];
    }
    setTime=setTimeout(()=>{count++,movingImage()}, 4000);
})