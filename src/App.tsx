/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Download, Mail, MapPin, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// --- Types ---
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  detailImages?: string[];
  fullDescription?: React.ReactNode;
}

interface Activity {
  title: string;
  description: string;
  image: string;
  video?: string;
  videos?: { title: string; url: string; }[];
}

// --- Data ---
const projects: Project[] = [
  {
    title: "梦到（꾸며)",
    category: "数字交互体验 (UX Design)",
    description: "基于 AI 视觉与 Web3 技术的梦境社交系统。解决醒后遗忘痛点，集成 AI 可视化与 NFT 版权保护。",
    image: "public/mengdao.png",
    detailImages: [
      "public/mengdao/mengxq2-1.webp", "public/mengdao/mengxq2-2.webp", "public/mengdao/mengxq2-3.webp",
      "public/mengdao/mengxq2-4.webp", "public/mengdao/mengxq2-5.webp", "public/mengdao/mengxq2-6.webp",
      "public/mengdao/mengxq2-7.webp", "public/mengdao/mengxq2-8.webp", "public/mengdao/mengxq2-9.webp",
      "public/mengdao/mengxq2-10.webp", "public/mengdao/mengxq2-11.webp", "public/mengdao/mengxq2-12.webp",
      "public/mengdao/mengxq2-13.webp", "public/mengdao/mengxq2-14.webp", "public/mengdao/mengxq2-15.webp",
      "public/mengdao/mengxq2-16.webp", "public/mengdao/mengxq2-17.webp", "public/mengdao/mengxq2-18.webp",
      "public/mengdao/mengxq2-19.webp", "public/mengdao/mengxq2-20.webp", "public/mengdao/mengxq2-21.webp",
      "public/mengdao/mengxq2-22.webp", "public/mengdao/mengxq2-23.webp", "public/mengdao/mengxq2-24.webp",
      "public/mengdao/mengxq2-25.webp", "public/mengdao/mengxq2-26.webp", "public/mengdao/mengxq2-27.webp",
      "public/mengdao/mengxq2-28.webp", "public/mengdao/mengxq2-29.webp", "public/mengdao/mengxq2-30.webp",
      "public/mengdao/mengxq2-31.webp"
    ],
    fullDescription: (
      <>
        <p className="mb-4">《梦到（꾸며)》是一个基于人工智能视觉生成与 Web3 技术的全新梦境社交系统。</p>
        <p>通过整合尖端的 AI 图像生成技术，打造一个前所未有的潜意识数字流通空间。</p>
      </>
    )
  },
  {
    title: "YUNYOU",
    category: "数字交互体验 (UX Design)",
    description: "面向开放世界游戏玩家的 SNS 互助平台。",
    image: "public/yunyou/新封面.webp",
    detailImages: [
      "public/yunyou/slide-16_9---10.webp", "public/yunyou/file-cover---1.webp", "public/yunyou/file-cover---2.webp",
      "public/yunyou/file-cover---3.webp", "public/yunyou/file-cover---4.webp", "public/yunyou/file-cover---5.webp",
      "public/yunyou/file-cover---6.webp", "public/yunyou/file-cover---7.webp", "public/yunyou/file-cover---8.webp",
      "public/yunyou/file-cover---9.webp", "public/yunyou/file-cover---10.webp", "public/yunyou/file-cover---11.webp",
      "public/yunyou/file-cover---12.webp", "public/yunyou/file-cover---13.webp", "public/yunyou/file-cover---14.webp"
    ],
    fullDescription: <p>《YUNYOU》是一个专为开放世界游戏玩家打造的 SNS 互助与社交平台。</p>
  },
  {
    title: "旧时光",
    category: "空间叙事 (Spatial Design)",
    description: "韩国首尔紫阳洞传统糖水铺商业空间。",
    image: "public/jsgfm.webp",
    detailImages: ["public/jsg.webp"],
    fullDescription: <p>在空间材质上，设计巧妙融合了白橡木与青花瓷元素。</p>
  },
  {
    title: "Escort",
    category: "产品设计 (Product Design)",
    description: "阿尔茨海默病患者陪伴与照护系统。",
    image: "public/escort/escortfm.webp",
    detailImages: [
      "public/escort/escort.webp", "public/escort/escortui (1).webp", "public/escort/escortui (2).webp",
      "public/escort/escortui (3).webp", "public/escort/escortui (4).webp", "public/escort/escortui (5).webp",
      "public/escort/escortui (6).webp", "public/escort/escortui (7).webp", "public/escort/escortui (8).webp"
    ],
    fullDescription: <p>《Escort》探寻技术理性与人文关怀的最佳平衡点。</p>
  },
  {
    title: "Mosquito Grave",
    category: "产品设计 (Product Design)",
    description: "基于生物模拟原理的公共防蚊设施。",
    image: "public/Mosquito Grave/wenzifm.webp",
    detailImages: ["public/Mosquito Grave/wenzixq.webp"],
    fullDescription: <p>通过仿生学原理模拟人体呼吸释放二氧化碳，精准诱捕蚊虫。</p>
  }
];

