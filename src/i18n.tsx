/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "fr" | "en" | "de" | "it" | "es" | "el" | "pt" | "lt";

export const languages: { code: Language; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "es", label: "Español", short: "ES" },
  { code: "el", label: "Ελληνικά", short: "EL" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "lt", label: "Lietuvių", short: "LT" },
];

const fr = {
  home: "Accueil", language: "Langue", heroTitle: "Authentifie ton ticket Transcash ou autre.",
  heroText: "Votre plateforme de confiance pour une assistance sécurisée concernant Transcash, Neosurf, Apple Gift Card, Steam Card, Google Play Card et Paysafecard.",
  heroAlt: "Moyens de paiement numériques", methodsTitle: "Méthodes de paiement acceptées",
  methodsText: "Choisissez parmi notre large gamme d’options de paiement sécurisées",
  appleDesc: "Un outil de paiement simple, sécurisé et personnalisé pour vos achats quotidiens.",
  neosurfDesc: "Avec Neosurf, profitez d’une expérience de paiement simple et sécurisée, où que vous soyez.",
  transcashDesc: "Bienvenue chez Transcash, la solution de paiement facile et sécurisée sans banque.",
  steamDesc: "Obtenez de l’aide concernant votre carte cadeau Steam et sa référence.",
  googleDesc: "Signalez un problème lié à votre carte cadeau Google Play en toute sécurité.",
  paysafeDesc: "Recevez de l’assistance pour l'authentification de vôtre carte Paysafecard.",
  formSectionTitle: "Soumettez vos détails de recharge", formSectionText: "Remplissez le formulaire ci-dessous pour traiter votre recharge. Nous vous enverrons une confirmation à votre adresse e-mail une fois terminé.",
  guarantees: "Nos garanties", guarantee1: "Traitement instantané de votre recharge", guarantee2: "Options de paiement sécurisées multiples", guarantee3: "Confirmation par e-mail pour toutes les transactions", guarantee4: "Support client 24 h/24, 7 j/7",
  requestTitle: "Demande d’assistance", requestIntro: "Renseignez les informations demandées.",
  fullName: "Nom et prénom", fullNamePlaceholder: "Votre pseudo ou nom complet", email: "Adresse e-mail", payment: "Moyen de paiement concerné", select: "Sélectionnez une option", other: "Autre", amount: "Montant concerné", amountPlaceholder: "Exemple : 50", reference: "Saisissez les 12 caractères de la référence", referencePlaceholder: "Exemple : 254785496584", consent: "J’accepte que mes informations soient utilisées pour traiter ma demande.", sending: "Envoi en cours…", send: "Envoyer ma demande", success: "Votre demande a bien été envoyée.", error: "Votre demande n’a pas pu être envoyée. Veuillez réessayer.", bot: "Ne remplissez pas ce champ :",
  footerText: "Simplification de la gestion des recharges grâce à un service sécurisé et fiable depuis 2023.", quickLinks: "Liens rapides", about: "À propos", services: "Services", blogs: "Blog", faq: "FAQ", support: "Assistance", help: "Centre d’aide", terms: "Conditions d’utilisation", privacy: "Politique de confidentialité", contact: "Nous contacter", contactInfo: "Coordonnées", rights: "Tous droits réservés."
};

type TranslationKey = keyof typeof fr;
type Translation = Record<TranslationKey, string>;

