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
      "Wir sind professionelle Konferenzdolmetscher und Linguisten. Wir arbeiten in <b>Englisch</b>, <b>Italienisch</b>, <b>Deutsch</b>, und <b>Polnisch</b>. Unsere Kunden sind globale Unternehmen (z. B. Baukonzerne), internationale Organisationen (z. B. die Vereinten Nationen), die Stadt Krakau, kulturelle Institutionen, lokale Unternehmen, Nichtregierungsorganisationen sowie Privatpersonen, denen wir verschiedene Sprachdienstleistungen anbieten.",
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
    subHeading: "Schreiben Sie uns!",
    emailText: "Schicken Sie uns eine E-Mail!",
    facebookContactText: "Kontaktieren Sie uns über Facebook!",
    fbBookSessionText: "Buchen Sie ein Treffen!",
    gmapsText: "Finden Sie uns auf Google Maps!",
    phoneText: "Rufen Sie uns an!",
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
        "Unsere Übersetzungserfahrung umfasst die Arbeit für das Europäische Parlament, bei der wir EU-Dokumente übersetzt haben, die Zusammenarbeit mit führenden Übersetzungsunternehmen in Italien, für die wir Dokumente und Webseiten für die Regionen Toskana und Venetien übersetzt haben, Gerichtsdolmetschen sowie die Unterstützung eines führenden österreichischen Eisenbahnbauunternehmens bei seinen strategischen Projekten.",
        "Wir sind auf Finanz-, Marketing-, IT- und Rechtstexte spezialisiert und bieten Übersetzungsdienstleistungen in den folgenden Sprachen an: ",
        "<b>[Englisch <=> Italienisch<=> Polnisch <=> Deutsch <=> Chinesisch]</b>",
        "<h2>Copywriting</h2>",
        `Manchmal benötigen Sie keinen Übersetzer, sondern einfach eine Person mit ausgezeichneten Sprach- und Schreibfähigkeiten, die einen überzeugenden und leicht verständlichen Text verfassen kann.`,
        "Müssen Sie Werbematerial in einer Fremdsprache erstellen? Oder möchten Sie der Welt mitteilen, was Ihre Marke, Ihr Produkt oder Ihre Dienstleistung von allen anderen auf dem Markt unterscheidet? Wir helfen Ihnen dabei, dieses Ziel auf kreative Weise zu erreichen! Bei BTL bieten wir Content-Marketing- und Copywriting-Dienstleistungen in Fremdsprachen an.",
        `Lesen Sie unseren <a href='${blogUrls.url}' target="_blank">blog</a>.`,
      ],
      img:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1000",
      imgRight: true,
    },
    {
      title: "Dolmetschen",
      id: "interpreting",
      paragraphs: [
        "<b>Simultandolmetschen | Konsekutivdolmetschen | Flüsterdolmetschen</b> [Englisch / Italienisch / Polisch / Chinesisch]",
        "Bei der Wahl eines Dolmetschers ist sein Fachwissen im jeweiligen Themenbereich genauso wichtig wie seine Dolmetschererfahrung. Daher möchten wir unser Fachwissen nicht nur als Linguisten, sondern auch als qualifizierte Fachkräfte in den Bereichen Wirtschaft und HR mit Ihnen teilen. Durch unsere Arbeit für internationale Organisationen wie die Vereinten Nationen sowie für zahlreiche globale Unternehmen und durch die Erbringung von Dolmetschdienstleistungen auf internationalen Handelsmessen wissen wir, wie wichtig Präzision, Genauigkeit und Vertraulichkeit sind.",
        "Unser Ziel ist es, Ihnen zum Erfolg in den Beziehungen zu Ihren Kunden zu verhelfen – überlassen Sie uns daher den sprachlichen Aspekt.<br/>",
        "Beim <b>der simultanen Dolmetschen</b> wird der natürliche Redefluss des Sprechers nicht unterbrochen, was ein reibungsloses Zuhörerlebnis ermöglicht, da die Zuhörer nicht warten müssen, um die Botschaft zu verstehen. Simultandolmetschen wird daher für groß angelegte Konferenzen und Veranstaltungen empfohlen, bei denen keine Zeit für Verzögerungen bei der Übermittlung der Botschaft bleibt.",
        "Beim <b>konsekutiven Dolmetschen</b> macht der Sprecher alle paar Minuten eine Pause, nach der der Dolmetscher das Gesagte in die Sprache der Zuhörer überträgt. Das konsekutive Dolmetschen erfordert Notizen (um Detailverluste zu vermeiden) und wird für kleinere Geschäftstreffen empfohlen.",
        "Das <b>Flüsterdolmetschen</b> ist dem Simultandolmetschen ähnlich, jedoch verwendet der Dolmetscher weder Mikrofon noch Kopfhörer. Stattdessen sitzt er neben der Person (oder einer kleinen Gruppe), die die Verdolmetschung benötigt. Diese Dolmetschart wird für Geschäftstreffen empfohlen, bei denen nur eine Person eine Verdolmetschung benötigt.",
      ],
      img: interpreterImg,
    },
  ],

  courses: {
    title: "Kurse",
    id: "courses",
    listOfItems: [
      /*  {
          itemTitle: "Englisch / Deutsch / Italienisch",
          imageSrc:
            "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          paragraphs: [
            `Das Üben von Sprechen, Lesen, Hören, Grammatik und Schreiben führt dazu, eine Fremdsprache zu meistern. Wir legen Wert auf all diese Bereiche, um sicherzustellen, dass Sie große Fortschritte machen! Durch die Erstellung eines speziell auf Sie zugeschnittenen Lernplans berücksichtigen wir Ihren individuellen Lernstil sowie Ihre Ziele. Neues Material wird anschließend wiederholt, um es fest in Ihrem Gedächtnis zu verankern. Die Atmosphäre ist stets freundlich und ungezwungen, da wir Sie als Mentoren und nicht nur als Lehrer in Ihrem Lernprozess unterstützen möchten. Erfahren Sie mehr über unseren Arbeitsstil auf unserem <a href='${blogUrls.howOurCoursesLook}' target="_blank">blog</a>.`,
            `Der Unterricht findet online und vor Ort in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
            `Buch deine kostenlose Probestunde <a href='${bookSessionLink}' target="_blank">hier</a>.`,
          ],
        },
        {
          itemTitle: "Konversationen",
          imageSrc:
            "https://images.pexels.com/photos/6457524/pexels-photo-6457524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          paragraphs: [
            "Konversationen werden in einer positiven und entspannten Atmosphäre durchgeführt, damit Sie sich „öffnen“ und anfangen können zu sprechen. Genau wie Kinder in ihrer Muttersprache sprechen lernen, ohne vorher formell Grammatik zu studieren, ist das Wichtigste beim Erlernen einer Fremdsprache, zu sprechen – und viel zu sprechen! Wir werden Ihnen helfen, die Sprachbarriere und die Angst vor Fehlern abzubauen. Mit der Zeit werden Ihre Äußerungen grammatisch immer korrekter und Sie werden sie immer bewusster und freier formulieren.",
            "Wenn Sie bereits ein fortgeschrittener Sprecher sind, können wir Ihnen helfen, die Qualität Ihres Wortschatzes weiter zu verbessern und noch flüssiger zu sprechen. ",
            "Unsere studentenzentrierten Konversationen basieren auf aktuellen Ereignissen und Themen, die Sie interessieren. Sie sprechen, wir hören zu und geben konstruktives Feedback. Die Sprachbarriere wird nach und nach durch Selbstvertrauen ersetzt!",
            `Der Unterricht findet online und live in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
          ],
        },*/
      {
        itemTitle: "Business English",
        imageSrc:
          "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          'Als Linguisten und Fachleute im Bereich Wirtschaft und HR haben wir praxisorientierte Business-Kurse entwickelt, die darauf abzielen, Ihre Kommunikationsfähigkeiten im beruflichen Umfeld zu verbessern. Wir kennen den Unternehmenssektor „von innen“, was in Kombination mit unserer Erfahrung in der akademischen Arbeit dazu beiträgt, dass Sie die wichtigsten Fähigkeiten in der Geschäftskommunikation meistern – wie Präsentationsfähigkeiten, die aktive Teilnahme an Meetings mit ausländischen Partnern, Small Talk, die Kunst der Verhandlungen, das Erstellen von Berichten sowie die aktive Teilnahme an sozialen Unternehmensveranstaltungen (sowohl formell als auch informell).',
          `Der Unterricht findet online und live in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
        ],
      },
      {
        itemTitle: "Einen neuen Job finden",
        imageSrc:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Unsere Talent Acquisition Specialist, Natalia, wird Sie mit den Fähigkeiten ausstatten, die für ein erfolgreiches Vorstellungsgespräch erforderlich sind. Mit über 4 Jahren Erfahrung im HR-Bereich und der Rekrutierung von hunderten Kandidaten aus der ganzen Welt kennt sie die „Ins und Outs“ der Branche und wird Ihnen helfen, Ihren Traumjob zu finden.",
          "Außerdem werden wir: <br/><br/> • Ihren Lebenslauf überarbeiten<br/> • ihn professionell gestalten <br/> •  Ihr LinkedIn-Profil analysieren",
          `Der Unterricht findet online und live in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
        ],
      },
      /*  {
          itemTitle: "Prüfungsvorbereitung",
          imageSrc:
            "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          paragraphs: [
            "Als lizenzierte Pearson-Prüfer bieten wir eine umfassende Prüfungsvorbereitung für eine Vielzahl offizieller Sprachprüfungen an, wie z.B. FCE, CAE, LCCI English for Business / English for Accounting (A2, B1, B2, C1), PTE General und die polnische „Matura“. Gemeinsam erstellen wir einen Studienplan und sorgen dafür, dass Sie diesen einhalten, damit Ihre zertifizierten Sprachkenntnisse Ihnen helfen, Ihre Traumstudien oder Ihre Traumkarriere zu verwirklichen..",
            `Der Unterricht findet online und live in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
          ],
        },*/
      {
        itemTitle: "Akzentreduzierung",
        imageSrc:
          "https://images.pexels.com/photos/5935755/pexels-photo-5935755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Unterrichte zur Akzentreduzierung basieren auf der Technik des <i>shadowing</i> (mehr über <i>shadowing</i> erfahren Sie in unserem <a href='${blogUrls.shadowing}' target="_blank">blog</a>), einer äußerst effektiven Trainingsmethode, die von Simultandolmetschern genutzt wird. In den Akzentreduzierungsstunden arbeiten wir an Ihrem Akzent, Rhythmus, „Flow“ und Ihrer Intonation. Zu diesem Zweck verwenden wir audiovisuelle Hilfsmittel und ein Headset. Nach der Stunde erhalten Sie spezielle Übungen, die Sie selbstständig zu Hause durchführen können. Trainieren Sie wie ein Profi mit uns!`,
          `Der Unterricht findet online und live in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
        ],
      },
      /*      {
              itemTitle: "Young Lerners / Teenagers",
              imageSrc:
                "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              paragraphs: [
                "Eine Fremdsprache zu lernen kann und sollte richtig Spaß machen! Wir haben eine Vielzahl von unterhaltsamen Aktivitäten, Spielen, Songs, Videos und anderen interaktiven Lehrmethoden in petto!",
                `Der Unterricht findet online und live in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
              ],
            },*/
      {
        itemTitle: "Kurs für kreatives Schreiben",
        imageSrc:
          "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1000",
        paragraphs: [
          "Wenn Sie es lieben zu bloggen oder Ihre Gedanken schriftlich festzuhalten, melden Sie sich bei uns! Als begeisterte Blogger helfen wir Ihnen nicht nur, Ihre Schreiben in einer Fremdsprache korrekt zu gestalten, sondern auch den passenden Ton und Stil sowie idiomatische Wendungen zu nutzen, um Ihre Botschaft eloquent zu vermitteln. Dieser Kurs wird besonders empfohlen, wenn Sie Ihren Wortschatz erweitern oder deine Marketingfähigkeiten auf das nächste Level bringen möchten.",
          `Der Unterricht findet online und live in unserem <a href='${gmapsLink}' target="_blank">studio</a> in Krakow statt.`,
          `Lesen Sie unseren <a href='${blogUrls.url}' target="_blank">blog</a>.`,
        ],
      },
    ],
  },
  ...commonData,
}
