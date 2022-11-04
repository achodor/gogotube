import { Outlet } from 'react-router';
import { Link, ScrollRestoration } from 'react-router-dom';
import SearchInput from '../components/SearchInput';

export default function Root() {
  return (
    <>
      <header className="fixed top-0 flex h-16 w-full items-center justify-between border-b border-zinc-900 bg-black px-5">
        <Link to="/videos" className="hidden w-36 text-3xl font-extrabold text-zinc-100 lg:block">
          GogoTube
        </Link>
        <SearchInput />
        <div className="hiddne lg:block lg:w-36"></div>
      </header>
      <main className="mt-10 lg:mt-16">
        <ScrollRestoration />
        <Outlet />
      </main>
    </>
  );
}
