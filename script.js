const bar= document.getLicnentByid(bar);
const close=document.getLicnentByid("close");
const now=document.getLicnentByid("navbar");

if (bar){
    bar.addEventListener("click", () => {
        nav.lassList.add('active');
});
}

(close)=>{
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}