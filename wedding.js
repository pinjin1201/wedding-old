//婚紗照自動瀏覽
function pic(){
    window.setTimeout(ptwo,3000);
}
function ptwo(){
    let picone=document.querySelector("#pic-1");
    picone.style.display="none";
    let pictwo=document.querySelector("#pic-2");
    pictwo.style.display="block";
    window.setTimeout(pthr,3000);

     function pthr(){
        let pictwo=document.querySelector("#pic-2");
        pictwo.style.display="none";
        let picthree=document.querySelector("#pic-3");
        picthree.style.display="block";
        window.setTimeout(pfou,3000);
     }

     function pfou(){
        let picthree=document.querySelector("#pic-3");
        picthree.style.display="none";
        let picfour=document.querySelector("#pic-4");
        picfour.style.display="block";
        window.setTimeout(pfi,3000);
     }

     function pfi(){
        let picfour=document.querySelector("#pic-4");
        picfour.style.display="none";
        let picfive=document.querySelector("#pic-5");
        picfive.style.display="block";
        window.setTimeout(psi,3000);
     }

     function psi(){
        let picfive=document.querySelector("#pic-5");
        picfive.style.display="none";
        let picsix=document.querySelector("#pic-6");
        picsix.style.display="block";
        window.setTimeout(pse,3000);
     }

     function pse(){
        let picsix=document.querySelector("#pic-6");
        picsix.style.display="none";
        let picseven=document.querySelector("#pic-7");
        picseven.style.display="block";
        window.setTimeout(peig,3000);
     }

     function peig(){
        let picseven=document.querySelector("#pic-7");
        picseven.style.display="none";
        let piceight=document.querySelector("#pic-8");
        piceight.style.display="block";
        window.setTimeout(pnin,3000);
     }

     function pnin(){
        let piceight=document.querySelector("#pic-8");
        piceight.style.display="none";
        let picnine=document.querySelector("#pic-9");
        picnine.style.display="block";
        window.setTimeout(pten,3000);
     }

     function pten(){
        let picnine=document.querySelector("#pic-9");
        picnine.style.display="none";
        let picten=document.querySelector("#pic-10");
        picten.style.display="block";
        window.setTimeout(pel,3000);
     }

     function pel(){
        let picten=document.querySelector("#pic-10");
        picten.style.display="none";
        let picone=document.querySelector("#pic-1");
        picone.style.display="block";
        window.setTimeout(pic,1000);
     }
}
//mobile-menu-trigger
function mobileMenu(){
   let mobileMenu=document.querySelector("#mobile-menu");
   mobileMenu.style.display="block";
}
function mobileClose(){
   let mobileMenu=document.querySelector("#mobile-menu");
   mobileMenu.style.display="none";
}

