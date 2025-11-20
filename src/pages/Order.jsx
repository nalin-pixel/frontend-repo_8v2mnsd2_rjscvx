import Layout from '../components/Layout';
import { useSearchParams } from 'react-router-dom';
import { getProduct, products } from '../data/products';
import { useState } from 'react';

export default function Order() {
  const [params] = useSearchParams();
  const initialProductId = params.get('product') || products[0].id;
  const [form, setForm] = useState({
    productId: initialProductId,
    name: '',
    email: '',
    address: '',
    quantity: 1,
    notes: ''
  });

  const selected = getProduct(form.productId);

  function update(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'quantity' ? Number(value) : value }));
  }

  function submit(e) {
    e.preventDefault();
    alert(`Thanks, ${form.name}! Your order request for ${form.quantity} × ${selected.title} has been received.\n\nNext step: Follow the bank transfer instructions shown below to complete your purchase.`);
  }

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Order</h1>
        <p className="mt-2 text-slate-600">Fill out the form and finalize via bank transfer. You'll also get a confirmation email from us after we review your request.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4 bg-white border border-slate-200 rounded-xl p-6">
          <label className="grid gap-1 text-sm">
            <span className="text-slate-700">Product</span>
            <select name="productId" className="border rounded-md px-3 py-2" value={form.productId} onChange={update}>
              {products.map(p => <option key={p.id} value={p.id}>{p.title} — ${p.price}</option>)}
            </select>
          </label>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-1 text-sm">
              <span className="text-slate-700">Full name</span>
              <input name="name" required className="border rounded-md px-3 py-2" value={form.name} onChange={update} />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-slate-700">Email</span>
              <input name="email" type="email" required className="border rounded-md px-3 py-2" value={form.email} onChange={update} />
            </label>
          </div>

          <label className="grid gap-1 text-sm">
            <span className="text-slate-700">Shipping address</span>
            <textarea name="address" required className="border rounded-md px-3 py-2" rows="3" value={form.address} onChange={update} />
          </label>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-1 text-sm">
              <span className="text-slate-700">Quantity</span>
              <input name="quantity" type="number" min="1" className="border rounded-md px-3 py-2" value={form.quantity} onChange={update} />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-slate-700">Notes (optional)</span>
              <input name="notes" className="border rounded-md px-3 py-2" value={form.notes} onChange={update} />
            </label>
          </div>

          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 bg-slate-900 text-white hover:bg-slate-800">Submit Order Request</button>
        </form>

        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold">Bank Transfer Instructions</h2>
          <ol className="mt-3 text-sm text-slate-700 list-decimal pl-5 space-y-2">
            <li>Send the total amount of <strong>${selected.price * form.quantity}</strong> to:<br/>Account Name: Elberyth Co.<br/>IBAN: DE89 3704 0044 0532 0130 00<br/>BIC: COLSDE33</li>
            <li>Use your email as the transfer reference.</li>
            <li>Reply to our confirmation email with the transfer receipt.</li>
            <li>We ship within 2-4 business days after confirming your transfer.</li>
          </ol>
          <p className="mt-4 text-sm text-slate-600">Questions? Reply to your confirmation email anytime. We keep support human and simple.</p>
        </div>
      </section>
    </Layout>
  );
}
