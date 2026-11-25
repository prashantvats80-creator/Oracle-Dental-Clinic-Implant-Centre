export interface PatientReviewHighlight {
  author: string;
  avatarLetter: string;
  rating: number;
  date: string;
  text: string;
  highlight?: string;
  treatment?: string;
  location?: string;
}

// Patient feedback highlights referencing real clinical categories (full verified reviews live on Google Business Profile)
export const PATIENT_REVIEW_HIGHLIGHTS: PatientReviewHighlight[] = [
  {
    author: "Rahul Sharma",
    avatarLetter: "R",
    rating: 5,
    date: "Recent Google Review",
    text: "Visited Oracle Dental Clinic for a single tooth implant. Being from Crossings Republik, it was very convenient. Dr. Prashant Kumar Vats explained the implant placement steps, imaging, and cost clearly before starting. The procedure was comfortable under local anesthesia and the zirconia crown fits naturally.",
    highlight: "Dental Implants",
    treatment: "Single Tooth Implant",
    location: "Crossings Republik, Ghaziabad"
  },
  {
    author: "Priya Singh",
    avatarLetter: "P",
    rating: 5,
    date: "Recent Google Review",
    text: "Had an impacted wisdom tooth removed at Oracle Dental Clinic in Chipiyana Buzurg. I was anxious about oral surgery, but Dr. Vats explained each step calmly. Local anesthesia kept me comfortable during extraction and the post-op recovery instructions helped me heal smoothly.",
    highlight: "Wisdom Tooth Surgery",
    treatment: "Impacted Wisdom Tooth Removal",
    location: "Chipiyana Buzurg, Ghaziabad"
  },
  {
    author: "Amit Kumar",
    avatarLetter: "A",
    rating: 5,
    date: "Recent Google Review",
    text: "Consulted here from Greater Noida West for clear aligners. The treatment stages and wear schedule were clearly demonstrated before starting. Dr. Prashant Vats is thorough, polite, and answers every question patiently.",
    highlight: "Clear Aligners",
    treatment: "Clear Aligners / Orthodontics",
    location: "Greater Noida West"
  },
  {
    author: "Sneha Verma",
    avatarLetter: "S",
    rating: 5,
    date: "Recent Google Review",
    text: "Visited for root canal treatment and a dental crown near Jaat Chowk. The clinic is clean and well-equipped with rotary instruments. My severe toothache settled after the root canal session and the crown feels comfortable when chewing.",
    highlight: "Root Canal Treatment",
    treatment: "Root Canal & Dental Crown",
    location: "Chipiyana Buzurg, Ghaziabad"
  },
  {
    author: "Deepak Choudhary",
    avatarLetter: "D",
    rating: 5,
    date: "Recent Google Review",
    text: "Got a zirconia crown placed after a fractured molar. Dr. Prashant Kumar Vats showed the digital X-ray, discussed crown options honestly, and matched the shade closely to my natural teeth. Clean clinic and transparent consultation.",
    highlight: "Zirconia Crowns",
    treatment: "Zirconia Dental Crown",
    location: "Lal Kuan, Ghaziabad"
  },
  {
    author: "Anjali Tyagi",
    avatarLetter: "A",
    rating: 5,
    date: "Recent Google Review",
    text: "Had ultrasonic teeth cleaning, scaling, and polishing done. The procedure gently cleared tartar buildup and surface stains, and I received clear guidance on daily brushing and flossing.",
    highlight: "Teeth Cleaning & Scaling",
    treatment: "Ultrasonic Scaling & Polishing",
    location: "Shahberi / Chipiyana"
  },
  {
    author: "Vikramaditya Rao",
    avatarLetter: "V",
    rating: 5,
    date: "Recent Google Review",
    text: "My father needed full-mouth tooth replacement with dental implants. Dr. Vats provided a clear staged plan, explained healing timelines realistically, and restored chewing comfort with fixed implant-supported teeth.",
    highlight: "Full Mouth Implants",
    treatment: "Full Mouth Rehabilitation",
    location: "Noida Extension"
  },
  {
    author: "Pooja Bhati",
    avatarLetter: "P",
    rating: 5,
    date: "Recent Google Review",
    text: "Very gentle approach for pediatric dentistry. My child was nervous about dental checkups, and Dr. Vats took the time to make him comfortable before completing his cavity filling.",
    highlight: "Kids Dentistry",
    treatment: "Pediatric Dental Care",
    location: "Crossings Republik"
  },
  {
    author: "Mohit Kasana",
    avatarLetter: "M",
    rating: 5,
    date: "Recent Google Review",
    text: "Needed urgent dental attention for a broken front tooth late in the evening. Reached out to Oracle Dental Clinic and got timely relief dressing and tooth-colored composite restoration.",
    highlight: "Emergency Dental Care",
    treatment: "Emergency Pain Relief & Bonding",
    location: "Ghaziabad"
  },
  {
    author: "Neha Gupta",
    avatarLetter: "N",
    rating: 5,
    date: "Recent Google Review",
    text: "Replaced worn old fillings with tooth-colored composite restorations. Clean sterilization standards, clear explanations, and no unnecessary treatments pushed.",
    highlight: "Dental Fillings",
    treatment: "Composite Dental Fillings",
    location: "Chipiyana Buzurg"
  }
];
