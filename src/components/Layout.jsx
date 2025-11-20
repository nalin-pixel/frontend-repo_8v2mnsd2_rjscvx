import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-peach-50 text-slate-800">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-xl">elberyth</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/category/clothing" className="hover:text-slate-900">Clothing</Link>
            <Link to="/category/skincare" className="hover:text-slate-900">Skincare</Link>
            <Link to="/order" className="rounded-md px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800">Order</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-20 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} elberyth. All rights reserved.</p>
          <p className="opacity-80">Transparent, simple shopping. No ads. No tracking.</p>
        </div>
      </footer>
    </div>
  );
}
