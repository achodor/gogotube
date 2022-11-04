import { Outlet } from 'react-router';
import { Link, ScrollRestoration, redirect, useNavigate } from 'react-router-dom';
import SearchInput from '../components/SearchInput';

export async function loader() {
  const user = !!localStorage.getItem('user');

  if (!user) {
    return redirect('/login');
  }
}

export default function Root() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <header className="fixed top-0 flex h-16 w-full items-center justify-between gap-4 border-b border-zinc-900 bg-black px-5 lg:gap-0">
        <Link to="/videos" className="hidden w-36 text-3xl font-extrabold text-zinc-100 lg:block">
          GogoTube
        </Link>
        <SearchInput />
        <div className="flex justify-end lg:w-36">
          <button className="text-rose-500 hover:text-rose-700" onClick={signOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        </div>
      </header>
      <main className="mt-10 lg:mt-16">
        <ScrollRestoration />
        <Outlet />
      </main>
    </>
  );
}
