import { useState, useEffect } from "react";
import { getUserProfile } from "../services/githubService";

// Estilos
import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";


// Ícones
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";

// Tipagem dos dados de perfil
interface UserProfile {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function Summary() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile("Emmanuelperalta8");  // Nome de usuário atualizado
        setProfile(data);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar os dados do perfil");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <SummaryContainer>
      <img src={profile?.avatar_url} alt={profile?.name} />
      <section>
        <SummaryHeader>
          <h1>{profile?.name}</h1>
          <a href={`https://github.com/${profile?.login}`} target="_blank" rel="noopener noreferrer">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{profile?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{profile?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{profile?.company}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{profile?.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
