import { FormEvent, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

export async function loader() {
  const user = !!localStorage.getItem('user');

  if (user) {
    return redirect('/videos');
  }
}

export default function Login() {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('user', mail);
    navigate('/videos');
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-full flex-col items-center rounded-xl px-10 py-20 sm:max-w-md sm:border-2 sm:border-zinc-800 sm:bg-zinc-900">
        <Link to="/videos" className="mb-2 flex items-center text-xs text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          Back to videos
        </Link>
        <Link to="/videos" className="my-4 text-3xl font-extrabold text-zinc-100">
          GogoTube
        </Link>
        <form className="flex w-full max-w-xs flex-col" onSubmit={e => login(e)}>
          <input
            className="input mb-6 rounded-md"
            type="email"
            placeholder="E-mail"
            onChange={e => setMail(e.target.value)}
            required
          />
          <button className="rounded-lg bg-rose-500 py-2.5 text-sm font-semibold text-rose-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
