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
      className="input w-full rounded-full lg:w-96"
      name="search"
      placeholder="Search for videos"
      defaultValue={searchParams.get('q') || ''}
      onChange={e => search(e.target.value)}
    />
  );
}
