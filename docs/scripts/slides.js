import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/00-speaker-pierre.md',
    //'00-school/00-speaker-fanny.md',
    '00-school/00-participant.md',
    //'00-school/00-speaker-maella.md',
    '00-school/00-deroulement.md',
    '00-school/00-slides.md',
    '00-school/00-repository.md',
    '00-school/00-plan.md',
  ];
}

function introSlides() {
  return [
    '01-intro/01-TITLE.md',
    '01-intro/01-accessibilite.md',
    '01-intro/01-destination.md',
    '01-intro/01-handicap.md',
    '01-intro/01-chiffres.md',
    '01-intro/01-timeline.md',
    '01-intro/01-erreurs.md',
    '01-intro/01-rgaa.md',
    '01-intro/01-aria.md',
    // '01-intro/01-aria02.md',
    '01-intro/01-aria-rules.md',
    '01-intro/01-masquage.md',
  ];
}

function imagesSlides() {
  return [
    '02-images/02-TITLE.md',
    '02-images/02-typologies.md',
    '02-images/02-alt02.md',
    '02-images/02-workshop.md',
    '02-images/02-workshop02.md',
    '02-images/02-correction.md',
  ];
}

function linksSlides() {
  return [
    '03-liens/03-TITLE.md',
    '03-liens/03-texte.md',
    '03-liens/03-image.md',
    '03-liens/03-composite.md',
    '03-liens/03-lien-vide.md',
    '03-liens/03-workshop.md',
    '03-liens/03-correction.md',
  ];
}

function colorsSlides() {
  return [
    '04-couleurs/04-TITLE.md',
    '04-couleurs/04-couleurs-vs-informations.md',
    '04-couleurs/04-couleurs-vs-informations02.md',
    '04-couleurs/04-contraste.md',
    '04-couleurs/04-contraste02.md',
    '04-couleurs/04-outils.md',
    '04-couleurs/04-workshop.md',
    '04-couleurs/04-correction.md',
    '04-couleurs/04-correction02.md',
  ];
}

function focusSlides() {
  return [
    '05-focus/05-TITLE.md',
    '05-focus/05-navigation.md',
    // '05-focus/05-navigation02.md',
    '05-focus/05-navigation03.md',
    '05-focus/05-controles.md',
    // '05-focus/05-controles02.md',
    '05-focus/05-tabindex.md',
    '05-focus/05-workshop.md',
    '05-focus/05-correction.md',
  ];
}

function structureSlides() {
  return [
    '06-structure/06-TITLE.md',
    '06-structure/06-layout.md',
    '06-structure/06-workshop.md',
    '06-structure/06-correction.md',
  ];
}

function recapSlides() {
  return ['07-recap/07-TITLE.md', '07-recap/07-recap.md'];
}

function formsSlides() {
  return [
    '08-formulaires/08-TITLE.md',
    '08-formulaires/08-labels.md',
    '08-formulaires/08-labels02.md',
    '08-formulaires/08-groupes.md',
    '08-formulaires/08-groupes02.md',
    '08-formulaires/08-sens.md',
    '08-formulaires/08-saisie.md',
    '08-formulaires/08-workshop.md',
    '08-formulaires/08-correction.md',
  ];
}

function tabsSlides() {
  return ['09-tableaux/09-TITLE.md',
    '09-tableaux/09-tabs.md',
    '09-tableaux/09-simple.md',
    '09-tableaux/09-complexe.md',
    '09-tableaux/09-correction.md',
    '09-tableaux/09-workshop.md'
  ];
}

function ciSlides() {
  return ['10-ci/10-TITLE.md', '10-ci/10-ci.md', '10-ci/10-evangelisation.md'];
}

function auditToolsSlides() {
  return [
    '11-audit-tools/11-TITLE.md',
    '11-audit-tools/11-audit.md',
    '11-audit-tools/11-ara.md',
    '11-audit-tools/11-tools.md',
    '11-audit-tools/11-workshop.md',
  ];
}

function conclusionSlides() {
  return [
    '12-conclusion/12-recapbis.md',
    '12-conclusion/12-TITLE.md',
    '12-conclusion/12-misc.md',
    '12-conclusion/12-ressources.md',
    '12-conclusion/12-conclusion.md',
    '12-conclusion/12-homeworkshop.md',
  ];
}

function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...imagesSlides(),
    ...linksSlides(),
    ...colorsSlides(),
    ...focusSlides(),
    ...structureSlides(),
    ...recapSlides(),
    ...formsSlides(),
    ...tabsSlides(),
    ...ciSlides(),
    ...auditToolsSlides(),
    ...conclusionSlides(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
