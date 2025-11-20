import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">Everyday pieces. Honest skincare.</h1>
          <p className="mt-4 text-slate-600 text-lg">Thoughtfully made essentials that feel good, look clean, and last. Fair prices, clear information, no pressure.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/category/clothing" className="rounded-md px-4 py-2 bg-slate-900 text-white hover:bg-slate-800">Shop Clothing</Link>
            <Link to="/category/skincare" className="rounded-md px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50">Shop Skincare</Link>
          </div>
          <ul className="mt-8 text-sm text-slate-600 grid sm:grid-cols-3 gap-3">
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"/>Dermatologist reviewed</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"/>30-day returns</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"/>Secure, private orders</li>
          </ul>
        </div>
        <div className="h-[360px] sm:h-[420px] lg:h-[520px] relative rounded-xl bg-peach-100/60 border border-peach-200">
          <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
