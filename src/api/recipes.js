import { api } from "./ApiService";

export const getRecipe = (id) => api.get(`recipes/${id}`);

export const createRecipe = (data) => api.post("recipes", data);

export const getRecipes = (params) => api.get("recipes/", { params });

export const getPopularRecipes = () => api.get("recipes/popular");
