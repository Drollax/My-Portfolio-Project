import axios from "axios";

const API_URL = "http://localhost:5000/projects";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // JSON Server data
  } catch (error) {
    console.error("Projeler alınamadı:", error);
    return [];
  }
};

export const addProject = async (project) => {
  try {
    const response = await axios.post(API_URL, project);
    return response.data;
  } catch (error) {
    console.error("Projeler eklenemedi:", error);
    return null;
  }
};