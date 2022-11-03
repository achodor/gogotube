import { useSearchParams } from 'react-router-dom';

export default function SearchInput() {
  const [search, setSearch] = useSearchParams();

  const findVideos = (value: string) => {
    setSearch({ q: value });
  };

  return (
    <input
      className="focus:ring-0.5 w-96 rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-2 text-zinc-300 placeholder-zinc-600 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500"
      placeholder="Search"
      onChange={e => findVideos(e.target.value)}
    />
  );
}
