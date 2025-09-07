import React, { useEffect, useState } from "react";

// Define o tipo dos dados do influenciador
interface Influencer {
  id: number;
  name: string;
  followers: number;
}

export default function InfluencersSection() {
  const [influencers, setInfluencers] = useState<Influencer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulação de requisição API
  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        // Aqui você colocaria sua chamada real de API
        // const res = await fetch("/api/influencers");
        // const data = await res.json();

        // Simulação de dados
        const data: Influencer[] = [
          { id: 1, name: "Influencer A", followers: 1200 },
          { id: 2, name: "Influencer B", followers: 980 },
          { id: 3, name: "Influencer C", followers: 4500 },
        ];

        setInfluencers(data);
      } catch (err) {
        setError("Erro ao carregar influenciadores.");
      } finally {
        setLoading(false);
      }
    };

    fetchInfluencers();
  }, []);

  if (loading) return <p>Carregando influenciadores...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Influenciadores</h2>
      <ul>
        {influencers.map((influencer) => (
          <li key={influencer.id}>
            {influencer.name} - {influencer.followers} seguidores
          </li>
        ))}
      </ul>
    </section>
  );
}
