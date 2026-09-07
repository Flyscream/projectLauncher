import { useMemo, useState } from 'react'
import { mockGames } from './mockGames'
import { Platform } from './type'
import { GameCard } from './components/GameCard'
import { FilterBar } from './components/FilterBar'
import './App.css'

function App() {
  const [platformFilter, setPlatformFilter] = useState<Platform | 'all'>('all')
  const [genreFilter, setGenreFilter] = useState('all')
  const [sortBy, setSortBy] = useState<'title' | 'playtime'>('title')

  const genres = useMemo(
    () => Array.from(new Set(mockGames.map((g) => g.genre))),
    []
  )

  const filteredGames = useMemo(() => {
    let result = mockGames
    if (platformFilter !== 'all') result = result.filter((g) => g.platform === platformFilter)
    if (genreFilter !== 'all') result = result.filter((g) => g.genre === genreFilter)

    return [...result].sort((a, b) =>
      sortBy === 'title'
        ? a.title.localeCompare(b.title)
        : b.playtimeHours - a.playtimeHours
    )
  }, [platformFilter, genreFilter, sortBy])

  return (
    <div className="app">
      <header className="app__header">
        <h1>GameLib</h1>
      </header>

      <FilterBar
        platformFilter={platformFilter}
        genreFilter={genreFilter}
        genres={genres}
        sortBy={sortBy}
        onPlatformChange={setPlatformFilter}
        onGenreChange={setGenreFilter}
        onSortChange={setSortBy}
      />

      <div className="game-grid">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

export default App