const en: Translation = {
  home: "Home", language: "Language", heroTitle: "Check your Transcash ticket or another voucher.", heroText: "Your trusted platform for secure assistance with TransCash, Neosurf, Apple Gift Card, Steam Card, Google Play Card and Paysafecard.", heroAlt: "Digital payment methods", methodsTitle: "Accepted payment methods", methodsText: "Choose from our wide range of secure payment options", appleDesc: "A simple, secure and personalised payment tool for your everyday purchases.", neosurfDesc: "With Neosurf, enjoy a simple and secure payment experience wherever you are.", transcashDesc: "Welcome to TransCash, the easy and secure bank-free payment solution!", steamDesc: "Get help with your Steam gift card and its reference.", googleDesc: "Report an issue with your Google Play gift card securely.", paysafeDesc: "Get assistance with your payment or Paysafecard.", formSectionTitle: "Submit your top-up details", formSectionText: "Complete the form below to process your top-up. We will send a confirmation to your email address once completed.", guarantees: "Our guarantees", guarantee1: "Instant processing of your top-up", guarantee2: "Multiple secure payment options", guarantee3: "Email confirmation for every transaction", guarantee4: "24/7 customer support", requestTitle: "Support request", requestIntro: "Enter the requested information without sharing your full code or PIN.", fullName: "Full name", fullNamePlaceholder: "Your username or full name", email: "Email address", payment: "Payment method concerned", select: "Select an option", other: "Other", amount: "Amount concerned", amountPlaceholder: "Example: 50", reference: "Enter all 12 characters of the reference", referencePlaceholder: "Example: 254785496584", consent: "I agree that my information may be used to process my request.", sending: "Sending…", send: "Send my request", success: "Your request has been sent successfully.", error: "Your request could not be sent. Please try again.", bot: "Do not fill in this field:", footerText: "Making top-up management easier with a secure and reliable service since 2023.", quickLinks: "Quick links", about: "About us", services: "Services", blogs: "Blog", faq: "FAQ", support: "Support", help: "Help centre", terms: "Terms of service", privacy: "Privacy policy", contact: "Contact us", contactInfo: "Contact details", rights: "All rights reserved."
};

const de: Translation = {
  home: "Startseite", language: "Sprache", heroTitle: "Prüfen Sie Ihr Transcash-Ticket oder einen anderen Gutschein.", heroText: "Ihre vertrauenswürdige Plattform für sichere Hilfe zu TransCash, Neosurf, Apple Gift Card, Steam Card, Google Play Card und Paysafecard.", heroAlt: "Digitale Zahlungsmethoden", methodsTitle: "Akzeptierte Zahlungsmethoden", methodsText: "Wählen Sie aus unserem breiten Angebot sicherer Zahlungsoptionen", appleDesc: "Ein einfaches, sicheres und personalisiertes Zahlungsmittel für Ihre täglichen Einkäufe.", neosurfDesc: "Mit Neosurf bezahlen Sie überall einfach und sicher.", transcashDesc: "Willkommen bei TransCash, der einfachen und sicheren Zahlungslösung ohne Bank!", steamDesc: "Erhalten Sie Hilfe zu Ihrer Steam-Geschenkkarte und deren Referenz.", googleDesc: "Melden Sie sicher ein Problem mit Ihrer Google-Play-Geschenkkarte.", paysafeDesc: "Erhalten Sie Hilfe zu Ihrer Zahlung oder Paysafecard.", formSectionTitle: "Guthabendaten übermitteln", formSectionText: "Füllen Sie das folgende Formular aus. Nach Abschluss senden wir eine Bestätigung an Ihre E-Mail-Adresse.", guarantees: "Unsere Garantien", guarantee1: "Sofortige Bearbeitung Ihrer Aufladung", guarantee2: "Mehrere sichere Zahlungsoptionen", guarantee3: "E-Mail-Bestätigung für alle Transaktionen", guarantee4: "Kundendienst rund um die Uhr", requestTitle: "Supportanfrage", requestIntro: "Geben Sie die angeforderten Informationen ein, ohne Ihren vollständigen Code oder Ihre PIN mitzuteilen.", fullName: "Vor- und Nachname", fullNamePlaceholder: "Benutzername oder vollständiger Name", email: "E-Mail-Adresse", payment: "Betroffene Zahlungsmethode", select: "Option auswählen", other: "Andere", amount: "Betroffener Betrag", amountPlaceholder: "Beispiel: 50", reference: "Alle 12 Zeichen der Referenz eingeben", referencePlaceholder: "Beispiel: 254785496584", consent: "Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.", sending: "Wird gesendet…", send: "Anfrage senden", success: "Ihre Anfrage wurde erfolgreich gesendet.", error: "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.", bot: "Dieses Feld nicht ausfüllen:", footerText: "Einfache Verwaltung von Aufladungen durch einen sicheren und zuverlässigen Service seit 2023.", quickLinks: "Schnelllinks", about: "Über uns", services: "Leistungen", blogs: "Blog", faq: "FAQ", support: "Support", help: "Hilfe-Center", terms: "Nutzungsbedingungen", privacy: "Datenschutz", contact: "Kontakt", contactInfo: "Kontaktdaten", rights: "Alle Rechte vorbehalten."
};

