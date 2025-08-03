import axios from 'axios';

const API_KEY = 'Nv9aVCd6obnARQ8A2neQ2SijSIsyCzlH';

const nytApi = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2',
});

export const handleGetData = async (query?: string) => {
  try {
    const response = await nytApi.get('/articlesearch.json', {
      params: {
        'api-key': API_KEY,
        q: query,
      },
    });
    console.log('response : ', response);
    
    return response.data.response.docs;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};