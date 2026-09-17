import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, BadgeCheck, Clock3, Headphones, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';
import { useI18n } from '../i18n';

const HomePage: React.FC = () => {
  const { t } = useI18n();
  const [activeMethod, setActiveMethod] = useState(2);
  const methods = [
    { image: '/images/zola.png', title: 'Apple Card', description: t('appleDesc') },
    { image: 'https://s3.eu-central-1.amazonaws.com/strapi.dundle.com/ou_et_comment_acheter_carte_neosurf_en_ligne_image_dundle_169bb11d25.png', title: 'Neosurf', description: t('neosurfDesc') },
    { image: '/images/zero.png', title: 'TransCash', description: t('transcashDesc') },
    { image: '/images/zazi.png', title: 'Steam Card', description: t('steamDesc') },
    { image: '/images/ziza.png', title: 'Google Play', description: t('googleDesc') },
    { image: '/images/zeze.png', title: 'Paysafecard', description: t('paysafeDesc') },
  ];
  const guarantees = [
    { icon: Clock3, text: t('guarantee1') }, { icon: LockKeyhole, text: t('guarantee2') },
    { icon: BadgeCheck, text: t('guarantee3') }, { icon: Headphones, text: t('guarantee4') },
  ];

  return (
    <div className="site-shell">
      <Header />
      <main id="accueil">
        <section className="new-hero">
          <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
          <motion.div className="hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="eyebrow"><Sparkles size={15} /> Authentifcash · {t('support')}</span>
            <h1>{t('heroTitle')}</h1>
            <p>{t('heroText')}</p>
            <div className="hero-actions">
              <a href="#demande" className="primary-link">{t('requestTitle')} <ArrowDown size={18} /></a>
              <a href="#solutions" className="secondary-link">{t('services')} <span aria-hidden="true">↗</span></a>
            </div>
          </motion.div>
          <div className="brand-strip" aria-label={t('methodsTitle')}>
            {methods.map((method, index) => <a href="#solutions" key={method.title} onClick={() => setActiveMethod(index)}><span aria-hidden="true">✳</span>{method.title}</a>)}
          </div>
        </section>

        <section id="solutions" className="solutions-section page-width">
          <div className="section-heading"><div><span className="section-index">01 / {t('services')}</span><h2>{t('methodsTitle')}</h2></div><p>{t('methodsText')}</p></div>
          <div className="services-layout">
            <div className="method-list" role="group" aria-label={t('methodsTitle')}>
              {methods.map((method, index) => <button type="button" key={method.title} aria-pressed={activeMethod === index} aria-controls="method-preview" onClick={() => setActiveMethod(index)} className={`method-row ${activeMethod === index ? 'is-active' : ''}`}><span className="method-number">0{index + 1}</span><span>{method.title}</span><span className="method-arrow" aria-hidden="true">↗</span></button>)}
            </div>
            <div id="method-preview" className="method-preview" aria-live="polite" aria-atomic="true">
              <div className="preview-top"><span>{t('payment')}</span><span>0{activeMethod + 1} / 06</span></div>
              <motion.div key={methods[activeMethod].title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }}>
                <img src={methods[activeMethod].image} alt={methods[activeMethod].title} />
                <div className="preview-caption"><h3>{methods[activeMethod].title}</h3><p>{methods[activeMethod].description}</p></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="page-width"><span className="section-index">02 / {t('guarantees')}</span><div className="benefits-grid">{guarantees.map(({ icon: Icon, text }, index) => <motion.div key={text} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }}><Icon size={26} /><p>{text}</p></motion.div>)}</div></div>
        </section>

        <section id="demande" className="request-section page-width">
          <div className="request-heading"><span className="section-index">03 / {t('support')}</span><h2>{t('formSectionTitle')}</h2><p>{t('formSectionText')}</p><div className="request-note"><ShieldCheck size={23} /><span>{t('requestIntro')}</span></div></div>
          <motion.div className="request-panel" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><AuthForm /></motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