const activities: Activity[] = [
  {
    title: "留子变厨子",
    description: "你可以怀疑我的学历，但是不能怀疑我的厨艺！",
    image: "public/zuofanfm.webp",
    video: "https://v.douyin.com/7Pzn54nR-RQ/"
  },
  {
    title: "没事儿就爱旅点儿游",
    description: "人就应该待在没有天花板的地方。",
    image: "public/lvxingfm.webp",
    videos: [
      { title: "新疆旅行", url: "https://v.douyin.com/VvgoRpvBiXc/" },
      { title: "福建旅行", url: "https://v.douyin.com/ZoP0jcP3DP0/" }
    ]
  }
];

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md py-4 border-b border-border-dark">
    <div className="max-w-[1024px] mx-auto px-10 flex justify-between items-center">
      <div className="font-bold text-[24px]">MENG<span className="text-accent-red">XH</span></div>
      <div className="flex space-x-8 text-[10px] uppercase tracking-[1px] text-text-sub">
        <a href="#about" className="hover:text-white">ABOUT</a>
        <a href="#portfolio" className="hover:text-white">PORTFOLIO</a>
        <a href="#beyond" className="hover:text-white">MY LIFE</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20">
    <div className="max-w-[1024px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-[64px] font-bold leading-tight">孟祥昊<br/><span className="text-accent-red">MENG</span> XIANGHAO</h1>
        <p className="text-[14px] text-text-bio my-8">以前瞻性视角探索数字交互、物理空间与产品逻辑的边界。</p>
        <div className="flex gap-4">
          <a href="#portfolio" className="bg-white text-black px-8 py-4 font-semibold">探索作品</a>
          <a href="public/孟祥昊_产品体验设计师_韩国弘益大学硕士_2026届应届毕业生.pdf" download className="border border-border-dark px-8 py-4 font-semibold">下载简历</a>
        </div>
      </div>
      <div className="relative aspect-[4/5] max-w-[400px] ml-auto">
        <img src="public/portrait.jpg" className="w-full h-full object-cover border border-border-dark" alt="Portrait" />
      </div>
    </div>
  </section>
);

// --- Simplified Other Components ---
const PortfolioItem = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => (
  <div onClick={onClick} className="border border-border-light p-6 bg-bg-card hover:border-accent-red cursor-pointer group">
    <div className="text-[10px] text-accent-red font-bold mb-2 uppercase">{project.category}</div>
    <div className="text-[18px] font-semibold text-white mb-4">{project.title}</div>
    <div className="aspect-[4/3] overflow-hidden bg-black mb-4">
      <img src={project.image} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform" />
    </div>
    <button className="text-[10px] font-bold uppercase text-white/70">View Details →</button>
  </div>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="portfolio" className="py-24 border-t border-border-dark">
      <div className="max-w-[1024px] mx-auto px-10">
        <h2 className="text-[48px] font-thin mb-10 uppercase">Portfolio <span className="text-accent-red">/</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => <PortfolioItem key={p.title} project={p} index={i} onClick={() => setSelectedProject(p)} />)}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 p-8 overflow-y-auto" onClick={() => setSelectedProject(null)}>
            <div className="max-w-4xl mx-auto bg-bg-card p-8 border border-border-dark" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="float-right text-white"><X /></button>
              <img src={selectedProject.image} className="w-full h-auto mb-8" />
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <div className="text-text-sub leading-loose mb-8">{selectedProject.fullDescription}</div>
              {selectedProject.detailImages?.map((img, i) => <img key={i} src={img} className="w-full h-auto mb-4 border border-border-dark" />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const BeyondDesign = () => (
  <section id="beyond" className="py-24 border-t border-border-dark">
    <div className="max-w-[1024px] mx-auto px-10">
      <h2 className="text-[48px] font-thin mb-10 uppercase">My Life <span className="text-accent-red">/</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map(a => (
          <div key={a.title} className="border border-border-light p-4 bg-bg-card">
            <img src={a.image} className="w-full aspect-square object-cover mb-4" />
            <h3 className="font-bold text-white">{a.title}</h3>
            <p className="text-xs text-text-sub mt-2">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => {
  const [showQr, setShowQr] = useState(false);
  return (
    <footer id="contact" className="bg-black py-16 border-t border-border-dark text-center">
      <div className="max-w-[1024px] mx-auto px-10">
        <h2 className="text-3xl font-thin mb-8">诚邀合作 <span className="text-accent-red">/</span></h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl">mengxianghao@163.com</p>
          <div className="flex gap-8 text-text-sub text-sm">
            <button onClick={() => setShowQr(!showQr)} className="hover:text-white">微信 (WECHAT)</button>
            <span>+86 17639107673</span>
          </div>
          {showQr && <img src="public/wechat-qr.jpg" className="w-32 h-32 mt-4 border-4 border-white" />}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <BeyondDesign />
      <Footer />
    </div>
  );
}