import { Game } from '../type'

interface Props {
  game: Game
}

export function GameCard({ game }: Props): React.JSX.Element {  
    return (
    <div className="game-card">
      <img src={game.coverUrl} alt={game.title} className="game-card__cover" />
      <div className="game-card__info">
        <h3 className="game-card__title">{game.title}</h3>
        <div className="game-card__meta">
          <span className={`badge badge--${game.platform}`}>
            {game.platform === 'steam' ? 'Steam' : 'Epic'}
          </span>
          <span className="game-card__genre">{game.genre}</span>
        </div>
        <p className="game-card__playtime">{game.playtimeHours} h jouées</p>
      </div>
    </div>
  )
}