const itUpdated: Translation = { ...en,
  home: "Home", language: "Lingua", heroTitle: "Verifica il tuo ticket Transcash o un altro buono.", heroText: "La tua piattaforma di fiducia per un’assistenza sicura su TransCash, Neosurf, Apple Gift Card, Steam Card, Google Play Card e Paysafecard.", heroAlt: "Metodi di pagamento digitali", methodsTitle: "Metodi di pagamento accettati", methodsText: "Scegli tra la nostra vasta gamma di opzioni di pagamento sicure", appleDesc: "Uno strumento di pagamento semplice, sicuro e personalizzato per gli acquisti quotidiani.", neosurfDesc: "Con Neosurf, paga in modo semplice e sicuro ovunque ti trovi.", transcashDesc: "Benvenuto su TransCash, la soluzione di pagamento facile e sicura senza banca!", steamDesc: "Ricevi assistenza per la tua carta regalo Steam e il suo riferimento.", googleDesc: "Segnala in sicurezza un problema con la tua carta regalo Google Play.", paysafeDesc: "Ricevi assistenza per il pagamento o la Paysafecard.", formSectionTitle: "Invia i dettagli della ricarica", formSectionText: "Compila il modulo seguente per elaborare la ricarica. Al termine invieremo una conferma al tuo indirizzo e-mail.", guarantees: "Le nostre garanzie", guarantee1: "Elaborazione immediata della ricarica", guarantee2: "Diverse opzioni di pagamento sicure", guarantee3: "Conferma via e-mail per tutte le transazioni", guarantee4: "Assistenza clienti 24/7", requestTitle: "Richiesta di assistenza", requestIntro: "Inserisci le informazioni richieste senza comunicare il codice completo o il PIN.", fullName: "Nome e cognome", fullNamePlaceholder: "Nome utente o nome completo", email: "Indirizzo e-mail", payment: "Metodo di pagamento interessato", select: "Seleziona un’opzione", other: "Altro", amount: "Importo interessato", amountPlaceholder: "Esempio: 50", reference: "Inserisci tutti i 12 caratteri del riferimento", referencePlaceholder: "Esempio: 254785496584", consent: "Accetto che i miei dati siano utilizzati per elaborare la richiesta.", sending: "Invio…", send: "Invia la richiesta", success: "La richiesta è stata inviata correttamente.", error: "Impossibile inviare la richiesta. Riprova.", bot: "Non compilare questo campo:", footerText: "Gestione semplificata delle ricariche con un servizio sicuro e affidabile dal 2023.", quickLinks: "Link rapidi", about: "Chi siamo", services: "Servizi", blogs: "Blog", faq: "FAQ", support: "Assistenza", help: "Centro assistenza", terms: "Termini di servizio", privacy: "Informativa sulla privacy", contact: "Contattaci", contactInfo: "Contatti", rights: "Tutti i diritti riservati."
};

