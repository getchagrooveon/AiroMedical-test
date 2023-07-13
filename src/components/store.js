import { create } from 'zustand';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers',
});

const store = set => ({
  recipes: [],
  isLoading: false,
  getFirstBatch: async (page = 1) => {
    set(state => ({ isLoading: true }));
    const perPage = 15;
    const { data } = await API.get(`?page=${page}&per_page=${perPage}`);
    set(state => ({ recipes: data }));
    set(state => ({ isLoading: false }));
  },
  getRecipeById: async id => {
    set(state => ({ isLoading: true }));
    const { data } = await API.get(`${id}`);
    set(state => ({ recipes: data }));
    set(state => ({ isLoading: false }));
  },
});

export const useStore = create(store);
