import{a as g,S as w,i as S}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();g.defaults.baseURL="https://pixabay.com/api";async function y(i,e){let l=i;i.includes(" ")&&(l=i.split(" ").join("+"));try{const{data:s}=await g.get("/?key=42562534-6abe2af4317b1372b4a8ab981&q="+l+"&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page="+e);return s}catch(s){if(s.response){const{data:t,status:r,headers:c}=s.response;console.error(t)}else s.request?console.error(s.request):console.error(s.message);throw console.error(s.config),console.error(s.toJSON()),new Error(s)}}function L(i){return i.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${e.previewURL}" 
                alt="${e.tags}" 
                />
        </a>
    <ul class="statistic-list">
      <li class="statistic-item">
        <h3 class="statistic-title">Likes</h3>
        <p class="statistic-info">${e.likes}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Views</h3>
        <p class="statistic-info">${e.views}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Comments</h3>
        <p class="statistic-info">${e.comments}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Downloads</h3>
        <p class="statistic-info">${e.downloads}</p>
      </li>
    </ul>
  </li>`).join("")}const q=document.querySelector(".gallery-form"),h=document.querySelector(".gallery-search"),n=document.querySelector(".gallery"),f=document.querySelector(".loader"),o=document.querySelector(".btn-more"),p=document.querySelector(".btn-loader"),d=document.querySelector(".no-more");let u;const O={overlayOpacity:.8,captionsData:"alt",captionDelay:250},v=15;let a=1,m=0,b=new w(".gallery a",O);q.addEventListener("submit",i=>{i.preventDefault(),a=1,o.classList.add("is-hidden"),d.classList.add("is-hidden"),h.value.trim()!==""&&(n.innerHTML="",f.classList.remove("is-hidden"),u=y(h.value.trim(),a),u.then(e=>{e.totalHits?(m=e.totalHits,n.insertAdjacentHTML("beforeend",L(e.hits)),b.refresh(),m>v?o.classList.remove("is-hidden"):d.classList.remove("is-hidden")):S.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{console.error(e)}).finally(()=>{f.classList.add("is-hidden")}))});o.addEventListener("click",()=>{o.classList.add("is-hidden"),p.classList.remove("is-hidden"),a+=1,u=y(h.value.trim(),a),u.then(i=>{n.insertAdjacentHTML("beforeend",L(i.hits)),window.scrollBy({top:n.firstElementChild.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),b.refresh()}).catch(i=>{console.error(i)}).finally(()=>{p.classList.add("is-hidden"),m<a*v?(o.classList.add("is-hidden"),d.classList.remove("is-hidden")):(o.classList.remove("is-hidden"),d.classList.add("is-hidden"))})});
//# sourceMappingURL=commonHelpers.js.map
