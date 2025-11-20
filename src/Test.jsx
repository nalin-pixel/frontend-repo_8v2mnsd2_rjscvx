import { Link } from 'react-router-dom';
import Layout from './components/Layout';

export default function Test(){
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-semibold">Routing Test</h1>
        <p className="mt-2 text-slate-600">Quick links:</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link className="underline" to="/">Home</Link>
          <Link className="underline" to="/category/clothing">Clothing</Link>
          <Link className="underline" to="/category/skincare">Skincare</Link>
          <Link className="underline" to="/product/tee-classic">Product</Link>
          <Link className="underline" to="/order">Order</Link>
        </div>
      </div>
    </Layout>
  );
}
