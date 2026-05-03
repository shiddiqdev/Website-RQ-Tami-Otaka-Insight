"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const navLinks = [
      { name: 'Beranda', href: '#home' },
      { name: 'Visi Misi', href: '#visi-misi' },
      { name: 'Keunggulan', href: '#keunggulan' },
      { name: 'Biaya', href: '#biaya' },
      { name: 'Daftar', href: '#pendaftaran' }
   ];

   return (
      <>
         <nav className={`sticky top-0 z-[100] w-full transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
            : 'bg-white/50 backdrop-blur-sm py-3 md:py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
               {/* Logo */}
               <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#f07b22] p-1.5 flex items-center justify-center bg-white transition-transform group-hover:scale-110">
                     <div className="w-full h-full rounded-full flex items-center justify-center text-[#f07b22]">
                        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                           <circle cx="12" cy="12" r="3" />
                           <ellipse cx="12" cy="12" rx="3" ry="9" />
                           <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(60 12 12)" />
                           <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(120 12 12)" />
                        </svg>
                     </div>
                  </div>
                  <span className="font-black text-gray-900 tracking-tight text-xl">Tami Otaka</span>
               </div>

               {/* Desktop Menu */}
               <div className="hidden lg:flex items-center gap-10">
                  {navLinks.map((item, idx) => (
                     <a key={idx} href={item.href} className="text-sm font-bold text-gray-600 hover:text-[#f07b22] transition-colors uppercase tracking-wider">
                        {item.name}
                     </a>
                  ))}
               </div>

               {/* Desktop CTA + Hamburger */}
               <div className="flex items-center gap-4">
                  <div className="hidden sm:block">
                     <a
                        href="https://wa.me/6285148434548?text=Assalamu%E2%80%99alaikum%20warahmatullahi%20wabarakatuh%20%F0%9F%99%8F%0ASaya%20tertarik%20untuk%20mendaftarkan%20anak%20saya%20pada%20program%20yang%20tersedia.%20Mohon%20informasi%20mengenai%20data%20dan%20persyaratan%20yang%20perlu%20disiapkan.%0ATerima%20kasih%20atas%20bantuannya%20%F0%9F%98%8A"
                        target="_blank"
                        className="bg-[#8cc63f] text-white text-sm font-black px-6 py-3 rounded-full shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
                     >
                        DAFTAR SEKARANG
                     </a>
                  </div>

                  {/* Hamburger Button */}
                  <button
                     className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all relative z-[160]"
                     onClick={() => setIsOpen(!isOpen)}
                     aria-label="Toggle Menu"
                  >
                     <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                     <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                     <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                  </button>
               </div>
            </div>
         </nav>

         {/* Mobile Menu Overlay */}
         <div className={`fixed inset-0 z-[150] lg:hidden transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-10 flex flex-col gap-8 transition-transform duration-500 shadow-[-10px_0_50px_rgba(0,0,0,0.2)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
               <div className="flex items-center justify-between mb-8">
                  <span className="font-black text-2xl text-[#f07b22]">Menu</span>
               </div>
               <div className="flex flex-col gap-6">
                  {navLinks.map((item, idx) => (
                     <a
                        key={idx}
                        href={item.href}
                        className="text-xl font-black text-gray-900 hover:text-[#f07b22] transition-colors flex items-center justify-between group"
                        onClick={() => setIsOpen(false)}
                     >
                        {item.name}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                     </a>
                  ))}
               </div>
               <div className="mt-auto">
                  <a
                     href="https://wa.me/6285148434548?text=Assalamu%E2%80%99alaikum%20warahmatullahi%20wabarakatuh%20%F0%9F%99%8F%0ASaya%20tertarik%20untuk%20mendaftarkan%20anak%20saya%20pada%20program%20yang%20tersedia.%20Mohon%20informasi%20mengenai%20data%20dan%20persyaratan%20yang%20perlu%20disiapkan.%0ATerima%20kasih%20atas%20bantuannya%20%F0%9F%98%8A"
                     target="_blank"
                     className="block w-full bg-[#8cc63f] text-white text-lg font-black py-5 rounded-2xl text-center shadow-xl shadow-green-100 active:scale-95 transition-all"
                  >
                     DAFTAR SEKARANG
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};

export default function Home() {
   useEffect(() => {
      const observerOptions = {
         threshold: 0.15,
         rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add('active');
            } else {
               entry.target.classList.remove('active');
            }
         });
      }, observerOptions);

      const handleScroll = () => {
         const scrolled = window.scrollY;
         document.documentElement.style.setProperty('--scroll-y', `${scrolled}px`);
      };

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
         observer.disconnect();
      };
   }, []);

   return (
      <main id="home" className="w-full min-h-screen bg-gray-50 font-sans flex flex-col text-gray-800">
         <Navbar />

         <section className="w-full bg-white relative min-h-[calc(100vh-80px)] flex items-center px-6 overflow-hidden pt-12 pb-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 relative z-10 w-full">

               {/* Left: Content */}
               <div className="flex-1 text-center lg:text-left">
                  <div className="reveal reveal-up inline-block px-4 py-2 bg-orange-50 text-[#f07b22] rounded-full text-xs font-black tracking-wider mb-6 border border-orange-100">
                     Rumah Qur’an Tami Otaka
                  </div>
                  <h1 className="reveal reveal-up delay-100 text-gray-900 font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight mb-8">
                     Bahagia & <br />
                     <span className="text-[#f07b22]">Berakhlak Mulia</span> <br />
                     Bersama Al-Qur&apos;an
                  </h1>
                  <p className="reveal reveal-up delay-200 text-gray-500 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                     Lembaga Kursus Profesional yang membina anak-anak menjadi generasi pecinta Al-Qur&apos;an dengan metode Otak Kanan yang menyenangkan.
                  </p>

                  <div className="reveal reveal-up delay-300 flex justify-center lg:justify-start">
                     <div className="w-full sm:w-auto flex items-center gap-4 bg-white/50 p-2 pr-8 rounded-full border border-gray-100 shadow-sm transition-all overflow-hidden cursor-default select-none">
                        <div className="w-12 h-12 bg-gray-900/10 text-gray-400 rounded-full flex items-center justify-center shrink-0 relative">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                           </svg>
                        </div>
                        <div className="overflow-hidden whitespace-nowrap mask-fade-edges-sm relative flex-1 min-w-[120px] max-w-md">
                           <div className="animate-marquee-slow flex">
                              {[1, 2].map((i) => (
                                 <span key={i} className="text-sm font-bold text-gray-400 px-6 shrink-0">
                                    ✨ Ayo Bergabung • Chat Sekarang •
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

               {/* Right: Visual (Hero Video) */}
               <div className="reveal reveal-scale delay-400 relative w-full max-w-sm lg:max-w-md mx-auto lg:ml-auto">
                  <div className="relative bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                     <video
                        className="w-full h-full object-cover animate-slow-zoom"
                        autoPlay
                        muted
                        loop
                        playsInline
                     >
                        <source src="/hero-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>

                     {/* Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                     {/* Content Overlay */}
                     <div className="absolute bottom-10 left-10 right-10 text-white">
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-10 h-10 rounded-full border-2 border-white/50 p-1.5 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                                 <circle cx="12" cy="12" r="3" />
                                 <ellipse cx="12" cy="12" rx="3" ry="9" />
                                 <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(60 12 12)" />
                                 <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(120 12 12)" />
                              </svg>
                           </div>
                           <span className="text-xs font-black uppercase tracking-widest opacity-90">Penerimaan Santri Baru</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                           Rumah Qur&apos;an <br />
                           <span className="text-yellow-400">Tami Otaka Insight</span>
                        </h2>
                     </div>
                  </div>

                  {/* Decorative blobs */}
                  <div className="parallax-blob absolute -top-10 -right-10 w-40 h-40 bg-[#ebc439]/20 rounded-full blur-3xl -z-10"></div>
                  <div className="parallax-blob absolute -bottom-10 -left-10 w-40 h-40 bg-[#8cc63f]/20 rounded-full blur-3xl -z-10"></div>
               </div>
            </div>
         </section>

         <section id="visi-misi" className="w-full bg-slate-50 py-16 md:py-24 lg:py-32 px-6">
            <div className="max-w-7xl mx-auto">
               <div className="reveal reveal-up flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-16 lg:mb-20">
                  <div className="flex-1 text-center lg:text-left">
                     <h3 className="text-[#f07b22] font-black uppercase tracking-[0.2em] text-sm mb-4">Visi Kami</h3>
                     <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 lg:mb-8 leading-tight">
                        Fokus Kami: Membentuk Generasi Berakhlak Mulia
                     </h2>
                     <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Menjadi Lembaga Kursus Profesional dan terpecaya dalam membina anak-anak dengan Al Quran berbasis Otak Kanan yang inovatif.
                     </p>
                  </div>
                  <div className="reveal reveal-scale delay-200 flex-1 flex justify-center lg:justify-end">
                     <div className="w-full max-w-lg aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative group">
                        <img
                           src="/aktivitas-santri.jpg"
                           alt="Aktivitas Santri Tami Otaka"
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     {
                        title: "Manajemen Mutu",
                        desc: "System pengelolaan professional berbasis jaminan mutu yang berkelanjutan.",
                        icon: "📊"
                     },
                     {
                        title: "Spirit Wakaf",
                        desc: "Ruh pengelola untuk mewakafkan dirinya di jalan dakwah Al-Qur'an.",
                        icon: "❤️"
                     },
                     {
                        title: "Guru Tersertifikasi",
                        desc: "Guru-guru standarisasi metode TAMI OTAKA yang kompeten.",
                        icon: "🎓"
                     },
                     {
                        title: "Sinergi Orangtua",
                        desc: "Melibatkan orangtua secara penuh dalam pembinaan akhlaq anak.",
                        icon: "👨‍👩‍👧‍👦"
                     }
                  ].map((item, idx) => (
                     <div key={idx} className="reveal reveal-up bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group" style={{ transitionDelay: `${idx * 150}ms` }}>
                        <div className="text-4xl mb-6 group-hover:scale-125 transition-transform inline-block">{item.icon}</div>
                        <h4 className="text-gray-900 font-extrabold text-xl mb-4">{item.title}</h4>
                        <p className="text-gray-500 text-sm font-semibold leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section id="keunggulan" className="w-full bg-white py-16 md:py-24 lg:py-32 px-6">
            <div className="max-w-7xl mx-auto">
               <div className="reveal reveal-up text-center mb-16 lg:mb-20">
                  <h3 className="text-[#f07b22] font-black uppercase tracking-[0.2em] text-sm mb-4">Kenapa Memilih Kami</h3>
                  <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Keunggulan Program Kami</h2>
                  <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                     Metode pembelajaran yang dirancang khusus untuk menyeimbangkan kecerdasan intelektual dan spiritual anak.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                     { title: "Fun Learning", desc: "Pembelajaran menyenangkan untuk menstimulasi Kinerja Otak Kanan Anak.", icon: "✨" },
                     { title: "Progress Report", desc: "Laporan perkembangan siswa secara detail setiap 3 bulan sekali.", icon: "📊" },
                     { title: "Parenting Class", desc: "Membangun kemitraan orang tua melalui kelas parenting rutin 3 bulan sekali.", icon: "🏘️" },
                     { title: "Terapi Emosi", desc: "Memfasilitasi perkembangan emosional anak dengan metode TEQ.", icon: "🧘" },
                     { title: "Koneksi Hati", desc: "Memudahkan anak terkoneksi dengan rasa dan keimanan di hati (Qalbu).", icon: "💎" },
                     { title: "Trial Class", desc: "Dapatkan kesempatan mencoba kelas secara gratis untuk melihat kecocokan anak.", icon: "🎁" }
                  ].map((item, idx) => (
                     <div key={idx} className="reveal reveal-up flex gap-6 p-2 group hover:-translate-y-1 transition-all" style={{ transitionDelay: `${idx * 100}ms` }}>
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 flex-shrink-0 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-sm border border-orange-100">
                           {item.icon}
                        </div>
                        <div>
                           <h4 className="text-gray-900 font-extrabold text-xl mb-3">{item.title}</h4>
                           <p className="text-gray-500 font-semibold text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section id="biaya" className="w-full bg-slate-50 py-16 md:py-24 lg:py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
               <div className="reveal reveal-up flex-1 lg:pr-10 text-center lg:text-left">
                  <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 lg:mb-8 leading-tight">
                     Investasi Untuk <br />
                     <span className="text-[#f07b22]">Masa Depan</span> Anak
                  </h2>
                  <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed mb-8">
                     Tami OTAKA EduQur&apos;an Therapist menggunakan konsep Pembelajaran Al-Qur&apos;an khas OTAK KANAN berbasis Terapi Emosi yang membantu menembus ke hati anak.
                  </p>
                  <div className="bg-[#8cc63f]/10 border border-[#8cc63f]/20 rounded-3xl p-8 flex items-center gap-6">
                     <div className="text-4xl text-[#8cc63f]">🕊️</div>
                     <p className="text-green-800 font-bold text-lg italic">
                        &quot;Khusus untuk anak Yatim & Dhuafa, seluruh program kami berikan secara <span className="underline decoration-wavy decoration-[#8cc63f] underline-offset-4">GRATIS</span>.&quot;
                     </p>
                  </div>
               </div>

               <div className="reveal reveal-scale delay-300 flex-1 w-full max-w-lg lg:max-w-none">
                  <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-2xl border border-gray-100 relative group transition-all hover:-translate-y-2">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[8rem] -z-10 group-hover:scale-110 duration-500"></div>
                     <h3 className="text-gray-900 font-black text-2xl uppercase tracking-widest mb-10 pb-6 border-b border-gray-100">Daftar Biaya</h3>

                     <div className="space-y-8">
                        <div className="flex justify-between items-center">
                           <span className="text-gray-500 font-bold text-lg">Pendaftaran</span>
                           <span className="text-gray-900 font-black text-xl">Rp 100.000</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-gray-500 font-bold text-lg">Buku / Jilid</span>
                           <span className="text-gray-900 font-black text-xl">Rp 50.000</span>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-dashed border-orange-200">
                           <div className="flex justify-between items-center">
                              <span className="text-[#f07b22] font-black text-xl">SPP / BULAN</span>
                              <div className="text-right">
                                 <span className="text-gray-900 font-black text-3xl">Rp 130k</span>
                                 <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-widest">Infaq Rutin</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <a
                        href="https://wa.me/6285148434548?text=Assalamu%E2%80%99alaikum%20warahmatullahi%20wabarakatuh%20%F0%9F%99%8F%0ASaya%20tertarik%20untuk%20mendaftarkan%20anak%20saya%20pada%20program%20yang%20tersedia.%20Mohon%20informasi%20mengenai%20data%20dan%20persyaratan%20yang%20perlu%20disiapkan.%0ATerima%20kasih%20atas%20bantuannya%20%F0%9F%98%8A"
                        target="_blank"
                        className="mt-12 block w-full bg-[#f07b22] text-white font-black py-5 rounded-2xl text-center shadow-xl shadow-orange-100 hover:bg-[#e06b12] hover:shadow-2xl transition-all"
                     >
                        KLAIM SLOT SEKARANG
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-6 border-t border-gray-50">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-12 lg:mb-16">
                  <h3 className="text-[#8cc63f] font-black uppercase tracking-[0.2em] text-sm mb-4">Kebanggaan Kami</h3>
                  <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Daftar Wisuda Tahfidz</h2>
                  <p className="text-gray-500 text-base sm:text-lg font-medium">Siswa-siswi berprestasi yang telah menyelesaikan hafalan Juz 29 & 30.</p>
               </div>

               <div className="flex flex-wrap justify-center gap-6">
                  {[
                     { name: "Nafisa Khoirunnisa", juz: "Wisuda Juz 29 & 30", img: "/wisuda/nafisa.jpg" },
                     { name: "Alfina Sayyidatul Bariyyah", juz: "Wisuda Juz 29 & 30", img: "/wisuda/alfina.jpg" },
                     { name: "Syifa Denishfira", juz: "Wisuda Juz 30", img: "/wisuda/syifa.jpg" },
                     { name: "Najla Syafiqa Rachman", juz: "Wisuda Juz 30", img: "/wisuda/najla.jpg" },
                     { name: "Razkha Ramadhan Kurnia", juz: "Wisuda Juz 30", img: "/wisuda/razkha.jpg" },
                     { name: "Siska Retna Nurijati", juz: "Wisuda Juz 30", img: "/wisuda/siska.jpg" },
                     { name: "Gharra Fawwaz Aika Fi Darain", juz: "Wisuda Juz 30", img: "/wisuda/gharra.jpg" },
                     { name: "Nigella Amaranggana Kayashas", juz: "Wisuda Juz 30", img: "/wisuda/nigella.jpg" },
                     { name: "Fatih Khoirul Anwar", juz: "Wisuda Juz 30", img: "/wisuda/fatih.jpg" },
                     { name: "Khiranita Prameusti", juz: "Wisuda Juz 30", img: "/wisuda/khiranita.jpg" },
                  ].map((item, i) => (
                     <div key={i} className="reveal reveal-up flex items-center gap-5 bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 shadow-sm overflow-hidden shrink-0 group-hover:scale-110 group-hover:border-[#f07b22] transition-all">
                           <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                 const target = e.target as HTMLImageElement;
                                 target.src = "https://ui-avatars.com/api/?name=" + item.name + "&background=random&color=fff";
                              }}
                           />
                        </div>
                        <div>
                           <p className="font-extrabold text-gray-900 group-hover:text-[#f07b22] transition-colors line-clamp-1">{item.name}</p>
                           <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">{item.juz}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section id="pendaftaran" className="w-full bg-slate-900 py-16 md:py-24 lg:py-32 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f07b22]/10 blur-3xl -z-0"></div>
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="reveal reveal-up bg-white rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-green-50 rounded-br-full -z-10"></div>

                  <div className="flex-1 reveal reveal-left">
                     <h3 className="text-[#8cc63f] font-black uppercase tracking-widest text-sm mb-6">Pendaftaran Online</h3>
                     <h2 className="text-gray-900 text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">Siap Memulai Perjalanan <br /><span className="text-[#f07b22]">TQ Tami Otaka?</span></h2>

                     <div className="space-y-6 mb-12">
                        {[
                           "Usia minimal 5 tahun - 13 tahun",
                           "Mengisi formulir pendaftaran",
                           "Mengikuti jadwal tahfidz & Parenting Taklim",
                           "Membayar pendaftaran Rp.100.000"
                        ].map((text, idx) => (
                           <div key={idx} className="flex items-center gap-4">
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs shadow-sm">✓</div>
                              <span className="text-gray-600 font-bold">{text}</span>
                           </div>
                        ))}
                     </div>

                     <div className="mt-10 pt-8 border-t border-gray-100">
                        <p className="text-gray-500 font-bold mb-4">Masih ada pertanyaan?</p>
                        <a
                           href="https://wa.me/6285148434548?text=Assalamu%E2%80%99alaikum%20warahmatullahi%20wabarakatuh%20%F0%9F%99%8F%0ASaya%20tertarik%20untuk%20mendaftarkan%20anak%20saya%20pada%20program%20yang%20tersedia.%20Mohon%20informasi%20mengenai%20data%20dan%20persyaratan%20yang%20perlu%20disiapkan.%0ATerima%20kasih%20atas%20bantuannya%20%F0%9F%98%8A"
                           target="_blank"
                           className="inline-flex items-center gap-2 text-[#8cc63f] font-black hover:text-[#7ebd34] transition-colors group"
                        >
                           Hubungi kami via WhatsApp
                           <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                     </div>
                  </div>

                  <div className="flex-1 w-full flex flex-col gap-6">
                     <div className="reveal reveal-right bg-slate-50 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 text-center group hover:bg-white hover:shadow-xl transition-all" style={{ transitionDelay: '100ms' }}>
                        <p className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Hubungi Kami</p>
                        <p className="text-gray-900 text-xl sm:text-2xl font-black mb-2">+62 851-4843-4548</p>
                        <p className="text-gray-500 font-bold">Afifah Fauziyyah</p>
                     </div>
                     <div className="reveal reveal-right bg-slate-50 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 text-center group hover:bg-white hover:shadow-xl transition-all" style={{ transitionDelay: '200ms' }}>
                        <p className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Lokasi Kami</p>
                        <p className="text-gray-600 font-bold leading-relaxed text-sm sm:text-base">
                           Jl. Haji Yasin 10 No. 527 <br /> RT. 09/02 Sukajadi, Bandung
                        </p>
                     </div>
                     <div className="reveal reveal-right bg-slate-50 p-7 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all" style={{ transitionDelay: '300ms' }}>
                        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-6 text-center">Media Sosial & Email</p>
                        <div className="flex flex-col gap-5 sm:gap-6">
                           <a href="https://instagram.com/tamiotakainsight" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg group-hover/item:scale-110 transition-transform">
                                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                 </svg>
                              </div>
                              <div className="flex flex-col">
                                 <span className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Instagram</span>
                                 <span className="text-gray-900 text-sm sm:text-base font-black group-hover/item:text-[#dc2743] transition-colors">@tamiotakainsight</span>
                              </div>
                           </a>

                           <a href="https://tiktok.com/@tamiotakainsight" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center text-white shadow-lg group-hover/item:scale-110 transition-transform">
                                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.12-2.44v7.75c.03 2.37-.87 4.73-2.65 6.29-1.99 1.75-4.99 2.18-7.44 1.14-2.44-1.03-4.14-3.52-4.13-6.17.02-2.31.92-4.66 2.67-6.19 1.9-1.66 4.73-2.1 7.15-1.17.37.14.73.32 1.07.54V.02z" />
                                 </svg>
                              </div>
                              <div className="flex flex-col">
                                 <span className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">TikTok</span>
                                 <span className="text-gray-900 text-sm sm:text-base font-black group-hover/item:text-black transition-colors">tamiotakainsight</span>
                              </div>
                           </a>

                           <a href="mailto:rumahqurantamiotaka@gmail.com" className="flex items-center gap-4 group/item">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f07b22] flex items-center justify-center text-white shadow-lg group-hover/item:scale-110 transition-transform">
                                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                 </svg>
                              </div>
                              <div className="flex flex-col min-w-0">
                                 <span className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Email</span>
                                 <span className="text-gray-900 text-[11px] sm:text-sm font-black group-hover/item:text-[#f07b22] transition-colors break-all leading-tight">rumahqurantamiotaka@gmail.com</span>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <footer className="w-full bg-white py-12 px-6 border-t border-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#f07b22] p-1.5 flex items-center justify-center bg-white">
                     <div className="w-full h-full rounded-full flex items-center justify-center text-[#f07b22]">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                           <circle cx="12" cy="12" r="3" />
                           <ellipse cx="12" cy="12" rx="3" ry="9" />
                           <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(60 12 12)" />
                           <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(120 12 12)" />
                        </svg>
                     </div>
                  </div>
                  <span className="font-black text-gray-900 tracking-tight text-lg">Tami Otaka</span>
               </div>

               <p className="text-gray-400 text-sm font-bold text-center md:text-left">
                  © {new Date().getFullYear()} Rumah Qur’an Tami Otaka Insight. <br className="sm:hidden" /> All rights reserved.
               </p>

               <div className="flex items-center gap-6">
                  <a href="https://instagram.com/tamiotakainsight" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#dc2743] transition-colors">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                     </svg>
                  </a>
                  <a href="https://tiktok.com/@tamiotakainsight" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.12-2.44v7.75c.03 2.37-.87 4.73-2.65 6.29-1.99 1.75-4.99 2.18-7.44 1.14-2.44-1.03-4.14-3.52-4.13-6.17.02-2.31.92-4.66 2.67-6.19 1.9-1.66 4.73-2.1 7.15-1.17.37.14.73.32 1.07.54V.02z" />
                     </svg>
                  </a>
                  <a href="mailto:rumahqurantamiotaka@gmail.com" className="text-gray-400 hover:text-[#f07b22] transition-colors">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                     </svg>
                  </a>
               </div>
            </div>
         </footer>

         {/* Floating WhatsApp Button */}
         <div className="fixed bottom-6 right-6 z-[200]">
            <a
               href="https://wa.me/6285148434548?text=Assalamu%E2%80%99alaikum%20warahmatullahi%20wabarakatuh%20%F0%9F%99%8F%0ASaya%20tertarik%20untuk%20mendaftarkan%20anak%20saya%20pada%20program%20yang%20tersedia.%20Mohon%20informasi%20mengenai%20data%20dan%20persyaratan%20yang%20perlu%20disiapkan.%0ATerima%20kasih%20atas%20bantuannya%20%F0%9F%98%8A"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 group relative overflow-hidden animate-[bounce_3s_infinite] hover:animate-none"
            >
               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.357-3.991c1.551.921 3.321 1.408 5.126 1.409 5.426 0 9.843-4.417 9.845-9.845.001-2.628-1.021-5.1-2.88-6.958s-4.329-2.883-6.953-2.884c-5.429 0-9.845 4.418-9.848 9.846-.001 1.83.479 3.618 1.393 5.181l-1.035 3.774 3.844-1.008zm11.233-7.535c-.29-.145-1.713-.846-1.979-.942-.266-.096-.459-.145-.653.145s-.75.942-.919 1.135-.339.217-.629.072c-.29-.145-1.225-.451-2.333-1.44-.86-.767-1.441-1.714-1.611-2.004-.17-.29-.018-.446.126-.59.13-.13.29-.339.435-.507.145-.17.193-.29.29-.483s.048-.386-.024-.531c-.072-.145-.653-1.572-.895-2.152-.234-.567-.473-.489-.653-.498-.17-.008-.362-.009-.554-.009s-.507.072-.773.362c-.266.29-1.015.991-1.015 2.417s1.039 2.798 1.184 2.991c.145.193 2.043 3.12 4.945 4.375.69.298 1.23.476 1.65.61.693.22 1.324.189 1.823.115.557-.083 1.713-.699 1.954-1.376.242-.676.242-1.256.17-1.376-.072-.121-.266-.193-.556-.338z" />
               </svg>
            </a>
         </div>
      </main>
   );
}
