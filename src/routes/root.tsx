import { Outlet } from 'react-router';
import SearchInput from '../components/SearchInput';

export default function Root() {
  return (
    <>
      <header className="flex items-center justify-between border-b border-zinc-900 py-6 px-5">
        <div className="w-36 text-3xl font-extrabold">GogoTube</div>
        <SearchInput />
        <div className="w-36"></div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
