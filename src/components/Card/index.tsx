import { formatNumber } from "../../utils/formatter";
import { CardContainer } from "./styles";

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
    <CardContainer key={number}>
      <div>
        <h2>{votesInPercent}</h2>
        <p>{formatNumber(votes)}</p>
        <span>VOTOS</span>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
      {/* <p>{party}</p> */}
    </CardContainer>
  );
}
