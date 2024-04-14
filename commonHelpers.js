import{a as A,S as L,i as m}from"./assets/vendor-1b69733f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();A.defaults.baseURL="https://pixabay.com/api/";const S="43345199-e8902240a3be22b0f4c9e0aa7",w=(t,e=1,o=40)=>{const i={params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o}};return A.get("",i)},C="/goit-js-hw-12/assets/error-bd282b8e.svg",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAitJREFUWEe9lztvVDEUhGf+GYmgIRQggUhDKEDiUREKUpAorIACCqDiIUEBNCCQoEhoiIB/NsQr++rsufa99s1uXPo13xm/jinpEYB9AGsk/+EUiqQzAP4CmFHHBEZz5RBGfC4bABJN4lgZRFYrqJ4GREmDKexMh3Mkj5axJSSdBfA7t9QdQMGJDZK/TgIh6TyAw9I+WwCIEJ72EsmfUyAkXQTww4ztudoDiBCeepPk1xYISVcBfDFjsm5mASKEp98i+bkGQtI1AJ9M36KLRYAI4aO4SfLDEISkGwDemz6D7g0CRAgfzV2Sb3IQku4AeG3aRl0bBYgQPqptkq8shKR7AF6aulG35jdhzZpGCB/dDsnnse0BgGdmrqJLXq8aIAr5KPfihI/NxD13hoJsAihEa+fvXKl1thkgQuwCsFGH6j2ST2qFU7+pACmHsHozkqG+qTQDmAQmJ9QM0QRwnLyEzMlGOYsUoT6VJohqgJx4sjzjSjVEFcCQeAp7KsQoQI34SSDGHqPemo/t9FYnhp7jhwDsua5e1wzELsmnuWNTSki2AbyYurPjZeXvivsk7WM1nz6Xkt0C8NaIF+nHbhxJ3sXbJN/ZcT4p3QLw0XTIUo8J23ZJ3s3rJLtsyabllwF8M4N7tC3CDsK7eoXk924JJG0AODCDFiinCjsI7+4Fkofha7YG4I/p3NEtQ9hBeJfX/ed0TrVsYQex4HYASMdlnWT4Mq+8GNdn/wE5SR+dRCJW0AAAAABJRU5ErkJggg==",g=t=>t.map(e=>`
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
  `).join(""),v=()=>{const t=document.querySelector(".iziToast-close");t.style.color="#fff",t.style.backgroundImage=`url('${q}')`,t.style.setProperty("opacity","1"),t.style.setProperty("fill","#fff"),t.style.setProperty("background-size","12px");const e=document.querySelector(".iziToast");e.style.setProperty("width","432px"),e.style.setProperty("height","88px"),e.style.setProperty("display","flex"),e.style.setProperty("align-items","center"),e.style.setProperty("justify-content","center")},y=()=>({message:"Sorry, there are no images matching your search query. Please, try again!",color:"#EF4040",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B",iconColor:"#fff",iconUrl:C,position:"topRight",timeout:2e3,onOpening:v}),B=()=>{const t=document.querySelector(".sl-overlay"),e=document.querySelector(".sl-next"),o=document.querySelector(".sl-prev"),i=document.querySelector(".sl-close");t.style.backgroundColor="#2E2F42",e.style.color="#fff",o.style.color="#fff",i.style.color="#fff"},T=()=>({title:"",message:"We're sorry, but you've reached the end of search results.!",messageColor:"#fff",position:"topRight",timeout:2e3,onOpening:v}),n=document.querySelector(".js-gallery"),I=document.querySelector(".search-btn"),c=document.querySelector(".more-search-btn"),a=document.querySelector(".js-loader"),u=document.querySelector(".js-search-input"),h=new L(".gallery a",{captionsData:"alt",captionDelay:250});let l=1;const b=40;let f="";var p=document.querySelector(".scrollToTopBtn");const E=t=>async e=>{if(e.preventDefault(),t||(f=u.value.trim(),u.value="",l=1,n.innerHTML=""),!t&&(f===""||f===null)){n.innerHTML="",u.value="",m.error(y());return}try{a.classList.add("is-visible");const{data:o}=await w(f,l,b);a.classList.remove("is-visible");const i=Math.ceil(o.totalHits/b);if(!t&&o.hits.length===0){n.innerHTML="",u.value="",m.error(y()),l=1,a.classList.remove("is-visible"),c.classList.remove("is-visible");return}const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();t?(n.insertAdjacentHTML("beforeend",g(o.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"})):n.innerHTML=g(o.hits),h.refresh(),h.on("shown.simplelightbox",B),l=l+1,l<=i?c.classList.add("is-visible"):(c.classList.remove("is-visible"),m.info(T()))}catch(o){a.classList.remove("is-visible"),c.classList.remove("is-visible"),console.log(o)}};I.addEventListener("click",E(!1));c.addEventListener("click",E(!0));p.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),console.log("clicked")});window.addEventListener("scroll",t=>window.scrollY>=32?p.classList.add("is-visible"):p.classList.remove("is-visible"));
//# sourceMappingURL=commonHelpers.js.map
