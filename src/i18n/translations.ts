export type Locale = 'it' | 'en'

export const translations = {
  it: {
    nav: {
      services: 'Servizi',
      projects: 'Progetti',
      about: 'Chi sono',
      contact: 'Contatti',
    },
    hero: {
      eyebrow: 'role: "full-stack web developer"',
      prompt: 'calogero@dev:~$',
      command: 'cat intro.txt',
      title: 'Gestionali e siti web che',
      titleAccent: 'fanno crescere il business',
      subtitle:
        'Progetto e sviluppo software gestionali su misura e siti web professionali: codice pulito, UX curata e soluzioni che restano nel tempo.',
      ctaPrimary: 'npm run contact',
      ctaSecondary: 'ls ./projects',
      stats: [
        { key: 'experience', value: '8+', label: 'Anni di esperienza' },
        { key: 'projects', value: '40+', label: 'Progetti consegnati' },
        { key: 'approach', value: '100%', label: 'Focus su misura' },
      ],
    },
    services: {
      comment: 'services',
      title: 'Cosa posso fare per te',
      subtitle:
        'Dalla prima idea al deploy: gestionali interni, portali clienti e siti vetrina con stack moderno e manutenzione semplice.',
      items: [
        {
          fn: 'buildGestionale()',
          title: 'Gestionali aziendali',
          description:
            'CRM, gestione ordini, magazzino, fatturazione e dashboard su misura per i tuoi processi reali.',
        },
        {
          fn: 'createWebsite()',
          title: 'Siti web professionali',
          description:
            'Siti corporate, landing e portfolio veloci, responsive e ottimizzati per conversione e SEO.',
        },
        {
          fn: 'integrateAPIs()',
          title: 'API e integrazioni',
          description:
            'Collego i tuoi sistemi: pagamenti, ERP, email, anagrafiche e servizi esterni via API REST.',
        },
        {
          fn: 'consulting()',
          title: 'Consulenza tecnica',
          description:
            'Audit codice, refactoring, scelta stack e affiancamento al team per rilasci più sicuri.',
        },
      ],
    },
    projects: {
      comment: 'projects',
      title: 'Progetti selezionati',
      subtitle: 'Esempi di tipologie di lavoro — i dettagli clienti sono omessi per riservatezza.',
      items: [
        {
          path: '~/projects/b2b-orders',
          tag: 'Gestionale',
          title: 'Piattaforma ordini B2B',
          description:
            'Portale per agenti e clienti con catalogo, preventivi, tracking spedizioni e report vendite.',
          tech: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
          path: '~/projects/corporate-site',
          tag: 'Sito web',
          title: 'Sito corporate settore servizi',
          description:
            'Sito multilingua con CMS leggero, form contatti e integrazione analytics.',
          tech: ['Vite', 'TypeScript', 'Headless CMS'],
        },
        {
          path: '~/projects/warehouse-dash',
          tag: 'Gestionale',
          title: 'Dashboard magazzino',
          description:
            'Movimentazione stock, barcode, alert scorte minime e export per contabilità.',
          tech: ['Vue', 'Laravel', 'MySQL'],
        },
        {
          path: '~/projects/saas-landing',
          tag: 'Sito web',
          title: 'Landing prodotto SaaS',
          description:
            'Pagina di lancio con pricing, demo request e connessione al CRM interno.',
          tech: ['Next.js', 'Tailwind', 'Vercel'],
        },
      ],
    },
    about: {
      comment: 'about',
      title: 'Chi sono',
      p1: 'Sono uno sviluppatore web con focus su software gestionali e siti professionali per PMI e studi che vogliono digitalizzare senza complicazioni inutili.',
      p2: 'Lavoro in stretto contatto con chi usa il prodotto: capisco il flusso operativo, traduco le esigenze in interfacce chiare e consegno codice documentato e manutenibile.',
      highlights: [
        'Stack: React, TypeScript, Node, PHP/Laravel, SQL',
        'Metodo: analisi → prototipo → sviluppo iterativo → go-live',
        'Disponibile per progetti nuovi e affiancamento team',
      ],
    },
    contact: {
      comment: 'contact',
      title: 'Iniziamo un progetto',
      subtitle:
        'Raccontami obiettivo, tempistiche e budget indicativo. Ti rispondo entro 48 ore lavorative.',
      formTitle: 'sendMessage.ts',
      name: 'name: string',
      email: 'email: string',
      message: 'payload: string',
      messagePlaceholder: '// Descrivi il progetto o la sfida…',
      send: 'await send()',
      or: 'oppure scrivimi a',
      mailtoSubject: 'Richiesta da portfolio',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      built: 'Sviluppato con React + Vite',
    },
    chatbot: {
      title: 'Assistente portfolio',
      windowTitle: 'helpBot.ts',
      open: 'Apri assistente',
      close: 'Chiudi assistente',
      greeting:
        'Ciao! Sono l\'assistente del portfolio. Scegli una domanda qui sotto oppure scrivimi su WhatsApp.',
      questionsLabel: '// Domande frequenti',
      whatsappCta: 'WhatsApp →',
      contactCta: '#contact →',
      questions: [
        {
          id: 'services',
          q: 'Che servizi offri?',
          a: 'Sviluppo gestionali aziendali su misura (CRM, ordini, magazzino, fatturazione), siti web professionali, integrazioni API e consulenza tecnica. Tutto con stack moderno e codice manutenibile.',
        },
        {
          id: 'gestionale',
          q: 'Cos\'è un gestionale?',
          a: 'È un software interno che digitalizza i processi della tua attività: anagrafiche, ordini, stock, report. Lo costruisco intorno a come lavori davvero, non con moduli generici inutili.',
        },
        {
          id: 'stack',
          q: 'Quali tecnologie usi?',
          a: 'Principalmente React, TypeScript, Node.js, PHP/Laravel e database SQL (PostgreSQL, MySQL). Scelgo lo stack in base al progetto, alle integrazioni esistenti e alla manutenzione nel tempo.',
        },
        {
          id: 'timeline',
          q: 'Quanto tempo serve per un progetto?',
          a: 'Un sito vetrina può richiedere 2–4 settimane. Un gestionale dipende dalla complessità: di solito partiamo da un MVP in 4–8 settimane, poi iteriamo. Ne parliamo nel primo call.',
        },
        {
          id: 'budget',
          q: 'Come funziona il budget?',
          a: 'Definiamo insieme obiettivo e priorità, poi propongo un preventivo chiaro (a progetto o a milestone). Niente sorprese: ogni fase ha deliverable e tempistiche concordate.',
        },
        {
          id: 'contact',
          q: 'Come posso contattarti?',
          a: 'Puoi usare il form nella sezione Contatti, scrivermi su WhatsApp (pulsante verde in basso a destra) o inviare una email. Rispondo entro 48 ore lavorative.',
        },
      ],
    },
    whatsapp: {
      label: 'Scrivimi su WhatsApp',
    },
  },
  en: {
    nav: {
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'role: "full-stack web developer"',
      prompt: 'calogero@dev:~$',
      command: 'cat intro.txt',
      title: 'Business apps and websites that',
      titleAccent: 'drive real growth',
      subtitle:
        'I design and build custom management systems and professional websites: clean code, thoughtful UX, and solutions built to last.',
      ctaPrimary: 'npm run contact',
      ctaSecondary: 'ls ./projects',
      stats: [
        { key: 'experience', value: '8+', label: 'Years of experience' },
        { key: 'projects', value: '40+', label: 'Projects delivered' },
        { key: 'approach', value: '100%', label: 'Tailored approach' },
      ],
    },
    services: {
      comment: 'services',
      title: 'What I can do for you',
      subtitle:
        'From idea to deploy: internal tools, client portals, and showcase sites with a modern stack and easy maintenance.',
      items: [
        {
          fn: 'buildManagementApp()',
          title: 'Business management systems',
          description:
            'CRM, order management, inventory, invoicing, and dashboards tailored to how you actually work.',
        },
        {
          fn: 'createWebsite()',
          title: 'Professional websites',
          description:
            'Corporate sites, landing pages, and portfolios that are fast, responsive, and built for conversion and SEO.',
        },
        {
          fn: 'integrateAPIs()',
          title: 'APIs & integrations',
          description:
            'Connect your stack: payments, ERP, email, master data, and third-party services via REST APIs.',
        },
        {
          fn: 'consulting()',
          title: 'Technical consulting',
          description:
            'Code audits, refactoring, stack decisions, and team support for safer releases.',
        },
      ],
    },
    projects: {
      comment: 'projects',
      title: 'Selected work',
      subtitle: 'Sample project types — client details omitted for confidentiality.',
      items: [
        {
          path: '~/projects/b2b-orders',
          tag: 'Management app',
          title: 'B2B order platform',
          description:
            'Portal for agents and clients with catalog, quotes, shipment tracking, and sales reports.',
          tech: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
          path: '~/projects/corporate-site',
          tag: 'Website',
          title: 'Corporate site — services sector',
          description:
            'Multilingual site with lightweight CMS, contact forms, and analytics integration.',
          tech: ['Vite', 'TypeScript', 'Headless CMS'],
        },
        {
          path: '~/projects/warehouse-dash',
          tag: 'Management app',
          title: 'Warehouse dashboard',
          description:
            'Stock movements, barcode flows, low-stock alerts, and accounting exports.',
          tech: ['Vue', 'Laravel', 'MySQL'],
        },
        {
          path: '~/projects/saas-landing',
          tag: 'Website',
          title: 'SaaS product landing',
          description:
            'Launch page with pricing, demo requests, and CRM integration.',
          tech: ['Next.js', 'Tailwind', 'Vercel'],
        },
      ],
    },
    about: {
      comment: 'about',
      title: 'About me',
      p1: "I'm a web developer focused on business management software and professional sites for SMBs and teams that want to digitize without unnecessary complexity.",
      p2: 'I work closely with end users: I understand operational flows, turn requirements into clear interfaces, and deliver documented, maintainable code.',
      highlights: [
        'Stack: React, TypeScript, Node, PHP/Laravel, SQL',
        'Process: discovery → prototype → iterative build → go-live',
        'Available for new projects and team collaboration',
      ],
    },
    contact: {
      comment: 'contact',
      title: 'Start a project',
      subtitle:
        'Share your goal, timeline, and indicative budget. I reply within 2 business days.',
      formTitle: 'sendMessage.ts',
      name: 'name: string',
      email: 'email: string',
      message: 'payload: string',
      messagePlaceholder: '// Describe the project or challenge…',
      send: 'await send()',
      or: 'or email me at',
      mailtoSubject: 'Portfolio inquiry',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with React + Vite',
    },
    chatbot: {
      title: 'Portfolio assistant',
      windowTitle: 'helpBot.ts',
      open: 'Open assistant',
      close: 'Close assistant',
      greeting:
        'Hi! I\'m the portfolio assistant. Pick a question below or message on WhatsApp.',
      questionsLabel: '// FAQ',
      whatsappCta: 'WhatsApp →',
      contactCta: '#contact →',
      questions: [
        {
          id: 'services',
          q: 'What services do you offer?',
          a: 'Custom business apps (CRM, orders, inventory, invoicing), professional websites, API integrations, and technical consulting — all with a modern stack and maintainable code.',
        },
        {
          id: 'gestionale',
          q: 'What is a business management app?',
          a: 'Internal software that digitizes how you work: master data, orders, stock, reports. I build it around your real processes, not generic modules you don\'t need.',
        },
        {
          id: 'stack',
          q: 'What tech stack do you use?',
          a: 'Mainly React, TypeScript, Node.js, PHP/Laravel, and SQL databases (PostgreSQL, MySQL). I pick the stack based on the project, existing integrations, and long-term maintenance.',
        },
        {
          id: 'timeline',
          q: 'How long does a project take?',
          a: 'A showcase site often takes 2–4 weeks. A management app depends on scope: we usually start with an MVP in 4–8 weeks, then iterate. We can discuss this on a first call.',
        },
        {
          id: 'budget',
          q: 'How does pricing work?',
          a: 'We align on goals and priorities first, then I send a clear quote (fixed project or milestones). No surprises: each phase has agreed deliverables and timeline.',
        },
        {
          id: 'contact',
          q: 'How can I reach you?',
          a: 'Use the Contact form, message me on WhatsApp (green button bottom-right), or send an email. I reply within 2 business days.',
        },
      ],
    },
    whatsapp: {
      label: 'Message me on WhatsApp',
    },
  },
} as const

export type Translation = (typeof translations)[Locale]
