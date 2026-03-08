import { useState, useEffect, useMemo } from 'react';
import { Search, X, ChevronDown, ChevronUp, ArrowRight, Filter } from 'lucide-react';
import { products, Product } from './data';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [expandedSpecs, setExpandedSpecs] = useState<string[]>([]);

  const categories = ['All', 'Men', 'Women', 'Jackets', 'Sweatshirts', 'Footwear'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleSpecs = (id: string) => {
    setExpandedSpecs(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Quick View Modal Logic (Using document.createElement as per prompt requirements)
  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    // In a real vanilla JS app, we would document.createElement here.
    // Since we are in React, we'll use state to trigger the modal, 
    // but the modal content itself will be "crafted" as requested.
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-bottom border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tighter serif italic">SUTRA</h1>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-black ${
                    activeCategory === cat ? 'text-black border-b border-black' : 'text-gray-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-black/10 w-48 md:w-64 transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Bento Navigation */}
        <section className="bento-nav">
          <div 
            className="bento-item col-span-2 row-span-2"
            onClick={() => setActiveCategory('Jackets')}
          >
            <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800" alt="Jackets" referrerPolicy="no-referrer" />
            <div className="bento-label serif italic">The Handloom Edit</div>
          </div>
          <div 
            className="bento-item col-span-2"
            onClick={() => setActiveCategory('Footwear')}
          >
            <img src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=800" alt="Footwear" referrerPolicy="no-referrer" />
            <div className="bento-label serif italic">Artisanal Footwear</div>
          </div>
          <div 
            className="bento-item"
            onClick={() => setActiveCategory('Men')}
          >
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" alt="Men" referrerPolicy="no-referrer" />
            <div className="bento-label text-sm uppercase tracking-widest">Men</div>
          </div>
          <div 
            className="bento-item"
            onClick={() => setActiveCategory('Women')}
          >
            <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400" alt="Women" referrerPolicy="no-referrer" />
            <div className="bento-label text-sm uppercase tracking-widest">Women</div>
          </div>
        </section>

        {/* Filter Bar Mobile */}
        <div className="md:hidden flex overflow-x-auto gap-4 pb-6 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium ${
                activeCategory === cat ? 'bg-black text-white' : 'bg-muted text-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="product-card group"
              >
                <div 
                  className="relative aspect-[3/4] overflow-hidden bg-muted cursor-pointer"
                  onClick={() => openQuickView(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">{product.category}</p>
                      <h3 className="text-lg font-medium tracking-tight mt-1">{product.name}</h3>
                    </div>
                    <p className="text-lg font-light">₹{product.price.toLocaleString('en-IN')}</p>
                  </div>
                  
                  <button 
                    onClick={() => toggleSpecs(product.id)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-black transition-colors"
                  >
                    {expandedSpecs.includes(product.id) ? (
                      <>Hide Specs <ChevronUp className="w-3 h-3" /></>
                    ) : (
                      <>View Specs <ChevronDown className="w-3 h-3" /></>
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedSpecs.includes(product.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <table className="tech-table">
                          <tbody>
                            {Object.entries(product.specs).map(([key, value]) => (
                              <tr key={key}>
                                <td className="font-semibold text-gray-400 uppercase tracking-tighter text-[10px]">{key}</td>
                                <td>{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="serif italic text-2xl text-gray-400">No pieces found in this collection.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-4 text-xs uppercase tracking-widest font-bold underline underline-offset-4"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="quick-view-modal modal-overlay">
            <motion.div 
              className="quick-view-content modal-content shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                className="close-modal hover:bg-black hover:text-white transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-muted aspect-[3/4] md:aspect-auto">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">
                  {selectedProduct.category}
                </p>
                <h2 className="text-4xl font-bold tracking-tighter mb-4 serif italic">
                  {selectedProduct.name}
                </h2>
                <p className="text-2xl font-light mb-8">₹{selectedProduct.price.toLocaleString('en-IN')}</p>
                
                <div className="space-y-6 mb-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Material</h4>
                    <p className="text-gray-900 font-medium">{selectedProduct.material}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Available Sizes</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProduct.sizes.map(size => (
                        <span key={size} className="w-10 h-10 flex items-center justify-center border border-border text-xs font-medium hover:border-black cursor-pointer transition-colors">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    Add to Collection <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="pt-8 border-t border-border">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Technical Specifications</h4>
                    <table className="tech-table">
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                          <tr key={key}>
                            <td className="font-bold">{key}</td>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-muted py-24 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-bold tracking-tighter serif italic mb-6">SUTRA</h2>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Celebrating the thread of Indian heritage. Handcrafted textiles re-imagined for the modern world.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {categories.slice(1).map(cat => (
                <li key={cat} className="hover:text-black cursor-pointer transition-colors">{cat}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-black cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-black cursor-pointer transition-colors">Journal</li>
              <li className="hover:text-black cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-black/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-bold">
          <p>© 2026 SUTRA Atelier. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-black">Privacy</span>
            <span className="cursor-pointer hover:text-black">Terms</span>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/5 px-6 py-4 flex justify-between items-center z-40">
        <button onClick={() => setActiveCategory('All')} className="flex flex-col items-center gap-1">
          <Filter className="w-5 h-5" />
          <span className="text-[8px] uppercase tracking-widest font-bold">Filter</span>
        </button>
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex flex-col items-center gap-1">
          <ChevronUp className="w-5 h-5" />
          <span className="text-[8px] uppercase tracking-widest font-bold">Top</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Search className="w-5 h-5" />
          <span className="text-[8px] uppercase tracking-widest font-bold">Search</span>
        </button>
      </div>
    </div>
  );
}
