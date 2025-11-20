import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { useParams, Link } from 'react-router-dom';
import { products, getCategory } from '../data/products';

export default function Category() {
  const { slug } = useParams();
  const cat = getCategory(slug);
  const filtered = products.filter(p => p.category === slug);

  if (!cat) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-2xl font-semibold">Category not found</h1>
          <p className="mt-2 text-slate-600">Return to <Link className="underline" to="/">home</Link>.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">{cat.name}</h1>
        <p className="mt-2 text-slate-600">{cat.description}</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </Layout>
  );
}
