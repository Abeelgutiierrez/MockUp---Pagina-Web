export const contact = {
  name: 'Fashion Texa',
  address: ['House 11, Road 5', 'Sector 7, Uttara', 'Dhaka, Bangladesh · 1230'],
  phone: '+8801719370201',
  email: 'sazzad.muksud@gmail.com',
};

export const navigation = [
  { label: 'Company', to: '/company' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Products', to: '/products' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Contact', to: '/contact' },
];

export const services = [
  ['01', 'Product development', 'Translating buyer direction into a structured development path, from initial brief to sampling.'],
  ['02', 'Merchandising', 'One clear point of coordination across product, supplier and production communication.'],
  ['03', 'Supplier coordination', 'Matching each brief with suitable manufacturing resources from the company network.'],
  ['04', 'Production management', 'Following order progress and aligning milestones with the agreed delivery plan.'],
  ['05', 'Quality control', 'A quality-led approach to specifications, workmanship and production follow-up.'],
  ['06', 'Shipping & documentation', 'Support for shipping coordination and export documentation through final handover.'],
] as const;

export const process = ['Brief & product direction', 'Development & sampling', 'Supplier alignment', 'Production follow-up', 'Quality coordination', 'Shipment support'];
