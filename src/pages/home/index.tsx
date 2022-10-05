import { useEffect, useState } from "react";
import { HomeContainer } from "./styles";
import { apiTSE } from "../../lib/axios/apiTSE";
import { Card } from "../../components/Card";

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

function replyDataKey(data: CandidateJSON[]): Candidate[] {
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

  async function getData() {
    const response = await apiTSE.get(
      "/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    );
    const { cand } = response.data;

    const candidatesList = replyDataKey(cand);

    setCandidates(candidatesList);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomeContainer>
      <h1>PRESIDENTES</h1>
      <div>
        {candidates.map(({ name, number, party, votes, votesInPercent }) => {
          return (
            <Card
              name={name}
              number={number}
              party={party}
              votes={votes}
              votesInPercent={votesInPercent}
            />
          );
        })}
      </div>
    </HomeContainer>
  );
}
