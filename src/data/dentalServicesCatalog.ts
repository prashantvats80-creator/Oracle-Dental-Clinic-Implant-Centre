export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface DentalServiceItem {
  id: string;
  title: string;
  whatsappTopic: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  whatItIs: string;
  whoMayNeedIt: string;
  commonConcerns: string;
  process: string[];
  benefits: string[];
  limitations: string[];
  aftercare: string[];
  faqs: ServiceFAQ[];
  deepGuidePath?: string;
}

export interface DentalServiceCategory {
  id: string;
  number: string;
  name: string;
  summary: string;
  items: DentalServiceItem[];
}

export const DENTAL_SERVICE_CATEGORIES: DentalServiceCategory[] = [
  {
    id: 'dental-implants',
    number: '01',
    name: 'Dental Implants',
    summary: 'Fixed tooth root replacements for single missing teeth, multiple gaps, and full-arch oral rehabilitation.',
    items: [
      {
        id: 'single-multiple-implants',
        title: 'Single & Multiple Dental Implants',
        whatsappTopic: 'dental implants',
        shortDescription: 'Biocompatible titanium fixtures anchored in the jawbone to replace one or several missing teeth without grinding neighboring teeth.',
        image: '/assets/images/treatments/bright-smile-800.webp',
        imageAlt: 'Dental implant evaluation and modern operatory at Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad',
        whatItIs: 'A dental implant is a small titanium post surgically placed into the jawbone where a natural tooth root is missing. Once the bone integrates around the fixture, an abutment and custom ceramic or zirconia crown restore chewing function and appearance.',
        whoMayNeedIt: 'Adults missing one or more teeth due to decay, fracture, gum disease, or congenital absence who have adequate jawbone density or are candidates for bone grafting.',
        commonConcerns: 'Patients often ask about discomfort during surgery, healing duration, and whether neighboring healthy teeth need to be trimmed down.',
        process: [
          'Clinical oral examination, medical history review, and digital X-ray / CBCT bone volume evaluation.',
          'Placement of the titanium implant fixture under local anesthesia with sterile surgical protocol.',
          'Osseointegration healing period (typically 3–4 months depending on bone quality) with provisional protection where appropriate.',
          'Digital or precision impression followed by custom zirconia or ceramic crown fixation and bite balancing.'
        ],
        benefits: [
          'Preserves adjacent natural teeth without requiring them to be cut down like a conventional bridge.',
          'Helps stimulate surrounding jawbone and reduce progressive bone resorption.',
          'Provides stable chewing comfort and natural aesthetics.'
        ],
        limitations: [
          'Requires sufficient bone volume and controlled systemic conditions (such as uncontrolled diabetes or heavy smoking, which increase healing risks).',
          'Multi-stage healing takes longer than removable dentures; long-term survival depends on daily oral hygiene and follow-ups.'
        ],
        aftercare: [
          'Follow prescribed medications and apply intermittent cold compresses during the first 24 hours.',
          'Stick to a soft diet during initial healing and avoid chewing hard foods directly over the surgical site.',
          'Brush gently with a soft brush, clean interdental areas daily, and attend periodic maintenance reviews.'
        ],
        faqs: [
          { q: 'Is dental implant placement painful?', a: 'The surgical step is performed under local anesthesia so you stay comfortable. Mild swelling or soreness for 2–4 days afterward is common and managed with prescribed care.' },
          { q: 'How long does the full implant process take?', a: 'Most cases complete in 3 to 5 months from placement to final crown, though timing varies if extraction or bone grafting is needed.' }
        ],
        deepGuidePath: '/dental-implants'
      },
      {
        id: 'full-mouth-all-on-4-6',
        title: 'Full-Mouth Dental Implants (All-on-4 & All-on-6)',
        whatsappTopic: 'full-mouth dental implants',
        shortDescription: 'Full-arch fixed rehabilitation using 4 to 6 strategically angled implants per jaw to replace an entire arch of failing or missing teeth.',
        image: '/assets/images/treatments/dental-exam-800.webp',
        imageAlt: 'Full-mouth dental implant planning and full-arch restoration consultation',
        whatItIs: 'Full-arch rehabilitation replaces all teeth in the upper jaw, lower jaw, or both using 4 to 6 dental implants supporting a fixed full-arch bridge (All-on-4 or All-on-6 protocols), eliminating loose removable dentures.',
        whoMayNeedIt: 'Patients who have lost most or all teeth in an arch, struggle with slipping dentures, or have terminal non-restorable teeth requiring coordinated full-arch replacement.',
        commonConcerns: 'Worries about eating normally again, surgical recovery time, bone sufficiency, and total staged cost.',
        process: [
          'Comprehensive 3D CBCT jaw assessment, smile line analysis, and systemic health clearance.',
          'Removal of non-savable teeth (if present) and placement of 4 to 6 implants per arch under local anesthesia.',
          'Delivery of a provisional arch during osseointegration where primary implant stability permits.',
          'Fabrication and precision fitting of the final reinforced zirconia or hybrid prosthesis.'
        ],
        benefits: [
          'Restores stable full-arch biting force compared to conventional removable dentures.',
          'Angled posterior implant placement in All-on-4/All-on-6 can reduce the need for extensive sinus grafting in selected cases.',
          'Supports lip contour and facial vertical dimension.'
        ],
        limitations: [
          'Requires strict plaque control around bridge margins using water flossers and superfloss.',
          'Not every patient qualifies for immediate provisional teeth; primary stability and bone quality dictate loading timelines.'
        ],
        aftercare: [
          'Follow a strict soft diet throughout the osseointegration phase to protect implant stability.',
          'Use an oral irrigator (water flosser) daily under the fixed bridge and attend 6-month professional maintenance visits.',
          'Avoid smoking and clenching without a protective nightguard if bruxism is present.'
        ],
        faqs: [
          { q: 'What is the difference between All-on-4 and All-on-6?', a: 'All-on-4 uses four implants per arch and is often selected when posterior bone is limited; All-on-6 adds two extra fixtures for broader load distribution when bone volume allows.' },
          { q: 'Can existing denture wearers switch to full-mouth implants?', a: 'Often yes, following a 3D bone scan and medical evaluation by Dr. Prashant Kumar Vats (BDS).' }
        ],
        deepGuidePath: '/full-mouth-dental-implants'
      },
      {
        id: 'implant-dentures-bridges-missing-teeth',
        title: 'Implant-Supported Dentures, Bridges & Missing Teeth Replacement',
        whatsappTopic: 'implant-supported dentures and missing teeth replacement',
        shortDescription: 'Stabilized overdentures, implant bridges, and tailored replacement options for single or multiple missing teeth.',
        image: '/assets/images/treatments/implant-care-800.webp',
        imageAlt: 'Dental prosthetic models for implant-supported bridges and dentures',
        whatItIs: 'Implant-supported bridges span multiple missing teeth using two or more implants, while snap-on implant overdentures attach securely to locator implants for removable yet rock-steady stability.',
        whoMayNeedIt: 'Patients missing several adjacent teeth or denture wearers seeking markedly better retention without full fixed-arch surgery.',
        commonConcerns: 'Difficulty chewing firm food with loose dentures, speech slippage, and balancing budget with durability.',
        process: [
          'Assessment of jaw ridge shape, opposing teeth, and patient dexterity for cleaning.',
          'Placement of supporting implants (commonly 2–4 for overdentures or 2+ for bridges).',
          'Healing period followed by attachment fitting (locators/bar) or precision bridge cementation/screw retention.',
          'Bite checks and instruction on insertion, removal, and daily cleaning.'
        ],
        benefits: [
          'Eliminates messy denture adhesives and minimizes gum sore spots.',
          'More cost-effective than replacing every individual missing tooth with a separate implant.',
          'Overdentures can be removed easily for thorough daily hygiene.'
        ],
        limitations: [
          'Overdenture nylon retention inserts wear gradually and require periodic replacement.',
          'Still requires minor implant surgery and healthy gum tissue maintenance.'
        ],
        aftercare: [
          'Remove and clean implant overdentures nightly and brush implant locator attachments gently.',
          'Never sleep with removable implant dentures in place unless specifically instructed.',
          'Schedule annual checks for attachment wear and bone stability.'
        ],
        faqs: [
          { q: 'How many implants are needed for an implant-supported denture?', a: 'Lower overdentures commonly use 2 to 4 implants, while upper arches typically require at least 4 implants for dependable retention.' },
          { q: 'What if I am not a candidate for implants?', a: 'Conventional fixed dental bridges or well-fitted partial/complete dentures remain reliable alternatives discussed during consultation.' }
        ],
        deepGuidePath: '/missing-teeth'
      }
    ]
  },
  {
    id: 'cosmetic-dentistry',
    number: '02',
    name: 'Cosmetic Dentistry',
    summary: 'Conservative smile design, veneers, metal-free zirconia and E-max crowns, and aesthetic front-tooth restorations.',
    items: [
      {
        id: 'smile-makeover-design',
        title: 'Smile Makeover & Smile Design',
        whatsappTopic: 'smile makeover and smile design',
        shortDescription: 'Personalized multi-step cosmetic treatment planning harmonizing tooth shade, shape, alignment, and gum symmetry.',
        image: '/assets/images/treatments/orthodontic-care-800.webp',
        imageAlt: 'Smile makeover and aesthetic cosmetic dental consultation',
        whatItIs: 'A smile makeover combines diagnostic smile analysis with targeted cosmetic procedures—such as whitening, bonding, veneers, clear aligners, or ceramic crowns—to improve overall smile harmony while respecting tooth health.',
        whoMayNeedIt: 'Individuals with stained, worn, chipped, uneven, or gapped front teeth who want a coordinated aesthetic improvement.',
        commonConcerns: 'Avoiding an overly artificial "chalky" look, preserving healthy tooth enamel, and knowing exact timelines before major events.',
        process: [
          'Detailed smile photography, bite evaluation, and discussion of aesthetic goals.',
          'Oral health foundation phase (treating any cavities or gum inflammation first).',
          'Mock-up or shade preview so you can evaluate tooth proportions before final fabrication.',
          'Staged execution of chosen cosmetic treatments with bite refinement.'
        ],
        benefits: [
          'Addresses multiple cosmetic concerns under one coherent plan instead of mismatched single fixes.',
          'Balances aesthetics with long-term functional bite stability.',
          'Prioritizes minimally invasive steps wherever clinically feasible.'
        ],
        limitations: [
          'Underlying decay, gum bleeding, or severe bite issues must be stabilized before cosmetic finishing.',
          'Restorations require maintenance and may eventually need polishing or replacement over years of normal wear.'
        ],
        aftercare: [
          'Wear a custom nightguard if you grind or clench your teeth.',
          'Avoid biting hard shells, ice, or using front teeth to tear packaging.',
          'Maintain routine 6-month scaling and polishing visits.'
        ],
        faqs: [
          { q: 'How long does a smile makeover take?', a: 'Simple whitening and bonding can finish in 1–2 visits, whereas veneers, crowns, or aligners span several weeks to months.' },
          { q: 'Will my teeth look natural?', a: 'Shade selection and surface translucency are tailored to your facial tone and lip line so results look balanced rather than artificial.' }
        ],
        deepGuidePath: '/smile-makeover-ghaziabad'
      },
      {
        id: 'porcelain-composite-veneers',
        title: 'Porcelain & Composite Veneers',
        whatsappTopic: 'dental veneers',
        shortDescription: 'Ultra-thin tooth-coloured shells bonded to front tooth surfaces to refine shape, close small gaps, and mask stubborn stains.',
        image: '/assets/images/treatments/dental-tools-800.webp',
        imageAlt: 'Porcelain and composite dental veneers for front teeth aesthetics',
        whatItIs: 'Dental veneers are thin custom facings made of lab-crafted porcelain (lithium disilicate/ceramic) or chairside composite resin bonded over the visible front surface of teeth.',
        whoMayNeedIt: 'Patients with permanently discolored teeth that do not respond to bleaching, worn incisal edges, minor chips, or midline front gaps (diastema).',
        commonConcerns: 'How much enamel is trimmed, stain resistance, and choosing between composite and porcelain veneers.',
        process: [
          'Shade and shape evaluation along with bite assessment.',
          'Conservative enamel preparation (minimal for porcelain; often minimal or no-prep for composite).',
          'Precision impression for lab-crafted porcelain veneers, or direct artistic layering for composite veneers.',
          'Adhesive resin bonding, curing, margin polishing, and bite check.'
        ],
        benefits: [
          'Porcelain veneers resist coffee and tea staining and offer lifelike light translucency.',
          'Composite veneers can often be completed in a single visit and repaired easily if chipped.',
          'Preserves far more tooth structure than full-coverage crowns when teeth are structurally sound.'
        ],
        limitations: [
          'Conventional porcelain veneer preparation is irreversible because a thin enamel layer is contoured.',
          'Not ideal for heavy teeth grinders without nightguard protection or severely decayed teeth.'
        ],
        aftercare: [
          'Use a non-abrasive toothpaste and soft toothbrush to protect glazed ceramic or polished resin surfaces.',
          'Limit hard direct biting on nuts, sugarcane, or bones with veneered front teeth.',
          'Visit periodically to inspect margins and polish composite edges.'
        ],
        faqs: [
          { q: 'Porcelain vs composite veneers—which lasts longer?', a: 'Lab-made porcelain veneers typically resist staining and wear longer, while composite veneers are more budget-friendly and repairable chairside.' },
          { q: 'Can veneers fix crooked teeth?', a: 'Veneers can camouflage very mild alignment irregularities, but moderate crowding is healthier to correct first with aligners or braces.' }
        ],
        deepGuidePath: '/dental-veneers'
      },
      {
        id: 'zirconia-emax-crowns',
        title: 'Zirconia Crowns & E-max Crowns',
        whatsappTopic: 'zirconia and e-max dental crowns',
        shortDescription: 'Metal-free CAD/CAM zirconia crowns for high-strength molar protection and translucent E-max all-ceramic crowns for natural front teeth.',
        image: '/assets/images/treatments/dental-chair-800.webp',
        imageAlt: 'Precision metal-free zirconia and E-max ceramic dental crowns',
        whatItIs: 'Zirconia crowns are milled from high-strength zirconium dioxide ceramic ideal for back chewing molars and bridges, while E-max (lithium disilicate) crowns offer superior optical translucency favored for front aesthetic teeth.',
        whoMayNeedIt: 'Patients with root canal-treated teeth, large fractured restorations, severely worn enamel, or dark metal-margin crowns needing aesthetic replacement.',
        commonConcerns: 'Black lines near the gums seen with older PFM crowns, chewing durability, and natural shade matching.',
        process: [
          'Tooth evaluation (and X-ray if root-canal treated) to ensure solid root support.',
          'Precision shaping of the tooth under local anesthesia where needed and shade matching.',
          'Accurate impression / digital scan and placement of a protective temporary crown.',
          'Try-in of the custom zirconia or E-max crown for fit, contact, and bite harmony, followed by final bonding/cementation.'
        ],
        benefits: [
          '100% metal-free—eliminates grey shadows at the gumline.',
          'Zirconia delivers exceptional fracture resistance for back molars; E-max delivers lifelike enamel translucency for front teeth.',
          'Biocompatible ceramic margins promote healthy surrounding gums.'
        ],
        limitations: [
          'Requires circumferential tooth reduction, so veneers or fillings are preferred if the tooth is mostly intact.',
          'Severe clenching can still chip layered ceramics if unprotected.'
        ],
        aftercare: [
          'Brush twice daily and floss carefully around crown margins to prevent recurrent decay underneath.',
          'Avoid chewing ice or cracking hard nutshells with crowned teeth.',
          'Report any high bite sensation early for a quick adjustment.'
        ],
        faqs: [
          { q: 'Should I choose Zirconia or E-max?', a: 'Zirconia is commonly recommended for molars and multi-unit bridges due to high strength, whereas E-max is often selected for single front teeth where natural translucency is the top priority.' },
          { q: 'Is a crown always needed after root canal treatment?', a: 'Back teeth and structurally weakened teeth almost always benefit from a crown after RCT to prevent vertical fracture.' }
        ],
        deepGuidePath: '/zirconia-crowns'
      },
      {
        id: 'front-tooth-bonding-gap-correction',
        title: 'Front Tooth Restoration, Composite Bonding & Gap Correction',
        whatsappTopic: 'front tooth composite bonding and gap correction',
        shortDescription: 'Minimally invasive tooth-coloured resin sculpting to repair chipped edges and close front teeth gaps in a single visit.',
        image: '/assets/images/treatments/hygiene-care-800.webp',
        imageAlt: 'Conservative front tooth composite bonding and gap closure treatment',
        whatItIs: 'Composite bonding applies shade-matched nano-hybrid resin directly onto enamel to rebuild chipped front corners, mask white spots, or gently close small spaces (diastema) without heavy tooth drilling.',
        whoMayNeedIt: 'Patients with a chipped front incisor from minor trauma, uneven edges, or small gaps between front teeth looking for a conservative, economical cosmetic repair.',
        commonConcerns: 'Whether the joint line will be visible, how long bonding lasts, and whether enamel has to be shaved.',
        process: [
          'Natural shade selection under daylight-balanced lighting before the tooth dries.',
          'Gentle surface conditioning and adhesive primer application.',
          'Artistic incremental layering and light-curing of composite resin.',
          'Contouring and high-gloss multi-step polishing for seamless blending.'
        ],
        benefits: [
          'Usually completed in a single 30–60 minute visit without lab wait time.',
          'Preserves virtually all healthy natural enamel.',
          'Easy to repolish or touch up over time.'
        ],
        limitations: [
          'Composite resin can gradually absorb tea, coffee, or tobacco stains faster than glazed porcelain.',
          'Larger fractures or wide gaps may require veneers, crowns, or orthodontic closure for stability.'
        ],
        aftercare: [
          'Avoid biting directly into hard fruits (like whole apples or guava) or pens with bonded edges.',
          'Rinse with water after staining beverages like tea, coffee, or turmeric-rich meals.',
          'Schedule periodic polishing to keep margins smooth and glossy.'
        ],
        faqs: [
          { q: 'Does composite bonding require anesthesia?', a: 'When repairing surface chips or closing gaps without deep decay, bonding is typically performed without needing injections.' },
          { q: 'Can front tooth gaps be closed in one day?', a: 'Small to moderate front gaps can often be closed neatly in one sitting with composite bonding after checking your bite.' }
        ],
        deepGuidePath: '/cosmetic-dentistry'
      }
    ]
  },
  {
    id: 'whitening-cleaning',
    number: '03',
    name: 'Teeth Whitening & Cleaning',
    summary: 'Clinically supervised stain brightening, ultrasonic scaling and polishing, and preventive oral checkups.',
    items: [
      {
        id: 'professional-teeth-whitening',
        title: 'Professional Teeth Whitening',
        whatsappTopic: 'teeth whitening',
        shortDescription: 'Dentist-supervised in-office enamel brightening with protective gum barriers for noticeably fresher, cleaner tooth shades.',
        image: '/assets/images/treatments/bright-smile-800.webp',
        imageAlt: 'Clinically supervised teeth whitening procedure in Ghaziabad',
        whatItIs: 'Professional teeth whitening uses controlled, pH-balanced clinical peroxide gels paired with gingival barriers to lift deep organic stains from natural tooth enamel safely.',
        whoMayNeedIt: 'Adults with yellowing or surface discoloration from tea, coffee, ageing, or dietary pigments who have healthy gums and cavity-free front teeth.',
        commonConcerns: 'Post-whitening tooth sensitivity, enamel safety, and realistic shade expectations.',
        process: [
          'Pre-whitening oral checkup and scaling if tartar or surface deposits are present.',
          'Baseline shade recording and application of a protective gingival resin barrier.',
          'Controlled application of clinical whitening gel in measured intervals.',
          'Rinsing, desensitizing paste application, and shade review.'
        ],
        benefits: [
          'More uniform and controlled than abrasive over-the-counter charcoal powders or unregulated strips.',
          'Gum tissues are shielded throughout the clinical session.',
          'Immediate visible freshening without altering tooth structure.'
        ],
        limitations: [
          'Whitening agents do not lighten existing fillings, veneers, or crowns—those may need shade-matching afterward.',
          'Temporary cold sensitivity for 24–48 hours is possible; intrinsic tetracycline or fluorosis stains respond less predictably.'
        ],
        aftercare: [
          'Follow a "white diet" (avoiding tea, coffee, red wine, dark colas, paan, and heavy spices) for 48 hours.',
          'Use a potassium-nitrate desensitizing toothpaste if mild sensitivity occurs.',
          'Avoid tobacco products to keep your brighter shade longer.'
        ],
        faqs: [
          { q: 'Does professional whitening damage tooth enamel?', a: 'When performed after clinical screening at appropriate concentrations, supervised whitening lifts stains without scraping away enamel.' },
          { q: 'How long do whitening results last?', a: 'Results vary from several months to over a year depending on tea, coffee, and tobacco habits.' }
        ],
        deepGuidePath: '/teeth-whitening'
      },
      {
        id: 'scaling-polishing-preventive',
        title: 'Scaling, Polishing, Tartar & Stain Removal & Preventive Checkups',
        whatsappTopic: 'teeth cleaning, scaling and polishing',
        shortDescription: 'Gentle ultrasonic removal of hardened tartar, plaque biofilm, and surface stains paired with a complete preventive dental exam.',
        image: '/assets/images/treatments/dental-exam-800.webp',
        imageAlt: 'Ultrasonic teeth cleaning, scaling and polishing preventive dental care',
        whatItIs: 'Ultrasonic scaling uses high-frequency water-cooled vibrations to dislodge calcified tartar (calculus) and plaque along the gumline, followed by smooth prophy polishing to remove surface stains and slow new buildup.',
        whoMayNeedIt: 'Recommended every 6 months for most adults and teens, especially if you notice yellow deposits behind lower front teeth, coffee/tobacco stains, bad breath, or mild gum bleeding.',
        commonConcerns: 'Myths that scaling loosens teeth or scratches enamel.',
        process: [
          'Complete tooth-by-tooth cavity screening and gum pocket evaluation.',
          'Ultrasonic scaling with sterile water spray to break up hardened calculus gently.',
          'Prophylaxis paste polishing to smooth enamel surfaces and lift tea/coffee stains.',
          'Personalized brushing, flossing, and interdental hygiene guidance.'
        ],
        benefits: [
          'Helps prevent gingivitis, gum bleeding, persistent bad breath, and progressive bone loss.',
          'Detects tiny cavities early when a simple filling is enough.',
          'Leaves teeth noticeably cleaner and smoother.'
        ],
        limitations: [
          'If heavy tartar was masking advanced gum disease, teeth may feel briefly sensitive to cold once calculus is cleared.',
          'Does not bleach intrinsic internal tooth yellowing (pair with whitening if shade lightening is desired).'
        ],
        aftercare: [
          'Avoid very icy drinks for 24 hours if you experience mild sensitivity.',
          'Switch to a soft-bristled toothbrush and brush twice daily using gentle circular strokes along the gumline.',
          'Schedule routine preventive checkups every 6 months.'
        ],
        faqs: [
          { q: 'Does teeth cleaning make teeth loose?', a: 'No. Scaling removes hardened tartar that actually causes gum infection and bone loss; removing deposits allows gums to heal tighter around teeth.' },
          { q: 'How long does scaling and polishing take?', a: 'Most routine ultrasonic cleaning and checkup sessions take 20 to 35 minutes.' }
        ],
        deepGuidePath: '/teeth-cleaning'
      }
    ]
  },
  {
    id: 'root-canal-restorative',
    number: '04',
    name: 'Root Canal & Restorative Dentistry',
    summary: 'Tooth-saving endodontic therapy, Re-RCT, tooth-coloured composite fillings, and fractured tooth rehabilitation.',
    items: [
      {
        id: 'root-canal-re-rct',
        title: 'Root Canal Treatment (RCT) & Re-Root Canal Treatment',
        whatsappTopic: 'root canal treatment',
        shortDescription: 'Rotary endodontic therapy to remove deep nerve infection, relieve severe toothache, and save natural teeth—including re-treatment of previously failed RCTs.',
        image: '/assets/images/treatments/implant-care-800.webp',
        imageAlt: 'Root canal treatment and rotary endodontic care at Oracle Dental Clinic',
        whatItIs: 'Root canal treatment removes inflamed or infected pulp tissue from inside the tooth canals, disinfects and shapes them using modern rotary instruments, and seals the roots with biocompatible gutta-percha. Re-RCT cleans and re-seals a previously treated tooth if new infection develops.',
        whoMayNeedIt: 'Patients with deep cavities reaching the nerve, throbbing night pain, lingering sensitivity to hot/cold, pain on biting, dental abscess, or recurrent infection in an older root canal.',
        commonConcerns: 'Fear of pain during the procedure, number of visits needed, and whether a crown is mandatory afterward.',
        process: [
          'Digital X-ray diagnosis to check root anatomy and periapical infection.',
          'Effective local anesthesia so treatment stays comfortable.',
          'Removal of decay, mechanical rotary canal cleaning, antimicrobial irrigation, and apex length measurement.',
          'Hermetic root sealing and core buildup, followed by crown protection where structurally indicated.'
        ],
        benefits: [
          'Relieves deep dental nerve pain while allowing you to keep your natural tooth.',
          'Stops bacterial infection from spreading into surrounding jawbone.',
          'Re-RCT can often rescue a tooth that would otherwise require extraction.'
        ],
        limitations: [
          'Severely infected teeth or complex Re-RCT cases may require 2–3 sittings with intracanal medication.',
          'Teeth with deep vertical root fractures or insufficient remaining structure may not be savable.'
        ],
        aftercare: [
          'Avoid chewing hard or crunchy food on the treated tooth until the permanent crown is placed.',
          'Take prescribed pain-relief or antibiotic medication strictly as advised.',
          'Return on schedule for final crown placement to prevent tooth splitting.'
        ],
        faqs: [
          { q: 'Can root canal treatment be done in a single sitting?', a: 'Uncomplicated vital or mildly infected cases can often be completed in one sitting; teeth with active pus or swelling are safer across two visits.' },
          { q: 'When is Re-RCT needed?', a: 'Re-RCT is considered when a previously treated tooth develops fresh decay under a leaking filling/crown, missed canals, or persistent root-tip infection.' }
        ],
        deepGuidePath: '/root-canal-treatment'
      },
      {
        id: 'fillings-broken-deep-cavity',
        title: 'Tooth-Coloured Fillings, Composite Restorations & Deep Cavity / Broken Tooth Repair',
        whatsappTopic: 'tooth-coloured dental fillings and broken tooth repair',
        shortDescription: 'Natural-shade composite and GIC restorations that halt tooth decay and rebuild chipped or fractured teeth seamlessly.',
        image: '/assets/images/treatments/dental-tools-800.webp',
        imageAlt: 'Tooth-coloured composite dental fillings and cavity restoration',
        whatItIs: 'Restorative dental fillings remove softened, decayed tooth structure and seal the cavity using durable, tooth-coloured composite resin or glass ionomer (GIC) materials matched closely to surrounding enamel.',
        whoMayNeedIt: 'Anyone with early or deep cavities, dark decay spots, food lodgment between teeth, worn neck-of-tooth notches, or minor broken tooth cusps.',
        commonConcerns: 'Sensitivity after deep fillings, avoiding dark silver amalgam fillings, and knowing if a deep cavity needs RCT instead.',
        process: [
          'Clinical exam and X-ray (for deep cavities) to verify the nerve is healthy.',
          'Gentle removal of decayed tissue (under local anesthesia for deeper cavities).',
          'Protective liner placement for deep cavities near the pulp, followed by layered composite curing.',
          'Anatomical shaping, bite paper check, and smooth polishing.'
        ],
        benefits: [
          'Blends invisibly with natural teeth while bonding micromechanically to remaining tooth structure.',
          'Halts cavity progression before it reaches the pulp nerve.',
          'Restores smooth chewing contours and stops painful food trapping.'
        ],
        limitations: [
          'Very deep cavities close to the nerve may show transient sensitivity or later require root canal therapy if pulp inflammation persists.',
          'Large fractures involving over half the tooth are stronger with an onlay or crown.'
        ],
        aftercare: [
          'Wait for numbness to fade completely before eating so you do not bite your lip or cheek.',
          'Floss carefully around interproximal fillings to prevent secondary decay.',
          'Inform the clinic if the filling feels slightly high when biting down.'
        ],
        faqs: [
          { q: 'How do I know if I need a filling or a root canal?', a: 'Mild decay without spontaneous night pain usually responds well to a filling; lingering throbbing pain or nerve exposure typically requires a root canal.' },
          { q: 'Are tooth-coloured composite fillings strong enough for back molars?', a: 'Yes, modern nano-hybrid composites are designed specifically to withstand normal molar chewing forces.' }
        ],
        deepGuidePath: '/dental-fillings'
      }
    ]
  },
  {
    id: 'braces-aligners',
    number: '05',
    name: 'Braces & Aligners',
    summary: 'Orthodontic teeth straightening and bite correction with metal, ceramic, self-ligating braces, and clear aligners.',
    items: [
      {
        id: 'metal-ceramic-self-ligating-braces',
        title: 'Metal, Ceramic & Self-Ligating Dental Braces',
        whatsappTopic: 'dental braces',
        shortDescription: 'Proven fixed orthodontic systems for teens and adults to correct crowding, protruding teeth, gaps, and bite misalignment.',
        image: '/assets/images/treatments/orthodontic-care-800.webp',
        imageAlt: 'Orthodontic dental braces options including metal, ceramic and self-ligating brackets',
        whatItIs: 'Fixed braces use precision brackets bonded to teeth and gentle archwires to guide teeth steadily into healthier alignment and balanced jaw occlusion. Options include durable stainless-steel metal braces, tooth-coloured ceramic braces, and low-friction self-ligating clip brackets.',
        whoMayNeedIt: 'Children, teens, and adults with crooked or crowded teeth, spacing, deep bite, open bite, crossbite, or forwardly placed teeth.',
        commonConcerns: 'Treatment duration, discomfort after adjustments, food restrictions, and visibility of brackets.',
        process: [
          'Orthodontic records: clinical bite exam, study models/scans, and OPG/lateral cephalogram X-rays.',
          'Customized treatment plan selecting metal, ceramic, or self-ligating brackets.',
          'Bonding appointment and periodic 4–6 week wire activation visits.',
          'Debonding once alignment is complete, followed by essential retainers to hold results.'
        ],
        benefits: [
          'Effective across mild, moderate, and complex skeletal or dental bite corrections.',
          'Works continuously 24/7 without relying on patient tray-wear compliance.',
          'Ceramic and self-ligating brackets offer lower visibility and streamlined hygiene.'
        ],
        limitations: [
          'Requires diligent brushing around brackets and avoiding very hard/sticky foods that can pop brackets loose.',
          'Typical treatment spans 12–24 months depending on case complexity; retainers are mandatory afterward.'
        ],
        aftercare: [
          'Use an orthodontic toothbrush and interdental brushes after every meal.',
          'Avoid chewing hard nuts, ice, or sticky candies that bend wires or detach brackets.',
          'Wear prescribed retainers faithfully after braces removal to prevent relapse.'
        ],
        faqs: [
          { q: 'What is the advantage of self-ligating braces?', a: 'Self-ligating brackets use a built-in sliding clip instead of elastic ties, which reduces friction, simplifies cleaning, and can reduce chair adjustment time.' },
          { q: 'Are adults too old for dental braces?', a: 'No. As long as gums and supporting bone are healthy, teeth can be aligned safely at almost any adult age.' }
        ],
        deepGuidePath: '/dental-braces'
      },
      {
        id: 'clear-aligners-bite-correction',
        title: 'Clear Aligners & Discreet Teeth Straightening',
        whatsappTopic: 'clear aligners',
        shortDescription: 'Custom-made, removable transparent orthodontic trays for subtle teeth straightening and easier daily brushing.',
        image: '/assets/images/treatments/hygiene-care-800.webp',
        imageAlt: 'Clear orthodontic aligners for discreet teeth straightening in Ghaziabad and Noida Extension',
        whatItIs: 'Clear aligners are a series of transparent, smooth medical-grade thermoplastic trays sequentially engineered to apply gentle controlled forces that gradually straighten teeth and refine bite alignment without metal wires.',
        whoMayNeedIt: 'Working professionals, college students, and teens with mild to moderate crowding, spacing, relapse after prior braces, or bite issues who prefer a nearly invisible removable option.',
        commonConcerns: 'Whether aligners work as well as braces, speech adjustment, and daily wear discipline.',
        process: [
          'Orthodontic suitability assessment, intraoral records/scans, and X-rays.',
          'Digital movement staging showing projected tray sequence and timeline.',
          'Delivery of sequential aligner sets (and small tooth-coloured attachments if needed).',
          'Periodic clinic progress reviews followed by final clear retainers.'
        ],
        benefits: [
          'Virtually unnoticeable in everyday conversation and photographs.',
          'Removable during meals—eat normally and brush/floss without brackets in the way.',
          'Smooth edges minimize cheek and lip irritation.'
        ],
        limitations: [
          'Must be worn 20–22 hours daily; inconsistent wear delays or compromises outcomes.',
          'Severe skeletal or complex root movements may still achieve more predictable control with fixed braces.'
        ],
        aftercare: [
          'Remove aligners before eating or drinking anything hot or sugary (plain cool water is fine).',
          'Brush teeth before reinserting trays and rinse trays gently with cool water daily.',
          'Store trays in their protective case whenever removed to prevent loss or warping.'
        ],
        faqs: [
          { q: 'How many hours a day must clear aligners be worn?', a: 'For predictable tooth movement, aligners should be worn 20 to 22 hours every day, removed only for meals and brushing.' },
          { q: 'Can clear aligners fix gaps and mild crowding?', a: 'Yes, clear aligners are particularly effective for spacing, mild-to-moderate crowding, and orthodontic relapse.' }
        ],
        deepGuidePath: '/clear-aligners'
      }
    ]
  },
  {
    id: 'oral-surgery',
    number: '06',
    name: 'Oral Surgery',
    summary: 'Careful wisdom tooth surgery, impacted molar removal, and gentle simple or complicated tooth extractions.',
    items: [
      {
        id: 'wisdom-impacted-tooth-extraction',
        title: 'Wisdom Tooth & Impacted Wisdom Tooth Extraction',
        whatsappTopic: 'wisdom tooth extraction',
        shortDescription: 'Safe evaluation and gentle surgical removal of painful, angled, or impacted third molars with structured recovery care.',
        image: '/assets/images/treatments/dental-chair-800.webp',
        imageAlt: 'Wisdom tooth and impacted molar oral surgery evaluation',
        whatItIs: 'Wisdom tooth extraction removes third molars that lack jaw space to erupt straight—whether partially erupted under an inflamed gum flap (pericoronitis) or fully impacted horizontally against the neighboring second molar.',
        whoMayNeedIt: 'Patients experiencing recurring back-jaw pain, gum flap swelling, cheek biting, food trapping behind the last molar, jaw stiffness, or decay threatening the adjacent tooth.',
        commonConcerns: 'Surgical pain, facial swelling, nerve safety, and how many days of rest are needed.',
        process: [
          'Clinical exam and panoramic OPG / digital X-ray to map root curvature and proximity to jaw nerves or sinus.',
          'Profound local anesthesia ensuring comfort throughout the procedure.',
          'Atraumatic elevation or minor surgical sectioning of the impacted tooth, thorough socket cleaning, and sutures where required.',
          'Hemostasis check, written aftercare instructions, and suture review after ~7 days if non-resorbable stitches are placed.'
        ],
        benefits: [
          'Eliminates recurring painful gum infections (pericoronitis) and jaw pressure.',
          'Protects the valuable neighboring second molar from hidden decay and bone loss.',
          'Prevents cyst formation around long-standing impacted teeth.'
        ],
        limitations: [
          'Normal post-surgical swelling and mild jaw stiffness peak around 48–72 hours before settling over 5–7 days.',
          'Lower impacted wisdom teeth close to the inferior alveolar nerve carry a small risk of temporary lip/chin tingling, discussed upfront from X-rays.'
        ],
        aftercare: [
          'Bite firmly on the sterile gauze pack for 45 minutes; do not spit forcefully, rinse vigorously, or use straws for 24 hours.',
          'Apply external ice packs intermittently on day 1 and eat cool, soft foods.',
          'Begin gentle warm saline rinses after 24 hours and avoid smoking during healing to prevent dry socket.'
        ],
        faqs: [
          { q: 'Do all wisdom teeth need to be removed?', a: 'No. Straight, fully erupted, healthy wisdom teeth that can be cleaned easily do not require extraction.' },
          { q: 'When can I return to work after wisdom tooth surgery?', a: 'Most patients resume light desk work within 1 to 3 days, depending on impaction difficulty.' }
        ],
        deepGuidePath: '/wisdom-tooth-extraction'
      },
      {
        id: 'simple-surgical-complicated-extraction',
        title: 'Simple, Surgical & Complicated Tooth Extraction',
        whatsappTopic: 'tooth extraction',
        shortDescription: 'Gentle removal of severely decayed, fractured, broken-down root stumps, or non-savable teeth with socket preservation focus.',
        image: '/assets/images/treatments/dental-exam-800.webp',
        imageAlt: 'Gentle simple and surgical tooth extraction under local anesthesia',
        whatItIs: 'When a tooth is too damaged by deep decay, vertical fracture, or advanced periodontal bone loss to be restored safely, atraumatic simple or surgical extraction removes the tooth cleanly while preserving surrounding jawbone for future replacement.',
        whoMayNeedIt: 'Patients with non-restorable broken teeth, retained infected root pieces, severely loose teeth, or orthodontic space requirements.',
        commonConcerns: 'Injection comfort, bleeding control, blood-thinner precautions, and future tooth replacement options.',
        process: [
          'Medical history review (including diabetes, blood pressure, or blood thinners) and diagnostic X-ray.',
          'Local anesthesia administration and gentle loosening of the tooth or root separation if curved/fractured.',
          'Careful socket curettage, saline irrigation, and sterile gauze compression (plus sutures if surgical).',
          'Discussion of replacement options (implant, bridge, or partial denture) once healed.'
        ],
        benefits: [
          'Clears chronic source of pain, swelling, and oral infection.',
          'Atraumatic technique protects bone walls for smoother healing and future implant readiness.'
        ],
        limitations: [
          'Missing back teeth left unreplaced long-term can allow neighboring teeth to drift and tilt.',
          'Medical clearance may be needed before extraction for patients on certain anticoagulants or with uncontrolled blood sugar.'
        ],
        aftercare: [
          'Keep the gauze pad in place for 45 minutes and rest with head slightly elevated.',
          'Avoid hot drinks, smoking, alcohol, and crunchy foods for the first 24–48 hours.',
          'Take prescribed medications as directed and keep surrounding teeth clean gently.'
        ],
        faqs: [
          { q: 'Will I feel pain during a tooth extraction?', a: 'Local anesthesia numbs the tooth and surrounding gum; you may feel gentle pushing pressure, not sharp pain.' },
          { q: 'How soon can an extracted tooth be replaced?', a: 'Depending on infection and bone quality, immediate implants may be evaluated in selected cases, or standard replacement begins after 6–12 weeks of healing.' }
        ],
        deepGuidePath: '/tooth-extraction'
      }
    ]
  },
  {
    id: 'gum-treatments',
    number: '07',
    name: 'Gum Treatments',
    summary: 'Periodontal assessment, bleeding gums care, deep cleaning (scaling & root planing), and gum recession evaluation.',
    items: [
      {
        id: 'bleeding-gums-deep-cleaning-periodontal',
        title: 'Bleeding Gums, Gum Disease Assessment & Deep Cleaning',
        whatsappTopic: 'gum treatment and deep cleaning',
        shortDescription: 'Targeted periodontal care to stop bleeding gums, clear deep subgingival tartar, and arrest gum disease before teeth loosen.',
        image: '/assets/images/treatments/dental-tools-800.webp',
        imageAlt: 'Periodontal gum disease evaluation and deep cleaning treatment',
        whatItIs: 'Periodontal therapy evaluates gum pocket depth and bone support, treating gingivitis and periodontitis via thorough subgingival deep cleaning (scaling and root planing) to clear hidden bacteria beneath the gumline.',
        whoMayNeedIt: 'Patients noticing blood while brushing, puffy or tender red gums, persistent bad breath, gum pus, or early tooth mobility.',
        commonConcerns: 'Ignoring painless bleeding until teeth become loose, and worry about discomfort during deep cleaning.',
        process: [
          'Periodontal probing, bleeding index check, and X-rays to assess supporting bone levels.',
          'Ultrasonic scaling and root planing beneath the gumline (under local anesthesia for deep pockets).',
          'Antimicrobial irrigation and targeted home oral hygiene protocol.',
          'Re-evaluation after 4–6 weeks to confirm pocket shrinkage and inflammation control.'
        ],
        benefits: [
          'Reverses early gingivitis and helps stabilize moderate periodontal disease.',
          'Reduces chronic gum bleeding, swelling, and bacterial halitosis.',
          'Protects long-term jawbone support around natural teeth and dental implants.'
        ],
        limitations: [
          'Severe bone loss already destroyed by advanced periodontitis cannot regrow through cleaning alone; maintenance is lifelong.',
          'Smoking and poorly controlled diabetes significantly slow gum healing.'
        ],
        aftercare: [
          'Brush gently twice daily with a soft brush and use interdental brushes or floss daily.',
          'Use prescribed antimicrobial mouthwash only for the recommended duration.',
          'Attend periodontal maintenance cleanings every 3–6 months as advised.'
        ],
        faqs: [
          { q: 'Why do my gums bleed even though they do not hurt?', a: 'Early gum disease (gingivitis) is frequently painless—bleeding during brushing is an early warning sign of plaque-driven inflammation.' },
          { q: 'What is the difference between routine scaling and deep cleaning?', a: 'Routine scaling cleans above and along the gumline, whereas deep cleaning (root planing) removes tartar and smooths root surfaces inside deeper periodontal pockets.' }
        ],
        deepGuidePath: '/periodontal-gum-treatment-ghaziabad'
      },
      {
        id: 'gum-recession-periodontal-consultation',
        title: 'Gum Recession Evaluation & Periodontal Consultation',
        whatsappTopic: 'gum recession and periodontal consultation',
        shortDescription: 'Diagnostic evaluation of receding gums, exposed sensitive roots, and tailored stabilization plans.',
        image: '/assets/images/treatments/implant-care-800.webp',
        imageAlt: 'Gum recession and root sensitivity consultation at Oracle Dental Clinic',
        whatItIs: 'A dedicated periodontal consultation identifies why gums are pulling back—whether from aggressive hard brushing, tartar buildup, bite trauma, or thin gum biotype—and builds a plan to stop further recession and relieve root sensitivity.',
        whoMayNeedIt: 'Individuals noticing teeth looking longer, notched root lines near the gum, or sharp cold sensitivity at the gum margin.',
        commonConcerns: 'Whether receded gums grow back naturally and how to stop worsening root exposure.',
        process: [
          'Measurement of recession depth, gum thickness, brushing habits, and bite forces.',
          'Correction of root causes: gentle technique retraining, tartar removal, or bite adjustment.',
          'Desensitizing treatment, protective root-surface composite sealing, or surgical referral/planning where indicated.'
        ],
        benefits: [
          'Addresses the underlying cause before deeper root decay or mobility occurs.',
          'Relieves sharp cold and brushing sensitivity along exposed necks of teeth.'
        ],
        limitations: [
          'Receded gum tissue does not spontaneously grow back on its own; early stabilization is key.'
        ],
        aftercare: [
          'Switch immediately to an ultra-soft toothbrush and avoid horizontal scrubbing.',
          'Use a desensitizing fluoride toothpaste gently along exposed margins.',
          'Monitor gumline measurements at periodic dental checkups.'
        ],
        faqs: [
          { q: 'Can brushing too hard cause gum recession?', a: 'Yes. Using medium or hard-bristled brushes with heavy scrubbing pressure is one of the most common non-infectious causes of gum recession.' },
          { q: 'How can exposed sensitive tooth roots be protected?', a: 'Depending on depth, clinical desensitizers, tooth-coloured cervical bonding, or periodontal procedures can protect exposed root dentin.' }
        ],
        deepGuidePath: '/periodontal-gum-treatment-ghaziabad'
      }
    ]
  },
  {
    id: 'pediatric-family',
    number: '08',
    name: 'Pediatric & Family Dentistry',
    summary: 'Gentle children’s dental checkups, pediatric fillings, preventive care, and protective fluoride & dental sealants.',
    items: [
      {
        id: 'kids-checkups-fillings-preventive',
        title: "Children's Dental Checkups, Fillings & Preventive Care",
        whatsappTopic: 'children dental checkup and kids dentistry',
        shortDescription: 'Calm, child-friendly dental checkups, cavity monitoring, and gentle tooth-coloured fillings to protect growing smiles.',
        image: '/assets/images/treatments/bright-smile-800.webp',
        imageAlt: 'Child-friendly pediatric dental checkup and family dentistry in Chipiyana Buzurg',
        whatItIs: 'Pediatric dental care focuses on building positive, fear-free clinic visits while monitoring baby teeth, jaw growth, permanent tooth eruption, and treating childhood cavities conservatively with gentle fillings.',
        whoMayNeedIt: 'Children from age 1 onward for routine 6-month checkups, as well as kids with milk-tooth cavities, toothache, or early orthodontic space concerns.',
        commonConcerns: 'Dental anxiety in children and why baby teeth should be treated even though they eventually fall out.',
        process: [
          'Tell-Show-Do introduction so your child feels comfortable with the chair and instruments.',
          'Gentle examination of teeth, gums, brushing habits, and eruption sequence.',
          'Conservative decay removal and quick tooth-coloured GIC or composite filling if cavities are found.',
          'Parent guidance on diet, brushing supervision, and eruption milestones.'
        ],
        benefits: [
          'Saves baby teeth that act as natural space holders for incoming permanent teeth.',
          'Prevents painful infections and sudden school-day dental emergencies.',
          'Builds lifelong confidence and healthy brushing habits early.'
        ],
        limitations: [
          'Very young or highly anxious children may need shorter staged familiarization visits.',
          'Deeply infected baby molars may require pediatric pulp therapy (pulpotomy/pulpectomy) rather than a simple filling.'
        ],
        aftercare: [
          'Supervise brushing twice daily with an age-appropriate pea-sized amount of fluoride toothpaste.',
          'Limit sticky snacks, frequent sugary juices, and bedtime milk bottles without rinsing.',
          'Keep 6-month preventive dental checkups to catch small spots early.'
        ],
        faqs: [
          { q: 'Why fix cavities in milk teeth if they fall out anyway?', a: 'Infected milk teeth cause pain, disturb eating and sleep, can damage the developing permanent tooth underneath, and early loss leads to crowding.' },
          { q: 'When should my child have their first dental visit?', a: 'A first preventive visit around age 1—or within 6 months of the first tooth erupting—helps prevent early childhood decay.' }
        ],
        deepGuidePath: '/kids-dentist'
      },
      {
        id: 'pediatric-fluoride-sealants',
        title: 'Pediatric Fluoride Application & Pit-and-Fissure Sealants',
        whatsappTopic: 'kids fluoride and dental sealants',
        shortDescription: 'Quick, drill-free preventive shields that strengthen young enamel and seal deep molar grooves against childhood cavities.',
        image: '/assets/images/treatments/hygiene-care-800.webp',
        imageAlt: 'Preventive pediatric fluoride varnish and pit-and-fissure dental sealants',
        whatItIs: 'Topical fluoride varnish remineralizes and strengthens developing tooth enamel against acid attack, while pit-and-fissure sealants place a thin protective resin shield over the deep chewing grooves of newly erupted permanent back molars.',
        whoMayNeedIt: 'Children aged 6–14 with newly erupted permanent first and second molars, deep molar grooves, or elevated cavity risk.',
        commonConcerns: 'Whether any drilling or injections are required (none are needed) and how long sealants stay intact.',
        process: [
          'Gentle cleaning and drying of the chewing surfaces—no drilling or injections required.',
          'For sealants: mild conditioning gel, flowing sealant into deep molar grooves, and blue-light curing in seconds.',
          'For fluoride: quick painting of professional fluoride varnish onto enamel surfaces.'
        ],
        benefits: [
          'Completely drill-free, quick, and comfortable for children.',
          'Blocks food particles and cavity-causing bacteria from deep pits where toothbrush bristles cannot reach.',
          'Helps remineralize early white-spot enamel weakness.'
        ],
        limitations: [
          'Sealants protect chewing grooves but do not replace daily brushing and flossing between teeth.',
          'Sealants should be checked during routine 6-month exams and topped up if worn.'
        ],
        aftercare: [
          'After fluoride varnish, avoid hot drinks or hard crunchy foods for 2–4 hours and delay brushing until the next morning as instructed.',
          'Continue regular twice-daily brushing and limit frequent sugary snacks.'
        ],
        faqs: [
          { q: 'Does sealant placement hurt or require drilling?', a: 'Not at all. Sealants are painted smoothly over clean enamel grooves and hardened with a curing light—no drilling or anesthesia is needed.' },
          { q: 'Which teeth benefit most from dental sealants?', a: 'Permanent first molars (around age 6) and permanent second molars (around age 12) benefit most because their grooves are deep and prone to decay.' }
        ],
        deepGuidePath: '/kids-dentist'
      }
    ]
  },
  {
    id: 'general-emergency',
    number: '09',
    name: 'General & Emergency Dentistry',
    summary: 'Same-day toothache consultation (9 AM–9 PM daily), dental infection & swelling care, broken tooth emergencies, and routine dental exams.',
    items: [
      {
        id: 'toothache-infection-swelling-emergency',
        title: 'Toothache Consultation, Dental Infection, Swollen Gums & Broken Tooth Emergencies',
        whatsappTopic: 'emergency dental care and toothache relief',
        shortDescription: 'Prompt same-day clinical evaluation and stabilization (Open Daily: 9:00 AM – 9:00 PM) for acute tooth pain, facial or gum swelling, abscesses, and dental trauma.',
        image: '/assets/images/treatments/dental-chair-800.webp',
        imageAlt: 'Emergency dental care for toothache, swelling and broken teeth in Ghaziabad',
        whatItIs: 'Emergency dental care rapidly diagnoses the exact source of acute pain, infection, gum abscess, or sudden tooth fracture and delivers immediate stabilization—such as drainage, nerve-calming access dressing, temporary bonding, or targeted medication.',
        whoMayNeedIt: 'Anyone suffering severe throbbing toothache, sudden facial or gum swelling, pus discharge, knocked-out or chipped teeth from an accident, or a dislodged crown.',
        commonConcerns: 'Finding a reliable dentist in the evening or on Sundays, controlling infection safely, and saving a traumatized tooth.',
        process: [
          'Call +91 7011961515 ahead so urgent triage is coordinated smoothly (Open Daily: 9:00 AM – 9:00 PM).',
          'Focused clinical exam and digital X-ray to pinpoint the source of pain or abscess.',
          'Immediate relief step (sedative dressing, emergency RCT opening, abscess drainage, splinting, or smoothing sharp edges).',
          'Clear follow-up plan to complete definitive restorative treatment once acute symptoms settle.'
        ],
        benefits: [
          'Addresses the physical cause of pain rather than relying solely on repeated painkillers.',
          'Prevents localized dental abscesses from escalating into serious facial cellulitis.',
          'Improves chances of saving chipped or avulsed teeth when treated promptly.'
        ],
        limitations: [
          'Emergency visits focus on stabilizing acute pain and infection; definitive crowns or multi-step restorations are completed at scheduled follow-ups.',
          'Severe spreading swelling affecting swallowing or breathing requires immediate hospital emergency medical care.'
        ],
        aftercare: [
          'Take prescribed antibiotics and analgesics strictly for the full advised course—do not self-medicate randomly.',
          'Avoid applying heat packs directly on swollen cheeks (use cold compresses externally instead).',
          'Attend your follow-up appointment so the stabilized tooth is permanently restored.'
        ],
        faqs: [
          { q: 'What are the clinic hours for urgent dental emergencies?', a: 'Oracle Dental Clinic & Implant Center is Open Daily: 9:00 AM – 9:00 PM (Monday to Sunday). Please call +91 7011961515 before heading in so urgent triage is prepared.' },
          { q: 'What should I do if a permanent tooth is knocked out?', a: 'Hold the tooth by the white crown (never the root), rinse gently without scrubbing, place it in cold milk or saline, and reach the clinic immediately.' }
        ],
        deepGuidePath: '/emergency-dentist-ghaziabad'
      },
      {
        id: 'routine-dental-examination',
        title: 'Routine Dental Examination & Oral Health Screening',
        whatsappTopic: 'routine dental checkup',
        shortDescription: 'Comprehensive dental checkups with Dr. Prashant Kumar Vats (BDS) for early cavity detection, gum screening, and clear treatment guidance.',
        image: '/assets/images/treatments/orthodontic-care-800.webp',
        imageAlt: 'Routine dental examination and preventive oral health screening',
        whatItIs: 'A structured preventive examination inspecting every tooth, existing fillings/crowns, gum health, bite alignment, jaw joint comfort, and oral soft tissues—providing a clear written roadmap before problems become painful or costly.',
        whoMayNeedIt: 'Every adult and family member every 6 months, or anyone wanting an honest second opinion and transparent treatment plan.',
        commonConcerns: 'Hidden painless cavities, tartar buildup, and getting transparent explanations without pressure.',
        process: [
          'Review of medical history, medications, and any mild sensitivity or chewing concerns.',
          'Thorough clinical oral exam and digital X-ray only where clinically indicated.',
          'Clear visual explanation of findings, treatment alternatives, and upfront cost estimates.'
        ],
        benefits: [
          'Catches small cavities and early gingivitis when treatment is quick and economical.',
          'Provides clear preventive tips customized to your oral health risks.'
        ],
        limitations: [
          'Some deep interdental cavities or root-tip issues require diagnostic X-rays for definitive confirmation.'
        ],
        aftercare: [
          'Follow personalized brushing, flossing, and dietary advice.',
          'Schedule follow-up checkups every 6 months.'
        ],
        faqs: [
          { q: 'How often should I get a routine dental checkup?', a: 'Most people benefit from a dental checkup and cleaning every 6 months, or every 3–4 months if managing gum disease or diabetes.' },
          { q: 'Can I walk in or should I book in advance?', a: 'Walk-ins are welcome at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, and booking via WhatsApp or +91 7011961515 helps minimize waiting.' }
        ],
        deepGuidePath: '/dentist-chipiyana-buzurg-ghaziabad'
      }
    ]
  }
];
