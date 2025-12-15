import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Palette, 
  MapPin, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X,
  Github,
  Linkedin,
  Mail,
  Send
} from 'lucide-react';
import { PageRoute } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { label: '首页概览', path: PageRoute.HOME, icon: <Home size={18} /> },
  { label: '个人简历', path: PageRoute.RESUME, icon: <Briefcase size={18} /> },
  { label: '作品展示', path: PageRoute.PORTFOLIO, icon: <Palette size={18} /> },
  { label: '家乡创业', path: PageRoute.HOMETOWN, icon: <MapPin size={18} /> },
  { label: '电商橱窗', path: PageRoute.ECOMMERCE, icon: <ShoppingBag size={18} /> },
  { label: '兴趣爱好', path: PageRoute.HOBBIES, icon: <Heart size={18} /> },
];

const Footer: React.FC = () => (
  <footer className="mt-24 border-t border-slate-800/60 pt-12 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent mb-4">
          YPXWebsite 作品集
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
          致力于探索设计与技术的边界。这是一个展示我个人成长、专业技能以及对家乡与生活热爱的综合性数字空间。
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-4">快速链接</h4>
        <ul className="space-y-2 text-sm text-slate-400">
          <li><a href="#/portfolio" className="hover:text-teal-400 transition-colors">设计作品</a></li>
          <li><a href="#/resume" className="hover:text-teal-400 transition-colors">下载简历</a></li>
          <li><a href="#/hometown" className="hover:text-teal-400 transition-colors">创业计划</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">保持联系</h4>
        <div className="space-y-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>hello@ypx-design.cn</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all">
              <Github size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
              <Send size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
      <p>&copy; {new Date().getFullYear()} Alex Chen. 保留所有权利。</p>
      <div className="flex gap-6">
        <span>隐私政策</span>
        <span>使用条款</span>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    const item = navItems.find(i => i.path === location.pathname);
    return item ? item.label : 'YPXWebsite';
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden selection:bg-teal-500 selection:text-white font-sans">
      
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-3 shrink-0">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-400 to-indigo-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-teal-500/20">
                 Y
               </div>
               <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent hidden sm:block">
                  YPXWebsite
               </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-slate-800 text-teal-400 shadow-sm shadow-teal-900/20'
                        : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button & Profile (Tiny) */}
            <div className="flex items-center gap-4">
               <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-800">
                  <div className="text-right hidden lg:block">
                    <p className="text-xs font-semibold text-slate-200">Alex Chen</p>
                    <p className="text-[10px] text-slate-500 uppercase">Designer</p>
                  </div>
                  <img 
                    src="https://picsum.photos/id/64/100/100" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full border border-slate-700"
                  />
               </div>

               <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
            <nav className="px-4 pt-2 pb-6 space-y-1">
               {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-800/50 text-teal-400'
                        : 'text-slate-400 hover:text-slate-100'
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area - Added pt-16 for fixed header */}
      <main className="flex-1 w-full pt-20 overflow-y-auto relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in flex flex-col min-h-[calc(100vh-80px)]">
           {/* Header for Page Title (Desktop only, subtle) */}
           <div className="hidden md:flex justify-between items-end mb-8 border-b border-slate-800/50 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">{getPageTitle()}</h2>
              </div>
              <div className="text-right text-xs text-slate-600 font-mono">
                STATUS: ONLINE
              </div>
           </div>
           
           <div className="flex-1">
             {children}
           </div>

           <Footer />
        </div>
      </main>
    </div>
  );
};