import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { ArrowRight, Star, Activity, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-16">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-wide mb-6 border border-teal-500/20">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            求职中 / Open to Work
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            设计 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">数字交互</span> 的未来。
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            我是 Alex，一名专注于 UI/UX 设计、品牌塑造和数字创业的跨学科设计系学生。致力于用设计解决问题，创造价值。
          </p>
          <div className="flex gap-4">
            <Link 
              to={PageRoute.PORTFOLIO}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              浏览作品 <ArrowRight size={18} />
            </Link>
            <Link 
              to={PageRoute.RESUME}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700"
            >
              我的简历
            </Link>
          </div>
        </div>
      </div>

      {/* Grid Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat Card */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
            <Star size={20} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">12+</h3>
          <p className="text-slate-500 text-sm">获得设计奖项</p>
        </div>
        
        {/* Stat Card */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
            <Activity size={20} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">24</h3>
          <p className="text-slate-500 text-sm">完成项目数量</p>
        </div>

        {/* Quick Link: Hometown */}
        <Link to={PageRoute.HOMETOWN} className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-800">
          <img src="https://picsum.photos/id/404/600/300" alt="Hometown" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full">
            <div className="flex items-center gap-2 text-teal-400 mb-2">
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">家乡创业聚焦</span>
            </div>
            <h3 className="text-xl font-bold text-white">传统与创新的融合</h3>
            <p className="text-slate-400 text-sm mt-1">探索家乡特色产品与现代商业的结合。</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;