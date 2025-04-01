import api from './api';

export const getLatestMangaList = async (page: number) => {
  const response = await api.get(`/api/latest-manga?page=${page}`, { 
    cache: { ttl: 1000 * 60 * 5 } // Cache for 5 minutes
  });
  return response.data;
};

export const getLatestReleaseList = async (page: number) => {
  const response = await api.get(`/api/latest-release?page=${page}`, { 
    cache: { ttl: 1000 * 60 * 5 }
  });
  return response.data;
};

export const getMangaDetails = async (id: string) => {
  const response = await api.get(`/api/manga/${id}`, { 
    cache: { ttl: 1000 * 60 * 5 }
  });
  return response.data;
};

export const searchManga = async (query: string, page: number = 1) => {
  const response = await api.get(`/api/search`, {
    params: { query, page },
    cache: { ttl: 1000 * 60 * 5 }
  });
  return response.data;
};
