export function addMarkup(date){

    

    return date.map(item => `
    <li class="gallery-item">
        <a class="gallery-link" href="${item.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${item.previewURL}" 
                alt="${item.tags}" 
                />
        </a>
    <ul class="statistic-list">
      <li class="statistic-item">
        <h3 class="statistic-title">Likes</h3>
        <p class="statistic-info">${item.likes}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Views</h3>
        <p class="statistic-info">${item.views}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Comments</h3>
        <p class="statistic-info">${item.comments}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Downloads</h3>
        <p class="statistic-info">${item.downloads}</p>
      </li>
    </ul>
  </li>`).join("");
}

