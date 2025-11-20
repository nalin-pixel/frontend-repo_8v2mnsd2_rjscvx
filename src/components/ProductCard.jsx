import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
      <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-4">
        <h3 className="font-medium tracking-tight">{product.title}</h3>
        <p className="mt-1 text-slate-600 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold">${product.price}</span>
          <span className="text-sm text-slate-500">View</span>
        </div>
      </div>
    </Link>
  );
}
