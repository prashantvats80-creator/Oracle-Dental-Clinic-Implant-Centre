/**
 * Route preloader utility to pre-fetch lazy-loaded React page components
 * politely on user hover/focus without competing with initial mobile LCP bandwidth.
 */

const preloadedRoutes = new Set<string>();

const routeImports: Record<string, () => Promise<unknown>> = {
  '/dental-services': () => import('../components/DentalServicesPage'),
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
  '/full-mouth-dental-implants': () => import('../components/FullMouthImplantsPage'),
  '/cosmetic-dentistry': () => import('../components/CosmeticDentistryPage'),
  '/dental-veneers': () => import('../components/DentalVeneersPage'),
  '/zirconia-crowns': () => import('../components/ZirconiaCrownsPage'),
  '/dental-braces': () => import('../components/DentalBracesPage'),
  '/clear-aligners': () => import('../components/ClearAlignersPage'),
  '/root-canal-treatment': () => import('../components/RootCanalPage'),
  '/dentist-chipiyana-buzurg-ghaziabad': () => import('../components/ChipiyanaLandingPage'),
  '/dentist-ghaziabad': () => import('../components/DentistGhaziabadPage'),
  '/dental-clinic-ghaziabad': () => import('../components/DentalClinicGhaziabadPage'),
  '/dentist-near-me': () => import('../components/DentistNearMePage'),
  '/dental-treatment-cost-ghaziabad': () => import('../components/DentalTreatmentCostPage'),
  '/dental-implant-cost-ghaziabad': () => import('../components/DentalImplantCostPage'),
  '/root-canal-cost-ghaziabad': () => import('../components/RootCanalCostPage'),
  '/tooth-cap-cost-ghaziabad': () => import('../components/ToothCapCostPage'),
  '/dental-abscess-treatment': () => import('../components/DentalAbscessPage'),
  '/impacted-wisdom-tooth': () => import('../components/ImpactedWisdomToothPage'),
  '/periodontal-gum-treatment-ghaziabad': () => import('../components/PeriodontalTreatmentPage'),
  '/tooth-filling-cost-ghaziabad': () => import('../components/ToothFillingCostPage'),
  '/teeth-cleaning-cost-ghaziabad': () => import('../components/TeethCleaningCostPage'),
  '/wisdom-tooth-extraction-cost-ghaziabad': () => import('../components/WisdomToothCostPage'),
  '/tooth-extraction-cost-ghaziabad': () => import('../components/ToothExtractionCostPage'),
  '/dental-bridge-cost-ghaziabad': () => import('../components/DentalBridgeCostPage'),
  '/dentures-cost-ghaziabad': () => import('../components/DenturesCostPage'),
  '/teeth-whitening-cost-ghaziabad': () => import('../components/TeethWhiteningCostPage'),
  '/emergency-dentist-ghaziabad': () => import('../components/EmergencyDentistGhaziabadPage'),
  '/dental-implant-after-tooth-extraction': () => import('../components/ImmediateDentalImplantPage'),
  '/smile-makeover-ghaziabad': () => import('../components/SmileMakeoverGhaziabadPage'),
  '/privacy-policy': () => import('../components/PrivacyPolicyPage'),
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
  // On-demand hover/touch preloading via preloadRoute() keeps initial mobile bandwidth lean
  // without speculatively downloading heavy animation chunks on idle homepage visits.
}
