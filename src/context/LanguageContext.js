import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: { trustSafety: 'Trust & Safety', aboutUs: 'About Us', blogs: 'Blogs', career: 'Career', contactUs: 'Contact Us' },
    hero: { title1: 'Unified Automotive', title2: 'Transport Ecosystem', title3: 'For India', paragraph: 'Raahi brings ride-hailing, intercity travel, and traffic rescue onto one platform. Book cabs, autos, bikes, or get rescued from jams—all with a single app.', appStore: 'Download on the', appStoreName: 'App Store', googlePlay: 'Get it on', googlePlayName: 'Google Play' },
    services: 'Services',
    suggestions: {
      cabMini: { title: 'Cab Mini', description: 'Affordable compact cabs for quick city rides.' },
      auto: { title: 'Auto', description: 'Quick and affordable auto rides for short distances.' },
      cabXL: { title: 'Cab XL', description: 'Spacious cabs for group travel and extra luggage.' },
      rescue: { title: 'Rescue', description: 'Bikers rescue you from traffic jams, we handle your car, stress-free.' },
      premium: { title: 'Premium', description: 'Luxury rides with top-rated drivers for a superior experience.' },
      driverRental: { title: 'Driver Rental', description: 'Hire a professional driver by the hour for your own vehicle.' },
    },
    footer: {
      visitHelp: 'Contact Us',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
      aboutUs: 'About Us',
      blogs: 'Blogs',
      career: 'Career',
      contactUs: 'Contact Us',
      trustSafety: 'Trust & Safety',
      terms: 'Terms',
      privacy: 'Privacy',
    },
    getTheApp: 'Get the App',
    features: {
      section1: {
        subtitle: 'Why Raahi',
        title: 'One platform. Every ride.',
        body: `You’re not a gig worker. You’re a mobility partner.

The market has normalized instability, opaque commissions, and one-sided accountability. We haven’t.
Raahi is built on partnership — not extraction.

What that means for you

Fair by design
Transparent commission. No hidden deductions. Clear earnings after every trip.

Respect as policy
Dedicated partner support. Fast dispute resolution. Fair rating review.
You’re treated as a professional, not a disposable resource.

Stability over short-term hype
No confusing bonus traps. No unpredictable payout structures.
We prioritize consistent ride allocation and smarter demand management — so your time works for you.`
      },
      section2: {
        subtitle: 'For everyone',
        title: 'Mobility that moves with you.',
        body: `Mobility that shows up — every time.
City travel should feel reliable, fair, and safe. Not stressful.
Raahi is built as a unified mobility ecosystem — not just a ride-hailing app.`
      },
      section3: {
        subtitle: 'Across India',
        title: 'From cab to bus. All under one roof.',
        body: `Multiple options, one platform
Cab. Auto. Bike taxi. Rescue. Driver-on-rent. Premium.
Whatever the situation, we have a solution.

Transparent pricing
Clear fares. Upfront visibility. No unpredictable spikes that break trust.

Verified partners
Professionally onboarded, background-checked mobility partners.
Fast resolution. Human assistance.
Accountability on both sides.

We believe trust isn’t built through discounts.
It’s built through consistency.

Ride smart. Ride safe. Ride Raahi.`
      },
    },
    franchise: {
      label: 'Join us',
      title: 'Build a Mobility Business. Not Just a Fleet.',
      intro: "Raahi isn't just a platform. It's an opportunity to operate structured mobility networks in your city. If you understand local demand, driver psychology, and ground operations — we give you the system to scale.",
      whatYouGet: 'What You Get',
      contactUs: 'Contact Us',
      benefits: [
        { title: 'Operational Framework', description: 'Technology, onboarding standards, compliance structure, demand integration.' },
        { title: 'Revenue Share Model', description: 'Transparent economics. Predictable margins. Clear reporting.' },
        { title: 'Multi-Service Advantage', description: 'Run cab, bike taxi, rescue, and driver-on-rent operations under one brand.' },
        { title: 'Brand Backing + Local Control', description: 'National positioning with city-level execution authority.' },
      ],
      about1: 'We are building organized mobility ecosystems — city by city. Not informal fleets. Not disconnected contractors. Structured, accountable, scalable networks.',
      about2: "If you're ready to lead teams, build trust locally, and grow a long-term mobility business — Partner with Raahi. Build the future of movement in your city.",
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { question: 'What is Raahi and how does it work?', answer: 'Raahi is a unified automotive transport ecosystem for India that connects riders, drivers, and operators on a single platform. Simply download the app, enter your destination, and get matched with the nearest available ride option.' },
        { question: 'How do I book a ride with Raahi?', answer: 'Booking a ride is simple. Open the Raahi app, enter your pickup and drop-off locations, choose your preferred ride type, and confirm your booking. You can also schedule rides in advance using our Handsfree cab feature.' },
        { question: 'What payment methods does Raahi accept?', answer: 'Raahi accepts multiple payment methods including UPI, credit/debit cards, net banking, and cash. You can also add a Raahi wallet for seamless payments and exclusive discounts.' },
        { question: 'Is Raahi available in my city?', answer: 'Raahi is rapidly expanding across India. We are currently operational in major cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and many more. Check the app for availability in your area.' },
        { question: 'How can I become a Raahi driver?', answer: 'Becoming a Raahi driver is easy. Download the Raahi Driver app, submit your documents (driving license, vehicle registration, insurance), complete the verification process, and start earning on your own schedule.' },
      ],
    },
    trustSafety: {
      pageTitle: 'Trust & Safety',
      pageSubtitle: 'How Raahi keeps drivers and riders safe — from onboarding to every trip',
      heading1: 'Secure driver onboarding',
      p1a: 'Every driver on Raahi goes through a structured verification process before they can accept rides. We verify identity, driving licence, and vehicle documents. Background checks are part of our standard onboarding so that only eligible, verified partners join the platform.',
      p1b: 'Drivers are trained on safety norms, app usage, and Raahi\'s code of conduct. This ensures that everyone who represents Raahi on the road meets our safety and quality standards.',
      heading2: 'A safe platform for drivers and users',
      p2a: 'Raahi is built to be secure for both sides — drivers and riders. In-app features like trip sharing, SOS options, and 24/7 support are designed to protect everyone on the platform. We monitor for misuse and take prompt action when needed.',
      p2b: 'For drivers, we provide clear policies, fair treatment, and support so they can work with confidence. For riders, we focus on verified vehicles, transparent pricing, and reliable service so every journey feels safe and dependable.',
      heading3: 'Our commitment',
      p3: 'Trust and safety are not one-time checks — they are ongoing priorities. We keep improving our processes, technology, and policies to make Raahi a platform you can rely on. Whether you drive with us or ride with us, your safety and trust matter to us.',
      heading4: 'Need to report something?',
      p4: 'If you have a safety concern or want to report an issue, please reach out through our',
      contactLink: 'Contact Us',
      p4suffix: 'page. We take every report seriously and will respond as quickly as possible.',
    },
  },
  hi: {
    nav: { trustSafety: 'विश्वास और सुरक्षा', aboutUs: 'हमारे बारे में', blogs: 'ब्लॉग', career: 'करियर', contactUs: 'संपर्क करें' },
    hero: { title1: 'एकीकृत ऑटोमोटिव', title2: 'परिवहन इकोसिस्टम', title3: 'भारत के लिए', paragraph: 'राही राइड-हेलिंग, अंतरशहर यात्रा और ट्रैफिक रेस्क्यू को एक प्लेटफॉर्म पर लाता है। कैब, ऑटो, बाइक बुक करें या जाम से बचाव—सब एक ऐप से।', appStore: 'डाउनलोड करें', appStoreName: 'ऐप स्टोर', googlePlay: 'प्राप्त करें', googlePlayName: 'Google Play' },
    services: 'सेवाएं',
    suggestions: {
      cabMini: { title: 'कैब मिनी', description: 'शहर में तेज सवारी के लिए किफायती कॉम्पैक्ट कैब।' },
      auto: { title: 'ऑटो', description: 'कम दूरी के लिए तेज और किफायती ऑटो राइड।' },
      cabXL: { title: 'कैब XL', description: 'ग्रुप यात्रा और अतिरिक्त सामान के लिए विशाल कैब।' },
      rescue: { title: 'रिस्क्यू', description: 'ट्रैफिक जाम से बचाव — बाइकर्स आपको निकालते हैं, आपकी कार हम संभालते हैं।' },
      premium: { title: 'प्रीमियम', description: 'टॉप-रेटेड ड्राइवरों के साथ लग्जरी राइड।' },
      driverRental: { title: 'ड्राइवर किराया', description: 'अपनी गाड़ी के लिए घंटे के हिसाब से प्रोफेशनल ड्राइवर किराए पर लें।' },
    },
    footer: {
      visitHelp: 'संपर्क करें',
      company: 'कंपनी',
      support: 'सहायता',
      legal: 'कानूनी',
      aboutUs: 'हमारे बारे में',
      blogs: 'ब्लॉग',
      career: 'करियर',
      contactUs: 'संपर्क करें',
      trustSafety: 'विश्वास और सुरक्षा',
      terms: 'नियम और शर्तें',
      privacy: 'गोपनीयता',
    },
    getTheApp: 'ऐप डाउनलोड करें',
    features: {
      section1: { subtitle: 'राही क्यों', title: 'एक प्लेटफॉर्म। हर राइड।', body: 'राही एक ही ऐप से कैब, ऑटो, बाइक और रेस्क्यू सर्विस देता है। शहर हो या अंतरशहर, एक प्लेटफॉर्म पर सब कुछ।' },
      section2: { subtitle: 'सबके लिए', title: 'वो मोबिलिटी जो आपके साथ चले।', body: 'ड्राइवर हों या राइडर, राही सबके लिए सुरक्षित और आसान है। एक ही प्लेटफॉर्म पर विश्वास और सुविधा।' },
      section3: { subtitle: 'पूरे भारत में', title: 'कैब से बस तक। सब एक छत के नीचे।', body: 'राही देश भर में फैल रहा है। एक ही ऐप से अलग-अलग शहरों में यात्रा करें।' },
    },
    franchise: {
      label: 'हमसे जुड़ें',
      title: 'मोबिलिटी का व्यवसाय बनाएं। सिर्फ फ्लीट नहीं।',
      intro: 'राही सिर्फ एक प्लेटफॉर्म नहीं है। यह आपके शहर में संगठित मोबिलिटी नेटवर्क चलाने का मौका है। अगर आप स्थानीय मांग, ड्राइवर मनोविज्ञान और ऑपरेशन समझते हैं — हम आपको स्केल करने का सिस्टम देते हैं।',
      whatYouGet: 'आपको क्या मिलेगा',
      contactUs: 'संपर्क करें',
      benefits: [
        { title: 'ऑपरेशनल फ्रेमवर्क', description: 'टेक्नोलॉजी, ऑनबोर्डिंग मानक, अनुपालन संरचना, डिमांड इंटीग्रेशन।' },
        { title: 'रेवेन्यू शेयर मॉडल', description: 'पारदर्शी अर्थव्यवस्था। अनुमानित मार्जिन। स्पष्ट रिपोर्टिंग।' },
        { title: 'मल्टी-सर्विस एडवांटेज', description: 'कैब, बाइक टैक्सी, रेस्क्यू और ड्राइवर-ऑन-रेंट एक ब्रांड के तहत चलाएं।' },
        { title: 'ब्रांड बैकिंग + स्थानीय नियंत्रण', description: 'राष्ट्रीय पोजिशनिंग के साथ शहर-स्तरीय निष्पादन अधिकार।' },
      ],
      about1: 'हम शहर दर शहर संगठित मोबिलिटी इकोसिस्टम बना रहे हैं। अनौपचारिक फ्लीट नहीं। असंबद्ध कॉन्ट्रैक्टर्स नहीं। संरचित, जवाबदेह, स्केलेबल नेटवर्क।',
      about2: 'अगर आप टीम्स लीड करने, स्थानीय विश्वास बनाने और लंबी अवधि का मोबिलिटी व्यवसाय बढ़ाने के लिए तैयार हैं — राही के साथ पार्टनर बनें। अपने शहर में आवाजाही का भविष्य बनाएं।',
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      items: [
        { question: 'राही क्या है और यह कैसे काम करता है?', answer: 'राही भारत के लिए एक एकीकृत ऑटोमोटिव ट्रांसपोर्ट इकोसिस्टम है जो राइडर्स, ड्राइवर्स और ऑपरेटर्स को एक प्लेटफॉर्म पर जोड़ता है। ऐप डाउनलोड करें, गंतव्य डालें और निकटतम उपलब्ध राइड के साथ मैच हो जाएं।' },
        { question: 'राही से राइड कैसे बुक करें?', answer: 'राइड बुक करना आसान है। राही ऐप खोलें, पिकअप और ड्रॉप लोकेशन डालें, राइड टाइप चुनें और बुकिंग कन्फर्म करें। हैंड्सफ्री कैब से पहले से शेड्यूल भी कर सकते हैं।' },
        { question: 'राही कौन से पेमेंट स्वीकार करता है?', answer: 'राही UPI, क्रेडिट/डेबिट कार्ड, नेट बैंकिंग और कैश स्वीकार करता है। राही वॉलेट से सीमलेस पेमेंट और एक्सक्लूसिव छूट भी मिलती है।' },
        { question: 'राही मेरे शहर में उपलब्ध है?', answer: 'राही पूरे भारत में तेजी से फैल रहा है। दिल्ली, मुंबई, बैंगलोर, चेन्नई, हैदराबाद और कई शहरों में चल रहा है। अपने इलाके के लिए ऐप में उपलब्धता देखें।' },
        { question: 'राही ड्राइवर कैसे बनें?', answer: 'राही ड्राइवर बनना आसान है। राही ड्राइवर ऐप डाउनलोड करें, दस्तावेज़ जमा करें (लाइसेंस, वाहन रजिस्ट्रेशन, इंश्योरेंस), वेरिफिकेशन पूरा करें और अपने समय पर कमाई शुरू करें।' },
      ],
    },
    trustSafety: {
      pageTitle: 'विश्वास और सुरक्षा',
      pageSubtitle: 'राही ड्राइवरों और राइडरों को कैसे सुरक्षित रखता है — ऑनबोर्डिंग से हर ट्रिप तक',
      heading1: 'सुरक्षित ड्राइवर ऑनबोर्डिंग',
      p1a: 'राही पर हर ड्राइवर राइड लेने से पहले सत्यापन से गुजरता है। हम पहचान, ड्राइविंग लाइसेंस और वाहन दस्तावेज़ जांचते हैं। बैकग्राउंड चेक हमारे ऑनबोर्डिंग का हिस्सा है ताकि केवल पात्र, सत्यापित पार्टनर प्लेटफॉर्म पर आएं।',
      p1b: 'ड्राइवर सुरक्षा मानदंड, ऐप उपयोग और राही के आचार संहिता पर प्रशिक्षित होते हैं। इससे सड़क पर राही का प्रतिनिधित्व करने वाला हर कोई हमारे सुरक्षा और गुणवत्ता मानकों पर खरा उतरता है।',
      heading2: 'ड्राइवरों और यूजर्स के लिए सुरक्षित प्लेटफॉर्म',
      p2a: 'राही दोनों पक्षों — ड्राइवर और राइडर — के लिए सुरक्षित बनाया गया है। ट्रिप शेयरिंग, SOS और 24/7 सपोर्ट जैसे फीचर प्लेटफॉर्म पर सभी की सुरक्षा के लिए हैं। दुरुपयोग पर निगरानी रखते हैं और जरूरत पर तुरंत कार्रवाई करते हैं।',
      p2b: 'ड्राइवरों के लिए स्पष्ट नीतियां, निष्पक्ष व्यवहार और सपोर्ट। राइडरों के लिए सत्यापित वाहन, पारदर्शी कीमत और विश्वसनीय सेवा ताकि हर यात्रा सुरक्षित लगे।',
      heading3: 'हमारी प्रतिबद्धता',
      p3: 'विश्वास और सुरक्षा एक बार की जांच नहीं — लगातार प्राथमिकताएं हैं। राही को एक विश्वसनीय प्लेटफॉर्म बनाने के लिए प्रक्रियाएं, तकनीक और नीतियां लगातार बेहतर कर रहे हैं। चाहे आप हमारे साथ ड्राइव करें या राइड करें, आपकी सुरक्षा और विश्वास मायने रखते हैं।',
      heading4: 'कुछ रिपोर्ट करना है?',
      p4: 'अगर आपको सुरक्षा की चिंता है या कोई समस्या रिपोर्ट करनी है, तो कृपया हमारे',
      contactLink: 'संपर्क करें',
      p4suffix: 'पेज के जरिए संपर्क करें। हर रिपोर्ट को गंभीरता से लेते हैं और जल्द जवाब देंगे।',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const t = translations[language] || translations.en;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
