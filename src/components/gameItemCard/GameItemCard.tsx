import { Props } from './typings';

const GameItemCard = (props: Props) => {
  return (
    <div className="game-item-card">
      <h6 className="game-item-card-title">{props.title}</h6>
      <h6 className="game-item-card-publisher">{props.publisher}</h6>
      <h6 className="game-item-card-release-date">{props.releaseDate}</h6>
    </div>
  )
}

export default GameItemCard;