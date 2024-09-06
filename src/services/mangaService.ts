import api from './api';

export const getLatestMangaList = async (page: number) => {
  const response = await api.get(`/latest-manga?page=${page}`);
  return response.data;
};
export const getLatestReleaseList = async (page: number) => {
  const response = await api.get(`/latest-release?page=${page}`);
  return response.data;
};

export const getMangaDetails = async (id: string) => {
  const response = await api.get(`/manga/${id}`);
  return response.data;
};
