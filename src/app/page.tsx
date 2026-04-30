"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <nav className={`sticky top-0 z-[100] w-full transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
            : 'bg-transparent py-6'
         }`}>
         <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
               <div className="w-10 h-10 rounded-2xl bg-[#f07b22] flex items-center justify-center text-white font-black text-lg transition-transform group-hover:scale-110">
                  TO
               </div>
               <span className="font-black text-gray-900 tracking-tight text-xl">Tami Otaka</span>
            </div>

            {/* Menu */}
            <div className="hidden lg:flex items-center gap-10">
               {[
                  { name: 'Visi Misi', href: '#visi-misi' },
                  { name: 'Keunggulan', href: '#keunggulan' },
                  { name: 'Biaya', href: '#biaya' },
                  { name: 'Daftar', href: '#pendaftaran' }
               ].map((item, idx) => (
                  <a key={idx} href={item.href} className="text-sm font-bold text-gray-600 hover:text-[#f07b22] transition-colors uppercase tracking-wider">
                     {item.name}
                  </a>
               ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
               <a 
                  href="https://wa.me/6283879230148?text=Halo%2C%20saya%20ingin%20mendaftar%20program%20Tami%20Otaka.%0A%0ANama%20Lengkap%3A%0AUsia%20Anak%3A%0ANama%20Orang%20Tua%3A%0ADomisili%3A%0ATarget%20Program%3A%0A%0AMohon%20info%20selanjutnya%20%F0%9F%99%8F" 
                  target="_blank"
                  className="bg-[#8cc63f] text-white text-xs sm:text-sm font-black px-6 py-3 rounded-full shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
               >
                  DAFTAR SEKARANG
               </a>
            </div>
         </div>
      </nav>
   );
};

export default function Home() {
   return (
      <main className="w-full min-h-screen bg-gray-50 font-sans flex flex-col text-gray-800">
         <Navbar />

         <section className="w-full bg-white relative pt-20 pb-24 lg:pt-28 lg:pb-36 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
               
               {/* Left: Content */}
               <div className="flex-1 text-center lg:text-left">
                  <div className="inline-block px-4 py-2 bg-orange-50 text-[#f07b22] rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-orange-100">
                     Habrul Ummah Indonesia
                  </div>
                  <h1 className="text-gray-900 font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8">
                     Bahagia & <br />
                     <span className="text-[#f07b22]">Berakhlak Mulia</span> <br />
                     Bersama Al-Qur&apos;an
                  </h1>
                  <p className="text-gray-500 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                     Lembaga Kursus Profesional yang membina anak-anak menjadi generasi pecinta Al-Qur&apos;an dengan metode Otak Kanan yang menyenangkan.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                     <a 
                        href="https://wa.me/6283879230148?text=Halo%2C%20saya%20ingin%20mendaftar%20program%20Tami%20Otaka.%0A%0ANama%20Lengkap%3A%0AUsia%20Anak%3A%0ANama%20Orang%20Tua%3A%0ADomisili%3A%0ATarget%20Program%3A%0A%0AMohon%20info%20selanjutnya%20%F0%9F%99%8F"
                        target="_blank"
                        className="w-full sm:w-auto bg-[#8cc63f] text-white font-black text-lg px-10 py-5 rounded-full shadow-2xl shadow-green-200 hover:scale-105 hover:-translate-y-1 transition-all active:scale-95 text-center flex items-center justify-center gap-3"
                     >
                        DAFTAR VIA WA
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.357-3.991c1.551.921 3.321 1.408 5.126 1.409 5.426 0 9.843-4.417 9.845-9.845.001-2.628-1.021-5.1-2.88-6.958s-4.329-2.883-6.953-2.884c-5.429 0-9.845 4.418-9.848 9.846-.001 1.83.479 3.618 1.393 5.181l-1.035 3.774 3.844-1.008zm11.233-7.535c-.29-.145-1.713-.846-1.979-.942-.266-.096-.459-.145-.653.145s-.75.942-.919 1.135-.339.217-.629.072c-.29-.145-1.225-.451-2.333-1.44-.86-.767-1.441-1.714-1.611-2.004-.17-.29-.018-.446.126-.59.13-.13.29-.339.435-.507.145-.17.193-.29.29-.483s.048-.386-.024-.531c-.072-.145-.653-1.572-.895-2.152-.234-.567-.473-.489-.653-.498-.17-.008-.362-.009-.554-.009s-.507.072-.773.362c-.266.29-1.015.991-1.015 2.417s1.039 2.798 1.184 2.991c.145.193 2.043 3.12 4.945 4.375.69.298 1.23.476 1.65.61.693.22 1.324.189 1.823.115.557-.083 1.713-.699 1.954-1.376.242-.676.242-1.256.17-1.376-.072-.121-.266-.193-.556-.338z"/></svg>
                     </a>
                     <a 
                        href="https://wa.me/6283879230148?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20program%20Tami%20Otaka.%0A%0ASaya%20ingin%20bertanya%3A"
                        target="_blank"
                        className="w-full sm:w-auto bg-gray-50 text-gray-700 font-bold text-lg px-10 py-5 rounded-full border border-gray-200 hover:bg-gray-100 transition-all text-center"
                     >
                        Tanya Program
                     </a>
                  </div>
               </div>

               {/* Right: Visual */}
               <div className="flex-1 relative w-full lg:max-w-xl">
                  <div className="relative bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 border border-gray-100 overflow-hidden group">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-[10rem] -z-10 transition-transform group-hover:scale-110"></div>
                     
                     <div className="flex items-center gap-4 mb-10">
                        <div className="w-16 h-16 bg-[#f07b22] rounded-2xl flex items-center justify-center text-white font-black text-2xl">TO</div>
                        <div>
                           <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Enrollment</p>
                           <p className="text-gray-900 font-extrabold text-2xl">Menerima Siswa Baru</p>
                        </div>
                     </div>

                     <div className="space-y-6">
                        <div className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100">
                           <span className="font-bold text-gray-500">Tahun Ajaran</span>
                           <span className="font-black text-[#f07b22]">2025 / 2026</span>
                        </div>
                        <div className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100">
                           <span className="font-bold text-gray-500">Kategori</span>
                           <span className="bg-yellow-400 text-green-900 px-4 py-2 rounded-xl text-xs font-black">TK & SD</span>
                        </div>
                        <div className="p-8 bg-[#8cc63f] text-white rounded-[2rem] text-center shadow-xl shadow-green-100">
                           <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest">Target Hafalan</p>
                           <p className="text-3xl font-black">JUZ 30 MUTQIN</p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Decorative blobs */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ebc439]/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8cc63f]/20 rounded-full blur-3xl -z-10"></div>
               </div>
            </div>
         </section>

         <section id="visi-misi" className="w-full bg-slate-50 py-24 lg:py-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20 px-2 lg:px-0">
                  <div className="flex-1 text-center lg:text-left">
                     <h3 className="text-[#f07b22] font-black uppercase tracking-[0.2em] text-sm mb-4">Visi Kami</h3>
                     <h2 className="text-gray-900 text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                        Fokus Kami: Membentuk Generasi Berakhlak Mulia
                     </h2>
                     <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Menjadi Lembaga Kursus Profesional dan terpecaya dalam membina anak-anak dengan Al Quran berbasis Otak Kanan yang inovatif.
                     </p>
                  </div>
                  <div className="flex-1 flex justify-center lg:justify-end">
                     <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-[3rem] bg-gradient-to-br from-[#f07b22] to-yellow-400 flex items-center justify-center text-white font-black text-6xl shadow-2xl relative">
                        <span className="relative z-10">TAMI</span>
                        <div className="absolute inset-0 bg-white/10 rounded-[3rem] backdrop-blur-sm -rotate-6 scale-105 -z-10"></div>
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
                     <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                        <div className="text-4xl mb-6 group-hover:scale-125 transition-transform inline-block">{item.icon}</div>
                        <h4 className="text-gray-900 font-extrabold text-xl mb-4">{item.title}</h4>
                        <p className="text-gray-500 text-sm font-semibold leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section id="keunggulan" className="w-full bg-white py-24 lg:py-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-20">
                  <h3 className="text-[#f07b22] font-black uppercase tracking-[0.2em] text-sm mb-4">Kenapa Memilih Kami</h3>
                  <h2 className="text-gray-900 text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Keunggulan Program Kami</h2>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
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
                     <div key={idx} className="flex gap-6 p-2 group hover:-translate-y-1 transition-all">
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

         <section id="biaya" className="w-full bg-slate-50 py-24 md:py-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               <div className="flex-1 lg:pr-10">
                  <h2 className="text-gray-900 text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                     Investasi Untuk <br />
                     <span className="text-[#f07b22]">Masa Depan</span> Anak
                  </h2>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">
                     Tami OTAKA EduQur&apos;an Therapist menggunakan konsep Pembelajaran Al-Qur&apos;an khas OTAK KANAN berbasis Terapi Emosi yang membantu menembus ke hati anak.
                  </p>
                  <div className="bg-[#8cc63f]/10 border border-[#8cc63f]/20 rounded-3xl p-8 flex items-center gap-6">
                     <div className="text-4xl text-[#8cc63f]">🕊️</div>
                     <p className="text-green-800 font-bold text-lg italic">
                        &quot;Khusus untuk anak Yatim & Dhuafa, seluruh program kami berikan secara <span className="underline decoration-wavy decoration-[#8cc63f] underline-offset-4">GRATIS</span>.&quot;
                     </p>
                  </div>
               </div>

               <div className="flex-1 w-full max-w-lg lg:max-w-none">
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
                        href="https://wa.me/6283879230148?text=Halo%2C%20saya%20ingin%20mendaftar%20program%20Tami%20Otaka.%0A%0ANama%20Lengkap%3A%0AUsia%20Anak%3A%0ANama%20Orang%20Tua%3A%0ADomisili%3A%0ATarget%20Program%3A%0A%0AMohon%20info%20selanjutnya%20%F0%9F%99%8F"
                        target="_blank"
                        className="mt-12 block w-full bg-[#f07b22] text-white font-black py-5 rounded-2xl text-center shadow-xl shadow-orange-100 hover:bg-[#e06b12] hover:shadow-2xl transition-all"
                     >
                        KLAIM SLOT SEKARANG
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <section className="w-full bg-white py-24 lg:py-32 px-4 md:px-8 border-t border-gray-50">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16">
                  <h3 className="text-[#8cc63f] font-black uppercase tracking-[0.2em] text-sm mb-4">Kebanggaan Kami</h3>
                  <h2 className="text-gray-900 text-4xl lg:text-5xl font-extrabold mb-6">Daftar Wisuda Tahfidz</h2>
                  <p className="text-gray-500 text-lg font-medium">Siswa-siswi berprestasi yang telah menyelesaikan hafalan Juz 29 & 30.</p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     { name: "Nafisa Khoirunnisa", juz: "Wisuda Juz 29 & 30" },
                     { name: "Alfina Sayyidatul Bariyyah", juz: "Wisuda Juz 29 & 30" },
                     { name: "Syifa Denishfira", juz: "Wisuda Juz 30" },
                     { name: "Najla Syafiqa Rachman", juz: "Wisuda Juz 30" },
                     { name: "Razkha Ramadhan Kurnia", juz: "Wisuda Juz 30" },
                     { name: "Siska Retna Nurijati", juz: "Wisuda Juz 30" },
                     { name: "Gharra Fawwaz Aika Fi Darain", juz: "Wisuda Juz 30" },
                     { name: "Nigella Amaranggana Kayashas", juz: "Wisuda Juz 30" },
                     { name: "Fatih Khoirul Anwar", juz: "Wisuda Juz 30" },
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-5 bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 rounded-full bg-white border shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                           🏆
                        </div>
                        <div>
                           <p className="font-extrabold text-gray-900 group-hover:text-[#f07b22] transition-colors">{item.name}</p>
                           <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">{item.juz}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section id="pendaftaran" className="w-full bg-slate-900 py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f07b22]/10 blur-3xl -z-0"></div>
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="bg-white rounded-[4rem] p-10 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-green-50 rounded-br-full -z-10"></div>
                  
                  <div className="flex-1">
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
                           href="https://wa.me/6283879230148?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20program%20Tami%20Otaka.%0A%0ASaya%20ingin%20bertanya%3A"
                           target="_blank"
                           className="inline-flex items-center gap-2 text-[#8cc63f] font-black hover:text-[#7ebd34] transition-colors group"
                        >
                           Hubungi kami via WhatsApp 
                           <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                     </div>
                  </div>

                  <div className="flex-1 w-full flex flex-col gap-6">
                     <div className="bg-slate-50 p-10 rounded-[3rem] border border-gray-100 text-center group hover:bg-white hover:shadow-xl transition-all">
                        <p className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Hubungi Kami</p>
                        <p className="text-gray-900 text-2xl font-black mb-2">+62 838-7923-0148</p>
                        <p className="text-gray-500 font-bold">Afifah Fauziyyah</p>
                     </div>
                     <div className="bg-slate-50 p-10 rounded-[3rem] border border-gray-100 text-center group hover:bg-white hover:shadow-xl transition-all">
                        <p className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Lokasi Kami</p>
                        <p className="text-gray-600 font-bold leading-relaxed">
                           Jl. Haji Yasin 10 No. 527 <br /> RT. 09/02 Sukajadi, Bandung
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Floating WhatsApp Button */}
         <div className="fixed bottom-6 right-6 z-[200]">
            <a 
               href="https://wa.me/6283879230148?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20program%20Tami%20Otaka.%0A%0ASaya%20ingin%20bertanya%3A" 
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 group relative overflow-hidden animate-[bounce_3s_infinite] hover:animate-none"
            >
               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.357-3.991c1.551.921 3.321 1.408 5.126 1.409 5.426 0 9.843-4.417 9.845-9.845.001-2.628-1.021-5.1-2.88-6.958s-4.329-2.883-6.953-2.884c-5.429 0-9.845 4.418-9.848 9.846-.001 1.83.479 3.618 1.393 5.181l-1.035 3.774 3.844-1.008zm11.233-7.535c-.29-.145-1.713-.846-1.979-.942-.266-.096-.459-.145-.653.145s-.75.942-.919 1.135-.339.217-.629.072c-.29-.145-1.225-.451-2.333-1.44-.86-.767-1.441-1.714-1.611-2.004-.17-.29-.018-.446.126-.59.13-.13.29-.339.435-.507.145-.17.193-.29.29-.483s.048-.386-.024-.531c-.072-.145-.653-1.572-.895-2.152-.234-.567-.473-.489-.653-.498-.17-.008-.362-.009-.554-.009s-.507.072-.773.362c-.266.29-1.015.991-1.015 2.417s1.039 2.798 1.184 2.991c.145.193 2.043 3.12 4.945 4.375.69.298 1.23.476 1.65.61.693.22 1.324.189 1.823.115.557-.083 1.713-.699 1.954-1.376.242-.676.242-1.256.17-1.376-.072-.121-.266-.193-.556-.338z"/>
               </svg>
            </a>
         </div>
      </main>
   );
}
