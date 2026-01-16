import {
  Code,
  Palette,
  Type,
  Image as ImageIcon,
  FileJson,
  Link,
  QrCode,
  Search,
  Shield,
  Zap
} from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
}

const TOOLS: Tool[] = [
  {
    id: '1',
    title: 'JSON Formatter',
    description: 'Format, validate, and minify your JSON data with ease.',
    icon: FileJson,
    category: 'Development'
  },
  {
    id: '2',
    title: 'Color Picker',
    description: 'Generate color palettes and convert between HEX, RGB, and HSL.',
    icon: Palette,
    category: 'Design'
  },
  {
    id: '3',
    title: 'Font Tester',
    description: 'Preview and compare different Google Fonts in real-time.',
    icon: Type,
    category: 'Design'
  },
  {
    id: '4',
    title: 'Image Optimizer',
    description: 'Compress and resize images without losing quality.',
    icon: ImageIcon,
    category: 'Media'
  },
  {
    id: '5',
    title: 'URL Encoder/Decoder',
    description: 'Encode or decode URLs for safe transmission.',
    icon: Link,
    category: 'Development'
  },
  {
    id: '6',
    title: 'QR Code Generator',
    description: 'Create custom QR codes for links, text, and more.',
    icon: QrCode,
    category: 'Utility'
  },
  {
    id: '7',
    title: 'HTML Minifier',
    description: 'Minify your HTML code to improve page load speed.',
    icon: Code,
    category: 'Development'
  },
  {
    id: '8',
    title: 'Meta Tag Generator',
    description: 'Generate SEO-friendly meta tags for your website.',
    icon: Search,
    category: 'SEO'
  },
  {
    id: '9',
    title: 'Password Generator',
    description: 'Create strong, secure passwords with custom settings.',
    icon: Shield,
    category: 'Security'
  },
];

export function Toolbox() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Website Toolbox</h2>
          <p className="text-slate-500 mt-1">Essential tools for developers and designers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((tool) => (
          <div
            key={tool.id}
            className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <tool.icon size={24} />
              </div>
              <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
                {tool.category}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.title}</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">{tool.description}</p>

            <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">
              <Zap size={16} />
              Use Tool
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
           <h3 className="text-xl font-bold mb-2">Need a custom tool?</h3>
           <p className="text-indigo-100 max-w-lg">We are constantly adding new tools to our collection. Let us know what you need and we will build it for you.</p>
        </div>
        <button className="whitespace-nowrap px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg">
           Request a Tool
        </button>
      </div>
    </div>
  );
}
