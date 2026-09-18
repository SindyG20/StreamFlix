export type Movie = {
  id: string
  title: string
  tagline: string
  description: string
  genre: string
  year: number
  duration: string
  rating: number
  maturity: string
  director: string
  cast: string[]
  poster: string
  backdrop: string
  progress?: number
}

const image = (id: string, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const movies: Movie[] = [
  { id: 'night-signal', title: 'Night Signal', tagline: 'Every city keeps a secret.', description: 'When a radio astronomer intercepts a signal that should not exist, she is pulled into a race across a sleepless city to uncover who sent it — and why it knows her name.', genre: 'Sci-Fi Thriller', year: 2025, duration: '2h 08m', rating: 8.7, maturity: '16+', director: 'Mara Voss', cast: ['Elena Park', 'Jon Bell', 'Kian Cole'], poster: image('photo-1519608487953-e999c86e7455', 500), backdrop: image('photo-1519608487953-e999c86e7455', 1600) },
  { id: 'the-last-orbit', title: 'The Last Orbit', tagline: 'Home is a direction.', description: 'A lone pilot wakes from cryosleep to find her destination missing from every star chart.', genre: 'Space Drama', year: 2024, duration: '1h 56m', rating: 8.4, maturity: '13+', director: 'Ari Lennox', cast: ['Mina Ortiz', 'Theo Jameson'], poster: image('photo-1446776811953-b23d57bd21aa', 500), backdrop: image('photo-1446776811953-b23d57bd21aa', 1600) },
  { id: 'velvet-city', title: 'Velvet City', tagline: 'The night belongs to everyone.', description: 'An ambitious photographer and a retired detective collide in a city where every shadow has a price.', genre: 'Crime Drama', year: 2023, duration: '2h 14m', rating: 8.1, maturity: '16+', director: 'Noah Vale', cast: ['Sera Kim', 'Rafael King'], poster: image('photo-1519501025264-65ba15a82390', 500), backdrop: image('photo-1519501025264-65ba15a82390', 1600) },
  { id: 'still-water', title: 'Still Water', tagline: 'Some things surface.', description: 'A marine biologist returns to her island home after a decade away and finds the tide carrying impossible evidence.', genre: 'Mystery', year: 2025, duration: '1h 48m', rating: 7.9, maturity: '13+', director: 'Lena Ward', cast: ['Aya Stone', 'Marc Ellis'], poster: image('photo-1500534623283-312aade485b7', 500), backdrop: image('photo-1500534623283-312aade485b7', 1600) },
  { id: 'afterglow', title: 'Afterglow', tagline: 'Find your way back.', description: 'Two strangers share one extraordinary night and make a promise neither expected to keep.', genre: 'Romance', year: 2022, duration: '1h 42m', rating: 7.6, maturity: '13+', director: 'Inez Bell', cast: ['Iris Cole', 'Miles Hart'], poster: image('photo-1517841905240-472988babdf9', 500), backdrop: image('photo-1517841905240-472988babdf9', 1600), progress: 64 },
  { id: 'wild-quiet', title: 'Wild Quiet', tagline: 'Listen closely.', description: 'A visual journey through the last untouched forests and the people who protect them.', genre: 'Documentary', year: 2024, duration: '1h 28m', rating: 8.8, maturity: 'All', director: 'Owen Reed', cast: ['Narrated by Aya Stone'], poster: image('photo-1448375240586-882707db888b', 500), backdrop: image('photo-1448375240586-882707db888b', 1600) },
  { id: 'blue-hour', title: 'Blue Hour', tagline: 'The truth changes color.', description: 'A forensic painter sees a crime before it happens.', genre: 'Mystery', year: 2021, duration: '1h 51m', rating: 7.8, maturity: '16+', director: 'Pia Sol', cast: ['Nia Wells', 'Cory Dean'], poster: image('photo-1511497584788-876760111969', 500), backdrop: image('photo-1511497584788-876760111969', 1600) },
]

export const featured = movies[0]
export const trending = movies.slice(1, 5)
export const popular = [movies[2], movies[5], movies[3], movies[6]]
export const recommendations = [movies[4], movies[1], movies[6], movies[2]]
export const continueWatching = movies.filter((movie) => movie.progress)

export function getMovie(id: string) {
  return movies.find((movie) => movie.id === id) ?? featured
}

export const api = {
  async getMovies() { return movies },
  async getMovieById(id: string) { return getMovie(id) },
  async searchMovies(query: string) { return movies.filter((movie) => `${movie.title} ${movie.genre}`.toLowerCase().includes(query.toLowerCase())) },
  async getWatchlist() { return [movies[1], movies[3], movies[6]] },
  async getContinueWatching() { return continueWatching },
}
