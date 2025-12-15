import React from 'react';
import { MapPin } from 'lucide-react';

const Hometown: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400">
            <MapPin size={18} />
            <span className="font-semibold uppercase tracking-wider text-sm">中国 · 四川</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">锦绣天府：非遗文化创业</h2>
          <p className="text-slate-400 leading-relaxed">
            我的家乡四川拥有“天府之国”的美誉，不仅有可爱的大熊猫，更有蜀绣、竹编等璀璨的非物质文化遗产。
            该创业项目致力于将四川传统的非遗工艺与现代设计理念、电商平台相结合，打造具有巴蜀特色的新国潮品牌，让传统工艺走进现代生活。
          </p>
        </div>
        <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden">
          <img src="https://picsum.photos/id/235/800/600" alt="Sichuan Scenery" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Featured Startup Products */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">特色创业产品</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 border border-slate-800">
                <img src="https://picsum.photos/id/439/600/400" alt="Shu Embroidery" className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-500"/>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">新派蜀绣文创</h4>
              <p className="text-slate-500 text-sm mt-1">融合熊猫元素与传统针法，打造年轻化的国潮礼品。</p>
           </div>
           
           <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 border border-slate-800">
                <img src="https://picsum.photos/id/514/600/400" alt="Bamboo Craft" className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-500"/>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">生态竹编家居</h4>
              <p className="text-slate-500 text-sm mt-1">取材四川丰富的竹资源，结合极简设计，环保与美学并重。</p>
           </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">
         <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-1">20+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">非遗传承人</div>
         </div>
         <div className="text-center border-l border-slate-800">
            <div className="text-3xl font-bold text-indigo-400 mb-1">¥150万</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">助农增收</div>
         </div>
         <div className="text-center border-l border-slate-800">
            <div className="text-3xl font-bold text-white mb-1">2023</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">项目启动</div>
         </div>
      </div>
    </div>
  );
};

export default Hometown;