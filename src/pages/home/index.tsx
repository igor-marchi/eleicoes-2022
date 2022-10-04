import { useEffect, useState } from "react";
import { HomeContainer } from "./styles";
import { formatNumber, formatNumberCompact } from "../../utils/formatter";

interface Candidate {
  cc: string,
  nm: string,
  pvap: string,
  vap: number,
  n: string
}

export function Home() {
  const [candidates, setCandidates ] = useState<Candidate[]>([]);

  useEffect(() => {
    fetch('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json')
    .then(response => response.json())
    .then(data => setCandidates(data.cand))
  },[])

  return (
    <HomeContainer>
      <h1>Candidatos</h1>
      {candidates.map((candidate) => {
        return (
          <div key={candidate.n}>
            <p>Número {candidate.n}</p>
            <p>Nome {candidate.nm}</p>
            <p>Partido {candidate.cc}</p>
            <p title={formatNumberCompact(candidate.vap)}>Votos {formatNumber(candidate.vap)}</p>
            <p>{candidate.pvap} %</p>
          </div>
        )
      })}
    </HomeContainer>
  )
}