const es: Translation = {
  home: "Inicio", language: "Idioma", heroTitle: "Verifica tu ticket Transcash u otro vale.", heroText: "Tu plataforma de confianza para recibir asistencia segura sobre TransCash, Neosurf, Apple Gift Card, Steam Card, Google Play Card y Paysafecard.", heroAlt: "Métodos de pago digitales", methodsTitle: "Métodos de pago aceptados", methodsText: "Elige entre nuestra amplia gama de opciones de pago seguras", appleDesc: "Una herramienta de pago sencilla, segura y personalizada para tus compras diarias.", neosurfDesc: "Con Neosurf, disfruta de pagos sencillos y seguros estés donde estés.", transcashDesc: "¡Bienvenido a TransCash, la solución de pago fácil y segura sin banco!", steamDesc: "Obtén ayuda con tu tarjeta regalo Steam y su referencia.", googleDesc: "Informa de forma segura sobre un problema con tu tarjeta regalo Google Play.", paysafeDesc: "Recibe asistencia con tu pago o Paysafecard.", formSectionTitle: "Envía los datos de tu recarga", formSectionText: "Completa el formulario para procesar tu recarga. Te enviaremos una confirmación por correo electrónico cuando termine.", guarantees: "Nuestras garantías", guarantee1: "Procesamiento instantáneo de tu recarga", guarantee2: "Varias opciones de pago seguras", guarantee3: "Confirmación por correo de todas las transacciones", guarantee4: "Atención al cliente 24/7", requestTitle: "Solicitud de asistencia", requestIntro: "Introduce la información solicitada sin compartir el código completo ni el PIN.", fullName: "Nombre y apellidos", fullNamePlaceholder: "Tu usuario o nombre completo", email: "Correo electrónico", payment: "Método de pago afectado", select: "Selecciona una opción", other: "Otro", amount: "Importe afectado", amountPlaceholder: "Ejemplo: 50", reference: "Introduce los 12 caracteres de la referencia", referencePlaceholder: "Ejemplo: 254785496584", consent: "Acepto que mis datos se utilicen para tramitar mi solicitud.", sending: "Enviando…", send: "Enviar mi solicitud", success: "Tu solicitud se ha enviado correctamente.", error: "No se ha podido enviar tu solicitud. Inténtalo de nuevo.", bot: "No rellenes este campo:", footerText: "Simplificamos la gestión de recargas con un servicio seguro y fiable desde 2023.", quickLinks: "Enlaces rápidos", about: "Sobre nosotros", services: "Servicios", blogs: "Blog", faq: "FAQ", support: "Asistencia", help: "Centro de ayuda", terms: "Condiciones del servicio", privacy: "Política de privacidad", contact: "Contacto", contactInfo: "Datos de contacto", rights: "Todos los derechos reservados."
};

const el: Translation = { ...en };

const pt: Translation = {
  home: "Início", language: "Idioma", heroTitle: "Verifique o seu ticket Transcash ou outro vale.",
  heroText: "A sua plataforma de confiança para assistência segura com TransCash, Neosurf, Apple Gift Card, Steam Card, Google Play Card e Paysafecard.",
  heroAlt: "Métodos de pagamento digitais", methodsTitle: "Métodos de pagamento aceites",
  methodsText: "Escolha entre a nossa vasta gama de opções de pagamento seguras",
  appleDesc: "Uma ferramenta de pagamento simples, segura e personalizada para as suas compras diárias.",
  neosurfDesc: "Com a Neosurf, desfrute de uma experiência de pagamento simples e segura onde quer que esteja.",
  transcashDesc: "Bem-vindo à TransCash, a solução de pagamento fácil e segura sem banco.",
  steamDesc: "Obtenha ajuda com o seu cartão-presente Steam e a respetiva referência.",
  googleDesc: "Comunique com segurança um problema com o seu cartão-presente Google Play.",
  paysafeDesc: "Receba assistência com o seu pagamento ou Paysafecard.",
  formSectionTitle: "Envie os dados da sua recarga",
  formSectionText: "Preencha o formulário abaixo para processar a sua recarga. Enviaremos uma confirmação para o seu endereço de e-mail quando terminar.",
  guarantees: "As nossas garantias", guarantee1: "Processamento imediato da sua recarga",
  guarantee2: "Várias opções de pagamento seguras", guarantee3: "Confirmação por e-mail para todas as transações",
  guarantee4: "Apoio ao cliente 24 horas por dia, 7 dias por semana", requestTitle: "Pedido de assistência",
  requestIntro: "Introduza as informações solicitadas sem partilhar o código completo ou o PIN.",
  fullName: "Nome completo", fullNamePlaceholder: "O seu nome de utilizador ou nome completo",
  email: "Endereço de e-mail", payment: "Método de pagamento em causa", select: "Selecione uma opção",
  other: "Outro", amount: "Montante em causa", amountPlaceholder: "Exemplo: 50",
  reference: "Introduza os 12 caracteres da referência", referencePlaceholder: "Exemplo: 254785496584",
  consent: "Aceito que as minhas informações sejam utilizadas para processar o meu pedido.",
  sending: "A enviar…", send: "Enviar o meu pedido", success: "O seu pedido foi enviado com sucesso.",
  error: "Não foi possível enviar o seu pedido. Tente novamente.", bot: "Não preencha este campo:",
  footerText: "Gestão simplificada de recargas com um serviço seguro e fiável desde 2023.",
  quickLinks: "Links rápidos", about: "Sobre nós", services: "Serviços", blogs: "Blog", faq: "FAQ",
  support: "Assistência", help: "Centro de ajuda", terms: "Termos de utilização",
  privacy: "Política de privacidade", contact: "Contacte-nos", contactInfo: "Dados de contacto",
  rights: "Todos os direitos reservados."
};

