
let all=Math.round(Math.random()*100)
    


function check() {
   let ife1 = document.getElementById('inputOne').value
   let ife2 = document.getElementById('inputTwo').value
   
    let all=Math.round(Math.random()*100)
    if(ife1=="" ||ife2==""){
       show.innerHTML=('The input must be filled')
       show.style.display="block"
    }
    else{
        let all=Math.round(Math.random()*100)
        document.getElementById('inputOne').value=""
        document.getElementById('inputTwo').value=""
        
        // show.innerHTML=`see your love Percentage ${all}%💖`;
        show.style.display="block"
        if(all <=40 && all >=0){
              show.innerHTML =`<span class="fs-2 text-danger">${ife1}</span> <span class="fs-4">and </span> <span class="fs-2 text-danger">${ife2}</span>, <span class="fs-4">run for your life, you are not compatible <br> ${all}%💔</span>`
        }
        if( all >40 &&  all <=70){
           show.innerHTML=` <span class="fs-2 text-danger">${ife1}</span> <span class="fs-4">and </span><span class="fs-2 text-danger">${ife2}</span>,<span class="fs-4"> your love is not strong enough <br> ${all}%💘</span>`
        }
        if( all >70 &&  all <=100){
            show.innerHTML=`<span class="fs-2"> ${ife1}</span> <span class="fs-4">and</span> <span class="fs-2 text-danger">${ife2}</span>, <span class="fs-4"> your love is so sweet, You are good to go <br> ${all}%💞</span> `
            
         }
        }
    }
    