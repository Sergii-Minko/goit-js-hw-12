import{S as p,i as a}from"./assets/vendor-403a0c46.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const g="https://pixabay.com/api/",h="43345199-e8902240a3be22b0f4c9e0aa7",d=s=>{const e=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${g}?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},A="/goit-js-hw-12/assets/error-bd282b8e.svg",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAitJREFUWEe9lztvVDEUhGf+GYmgIRQggUhDKEDiUREKUpAorIACCqDiIUEBNCCQoEhoiIB/NsQr++rsufa99s1uXPo13xm/jinpEYB9AGsk/+EUiqQzAP4CmFHHBEZz5RBGfC4bABJN4lgZRFYrqJ4GREmDKexMh3Mkj5axJSSdBfA7t9QdQMGJDZK/TgIh6TyAw9I+WwCIEJ72EsmfUyAkXQTww4ztudoDiBCeepPk1xYISVcBfDFjsm5mASKEp98i+bkGQtI1AJ9M36KLRYAI4aO4SfLDEISkGwDemz6D7g0CRAgfzV2Sb3IQku4AeG3aRl0bBYgQPqptkq8shKR7AF6aulG35jdhzZpGCB/dDsnnse0BgGdmrqJLXq8aIAr5KPfihI/NxD13hoJsAihEa+fvXKl1thkgQuwCsFGH6j2ST2qFU7+pACmHsHozkqG+qTQDmAQmJ9QM0QRwnLyEzMlGOYsUoT6VJohqgJx4sjzjSjVEFcCQeAp7KsQoQI34SSDGHqPemo/t9FYnhp7jhwDsua5e1wzELsmnuWNTSki2AbyYurPjZeXvivsk7WM1nz6Xkt0C8NaIF+nHbhxJ3sXbJN/ZcT4p3QLw0XTIUo8J23ZJ3s3rJLtsyabllwF8M4N7tC3CDsK7eoXk924JJG0AODCDFiinCjsI7+4Fkofha7YG4I/p3NEtQ9hBeJfX/ed0TrVsYQex4HYASMdlnWT4Mq+8GNdn/wE5SR+dRCJW0AAAAABJRU5ErkJggg==",S=s=>s.map(e=>`
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
  `).join(""),E=()=>{const s=document.querySelector(".iziToast-close");s.style.color="#fff",s.style.backgroundImage=`url('${b}')`,s.style.setProperty("opacity","1"),s.style.setProperty("fill","#fff"),s.style.setProperty("background-size","12px");const e=document.querySelector(".iziToast");e.style.setProperty("width","432px"),e.style.setProperty("height","88px"),e.style.setProperty("display","flex"),e.style.setProperty("align-items","center"),e.style.setProperty("justify-content","center")},u=()=>({message:"Sorry, there are no images matching your search query. Please, try again!",color:"#EF4040",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B",iconColor:"#fff",iconUrl:A,position:"topRight",timeout:2e3,onOpening:E}),i=document.querySelector(".js-gallery"),f=document.querySelector(".js-loader"),c=document.querySelector(".js-search-input"),m=new p(".gallery a",{captionsData:"alt",captionDelay:250}),C=s=>{s.preventDefault();const e=c.value.trim();if(e===""||e===null){i.innerHTML="",c.value="",a.error(u());return}i.innerHTML="",f.classList.add("is-visible"),setTimeout(()=>{d(e).finally(()=>{f.classList.remove("is-visible")}).then(r=>{if(console.log(r.hits),r.hits.length===0){i.innerHTML="",c.value="",a.error(u());return}let l=r.hits;i.innerHTML=S(l),m.refresh(),m.on("shown.simplelightbox",()=>{const t=document.querySelector(".sl-overlay"),o=document.querySelector(".sl-next"),n=document.querySelector(".sl-prev"),y=document.querySelector(".sl-close");t.style.backgroundColor="#2E2F42",o.style.color="#fff",n.style.color="#fff",y.style.color="#fff"})}).catch(r=>{console.log(r)})},2e3)},q=document.querySelector(".search-btn");q.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map
