import React from 'react';
import { Download, Mail, Phone, Globe } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: Contact & Skills */}
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-center mb-6">
            <img src="https://picsum.photos/id/64/150/150" alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-800" />
            <h3 className="text-xl font-bold text-white">Yupeixi</h3>
            <p className="text-teal-400">环境设计专业</p>
          </div>
          
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-slate-500" />
              <span>19960035376@163.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-slate-500" />
              <span>19960035376</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={16} className="text-slate-500" />
              <span>yupeixi.design</span>
            </div>
          </div>
          
          <button className="w-full mt-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <Download size={16} /> 下载 PDF 简历
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="font-bold text-white mb-4">专业技能</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>环境艺术设计</span>
                <span>100%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 w-full rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>CAD / SketchUp</span>
                <span>100%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-full rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>3D 渲染 (Lumion)</span>
                <span>100%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 w-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Experience & Bio */}
      <div className="lg:col-span-2 space-y-8">
        {/* Bio Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
           <div className="flex justify-between items-center mb-4 relative z-10">
             <h3 className="text-xl font-bold text-white">关于我</h3>
           </div>
           <p className="text-slate-300 leading-relaxed relative z-10">
             你好，我是 Yupeixi，一名来自大庆师范学院环境设计专业的学生。我热衷于探索空间与人的关系，致力于通过设计创造美观、实用且富有情感的环境。我对待工作一丝不苟，追求卓越，希望能在设计领域不断突破自我。
           </p>
        </div>

        {/* Education & Experience Timeline */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">教育与经历</h3>
          <div className="border-l-2 border-slate-800 pl-8 space-y-8">
            <div className="relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-950 border-4 border-teal-500"></span>
              <h4 className="text-lg font-bold text-white">环境设计专业</h4>
              <p className="text-teal-400 text-sm mb-2">大庆师范学院 • 2022 - 至今</p>
              <p className="text-slate-400 text-sm">主修室内设计、景观规划及环境艺术表现。在校期间积极参与各类设计竞赛与实践项目，成绩优异。</p>
            </div>
            
            <div className="relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-950 border-4 border-indigo-500"></span>
              <h4 className="text-lg font-bold text-white">UI/UX 视觉设计实习生</h4>
              <p className="text-indigo-400 text-sm mb-2">美图公司 • 2025.10 - 2026.03</p>
              <p className="text-slate-400 text-sm">
                参与美图秀秀及相关产品的界面视觉优化与交互设计工作。
                负责运营活动页面的视觉创意输出，协助团队进行用户体验研究与界面迭代，提升了产品的视觉一致性与用户满意度。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;