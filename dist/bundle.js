(()=>{"use strict";const e=document.querySelector(".card-one"),t=document.querySelector(".card-two"),a=document.querySelector(".card-three");document.addEventListener("DOMContentLoaded",(()=>{!function(){class i{constructor(e,t,a,i){this.src=e,this.alt=t,this.header=a,this.paragraph=i}showCard(e){e.innerHTML=`\n            <div class="card-img">\n            <img src=${this.src} alt=${this.alt}>\n            <div class="card-text">\n            <h1>${this.header}</h1>\n            <p>${this.paragraph}</p>\n            </div>\n            </div>`,e.append()}}new i("/My-web-site/img/rica.jpg","Lake Rica","Lake Rica","the biggest in Abkhazia, area 1.49 km²").showCard(e),new i("/My-web-site/img/mount.jpg","Red Lawn","Mountains in Sochi"," The width of the gorge is 30 m along the bottom, the height of the side walls decreases 1300 m, the total length is 82 km").showCard(t),new i("/My-web-site/img/op.jpg","Olimp Park","The Olympic Park","Is a public area and one of the main attractions of Greater Sochi, the main complex facility of the 2014 Winter Olympics").showCard(a)}()}))})();