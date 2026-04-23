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
  video?: string; // 支持添加 Google Drive 等视频链接
  videos?: { title: string; url: string; }[]; // 支持多个视频
}

// --- Data ---
const projects: Project[] = [
  {
    title: "梦到（꾸며)",
    category: "数字交互体验 (UX Design)",
    description: "基于 AI 视觉与 Web3 技术的梦境社交系统。解决醒后遗忘痛点，集成 AI 可视化与 NFT 版权保护。",
    image: "mengdao.png",
    detailImages: [
      "mengdao/mengxq2-1.webp",
      "mengdao/mengxq2-2.webp",
      "mengdao/mengxq2-3.webp",
      "mengdao/mengxq2-4.webp",
      "mengdao/mengxq2-5.webp",
      "mengdao/mengxq2-6.webp",
      "mengdao/mengxq2-7.webp",
      "mengdao/mengxq2-8.webp",
      "mengdao/mengxq2-9.webp",
      "mengdao/mengxq2-10.webp",
      "mengdao/mengxq2-11.webp",
      "mengdao/mengxq2-12.webp",
      "mengdao/mengxq2-13.webp",
      "mengdao/mengxq2-14.webp",
      "mengdao/mengxq2-15.webp",
      "mengdao/mengxq2-16.webp",
      "mengdao/mengxq2-17.webp",
      "mengdao/mengxq2-18.webp",
      "mengdao/mengxq2-19.webp",
      "mengdao/mengxq2-20.webp",
      "mengdao/mengxq2-21.webp",
      "mengdao/mengxq2-22.webp",
      "mengdao/mengxq2-23.webp",
      "mengdao/mengxq2-24.webp",
      "mengdao/mengxq2-25.webp",
      "mengdao/mengxq2-26.webp",
      "mengdao/mengxq2-27.webp",
      "mengdao/mengxq2-28.webp",
      "mengdao/mengxq2-29.webp",
      "mengdao/mengxq2-30.webp",
      "mengdao/mengxq2-31.webp"
    ],
    fullDescription: (
      <>
        <p className="mb-4">
          《梦到（꾸며)》是一个基于人工智能视觉生成与 Web3 技术的全新梦境社交系统。在日常生活中，人们常常为醒来后迅速忘却梦境而感到惋惜。这是一个旨在解决“醒后遗忘”痛点的数字体验产品。
        </p>
        <p>
          通过整合尖端的 AI 图像生成技术与语音/文字输入，用户可以在醒来的第一时间迅速将梦境残片可视化输出。平台不仅提供生成服务，更通过区块链技术为每一份“梦”的数字艺术作品赋予版权确权保护，打造一个前所未有的潜意识数字流通与情感共鸣空间。
        </p>
      </>
    )
  },
  {
    title: "YUNYOU",
    category: "数字交互体验 (UX Design)",
    description: "面向开放世界游戏玩家的 SNS 互助平台。针对组队、健康管理及安全交易的闭环设计。",
    image: "yunyou/新封面.webp",
    detailImages: [
      "yunyou/slide-16_9---10.webp",
      "yunyou/file-cover---1.webp",
      "yunyou/file-cover---2.webp",
      "yunyou/file-cover---3.webp",
      "yunyou/file-cover---4.webp",
      "yunyou/file-cover---5.webp",
      "yunyou/file-cover---6.webp",
      "yunyou/file-cover---7.webp",
      "yunyou/file-cover---8.webp",
      "yunyou/file-cover---9.webp",
      "yunyou/file-cover---10.webp",
      "yunyou/file-cover---11.webp",
      "yunyou/file-cover---12.webp",
      "yunyou/file-cover---13.webp",
      "yunyou/file-cover---14.webp"
    ],
    fullDescription: (
      <>
        <p className="mb-4">
          《YUNYOU》是一个专为开放世界游戏玩家打造的 SNS 互助与社交平台。本系统旨在解决玩家在浩瀚游戏世界中面临的组队困难、虚拟资产交易安全隐患，并关注长时间游玩带来的健康管理问题。
        </p>
        <p>
          通过建立一个高信任度的玩家闭环生态，《YUNYOU》整合了智能队友匹配、基于健康数据的防沉迷与护眼提醒，以及由智能合约保障的安全交易功能。致力于为玩家提供一个更加健康、高效、温暖的游戏内支持网络。
        </p>
      </>
    )
  },
  {
    title: "旧时光（죠시광 탕수이)",
    category: "空间叙事 (Spatial Design)",
    description: "韩国首尔紫阳洞传统糖水铺商业空间。融合白橡木与青花瓷元素，实现中式食疗文化的现代化输出。",
    image: "jsgfm.webp",
    detailImages: [
      "jsg.webp"
    ],
    fullDescription: (
      <>
        <p className="mb-4">
          《旧时光（죠시광 탕수이)》是位于韩国首尔紫阳洞的一处传统中式糖水铺商业空间设计。本项目旨在将中国传统的食疗文化通过现代化的空间叙事进行重构与输出，为现代都市人打造一处疗愈身心的落脚点。
        </p>
        <p>
          在空间材质上，设计巧妙融合了温暖亲切的白橡木与清冷典雅的青花瓷元素。木质的温度中和了瓷器的冰冷感觉，不仅隐喻了传统与现代的碰撞，更在感官体验上创造出了层次分明、动静相宜的独特氛围感。
        </p>
      </>
    )
  },
  {
    title: "Escort",
    category: "产品设计 (Product Design)",
    description: "阿尔茨海默病患者陪伴与照护系统。机器人硬件与 APP 联动，聚焦安全与健康监测。",
    image: "escort/escortfm.webp",
    detailImages: [
      "escort/escort.webp",
      "escort/escortui (1).webp",
      "escort/escortui (2).webp",
      "escort/escortui (3).webp",
      "escort/escortui (4).webp",
      "escort/escortui (5).webp",
      "escort/escortui (6).webp",
      "escort/escortui (7).webp",
      "escort/escortui (8).webp"
    ],
    fullDescription: (
      <>
        <p className="mb-4">
          《Escort》是一个专门为阿尔茨海默病患者群体打造的陪伴与照护系统。该设计巧妙地将智能机器人硬件实体与移动端 APP 进行无缝联动，全方位聚焦于特殊人群在日常生活中的安全保障与健康状况监测。
        </p>
        <p>
          在产品理念上，《Escort》致力于探寻技术理性与人文关怀的最佳平衡点。通过非侵入式的日常陪伴、自动化的生命体征数据反馈以及智能化的紧急危险预警机制，它不仅赋予了患者更多独立生活的尊严与安心感，同时也极大地缓解了家属与看护者的精神焦虑和看护压力。
        </p>
      </>
    )
  },
  {
    title: "Mosquito Grave",
    category: "产品设计 (Product Design)",
    description: "基于生物模拟原理的公共防蚊设施。通过模拟二氧化碳释放精准防控登革热。",
    image: "Mosquito Grave/wenzifm.webp",
    detailImages: [
      "Mosquito Grave/wenzixq.webp"
    ],
    fullDescription: (
      <>
        <p className="mb-4">
          《Mosquito Grave》是一款基于前沿生物模拟原理打造的公共防蚊与卫生设施设计。本项目旨在从城市公共健康管理的维度出发，通过环保且高效的物理诱捕手段，精准防控登革热等蚊媒传染病的传播。
        </p>
        <p>
          在技术机制上，该设施通过仿生学原理模拟人体呼吸释放微量二氧化碳及热量，持续且安全地吸引蚊虫进入捕杀闭环。设计语言上则追求极简直观与环境融合，使其能在各种城市公共空间（如公园、社区、广场）中静默地发挥作用，构建安全的户外屏障。
        </p>
      </>
    )
  }
];

