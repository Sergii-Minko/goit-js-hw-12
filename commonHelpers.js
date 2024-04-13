import{a as h,S,i as f}from"./assets/vendor-1b69733f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();h.defaults.baseURL="https://pixabay.com/api/";const v="43345199-e8902240a3be22b0f4c9e0aa7",E=(t,e=1,i=40)=>{const o={params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:i}};return h.get("",o)},L="/goit-js-hw-12/assets/error-bd282b8e.svg",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAitJREFUWEe9lztvVDEUhGf+GYmgIRQggUhDKEDiUREKUpAorIACCqDiIUEBNCCQoEhoiIB/NsQr++rsufa99s1uXPo13xm/jinpEYB9AGsk/+EUiqQzAP4CmFHHBEZz5RBGfC4bABJN4lgZRFYrqJ4GREmDKexMh3Mkj5axJSSdBfA7t9QdQMGJDZK/TgIh6TyAw9I+WwCIEJ72EsmfUyAkXQTww4ztudoDiBCeepPk1xYISVcBfDFjsm5mASKEp98i+bkGQtI1AJ9M36KLRYAI4aO4SfLDEISkGwDemz6D7g0CRAgfzV2Sb3IQku4AeG3aRl0bBYgQPqptkq8shKR7AF6aulG35jdhzZpGCB/dDsnnse0BgGdmrqJLXq8aIAr5KPfihI/NxD13hoJsAihEa+fvXKl1thkgQuwCsFGH6j2ST2qFU7+pACmHsHozkqG+qTQDmAQmJ9QM0QRwnLyEzMlGOYsUoT6VJohqgJx4sjzjSjVEFcCQeAp7KsQoQI34SSDGHqPemo/t9FYnhp7jhwDsua5e1wzELsmnuWNTSki2AbyYurPjZeXvivsk7WM1nz6Xkt0C8NaIF+nHbhxJ3sXbJN/ZcT4p3QLw0XTIUo8J23ZJ3s3rJLtsyabllwF8M4N7tC3CDsK7eoXk924JJG0AODCDFiinCjsI7+4Fkofha7YG4I/p3NEtQ9hBeJfX/ed0TrVsYQex4HYASMdlnWT4Mq+8GNdn/wE5SR+dRCJW0AAAAABJRU5ErkJggg==",p=t=>t.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>

      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${e.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${e.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${e.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${e.downloads}
        </p>
      </div>
    </li>
  `).join(""),A=()=>{const t=document.querySelector(".iziToast-close");t.style.color="#fff",t.style.backgroundImage=`url('${C}')`,t.style.setProperty("opacity","1"),t.style.setProperty("fill","#fff"),t.style.setProperty("background-size","12px");const e=document.querySelector(".iziToast");e.style.setProperty("width","432px"),e.style.setProperty("height","88px"),e.style.setProperty("display","flex"),e.style.setProperty("align-items","center"),e.style.setProperty("justify-content","center")},g=()=>({message:"Sorry, there are no images matching your search query. Please, try again!",color:"#EF4040",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B",iconColor:"#fff",iconUrl:L,position:"topRight",timeout:2e3,onOpening:A}),q=()=>{const t=document.querySelector(".sl-overlay"),e=document.querySelector(".sl-next"),i=document.querySelector(".sl-prev"),o=document.querySelector(".sl-close");t.style.backgroundColor="#2E2F42",e.style.color="#fff",i.style.color="#fff",o.style.color="#fff"},B=()=>({title:"",message:"We're sorry, but you've reached the end of search results.!",messageColor:"#fff",position:"topRight",timeout:2e3,onOpening:A}),n=document.querySelector(".js-gallery"),w=document.querySelector(".search-btn"),c=document.querySelector(".more-search-btn"),a=document.querySelector(".js-loader"),m=document.querySelector(".js-search-input"),d=new S(".gallery a",{captionsData:"alt",captionDelay:250});let l=1;const y=40,b=t=>async e=>{e.preventDefault();const i=m.value.trim();if(!t&&(i===""||i===null)){n.innerHTML="",m.value="",f.error(g());return}t||(l=1,n.innerHTML="");try{a.classList.add("is-visible");const{data:o}=await E(i,l,y);a.classList.remove("is-visible");const s=Math.ceil(o.totalHits/y);if(!t&&o.hits.length===0){n.innerHTML="",m.value="",f.error(g()),l=1,a.classList.remove("is-visible"),c.classList.remove("is-visible");return}const r=()=>document.querySelector(".gallery-item").getBoundingClientRect();t?(n.insertAdjacentHTML("beforeend",p(o.hits)),window.scrollBy({top:r().height*2,left:0,behavior:"smooth"})):n.innerHTML=p(o.hits),d.refresh(),d.on("shown.simplelightbox",q),l=l+1,l<=s?c.classList.add("is-visible"):(c.classList.remove("is-visible"),f.info(B()))}catch(o){a.classList.remove("is-visible"),c.classList.remove("is-visible"),console.log(o)}};w.addEventListener("click",b(!1));c.addEventListener("click",b(!0));
//# sourceMappingURL=commonHelpers.js.map
