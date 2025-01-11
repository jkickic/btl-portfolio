const commonData = require("./commonData")
const {
  interpreterImg,
  blogUrls,
  bookSessionLink,
  languages,
  gmapsLink,
} = require("./commonData")

export default {
  currentLng: languages.DE,
  seo: {
    url: "https://btl-languagestudio.pl/de/",
    lang: languages.DE.code,
    title:
      "BTL language courses, translations, interpreting [eng, de, pl, ita]",
    description:
      "Professional Language Services: we are language trainers, translators, and interpreters. We work in English, German, Polish, and Italian.",
  },
  name: "Between The Lines",
  promoVideoId: "LWImGqRbBzo", // EN
  headerTagline: ["Getting your message across!"],

  about: {
    heading: "Between The Lines",
    subheading: "Professionelle Sprachdienstleistungen",
    content: [
      "Wir sind professionelle Konferenzdolmetscher und Linguisten und arbeiten in Englisch, Italienisch, Deutsch, und Polnisch. Unsere Kunden sind globale Unternehmen (z. B. Baukonzerne), internationale Organisationen (z. B. die Vereinten Nationen), die Stadt Krakau, kulturelle Institutionen, lokale Unternehmen, NGO’s sowie Privatpersonen, denen wir unsere Sprachdienstleistungen anbieten.",
      "Wir lieben Reisen. Sehen Sie sich das Video unten an, um mehr über uns zu erfahren!",
    ],
  },

  navigation: [
    {
      text: "Über uns",
      selector: "#home",
    },
    {
      text: "Dienstleistungen",
      selector: "#services",
    },
    {
      text: "Blog",
      href: blogUrls.url,
    },
    {
      text: "Kontakt",
      selector: "#contact",
    },
  ],

  contact: {
    heading: "Kontakt",
    subHeading: "Vereinbaren Sie ein Treffen! ",
    emailText: "Schicken Sie uns eine E-Mail!",
    facebookContactText: "Kontaktieren Sie uns über Facebook!",
    gmapsText: "Finden Sie uns auf Google Maps!",
    phoneText: "Rufen Sie an!",
  },

  projects: [
    {
      title: "Kurse",
      imageSrc:
        "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400",
      moveTo: "#courses",
    },
    {
      title: "Übersetzungen & copywriting",
      imageSrc:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      moveTo: "#translations",
    },
    {
      title: "Dolmetschen",
      imageSrc: interpreterImg,
      moveTo: "#interpreting",
    },
  ],

  servicesHeading: "Unsere Dienstleistungen",
  services: [
    {
      title: "Übersetzungen",
      id: "translations",
      paragraphs: [
        "Unsere Erfahrung umfasst die Arbeit für das Europäische Parlament, bei der wir EU-Dokumente übersetzt haben, die Zusammenarbeit mit führenden Übersetzungsunternehmen in Italien, für die wir Dokumente und Webseiten der Regionen Toskana und Venetien übersetzt haben, Gerichtsdolmetschen sowie die Unterstützung eines führenden österreichischen Eisenbahnbauunternehmens bei seinen strategischen Projekten.",
        "Wir sind auf Finanz-, Marketing-, IT- und Rechtstexte spezialisiert und bieten Übersetzungsdienstleistungen in den folgenden Sprachen an: ",
        "<b>[Englisch <=> Italienisch<=> Polnisch <=> Deutsch <=> Chinesisch]</b>",
        "<h2>Copywriting</h2>",
        `Manchmal benötigen Sie keinen Übersetzer, sondern einfach eine Person mit ausgezeichneten Sprach- und Schreibfähigkeiten, die einen leicht verständlichen Text verfassen kann.`,
        "Müssen Sie Werbematerial in einer Fremdsprache erstellen? Oder möchten Sie der Welt mitteilen, was Ihre Marke, Ihr Produkt oder Ihre Dienstleistung von allen anderen auf dem Markt unterscheidet? Wir helfen Ihnen dabei, dieses Ziel auf kreative Weise zu erreichen! Bei BTL bieten wir Content-Marketing- und Copywriting-Dienstleistungen in Fremdsprachen an.",
        `Lesen Sie unseren <a href='${blogUrls.url}' target="_blank">Blog</a>.`,
      ],
      img: "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1000",
      imgRight: true,
    },
    {
      title: "Dolmetschen",
      id: "interpreting",
      paragraphs: [
        "<b>Simultandolmetschen | Konsekutivdolmetschen | Flüsterdolmetschen</b> [Englisch / Italienisch / Polisch / Chinesisch]",
        "Bei der Wahl eines Dolmetschers ist sein Fachwissen im jeweiligen Themenbereich genauso wichtig wie seine Dolmetschererfahrung. Daher möchten wir unser Fachwissen nicht nur als Linguisten, sondern auch als qualifizierte Fachkräfte in den Bereichen Wirtschaft und Human Resources Ihnen zur Verfügung stellen. Durch unsere Arbeit für internationale Organisationen wie die Vereinten Nationen und Unternehmen auf internationalen Messen wissen wir, wie wichtig Präzision, Genauigkeit und Vertraulichkeit sind.",
        "Unser Ziel ist es, Ihnen zum Erfolg in den Beziehungen zu Ihren Kunden zu helfen.<br/>",
        "Beim <b> simultanen Dolmetschen</b> wird der natürliche Redefluss des Sprechers nicht unterbrochen da die Zuhörer nicht warten müssen, um die Botschaft zu verstehen. Simultandolmetschen wird daher für groß angelegte Konferenzen und Veranstaltungen empfohlen, bei denen keine Zeit für Verzögerungen bei der Übermittlung der Botschaft bleibt.",
        "Beim <b>konsekutiven Dolmetschen</b> macht der Sprecher alle paar Minuten eine Pause, nach der der Dolmetscher das Gesagte in die Sprache der Zuhörer überträgt. Das konsekutive Dolmetschen erfordert Notizen (um Detailverluste zu vermeiden) und wird für kleinere Geschäftstreffen empfohlen.",
        "Das <b>Flüsterdolmetschen</b> ist dem Simultandolmetschen ähnlich, jedoch verwendet der/die Dolmetscher weder Mikrofon noch Kopfhörer. Stattdessen sitzt er/sie neben einer Person (oder gegenüber einer kleinen Gruppe), die die Dolmetschung benötigt. Diese dolmetsch Art wird für Treffen empfohlen, bei denen nur eine Person die Dolmetschung benötigt.",
      ],
      img: interpreterImg,
    },
  ],

  courses: {
    title: "Kurse",
    id: "courses",
    listOfItems: [
      {
        itemTitle: "Englisch / Deutsch / Italienisch",
        imageSrc:
          "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Das Üben von Schreiben, Lesen, Sprechen, Hören und Grammatik führt dazu, eine Fremdsprache zu erlernen. Wir legen Wert auf all diese Bereiche, um sicherzustellen, dass Sie große Fortschritte machen! Durch die Erstellung eines speziell auf Sie zugeschnittenen Lernplans berücksichtigen wir Ihren individuellen Lernstil sowie Ihre Ziele. Neues Material wird anschließend wiederholt, um es fest in Ihrem Gedächtnis zu verankern. Die Atmosphäre ist stets freundlich und ungezwungen, da wir Sie als Mentoren und nicht nur als Lehrer in Ihrem Lernprozess unterstützen möchten.  Erfahren Sie mehr über unseren Arbeitsstil auf unserem <a href='${blogUrls.howOurCoursesLook}' target="_blank">Blog</a>.`,
          `Der Unterricht findet online oder vor Ort in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
        ],
      },
      {
        itemTitle: "Konversationen",
        imageSrc:
          "https://images.pexels.com/photos/6457524/pexels-photo-6457524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Die Konversationen werden in einer für Sie angenehmen Atmosphäre durchgeführt, somit fällt es Ihnen leichter  sich zu „öffnen“ und angstfrei sprechen zu können. Genau wie Kinder in ihrer Muttersprache sprechen lernen, ohne vorher formell Grammatik zu studieren, ist das Wichtigste beim Erlernen einer Fremdsprache, zu sprechen – und viel zu sprechen! Wir werden Ihnen helfen, die Sprachbarriere und die Angst vor Fehlern abzubauen. Mit der Zeit wird Ihre Aussprache immer korrekter und Sie werden sie immer bewusster und freier formulieren.",
          "Wenn Sie bereits fortgeschrittener Sprecher sind, können wir Ihnen helfen, die Qualität Ihres Wortschatzes weiter zu verbessern und noch flüssiger zu sprechen. ",
          "Unsere Konversationen basieren auf aktuellen Ereignissen und Themen, die Sie interessieren. Sie sprechen, wir hören zu und geben konstruktives Feedback. Die Sprachbarriere wird nach und nach kleiner",
          `Der Unterricht findet online oder live in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
        ],
      },
      {
        itemTitle: "Business English",
        imageSrc:
          "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Als Linguisten und Fachleute im Bereich Wirtschaft und Human Resources haben wir praxisorientierte Business-Kurse entwickelt, die darauf abzielen, Ihre Kommunikationsfähigkeiten im beruflichen Umfeld zu verbessern. Wir haben Erfahrungen in verschiedenen Unternehmenssektoren, die wir Ihnen näher bringen können, z. B. Präsentationsfähigkeiten, die aktive Teilnahme an Meetings mit ausländischen Partnern, u.a. Small Talk, die Kunst der Verhandlungen, das Erstellen von Berichten etc. ",
          `Der Unterricht findet online oder live in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
        ],
      },
      {
        itemTitle: "Einen neuen Job finden",
        imageSrc:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Unsere HR-Specialistin Natalia, wird Sie mit den Fähigkeiten ausstatten, die für ein erfolgreiches Vorstellungsgespräch erforderlich sind. Mit über 4 Jahren Erfahrung im Human Resources-Bereich und der erfolgreichen Rekrutierung von hunderten Kandidaten aus der ganzen Welt kennt sie die „Ins und Outs“ der Branche und wird Ihnen helfen, der zu Ihnen passenden Job zu finden.",
          "Außerdem können wir: <br/><br/> • Ihren Lebenslauf überarbeiten<br/> • ihn professioneller gestalten <br/> •  Ihr LinkedIn-Profil analysieren",
          `Der Unterricht findet online oder live in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
        ],
      },
      {
          itemTitle: "Prüfungsvorbereitung",
          imageSrc:
            "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          paragraphs: [
            "Als lizenzierte Pearson-Prüfer bieten wir eine umfassende Prüfungsvorbereitung für eine Vielzahl offizieller Sprachprüfungen an, wie z.B. FCE, CAE, LCCI English for Business / English for Accounting (A2, B1, B2, C1), PTE General und die polnische „Matura“. Gemeinsam erstellen wir einen Plan und motivieren wir Sie, diesen einzuhalten, damit Ihre zertifizierten Sprachkenntnisse Ihnen helfen, Ihre Studien oder Ihre Karriere zu verwirklichen.",
            `Der Unterricht findet online oder live in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
          ],
      },
      {
        itemTitle: "Akzentreduzierung",
        imageSrc:
          "https://images.pexels.com/photos/5935755/pexels-photo-5935755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Unterrichte zur Akzentreduzierung basieren auf der Technik des <i>Shadowing</i> (mehr über <i>shadowing</i> erfahren Sie in unserem <a href='${blogUrls.shadowing}' target="_blank">Blog</a>), einer sehr effektiven Trainingsmethode, die von Simultandolmetschern genutzt wird. In den Akzentreduzierungsstunden arbeiten wir an Ihrem Akzent, Rhythmus, „Flow“ und Ihrer Intonation. Zu diesem Zweck verwenden wir audiovisuelle Hilfsmittel und Headsets. Nach der Stunde erhalten Sie spezielle Übungen, die Sie selbstständig zu Hause durchführen können.`,
          `Der Unterricht findet online oder live in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
        ],
      },
      {
        itemTitle: "Young Lerners / Teenagers",
        imageSrc:
          "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Eine Fremdsprache zu lernen kann und sollte Spaß machen! Wir haben eine Vielzahl von unterhaltsamen Aktivitäten, Spiele, Songs, Videos und anderen interaktiven Lehrmethoden in petto!",
          `Der Unterricht findet online oder live in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
        ],
      },
      {
        itemTitle: "Kurs für kreatives Schreiben",
        imageSrc:
          "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1000",
        paragraphs: [
          "Wenn Sie es lieben zu bloggen oder Ihre Gedanken schriftlich festzuhalten, melden Sie sich bei uns! Als begeisterte Blogger helfen wir Ihnen nicht nur, Ihre Schreiben in einer Fremdsprache korrekt zu gestalten, sondern auch den passenden Ton und Stil sowie Wendungen zu nutzen, um Ihre Botschaft eloquent zu vermitteln. Dieser Kurs wird besonders empfohlen, wenn Sie Ihren Wortschatz erweitern und auf das nächste Niveau bringen möchten.",
          `Der Unterricht findet online oder live in unserem <a href='${gmapsLink}' target="_blank">Studio</a> in Krakow statt.`,
          `Lesen Sie unseren <a href='${blogUrls.url}' target="_blank">Blog</a>.`,
        ],
      },
    ],
  },
  ...commonData,
}
