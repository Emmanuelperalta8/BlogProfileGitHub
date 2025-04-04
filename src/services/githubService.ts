import axios from "axios";

// URL da API do GitHub para buscar o perfil do usuário
const GITHUB_API_URL = "https://api.github.com/users";

// Função para buscar o perfil de um usuário no GitHub
export async function getUserProfile(username: string) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    throw new Error("Não foi possível carregar os dados do perfil");
  }
}
