/**
 * Route preloader utility to pre-fetch lazy-loaded React page components
 * on idle or hover for instant sub-second page transitions.
 */

const preloadedRoutes = new Set<string>();

const routeImports: Record<string, () => Promise<unknown>> = {
  '/wisdom-tooth-extraction': () => import('../components/WisdomToothPage'),
  '/tooth-pain-treatment': () => import('../components/ToothPainPage'),
  '/bleeding-gums': () => import('../components/BleedingGumsPage'),
  '/tooth-sensitivity': () => import('../components/ToothSensitivityPage'),
  '/bad-breath-treatment': () => import('../components/BadBreathPage'),
  '/loose-tooth-treatment': () => import('../components/LooseToothPage'),
  '/broken-tooth-treatment': () => import('../components/BrokenToothPage'),
  '/chipped-tooth': () => import('../components/ChippedToothPage'),
  '/black-tooth': () => import('../components/BlackToothPage'),
  '/missing-teeth': () => import('../components/MissingTeethPage'),
  '/cavity-treatment': () => import('../components/CavityTreatmentPage'),
  '/gum-disease-treatment': () => import('../components/GumDiseasePage'),
  '/swollen-gums': () => import('../components/SwollenGumsPage'),
  '/gum-recession': () => import('../components/GumRecessionPage'),
  '/tooth-cap': () => import('../components/ToothCapPage'),
  '/tooth-extraction': () => import('../components/ToothExtractionPage'),
  '/emergency-dentist': () => import('../components/EmergencyDentistPage'),
  '/kids-dentist': () => import('../components/KidsDentistPage'),
  '/dental-fillings': () => import('../components/DentalFillingsPage'),
  '/dental-bridges': () => import('../components/DentalBridgesPage'),
  '/dentures': () => import('../components/DenturesPage'),
  '/teeth-cleaning': () => import('../components/TeethCleaningPage'),
  '/teeth-whitening': () => import('../components/TeethWhiteningPage'),
  '/dental-implants': () => import('../components/DentalImplantsPage'),
  '/root-canal-treatment': () => import('../components/RootCanalPage'),
  '/dentist-chipiyana-buzurg-ghaziabad': () => import('../components/ChipiyanaLandingPage')
};

export function preloadRoute(path: string): void {
  if (!path || preloadedRoutes.has(path)) return;

  const importer = routeImports[path];
  if (importer) {
    preloadedRoutes.add(path);
    importer().catch(() => {
      preloadedRoutes.delete(path);
    });
  }
}

export function preloadAllTopRoutes(): void {
  const topRoutes = [
    '/dental-implants',
    '/root-canal-treatment',
    '/wisdom-tooth-extraction',
    '/teeth-cleaning',
    '/teeth-whitening',
    '/tooth-pain-treatment'
  ];

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      topRoutes.forEach((r) => preloadRoute(r));
    });
  } else {
    setTimeout(() => {
      topRoutes.forEach((r) => preloadRoute(r));
    }, 1500);
  }
}
