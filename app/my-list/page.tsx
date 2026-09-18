import { movies } from '@/lib/mock-data'
import { MovieCard, PageShell, ProfileMenu } from '@/components/streamflix'
export default function MyListPage() { return <PageShell><div className="space-y-8"><ProfileMenu /><div><h1 className="text-3xl font-semibold tracking-tight">My list</h1><p className="mt-2 text-sm text-muted-foreground">Your saved titles, ready when you are.</p></div><div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-5">{[movies[1], movies[3], movies[6]].map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div></div></PageShell> }