export const it: Translation = {
  home: "Home", language: "Lingua", heroTitle: "Verifica il tuo ticket Transcash o un altro buono.",
  heroText: "La tua piattaforma di fiducia per un'assistenza sicura su TransCash, Neosurf, Apple Gift Card, Steam Card, Google Play Card e Paysafecard.",
  heroAlt: "Metodi di pagamento digitali", methodsTitle: "Metodi di pagamento accettati",
  methodsText: "Scegli tra la nostra vasta gamma di opzioni di pagamento sicure",
  appleDesc: "Uno strumento di pagamento semplice, sicuro e personalizzato per i tuoi acquisti quotidiani.",
  neosurfDesc: "Con Neosurf, vivi un'esperienza di pagamento semplice e sicura ovunque ti trovi.",
  transcashDesc: "Benvenuto in TransCash, la soluzione di pagamento facile e sicura senza banca.",
  steamDesc: "Ricevi assistenza per la tua carta regalo Steam e il relativo riferimento.",
  googleDesc: "Segnala in modo sicuro un problema con la tua carta regalo Google Play.",
  paysafeDesc: "Ricevi assistenza per il tuo pagamento o la tua Paysafecard.",
  formSectionTitle: "Invia i dati della tua ricarica",
  formSectionText: "Compila il modulo seguente per elaborare la tua ricarica. Al termine invieremo una conferma al tuo indirizzo e-mail.",
  guarantees: "Le nostre garanzie", guarantee1: "Elaborazione immediata della tua ricarica",
  guarantee2: "Diverse opzioni di pagamento sicure", guarantee3: "Conferma via e-mail per tutte le transazioni",
  guarantee4: "Assistenza clienti 24 ore su 24, 7 giorni su 7", requestTitle: "Richiesta di assistenza",
  requestIntro: "Inserisci le informazioni richieste senza condividere il codice completo o il PIN.",
  fullName: "Nome e cognome", fullNamePlaceholder: "Il tuo nome utente o nome completo",
  email: "Indirizzo e-mail", payment: "Metodo di pagamento interessato", select: "Seleziona un'opzione",
  other: "Altro", amount: "Importo interessato", amountPlaceholder: "Esempio: 50",
  reference: "Inserisci tutti i 12 caratteri del riferimento", referencePlaceholder: "Esempio: 254785496584",
  consent: "Accetto che le mie informazioni vengano utilizzate per elaborare la richiesta.",
  sending: "Invio in corso…", send: "Invia la richiesta", success: "La richiesta è stata inviata correttamente.",
  error: "Non è stato possibile inviare la richiesta. Riprova.", bot: "Non compilare questo campo:",
  footerText: "Gestione semplificata delle ricariche con un servizio sicuro e affidabile dal 2023.",
  quickLinks: "Link rapidi", about: "Chi siamo", services: "Servizi", blogs: "Blog", faq: "FAQ",
  support: "Assistenza", help: "Centro assistenza", terms: "Termini di servizio",
  privacy: "Informativa sulla privacy", contact: "Contattaci", contactInfo: "Contatti",
  rights: "Tutti i diritti riservati."
};

