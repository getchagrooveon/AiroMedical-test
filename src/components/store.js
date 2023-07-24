import { create } from 'zustand';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers',
});

const store = set => ({
  recipes: [],
  selectRecipe: [],
  isLoading: false,
  getBatch: async (page = 1) => {
    set(store => ({ recipes: [], isLoading: true }));
    const perPage = 15;
    const { data } = await API.get(`?page=${page}&per_page=${perPage}`);
    set(store => ({ recipes: data, isLoading: false }));
  },
  getRecipeById: async id => {
    set(store => ({ selectRecipe: [] }));
    const { data } = await API.get(`${id}`);
    set(store => ({ selectRecipe: data, isLoading: false }));
  },
  deleteItem: async id => {
    set(store => ({ recipes: [], isLoading: true }));
    const { data } = await API.delete(id);
    set(store => ({ recipes: data, isLoading: false }));
  },
  addToList: id => set(store => ({ selectRecipe: [] })),
});

export const useStore = create(store);
