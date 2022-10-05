import { useEffect, useState } from "react";
import { HomeContainer } from "./styles";
import { formatNumber, formatNumberCompact } from "../../utils/formatter";

interface CandidateJSON {
  cc: string;
  nm: string;
  pvap: string;
  vap: number;
  n: string;
}
interface Candidate {
  party: string;
  name: string;
  votesInPercent: string;
  votes: number;
  number: string;
}

function replyDataNames(data: CandidateJSON[]): Candidate[] {
  return data.map((candidateJson) => {
    const candidate: Candidate = {
      name: candidateJson.nm,
      number: candidateJson.n,
      party: candidateJson.cc,
      votes: candidateJson.vap,
      votesInPercent: candidateJson.pvap,
    };

    return candidate;
  });
}

export function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    )
      .then((response) => response.json())
      .then((data) => setCandidates(replyDataNames(data.cand)));
  }, []);

  return (
    <HomeContainer>
      <h1>Candidatos</h1>
      {candidates.map((candidate) => {
        return (
          <div key={candidate.number}>
            <p>Número {candidate.number}</p>
            <p>Nome {candidate.name}</p>
            <p>Partido {candidate.party}</p>
            <p title={formatNumberCompact(candidate.votes)}>
              Votos {formatNumber(candidate.votes)}
            </p>
            <p>Porcentagem de votos: {candidate.votesInPercent} %</p>

            <hr />
          </div>
        );
      })}
    </HomeContainer>
  );
}
