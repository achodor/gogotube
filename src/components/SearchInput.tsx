import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchInput() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = useDebouncedCallback(value => {
    navigate({ pathname: '/videos', search: encodeURI(`q=${value}`) });
  }, 300);

  return (
    <input
      className="focus:ring-0.5 w-96 rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-2 text-zinc-300 placeholder-zinc-600 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500"
      placeholder="Search"
      defaultValue={searchParams.get('q') || ''}
      onChange={e => search(e.target.value)}
    />
  );
}
