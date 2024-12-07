// let lastScrollTop = 0;
// const header = document.querySelector('header');

// window.addEventListener('scroll', function () {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         // عند التمرير لأسفل
//         header.classList.add('hidden');
//     } else {
//         // عند التمرير لأعلى
//         header.classList.remove('hidden');
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // للتعامل مع التمرير للأعلى عند بداية الصفحة
// });


let join=document.querySelector(".MYSUPPORTERS h1");
let mysouicon=document.querySelectorAll(".MYSUPPORTERS .social-icons .x");
let sociali=document.getElementsByClassName("social-icons");
let body=document.getElementsByTagName('body')[0];
console.log("🚀 ~ mysouicon:", mysouicon);

console.log(sociali);
join.addEventListener("click",function(r){
    r.stopPropagation();
    join.classList.toggle("clk");
    mysouicon.forEach((e)=>e.classList.toggle("mas"));
    

})




body.addEventListener("click",function(r){
    mysouicon.forEach((e)=>{
        if(e.classList.contains("mas")){
    e.classList.remove("mas");
    }
    join.classList.remove("clk");
    });
})
