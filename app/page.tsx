import { featured, trending, popular, recommendations, continueWatching } from '@/lib/mock-data'
import { Hero, MovieRow, PageShell, ProgressCard } from '@/components/streamflix'

export default function HomePage() {
  return <div className="bg-background"><Hero movie={featured} /><PageShell><div className="space-y-12"><section><div className="mb-4 flex items-end justify-between"><h2 className="text-lg font-semibold sm:text-xl">Continue watching</h2><span className="text-xs text-muted-foreground">2 titles</span></div><div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{continueWatching.map((movie) => <ProgressCard key={movie.id} movie={movie} />)}</div></section><MovieRow title="Trending now" movies={trending} /><MovieRow title="Popular on StreamFlix" movies={popular} /><MovieRow title="Recommended for you" movies={recommendations} /></div></PageShell></div>
}
