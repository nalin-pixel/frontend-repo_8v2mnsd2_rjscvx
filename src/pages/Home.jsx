import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import { products } from '../data/products';

export default function Home() {
  const featured = products.slice(0, 4);
  return (
    <Layout>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Featured</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 text-sm text-slate-600">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-xl p-4 bg-white">
            <h3 className="font-medium">Quality First</h3>
            <p className="mt-2">Materials chosen for comfort and longevity. No gimmicks.</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4 bg-white">
            <h3 className="font-medium">Clear Info</h3>
            <p className="mt-2">Simple descriptions, fair pricing, and honest policies.</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4 bg-white">
            <h3 className="font-medium">Supportive Service</h3>
            <p className="mt-2">Human help when you need it. We keep it straightforward.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
