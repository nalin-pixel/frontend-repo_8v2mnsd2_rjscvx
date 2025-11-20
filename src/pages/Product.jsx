import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../data/products';

export default function Product() {
  const { id } = useParams();
  const product = getProduct(id);

  if (!product) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="mt-2 text-slate-600">Return to <Link className="underline" to="/">home</Link>.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-10 grid lg:grid-cols-2 gap-10">
        <div className="aspect-[4/3] bg-white border border-slate-200 rounded-xl overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{product.title}</h1>
          <p className="mt-2 text-slate-600">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold">${product.price}</p>

          <div className="mt-6">
            <Link to={`/order?product=${product.id}`} className="inline-flex items-center rounded-md px-4 py-2 bg-slate-900 text-white hover:bg-slate-800">Order via Bank Transfer</Link>
          </div>

          <div className="mt-8 text-sm text-slate-600 space-y-2">
            <p>• 30-day returns • Ships in 2-4 business days</p>
            <p>• Secure, private order process</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
