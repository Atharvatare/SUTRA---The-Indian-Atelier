export interface Product {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Jackets' | 'Sweatshirts' | 'Footwear';
  price: number;
  material: string;
  sizes: string[];
  image: string;
  description: string;
  specs: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: 'm-1',
    name: 'Handspun Khadi Kurta',
    category: 'Men',
    price: 3499,
    material: '100% Handspun Khadi Cotton',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    description: 'A symbol of self-reliance and heritage. Breathable, textured, and timeless.',
    specs: {
      'Weave': 'Handloom',
      'Fit': 'Regular Straight',
      'Origin': 'Wardha, Maharashtra',
      'Care': 'Hand wash with mild detergent'
    }
  },
  {
    id: 'w-1',
    name: 'Chanderi Silk Overlay',
    category: 'Women',
    price: 8999,
    material: 'Silk Cotton Blend',
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    description: 'Sheer elegance featuring traditional zari borders and a lightweight drape.',
    specs: {
      'Craft': 'Traditional Chanderi',
      'Zari': 'Tested Gold Zari',
      'Origin': 'Chanderi, Madhya Pradesh',
      'Care': 'Dry clean only'
    }
  },
  {
    id: 'j-1',
    name: 'Nehru Technical Vest',
    category: 'Jackets',
    price: 5999,
    material: 'Recycled Poly-Wool Blend',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    description: 'A modern take on the classic Bandi. Structured, sharp, and versatile.',
    specs: {
      'Style': 'Mandarin Collar',
      'Lining': 'Organic Cotton',
      'Buttons': 'Hand-carved Wood',
      'Origin': 'Jaipur, Rajasthan'
    }
  },
  {
    id: 's-1',
    name: 'Indigo Dabu Hoodie',
    category: 'Sweatshirts',
    price: 4299,
    material: 'Heavyweight French Terry',
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1598124838120-5d02bd3317c3?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-blocked using the ancient Dabu mud-resist technique and natural indigo.',
    specs: {
      'Dye': 'Natural Indigo',
      'Print': 'Hand-block Dabu',
      'Origin': 'Akola, Rajasthan',
      'Care': 'Wash separately (Bleeds naturally)'
    }
  },
  {
    id: 'f-1',
    name: 'Modern Kolhapuri Mule',
    category: 'Footwear',
    price: 4800,
    material: 'Vegetable Tanned Leather',
    sizes: ['7', '8', '9', '10', '11'],
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=800',
    description: 'The traditional Kolhapuri re-imagined for the global citizen with a cushioned sole.',
    specs: {
      'Leather': 'Veg-Tanned Buff',
      'Sole': 'TPR with Leather Welt',
      'Construction': 'Hand-braided Straps',
      'Origin': 'Kolhapur, Maharashtra'
    }
  },
  {
    id: 'm-2',
    name: 'Ikat Tailored Trousers',
    category: 'Men',
    price: 4500,
    material: 'Pochampally Ikat Cotton',
    sizes: ['30', '32', '34', '36'],
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800',
    description: 'Geometric precision meets artisanal craft. Tailored for a sharp, modern fit.',
    specs: {
      'Weave': 'Double Ikat',
      'Mill': 'Pochampally Handloom',
      'Hardware': 'Sustainable Corozo',
      'Origin': 'Telangana'
    }
  },
  {
    id: 'w-2',
    name: 'Banarasi Brocade Blazer',
    category: 'Women',
    price: 15500,
    material: 'Katan Silk with Zari',
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1610030469668-93530c17b58f?auto=format&fit=crop&q=80&w=800',
    description: 'A statement piece blending the opulence of Varanasi with contemporary tailoring.',
    specs: {
      'Motif': 'Ashali Buti',
      'Lining': 'Silk Satin',
      'Origin': 'Varanasi, Uttar Pradesh',
      'Care': 'Dry clean only'
    }
  },
  {
    id: 'j-2',
    name: 'Kantha Work Bomber',
    category: 'Jackets',
    price: 7500,
    material: 'Upcycled Vintage Cotton',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800',
    description: 'Each piece is unique, featuring intricate hand-running stitches by rural artisans.',
    specs: {
      'Stitch': 'Kantha Hand-stitch',
      'Sustainability': 'Upcycled Textiles',
      'Origin': 'Shantiniketan, West Bengal',
      'Weight': 'Medium'
    }
  }
];
