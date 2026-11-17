import React from 'react';
import { IoTHomeLogoMark } from './ProductArtwork';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2.5">
              <IoTHomeLogoMark className="w-7 h-7" />
              <span className="font-display text-lg font-bold text-white">IoTHome</span>
            </div>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">
              Your Smart Living Partner — Wujudkan Smart Home impianmu dengan mudah, aman,
              dan hemat energi bersama IoTHome.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#dashboard" className="hover:text-white transition-colors">
              Dashboard Kontrol
            </a>
            <a href="#katalog" className="hover:text-white transition-colors">
              Katalog Produk
            </a>
            <a href="#cara-kerja" className="hover:text-white transition-colors">
              Cara Kerja
            </a>
            <a href="#testimoni" className="hover:text-white transition-colors">
              Testimoni
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IoTHome Indonesia. Seluruh hak cipta dilindungi.</p>
          <p>Layanan Pelanggan: Senin – Minggu, 08:00 – 21:00 WIB · Garansi Resmi 2 Tahun</p>
        </div>
      </div>
    </footer>
  );
};
