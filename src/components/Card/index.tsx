import { formatNumber, formatNumberCompact } from "../../utils/formatter";

interface CandidateProps {
  party: string;
  name: string;
  votesInPercent: string;
  votes: number;
  number: string;
}

export function Card({
  name,
  number,
  party,
  votes,
  votesInPercent,
}: CandidateProps) {
  return (
    <div key={number}>
      <p>Número {number}</p>
      <p>Nome {name}</p>
      <p>Partido {party}</p>
      <p title={formatNumberCompact(votes)}>Votos {formatNumber(votes)}</p>
      <p>Porcentagem de votos: {votesInPercent}%</p>

      <hr />
    </div>
  );
}
