const blogUrl = "https://btllanguages.blogspot.com/"

export default {
  title: "Between The Lines - Language Courses, Translations and Interpreting",
  name: "Between The Lines",
  promoVideo: "https://www.youtube.com/embed/LWImGqRbBzo", // EN
  headerTagline: ["Get your language skills", "to the next level", "with us!"],

  about: {
    heading: "Cześć, jesteśmy Between The Lines",
    content: [
      "Jesteśmy profesjonalnymi tłumaczami konferencyjnymi i lektorami. Pracujemy z angielskim, włoskim, niemieckim i polskim. Naszymi Klientami są przedsiębiorstwa globalne (koncerny budowlane), organizacje międzynarodowe (ONZ), Urząd Miasta Krakowa, instytucje kultury, firmy lokalne, organizacje pozarządowe, a także osoby prywatne.",
      "Prywatnie uwielbiamy podróże. Posłuchajcie sami!",
    ],
  },

  navigation: [
    {
      text: "O nas",
      selector: "#home",
    },
    {
      text: "Usługi",
      selector: "#services",
    },
    {
      text: "Blog",
      href: blogUrl,
    },
    {
      text: "Kontakt",
      selector: "#contact",
    },
  ],

  contact: {
    heading: "Kontakt",
    subHeading: "",
    email: "btl.languagestudio@gmail.com",
    emailText: "Napisz do nas!",
    fbLink: "https://www.facebook.com/btllanguages",
    facebookContactText: "Skontaktuj się przez Facebook!",
    facebookSessionLink: "https://www.facebook.com/btllanguages/services/",
    fbBookSessionText: "Umów się na sesję!",
    gmapsLink: "https://goo.gl/maps/iUE6ui1WRi7A5ERPA",
    gmapsText: "Znajdź nas na google maps!",
    phoneNumber: "+48791111655",
    phoneText: "Zadzwoń do nas!",
  },

  projects: [
    {
      title: "Courses",
      imageSrc:
        "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400",
      moveTo: "#courses",
    },
    {
      title: "Translations",
      imageSrc:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      moveTo: "#translations",
    },
    {
      title: "Interpreting",
      imageSrc:
        "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400",
      moveTo: "#interpreting",
    },
  ],

  services: [
    {
      title: "Translations",
      id: "translations",
      paragraphs: [
        "Nasze doświadczenie obejmuje tłumaczenie dokumentów unijnuch w Parlamencie Europejskim w Luksemburgu, pracę dla wiodących firm tłumaczeniowych we Włoszech (dokumenty oraz strony internetowe), a także współpracę z międzynarodowymi firmami i globalnymi koncernami budowlanymi (wiodąca firma z branży kolejowej na rynku austriackim i międzynarodowym).",
        "Specjalizujemy się w tekstach finansowo-ekonomicznych, marketingowych i prawnych. Oferujemy tłumaczenia w dowolnej kombinacji językowej spośród języków: ",
        // "<ul><li>angielskiego</li><li>włoskiego</li><li>polskiego</li><li>niemieckiego</li></ul>",
        `W przypadku treści marketingowych czasem nie potrzeba tłumacza, a po prostu osoby z "lekkim piórem" i doskonałymi umiejętnościami językowymi, która w sposób perswazyjny, a zarazem czytelny i łatwy w odbiorze, przeakże określone treści. Oferujemy także usługi właśnie z zakresu marketingu treści i copywritingu. Zapraszamy do zapoznania się z naszym portfolio artykułów w sekcji <a href="${blogUrl}", target="_blank">BLOG.</a>`,
      ],
      img:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1000",
      imgRight: true,
    },
    {
      title: "Interpreting",
      id: "interpreting",
      paragraphs: [
        "<b>TŁUMACZENIA SYMULTANICZNE | KONSEKUTYWNE | SZEPTANE</b>",
        "Przy wyborze tłumacza ustnego fachowa wiedza merytoryczna jest równie ważna, jak doświadczenie w tłumaczeniu. Dlatego też oferujemy naszą wiedzą nie tylko jako lingwiści, ale także specjaliści w dziedzinie ekonomii i HR. Pracując dla światowych organizacji, takich jak Organizacja Narodów Zjednoczonych i wielu globalnych firm, wiemy, jak ważna jest precyzja, dokładność i poufność.",
        "Naszym celem jest pomóc Ci odnieść sukces w relacjach z klientami, dlatego stronę językową pozostaw nam i skup się w pełni na merytoryce sprawy.",
        "W <b>tłumaczeniu symultanicznym</b> wypowiedź mówcy nie jest zakłócana i pozwala słuchaczom na jej zrozumienie w czasie rzeczywistym, ponieważ nie muszą czekać na tłumaczenie. Stąd też tłumaczenie symultaniczne jest zalecane na konferencjach i wydarzeniach o dużej skali, gdzie nie ma czasu na opóźnienia w przekazie wiadomości. ",
        "Podczas <b>tłumaczenia konsekutywnego</b> prelegent zatrzymuje się co kilka minut, po czym wkracza tłumacz i tłumaczy na język słuchaczy to, co zostało powiedziane. Tłumaczenie konsekutywne wymaga sporządzania notatek, aby nie umknął żaden istotny szczegół. Jest ono zalecane w przypadku mniejszych spotkaniach biznesowych.",
        "<b>Tłumaczenie szeptane</b> jest podobne do tłumaczenia symultanicznego, jednak tłumacz nie używa mikrofonu ani zestawu słuchawkowego, a raczej siedzi obok osoby (lub małej grupy), która wymaga tłumaczenia. Ten tryb jest zalecany podczas spotkań biznesowych, w których tylko jedna osoba potrzebuje tłumaczenia.",
      ],
      img:
        "https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
  ],

  courses: {
    title: "Courses",
    id: "courses",
    listOfItems: [
      {
        itemTitle: "General English",
        imageSrc:
          "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Practicing speaking, reading, listening, grammar, and writing translates into mastering a foreign language. We focus on all of these to ensure you make progress in leaps and bounds!",
        ],
      },
      {
        itemTitle: "Conversations",
        imageSrc:
          "https://images.pexels.com/photos/6457524/pexels-photo-6457524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Student-oriented sessions, conducted in a positive and relaxed atmosphere, are based around the current events and topics of your interest.",
          "You talk, we listen and provide constructive feedback. Your language barrier is gradually replaced with confidence!",
        ],
      },
      {
        itemTitle: "Business English",
        imageSrc:
          "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Being both HR and finance specialists as well as professional linguists allowed us to create hands-on business programs aimed at elevating your communication skills used in the workplace. We will help you improve your skills in the areas of presentations, meetings, small talk, negotiations, report and business writing, and socializing",
        ],
      },
      {
        itemTitle: "Landing a new job",
        imageSrc:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Our Talent Acquisition specialist, Natalia, will arm you with the skills needed for a successful job interview. Having worked in the HR field for over 4 years and recruited hundreds of candidates from all over the world, she knows this business inside out and is more than willing to help you land your dream job",
        ],
      },
      {
        itemTitle: "Exam preparation",
        imageSrc:
          "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Had a sudden change of heart and decided to take up English in the school-leaving, Matura examination? Together we will create a study plan and make sure you stick to it so that you can pursue your dream studies!",
        ],
      },
      {
        itemTitle: "Accent reduction",
        imageSrc:
          "https://images.pexels.com/photos/5935755/pexels-photo-5935755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Accent-reduction sessions are based around the 'shadowing' technique, used by simultaneous interpreters as a training method. In this section we focus particularly on the rhythm, flow, and intonation. Train like a Pro and sound naturally in a blink of an eye!",
        ],
      },
      {
        itemTitle: "Kids",
        imageSrc:
          "https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Learning a foreign language can and should be fun! We know it perfectly well and have a wide range of games, videos, and other interactive teaching techniques up our sleeve!",
        ],
      },
      {
        itemTitle: "Teenagers",
        imageSrc:
          "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Learning a foreign language can and should be fun! We know it perfectly well and have a wide range of games, videos, and other interactive teaching techniques up our sleeve!",
        ],
      },
      {
        itemTitle: "Creative writing course",
        imageSrc:
          "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1000",
        paragraphs: [
          "If you're like us and love blogging, mentoring, or transferring your thoughts into writing, get in touch with us! We will not only help you make your writing in a foreign language correct and crystal clear but also help you apply the appropriate tone and style as well as idioms to eloquently get your message across",
        ],
      },
    ],
  },
}