const lt: Translation = {
  home: "Pradžia", language: "Kalba", heroTitle: "Patikrinkite savo „Transcash“ bilietą ar kitą kuponą.",
  heroText: "Jūsų patikima platforma, teikianti saugią pagalbą dėl „TransCash“, „Neosurf“, „Apple Gift Card“, „Steam Card“, „Google Play Card“ ir „Paysafecard“.",
  heroAlt: "Skaitmeniniai mokėjimo būdai", methodsTitle: "Priimami mokėjimo būdai",
  methodsText: "Rinkitės iš plataus saugių mokėjimo parinkčių asortimento",
  appleDesc: "Paprastas, saugus ir pritaikytas mokėjimo įrankis kasdieniams pirkiniams.",
  neosurfDesc: "Su „Neosurf“ mėgaukitės paprastu ir saugiu mokėjimu, kad ir kur būtumėte.",
  transcashDesc: "Sveiki atvykę į „TransCash“ – paprastą ir saugų mokėjimo sprendimą be banko.",
  steamDesc: "Gaukite pagalbą dėl savo „Steam“ dovanų kortelės ir jos numerio.",
  googleDesc: "Saugiai praneškite apie problemą, susijusią su „Google Play“ dovanų kortele.",
  paysafeDesc: "Gaukite pagalbą dėl mokėjimo arba „Paysafecard“.",
  formSectionTitle: "Pateikite papildymo duomenis",
  formSectionText: "Užpildykite toliau pateiktą formą, kad galėtume apdoroti papildymą. Baigę išsiųsime patvirtinimą jūsų el. paštu.",
  guarantees: "Mūsų garantijos", guarantee1: "Momentinis papildymo apdorojimas",
  guarantee2: "Kelios saugios mokėjimo parinktys", guarantee3: "Kiekvienos operacijos patvirtinimas el. paštu",
  guarantee4: "Klientų aptarnavimas visą parą, 7 dienas per savaitę", requestTitle: "Pagalbos užklausa",
  requestIntro: "Įveskite prašomą informaciją nesidalydami visu kodu ar PIN.",
  fullName: "Vardas ir pavardė", fullNamePlaceholder: "Jūsų naudotojo vardas arba visas vardas",
  email: "El. pašto adresas", payment: "Susijęs mokėjimo būdas", select: "Pasirinkite parinktį",
  other: "Kita", amount: "Suma", amountPlaceholder: "Pavyzdys: 50",
  reference: "Įveskite visus 12 nuorodos simbolių", referencePlaceholder: "Pavyzdys: 254785496584",
  consent: "Sutinku, kad mano informacija būtų naudojama mano užklausai apdoroti.",
  sending: "Siunčiama…", send: "Siųsti užklausą", success: "Jūsų užklausa sėkmingai išsiųsta.",
  error: "Užklausos išsiųsti nepavyko. Bandykite dar kartą.", bot: "Šio lauko nepildykite:",
  footerText: "Papildymų valdymas tapo paprastesnis dėl saugios ir patikimos paslaugos nuo 2023 m.",
  quickLinks: "Greitosios nuorodos", about: "Apie mus", services: "Paslaugos", blogs: "Tinklaraštis", faq: "DUK",
  support: "Pagalba", help: "Pagalbos centras", terms: "Naudojimo sąlygos",
  privacy: "Privatumo politika", contact: "Susisiekite su mumis", contactInfo: "Kontaktai",
  rights: "Visos teisės saugomos."
};

const translations: Record<Language, Translation> = { fr, en, de, it: itUpdated, es, el, pt, lt };
type I18nContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("verifcash-language") as Language | null;
    if (saved && languages.some(({ code }) => code === saved)) return saved;
    const browserLanguage = navigator.language.slice(0, 2) as Language;
    return languages.some(({ code }) => code === browserLanguage) ? browserLanguage : "fr";
  });
  useEffect(() => { localStorage.setItem("verifcash-language", language); document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (key: TranslationKey) => translations[language][key] }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
};
