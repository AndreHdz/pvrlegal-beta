export const showDefaultLang = false;

export const defaultLang = 'en';

export const languages = {
    en: 'English',
    es: 'Español',
  };
  

export const routes = {
    en: {
      'home': '',
      'about' : 'about-us',
      'services' : 'services',
      'faq' : 'faqs',
      'services/legal-services' : 'services/legal-services',
      'services/corporate-law-services' : 'services/corporate-law-services',
      'services/administrative-services' : 'services/administrative-services',
      'services/immigration-services' : 'services/immigration-services',
      'services/tax-and-financial-services' : 'services/tax-and-financial-services'

    },
    es: {
      'home': '',
      'about' : 'nosotros',
      'services' : 'servicios',
      'faq' : 'faqs',
      'services/legal-services' : 'servicios/servicios-legales',
      'services/corporate-law-services' : 'servicios/servicios-legales-corporativos',
      'services/administrative-services' : 'servicios/servicios-administrativos',
      'services/immigration-services' : 'servicios/servicios-de-inmigracion',
      'services/tax-and-financial-services' : 'servicios/servicios-fiscales-y-financieros'

    },
}

export const ui = {
  en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Our Services',
      'nav.faqs' : 'FAQs',
      'nav.contact' : 'Contact Us',
      'nav.legal' : 'Legal services',
      'nav.corporate' : 'Corporate law services',
      'nav.administrative' : 'Administrative services',
      'nav.immigration' : 'Immigration services',
      'nav.tax' : 'Tax & finnancial services',
      'hero.title' : 'We are your trusted experts for comprehensive legal solutions throughout Mexico',
      'hero.button' : 'Our Services',
      'footer.title' : 'Get in touch with us',
      'footer.p' : 'Law is a system of rules and guidelines established by a society or governing authority to regulate behavior, maintain order, and provide justice.',
      'ui.read-more' : 'Read More',
      'sidebar.title' : 'Explore our services',
      'sidebar.legal' : 'Tailored legal advice for contracts, real estate, and more.',
      'sidebar.corporate' : 'Tailored legal advice for contracts, real estate, and more.',
      'sidebar.administrative' : 'Expert support for bureaucratic and procedural matters.',
      'sidebar.immigration' : 'Hassle-free guidance through Mexican immigration processes.',
      'sidebar.tax' : 'Reliable solutions for tax compliance and financial planning.'
  },
  es: {
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      'nav.services': 'Servicios',
      'nav.faqs' : 'FAQs',
      'nav.contact' : 'Contactanos',
      'nav.legal' : 'Servicios legales',
      'nav.corporate' : 'Servicios legales corporativos',
      'nav.administrative' : 'Servicios administrativos',
      'nav.immigration' : 'Servicios de inmigración',
      'nav.tax' : 'Servicios fiscales y financieros',
      'hero.title' : 'Somos tus expertos de confianza para soluciones legales integrales en todo México',
      'hero.button' : 'Ver Servicios',
      'footer.title' : 'Ponte en contacto con nosotros',
      'footer.p' : 'La ley es un sistema de reglas y pautas establecidas por una sociedad o autoridad gobernante para regular el comportamiento, mantener el orden y brindar justicia.',
      'ui.read-more' : 'Ver más',
      'sidebar.title' : 'Explora nuestros servicios',
      'sidebar.legal' : 'Asesoría legal personalizada para contratos, bienes raíces y más.',
      'sidebar.corporate' : 'Asesoría legal personalizada para contratos, bienes raíces y más.',
      'sidebar.administrative' : 'Apoyo experto en asuntos burocráticos y procesales.',
      'sidebar.immigration' : 'Asesoría sin complicaciones en los procesos migratorios mexicanos.',
      'sidebar.tax' : 'Soluciones confiables para el cumplimiento fiscal y la planeación financiera.'

  },
} as const;