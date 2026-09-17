import React from 'react';
import { Languages, ShieldCheck } from 'lucide-react';
import { languages, Language, useI18n } from '../i18n';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#f3f4ec]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-4 sm:px-8 lg:px-10">
        <a href="#accueil" aria-label={t('home')} className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#234c42] text-white shadow-md sm:h-10 sm:w-10"><ShieldCheck className="h-5 w-5" /></span>
          <span className="whitespace-nowrap text-base font-black tracking-tight text-slate-950 sm:text-xl">Authentif<span className="text-[#234c42]">cash</span></span>
        </a>
        <nav className="flex shrink-0 items-center gap-3">
          <a href="#solutions" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800 md:block">{t('services')}</a>
          <a href="#demande" className="hidden rounded-full bg-[#234c42] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#173b32] md:block">{t('requestTitle')}</a>
          <div className="relative flex items-center">
            <Languages className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <label htmlFor="language-selector" className="sr-only">{t('language')}</label>
            <select id="language-selector" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="w-[4.5rem] cursor-pointer rounded-full border border-slate-200 bg-white py-2.5 pl-8 pr-6 text-xs font-bold text-slate-700 outline-none transition hover:border-slate-300 focus:ring-2 focus:ring-emerald-200 sm:w-auto sm:pl-9 sm:pr-8" aria-label={t('language')}>
              {languages.map(({ code, label, short }) => <option key={code} value={code}>{short} — {label}</option>)}
            </select>
          </div>
        </nav>
      </div>
      <nav aria-label={t('quickLinks')} className="flex border-t border-slate-200/60 px-3 md:hidden">
        <a href="#accueil" className="flex-1 px-2 py-3 text-center text-xs font-semibold text-slate-600">{t('home')}</a>
        <a href="#solutions" className="flex-1 px-2 py-3 text-center text-xs font-semibold text-slate-600">{t('services')}</a>
        <a href="#demande" className="flex-1 px-2 py-3 text-center text-xs font-bold text-emerald-800">{t('support')}</a>
      </nav>
    </header>
  );
};

export default Header;