const activities: Activity[] = [
  {
    title: "留子变厨子",
    description: "你可以怀疑我的学历，但是不能怀疑我的厨艺！",
    image: "zuofanfm.webp",
    video: "https://v.douyin.com/7Pzn54nR-RQ/"
  },
  {
    title: "没事儿就爱旅点儿游",
    description: "人就应该待在没有天花板的地方。",
    image: "lvxingfm.webp",
    videos: [
      { title: "新疆旅行", url: "https://v.douyin.com/VvgoRpvBiXc/" },
      { title: "福建旅行", url: "https://v.douyin.com/ZoP0jcP3DP0/" }
    ]
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-border-dark' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1024px] mx-auto px-10 flex justify-between items-center">
        <div className="font-bold text-[24px] tracking-tight leading-[1.2]">
          MENG<span className="text-accent-red">XH</span>
        </div>
        <div className="hidden md:flex space-x-8 text-[10px] uppercase font-medium tracking-[1px] text-text-sub">
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#portfolio" className="hover:text-white transition-colors">PORTFOLIO</a>
          <a href="#beyond" className="hover:text-white transition-colors">MY LIFE</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Subtle background element */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-red rounded-full mix-blend-screen filter blur-[128px]"></div>
      </div>
      
      <div className="max-w-[1024px] mx-auto px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="inline-block text-text-label text-[10px] tracking-[1px] uppercase mb-4">
              About
            </div>
            
            <h1 className="text-[32px] md:text-[64px] font-bold leading-[1.2] tracking-[-1px] mb-2">
              孟祥昊<br/>
              <span className="text-accent-red">MENG</span> XIANGHAO
            </h1>
            
            <h2 className="text-[12px] uppercase tracking-[2px] text-text-sub mb-8">
              UX Designer / 工业设计
            </h2>
            
            <p className="text-[14px] text-text-bio leading-[1.6] max-w-xl mb-12">
              以前瞻性视角探索数字交互、物理空间与产品逻辑的边界。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a href="#portfolio" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-none font-semibold hover:bg-accent-red hover:text-white transition-colors">
                探索作品
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border border-border-dark px-8 py-4 rounded-none font-semibold hover:border-text-sub text-[12px] uppercase tracking-[1px] transition-colors">
                联系我
              </a>
              <a 
                href="孟祥昊_产品体验设计师_韩国弘益大学硕士_2026届应届毕业生.pdf" 
                target="_blank"
                download="孟祥昊_产品体验设计师_韩国弘益大学硕士_2026届应届毕业生.pdf"
                className="inline-flex items-center justify-center border border-border-dark px-8 py-4 rounded-none font-semibold hover:border-text-sub hover:text-white text-[12px] uppercase tracking-[1px] transition-colors group"
              >
                下载简历
                <Download className="ml-2 w-4 h-4 text-text-sub group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden md:block w-full"
          >
            {/* Image Container with subtle decorative border offset */}
            <div className="absolute inset-0 border border-border-light translate-x-4 translate-y-4 pointer-events-none"></div>
            <div className="relative overflow-hidden border border-border-dark bg-bg-card aspect-[4/5] group w-full max-w-[400px] ml-auto">
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-accent-red/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src="portrait.jpg" 
                alt="Meng Xianghao Portrait" 
                className="w-full h-full object-cover grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white/50 mb-4"></div>
        <span className="text-[10px] tracking-widest uppercase writing-vertical-rl">Scroll</span>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-border-dark">
      <div className="max-w-[1024px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          
          <div className="lg:col-span-1">
            <span className="text-[10px] uppercase tracking-[1px] text-text-label mb-12 block">About Me</span>
            
            <div className="mb-12">
              <p className="text-[14px] leading-[1.6] text-text-bio">
                拥有 7 年韩国设计教育背景，擅长运用 UX 思维解决跨领域体验问题。我坚持“以人为本”的理性推导，致力于平衡技术、美学与真实的人性需求。
              </p>
            </div>
            
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[1px] text-text-label mb-4 block">Languages</span>
              <ul className="space-y-2 text-[11px] text-text-sub">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 text-accent-red mr-2"> 中文 (母语)</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 text-accent-red mr-2"> 韩语 (精通)</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-[1px] text-text-label mb-8 block">Education</span>
              <div className="space-y-6">
                <div className="mb-5">
                  <span className="text-[11px] color-accent-red font-semibold block text-accent-red mb-1">2023 - 2026 (预计)</span>
                  <span className="text-[13px] font-medium block">韩国弘益大学 (硕士在读)</span>
                  <span className="text-[13px] font-medium block opacity-60">工业设计 / UX方向</span>
                </div>
                <div className="mb-5">
                  <span className="text-[11px] color-accent-red font-semibold block text-accent-red mb-1">2019 - 2023</span>
                  <span className="text-[13px] font-medium block">韩国建国大学 (学士)</span>
                  <span className="text-[13px] font-medium block opacity-60">工业设计</span>
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-[10px] uppercase tracking-[1px] text-text-label mb-8 block">Expertise</span>
              <div className="flex flex-wrap">
                {['Figma', 'Rhino', 'KeyShot', 'Adobe Suite', 'Midjourney', 'UX Research', 'Prototyping'].map(tool => (
                  <span key={tool} className="inline-block border border-border-dark px-[10px] py-[4px] text-[11px] mb-[8px] mr-[4px] text-text-tag hover:border-accent-red hover:text-white transition-colors cursor-default bg-transparent">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project, index, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="border border-border-light p-[24px] bg-bg-card transition-all duration-300 cursor-pointer hover:border-accent-red hover:bg-bg-card-hover group relative flex flex-col h-full"
    >
      <div className="text-[10px] uppercase text-accent-red mb-[8px] font-bold tracking-[1px]">{project.category}</div>
      <div className="text-[18px] font-semibold mb-[8px] text-white">{project.title}</div>
      <div className="text-[12px] text-text-sub leading-[1.5] mb-[24px] flex-grow">{project.description}</div>
      
      <div className="w-full aspect-[4/3] mb-4 overflow-hidden border border-border-dark relative bg-[#0f0f0f]">
        <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-contain p-2 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] text-text-label tracking-widest z-20 font-sans">
          0{index + 1}
        </div>
      </div>
      
      {project.link ? (
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center w-fit text-[10px] font-bold uppercase tracking-[1px] text-white/70 hover:text-accent-red transition-colors mt-auto"
        >
          View External Link
          <ArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <button 
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          className="flex items-center w-fit text-[10px] font-bold uppercase tracking-[1px] text-white/70 hover:text-accent-red transition-colors mt-auto"
        >
          View Details 
          <ArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 border-t border-border-dark">
      <div className="max-w-[1024px] mx-auto px-10 relative">
        <div className="flex justify-between items-end mt-10 mb-[20px]">
          <h2 className="text-[32px] md:text-[48px] font-[200] m-0 leading-[1.1] tracking-[-1px]">PORTFOLIO <span className="text-accent-red">/</span> 作品集</h2>
          <div className="text-right hidden md:block">
            <span className="text-[10px] uppercase tracking-[1px] text-text-label mb-2 block">Location</span>
            <div className="text-[14px]">SEOUL</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {projects.map((project, index) => (
            <PortfolioItem 
              key={project.title} 
              project={project} 
              index={index} 
              onClick={() => {
                if (!project.link) setSelectedProject(project);
              }}
            />
          ))}
        </div>
        
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-card border border-border-dark w-full max-w-5xl h-[90vh] overflow-y-auto relative flex flex-col custom-scrollbar"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-accent-red text-white transition-colors z-50 rounded-full cursor-pointer backdrop-blur-md border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full bg-[#0f0f0f] border-b border-border-dark p-8 md:p-16 flex items-center justify-center">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto object-contain max-h-[50vh]" 
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 md:p-16 flex-grow flex flex-col">
                <div className="text-[12px] uppercase text-accent-red mb-4 font-bold tracking-[2px]">{selectedProject.category}</div>
                <h2 className="text-[32px] md:text-[48px] font-[200] leading-[1.1] tracking-[-1px] mb-8 text-white">{selectedProject.title}</h2>
                <div className="text-text-sub text-[15px] leading-[2] mb-16 max-w-3xl">
                  {selectedProject.fullDescription || selectedProject.description}
                </div>

                {selectedProject.detailImages && selectedProject.detailImages.length > 0 && (
                  <div className="flex flex-col gap-12 mt-auto">
                    {selectedProject.detailImages.map((img, i) => {
                      const highResImg = `${img}?v=3`;
                        
                      return (
                        <div key={i} className="w-full border border-border-dark p-4 bg-[#0a0a0a]">
                          <img 
                            src={highResImg} 
                            className="w-full h-auto" 
                            alt={`${selectedProject.title} detail ${i + 1}`} 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const BeyondDesign = () => {
  return (
    <section id="beyond" className="py-24 border-t border-border-dark">
      <div className="max-w-[1024px] mx-auto px-10">
        <div className="flex justify-between items-end mb-[40px]">
          <h2 className="text-[32px] md:text-[48px] font-[200] m-0 leading-[1.1] tracking-[-1px]">MY LIFE <span className="text-accent-red">/</span> 生活中的我</h2>
          <div className="text-right hidden md:block">
            <span className="text-[10px] uppercase tracking-[1px] text-text-label mb-2 block">Lifestyle</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {activities.map((activity, i) => {
            const cardContent = (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border-light p-[16px] bg-bg-card transition-all duration-300 cursor-pointer hover:border-accent-red hover:bg-bg-card-hover group h-full"
              >
                <div className="overflow-hidden mb-4 relative aspect-square border border-border-dark">
                  <div className="absolute inset-0 bg-accent-red/10 group-hover:opacity-100 opacity-0 z-10 transition-colors pointer-events-none"></div>
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* 多视频叠加层 */}
                  {activity.videos && activity.videos.length > 0 ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                      {activity.videos.map((v, idx) => (
                        <a 
                          key={idx} 
                          href={v.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center bg-accent-red/90 text-white px-5 py-2.5 rounded-full hover:bg-accent-red hover:scale-105 transition-all w-3/4 max-w-[160px] justify-center"
                        >
                          <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span className="text-[12px] font-semibold tracking-wider whitespace-nowrap">{v.title}</span>
                        </a>
                      ))}
                    </div>
                  ) : activity.video ? (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-12 h-12 rounded-full bg-accent-red/90 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  ) : null}
                </div>
                <h3 className="text-[14px] font-semibold mb-[6px] text-white">{activity.title}</h3>
                <p className="text-[11px] text-text-sub leading-[1.5]">{activity.description}</p>
              </motion.div>
            );

            // 如果有多个视频，我们不去包裹整个卡片，而是让里面的多个按钮可以被点击
            return (activity.videos && activity.videos.length > 0) ? (
              <div key={activity.title} className="block">
                {cardContent}
              </div>
            ) : activity.video ? (
              <a key={activity.title} href={activity.video} target="_blank" rel="noopener noreferrer" className="block">
                {cardContent}
              </a>
            ) : (
              <div key={activity.title} className="block">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showWechat, setShowWechat] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <footer id="contact" className="bg-black py-16 border-t border-border-dark">
      <div className="max-w-[1024px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16">
          <div className="mb-10 md:mb-0">
            <h2 className="text-[32px] font-[200] mb-2 tracking-[-1px]">诚邀创意合作，同时我也在求职全职岗位 <span className="text-accent-red">/</span></h2>
            <p className="text-[14px] text-text-sub">期待与你相遇，一起做有意义的设计。</p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <a href="mailto:mengxianghao@163.com" className="group flex items-center text-[16px] font-medium border-b border-border-dark pb-2 hover:border-accent-red transition-colors mb-6">
              <Mail className="w-5 h-5 mr-3 text-text-sub group-hover:text-accent-red transition-colors" />
              mengxianghao@163.com
            </a>
            
            <div className="flex space-x-8 items-center text-[12px] text-text-sub tracking-[1px] uppercase">
              <div className="relative">
                <button 
                  onMouseEnter={() => setShowWechat(true)}
                  onMouseLeave={() => setShowWechat(false)}
                  onClick={() => setShowWechat(!showWechat)}
                  className="hover:text-white transition-colors"
                >
                  微信
                </button>
                <AnimatePresence>
                  {showWechat && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-[calc(100%+12px)] right-1/2 translate-x-1/2 md:translate-x-0 md:-right-6 p-3 bg-white rounded-xl shadow-2xl z-50 border border-border-light"
                    >
                      <div className="w-32 h-32 md:w-36 md:h-36 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
                        <img 
                          src="wechat-qr.jpg" 
                          alt="WeChat QR Code" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                            (e.target as HTMLImageElement).className = "w-1/2 h-1/2 opacity-50";
                          }}
                        />
                      </div>
                      {/* Tooltip triangle */}
                      <div className="absolute top-full right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 border-[8px] border-transparent border-t-white"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => setShowPhone(!showPhone)}
                className="hover:text-white transition-colors relative"
              >
                <AnimatePresence mode="wait">
                  {showPhone ? (
                    <motion.span 
                      key="number"
                      initial={{ opacity: 0, y: -5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: 5 }}
                      className="text-white font-medium tracking-[2px]"
                    >
                      +86 17639107673
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="text"
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -5 }}
                    >
                      电话
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-[24px] border-t border-border-light text-[11px] text-text-footer tracking-[1px] uppercase">
          <div className="mb-4 md:mb-0 text-center md:text-left leading-relaxed w-full">
            <div>语言能力：中文 (母语) / 韩语 (流利)</div>
            <div>生活中的我：热爱生活 / 喜欢烹饪 / 喜欢旅行 / 喜欢游戏</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-noir-black text-noir-text selection:bg-accent-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <BeyondDesign />
      <Footer />
    </div>
  );
}
