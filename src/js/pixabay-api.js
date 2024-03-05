import axios from "axios";

const KEY = "42562534-6abe2af4317b1372b4a8ab981";
axios.defaults.baseURL = 'https://pixabay.com/api';

export async function getImages(request, page){
  let truthRequest = request;  
  if(request.includes(" ")){
    truthRequest = request.split(" ").join("+");
  }

  try {
    const { data } = await axios.get("/?key=42562534-6abe2af4317b1372b4a8ab981&q="+truthRequest+"&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page="+page)
    return data
  } catch (error) {
    if (error.response) {
      // Статус ответа выходит за пределы 2xx
      const { data, status, headers } = error.response
      console.error(data)
    } else if (error.request) {
      // Отсутствует тело ответа
      console.error(error.request)
    } else {
      // Ошибка, связанная с неправильной настройкой запроса
      console.error(error.message)
    }
    // Другая ошибка
    console.error(error.config)
    // Подробная информация об ошибке
    console.error(error.toJSON())
  
    throw new Error(error);
  }
}