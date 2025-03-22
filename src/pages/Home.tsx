import { useEffect, useState } from "react";
import axios from "axios";

// URL do repositório para buscar as issues
const REPO_API_URL = "https://api.github.com/repos/Emmanuelperalta8/BlogProfileGitHub/issues"; // URL do seu repositório

interface Issue {
  id: number;
  title: string;
  body: string;
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get(REPO_API_URL);
      setIssues(response.data);
      setLoading(false);
    };

    fetchIssues();
  }, []);

  if (loading) return <p>Carregando issues...</p>;

  return (
    <div>
      <h1>Issues</h1>
      {issues.map((issue) => (
        <div key={issue.id}>
          <h2>{issue.title}</h2>
          <p>{issue.body}</p>
        </div>
      ))}
    </div>
  );
}
