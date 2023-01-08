import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchGalleryWithQuery = async (searchQuery, per_page) => {
  try {
  const response = await axios.get(
    `?q=${searchQuery}&page=${per_page}&key=30878986-dbe096aab184f812986a58540&image_tupe=photo&orientation=horizontal&per_page=12`
  );
  if (response.data.hits.length === 0) {
    throw Error('Нажаль за Вашим запитом нічого не знайдено ((')
  }
  return response.data;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('Немає відповіді сервера. Спробуй пізніше!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('Немає відповіді сервера. Спробуй пізніше!');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
};