import React from 'react';
import { Camera, Music, Plane, Gamepad2 } from 'lucide-react';

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      title: "摄影",
      icon: <Camera size={32} />,
      desc: "捕捉城市景观和街头生活。",
      color: "from-pink-500 to-rose-500",
      img: "https://picsum.photos/id/91/600/400"
    },
    {
      title: "音乐制作",
      icon: <Music size={32} />,
      desc: "周末喜欢在 Ableton Live 里制作 Lo-fi 节拍。",
      color: "from-violet-500 to-purple-500",
      img: "https://picsum.photos/id/145/600/400"
    },
    {
      title: "旅行",
      icon: <Plane size={32} />,
      desc: "已经走过10个国家。下一站：冰岛。",
      color: "from-blue-500 to-cyan-500",
      img: "https://picsum.photos/id/1036/600/400"
    },
    {
      title: "游戏",
      icon: <Gamepad2 size={32} />,
      desc: "独立游戏和氛围感强的 RPG 爱好者。",
      color: "from-emerald-500 to-green-500",
      img: "https://picsum.photos/id/96/600/400"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer border border-slate-800">
            {/* Background Image */}
            <img 
              src={hobby.img} 
              alt={hobby.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${hobby.color} opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90`}></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="text-white/80 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {hobby.icon}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{hobby.title}</h3>
                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {hobby.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Blog snippet */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-4">最近的痴迷</h3>
        <p className="text-slate-400 mb-4">
          最近我深深沉迷于使用 p5.js 进行生成艺术创作。
          编写代码来产生有机的、不可预测的视觉输出，这种感觉非常令人满足。
        </p>
        <span className="text-xs text-slate-500 uppercase tracking-widest">发布于 2 天前</span>
      </div>
    </div>
  );
};

export default Hobbies;