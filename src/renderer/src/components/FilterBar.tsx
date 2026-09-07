import { Platform } from '../types'

interface Props {
  platformFilter: Platform | 'all'
  genreFilter: string
  genres: string[]
  sortBy: 'title' | 'playtime'
  onPlatformChange: (p: Platform | 'all') => void
  onGenreChange: (g: string) => void
  onSortChange: (s: 'title' | 'playtime') => void
}

export function FilterBar({
  platformFilter, genreFilter, genres, sortBy,
  onPlatformChange, onGenreChange, onSortChange
}: Props) {
  return (
    <div className="filter-bar">
      <select value={platformFilter} onChange={(e) => onPlatformChange(e.target.value as Platform | 'all')}>
        <option value="all">Toutes les plateformes</option>
        <option value="steam">Steam</option>
        <option value="epic">Epic Games</option>
      </select>

      <select value={genreFilter} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="all">Tous les genres</option>
        {genres.map((g) => <option key={g} value={g}>{g}</option>)}
      </select>

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value as 'title' | 'playtime')}>
        <option value="title">Trier par titre</option>
        <option value="playtime">Trier par temps de jeu</option>
      </select>
    </div>
  )
}