import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Plus } from 'lucide-react';

const products: Product[] = [
  { id: 1, name: '极简台灯', price: 89.00, category: '家居', image: 'https://picsum.photos/id/1060/400/400' },
  { id: 2, name: '复古胶片相机', price: 250.00, category: '摄影', image: 'https://picsum.photos/id/250/400/400' },
  { id: 3, name: '手工皮革速写本', price: 45.00, category: '文具', image: 'https://picsum.photos/id/364/400/400' },
  { id: 4, name: '无线降噪耳机', price: 120.00, category: '科技', image: 'https://picsum.photos/id/804/400/400' },
];

const Ecommerce: React.FC = () => {
  return (
    <div>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 mb-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <h2 className="text-3xl font-bold text-white mb-2 relative z-10">春季精选系列</h2>
        <p className="text-teal-50 relative z-10 mb-6">为现代创意人士精心挑选的设计好物。</p>
        <button className="px-6 py-2 bg-white text-teal-600 font-bold rounded-full relative z-10 hover:shadow-lg transition-shadow">
          立即选购
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-teal-500/50 transition-colors group">
            <div className="relative aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <button className="absolute bottom-3 right-3 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-400 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <Plus size={20} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="text-xs text-slate-500 mb-1 uppercase">{product.category}</div>
              <h3 className="font-semibold text-white truncate">{product.name}</h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-teal-400 font-bold">${product.price.toFixed(2)}</span>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;