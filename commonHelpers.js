import{a as y,S as b,i as f}from"./assets/vendor-1b69733f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();y.defaults.baseURL="https://pixabay.com/api/";const S="43345199-e8902240a3be22b0f4c9e0aa7",v=(t,e=1)=>{const i={params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40}};return y.get("",i)},E="/goit-js-hw-12/assets/error-bd282b8e.svg",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAitJREFUWEe9lztvVDEUhGf+GYmgIRQggUhDKEDiUREKUpAorIACCqDiIUEBNCCQoEhoiIB/NsQr++rsufa99s1uXPo13xm/jinpEYB9AGsk/+EUiqQzAP4CmFHHBEZz5RBGfC4bABJN4lgZRFYrqJ4GREmDKexMh3Mkj5axJSSdBfA7t9QdQMGJDZK/TgIh6TyAw9I+WwCIEJ72EsmfUyAkXQTww4ztudoDiBCeepPk1xYISVcBfDFjsm5mASKEp98i+bkGQtI1AJ9M36KLRYAI4aO4SfLDEISkGwDemz6D7g0CRAgfzV2Sb3IQku4AeG3aRl0bBYgQPqptkq8shKR7AF6aulG35jdhzZpGCB/dDsnnse0BgGdmrqJLXq8aIAr5KPfihI/NxD13hoJsAihEa+fvXKl1thkgQuwCsFGH6j2ST2qFU7+pACmHsHozkqG+qTQDmAQmJ9QM0QRwnLyEzMlGOYsUoT6VJohqgJx4sjzjSjVEFcCQeAp7KsQoQI34SSDGHqPemo/t9FYnhp7jhwDsua5e1wzELsmnuWNTSki2AbyYurPjZeXvivsk7WM1nz6Xkt0C8NaIF+nHbhxJ3sXbJN/ZcT4p3QLw0XTIUo8J23ZJ3s3rJLtsyabllwF8M4N7tC3CDsK7eoXk924JJG0AODCDFiinCjsI7+4Fkofha7YG4I/p3NEtQ9hBeJfX/ed0TrVsYQex4HYASMdlnWT4Mq+8GNdn/wE5SR+dRCJW0AAAAABJRU5ErkJggg==",p=t=>t.map(e=>`
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
  `).join(""),h=()=>{const t=document.querySelector(".iziToast-close");t.style.color="#fff",t.style.backgroundImage=`url('${L}')`,t.style.setProperty("opacity","1"),t.style.setProperty("fill","#fff"),t.style.setProperty("background-size","12px");const e=document.querySelector(".iziToast");e.style.setProperty("width","432px"),e.style.setProperty("height","88px"),e.style.setProperty("display","flex"),e.style.setProperty("align-items","center"),e.style.setProperty("justify-content","center")},g=()=>({message:"Sorry, there are no images matching your search query. Please, try again!",color:"#EF4040",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B",iconColor:"#fff",iconUrl:E,position:"topRight",timeout:2e3,onOpening:h}),C=()=>{const t=document.querySelector(".sl-overlay"),e=document.querySelector(".sl-next"),i=document.querySelector(".sl-prev"),r=document.querySelector(".sl-close");t.style.backgroundColor="#2E2F42",e.style.color="#fff",i.style.color="#fff",r.style.color="#fff"},q=()=>({title:"",message:"We're sorry, but you've reached the end of search results.!",messageColor:"#fff",position:"topRight",timeout:2e3,onOpening:h}),n=document.querySelector(".js-gallery"),B=document.querySelector(".search-btn"),c=document.querySelector(".more-search-btn"),a=document.querySelector(".js-loader"),m=document.querySelector(".js-search-input"),d=new b(".gallery a",{captionsData:"alt",captionDelay:250});let l=1;const w=40,A=t=>async e=>{e.preventDefault();const i=m.value.trim();if(!t&&(i===""||i===null)){n.innerHTML="",m.value="",f.error(g());return}t||(l=1,n.innerHTML="");try{a.classList.add("is-visible");const{data:r}=await v(i,l);a.classList.remove("is-visible");const s=Math.ceil(r.totalHits/w);if(!t&&r.hits.length===0){n.innerHTML="",m.value="",f.error(g()),l=1,a.classList.remove("is-visible"),c.classList.remove("is-visible");return}const o=()=>document.querySelector(".gallery-item").getBoundingClientRect();t?(n.insertAdjacentHTML("beforeend",p(r.hits)),window.scrollBy({top:o().height*2,left:0,behavior:"smooth"})):n.innerHTML=p(r.hits),d.refresh(),d.on("shown.simplelightbox",C),l=l+1,l<=s?c.classList.add("is-visible"):(c.classList.remove("is-visible"),f.info(q()))}catch(r){a.classList.remove("is-visible"),c.classList.remove("is-visible"),console.log(r)}};B.addEventListener("click",A(!1));c.addEventListener("click",A(!0));
//# sourceMappingURL=commonHelpers.js.map
