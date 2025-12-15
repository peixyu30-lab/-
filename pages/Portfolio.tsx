import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'Neon 品牌识别', category: '品牌设计', image: 'https://picsum.photos/id/20/600/400', link: 'https://dribbble.com' },
  { id: 2, title: 'EcoTrack 环保应用', category: 'UI/UX 设计', image: 'https://picsum.photos/id/180/600/800', link: 'https://www.behance.net' },
  { id: 3, title: '极简主义家具', category: '产品设计', image: 'https://picsum.photos/id/366/600/400', link: 'https://www.pinterest.com' },
  { id: 4, title: '抽象波动', category: '数字艺术', image: 'https://picsum.photos/id/13/600/600', link: 'https://www.artstation.com' },
  { id: 5, title: '城市摄影集', category: '摄影', image: 'https://picsum.photos/id/43/600/400', link: 'https://unsplash.com' },
  { id: 6, title: '咖啡馆官网', category: 'Web 开发', image: 'https://picsum.photos/id/431/600/500', link: 'https://github.com' },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const filters = ['全部', 'UI/UX 设计', '品牌设计', '产品设计', '数字艺术', '摄影', 'Web 开发'];

  const filteredProjects = activeFilter === '全部' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === tab 
                ? 'bg-slate-100 text-slate-900' 
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group break-inside-avoid relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-teal-400 transition-colors cursor-pointer"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;