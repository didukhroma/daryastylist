(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const l=document.querySelector(".js-portfolio"),i=document.querySelector(".js-button"),d=()=>{console.log("go");const r=[];for(let t=1;t<=18;t++)r.push(`<li  class="portfolio-list-item ${t>4&&"visually-hidden"}" data-id="${t}">
    <div class="set-img-wrapper">
      <img
       srcset = './img/portfolio/img${t}.jpg 1x, ./img/portfolio/img${t}.jpg@2x.jpg 2x'
      src="./img/portfolio/img${t}.jpg"
       alt="hair style" 
        loading = 'lazy'/>
    </div>
  </li>`);return r.join("")};l.insertAdjacentHTML("afterbegin",d());const a=()=>{if(i.textContent==="Показати більше"){[...l.children].forEach(r=>r.classList.remove("visually-hidden")),i.textContent="Показати меньше";return}i.textContent="Показати більше",[...l.children].forEach((r,t)=>{t>=4&&r.classList.add("visually-hidden")})};i.addEventListener("click",a);
