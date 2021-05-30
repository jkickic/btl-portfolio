const commonData = require("./commonData")
const {
  interpreterImg,
  blogUrl,
  bookSessionLink,
  languages,
} = require("./commonData")

export default {
  currentLng: languages.PL,
  title:
    "Between The Lines - Kursy językowe, tłumaczenia ustne, pisemne, symultaniczne, konsekutywne, szeptane",
  name: "Between The Lines",
  promoVideo: "https://www.youtube.com/embed/efYmKA3TP4g", // PL
  headerTagline: ["Get your language skills", "to the next level", "with us!"],

  about: {
    heading: "Cześć, jesteśmy Between The Lines",
    content: [
      "Jesteśmy profesjonalnymi tłumaczami konferencyjnymi i lektorami. Pracujemy z <b>angielskim</b>, <b>włoskim</b>, <b>niemieckim</b> i <b>polskim</b>. Naszymi Klientami są przedsiębiorstwa globalne (koncerny budowlane), organizacje międzynarodowe (ONZ), Urząd Miasta Krakowa, instytucje kultury, firmy lokalne, organizacje pozarządowe, a także osoby prywatne.",
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
    facebookSessionLink: bookSessionLink,
    fbBookSessionText: "Zarezerwuj bezpłatne spotkanie",
    gmapsLink: "https://goo.gl/maps/iUE6ui1WRi7A5ERPA",
    gmapsText: "Znajdź nas na Google Maps!",
    phoneNumber: "+48791111655",
    phoneText: "Zadzwoń do nas!",
  },

  projects: [
    {
      title: "Kursy",
      imageSrc:
        "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400",
      moveTo: "#courses",
    },
    {
      title: "Tłumaczenia pisemne & copywriting",
      imageSrc:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      moveTo: "#translations",
    },
    {
      title: "Tłumaczenia ustne",
      imageSrc: interpreterImg,
      moveTo: "#interpreting",
    },
  ],

  servicesHeading: "Nasze usługi",
  services: [
    {
      title: "Tłumaczenia pisemne",
      id: "translations",
      paragraphs: [
        "Nasze doświadczenie obejmuje tłumaczenie dokumentów unijnuch w Parlamencie Europejskim w Luksemburgu, pracę dla wiodących firm tłumaczeniowych we Włoszech (dokumenty oraz strony internetowe), a także współpracę z międzynarodowymi firmami i globalnymi koncernami budowlanymi (wiodąca firma z branży kolejowej na rynku austriackim i międzynarodowym).",
        "Specjalizujemy się w tekstach finansowo-ekonomicznych, marketingowych, prawnych i IT. Oferujemy tłumaczenia w dowolnej kombinacji językowej spośród języków: ",
        "<b> • angielskiego</b>",
        "<b> • włoskiego</b>",
        "<b> • polskiego</b>",
        "<b> • niemieckiego</b>",
        "<h1>Copywriting</h1>",
        `Czasem nie potrzeba tłumacza, a po prostu osoby z "lekkim piórem" i doskonałymi umiejętnościami językowymi, która w sposób perswazyjny, a zarazem czytelny i łatwy w odbiorze, przeakże określone treści. Oferujemy także usługi właśnie z zakresu marketingu treści i copywritingu. Zapraszamy do zapoznania się z naszym portfolio artykułów w sekcji <a href="${blogUrl}", target="_blank">BLOG.</a>`,
      ],
      img:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1000",
      imgRight: true,
    },
    {
      title: "Tłumaczenia ustne",
      id: "interpreting",
      paragraphs: [
        "<b>TŁUMACZENIA SYMULTANICZNE</b> | <b>KONSEKUTYWNE</b> | <b>SZEPTANE</b> <br/>[ENG / ITA / PL]",
        "Przy wyborze tłumacza ustnego fachowa wiedza merytoryczna jest równie ważna, jak doświadczenie w tłumaczeniu. Dlatego też oferujemy naszą wiedzą nie tylko jako lingwiści, ale także specjaliści w dziedzinie ekonomii i HR. Pracując dla światowych organizacji, takich jak Organizacja Narodów Zjednoczonych i wielu globalnych firm, wiemy, jak ważna jest precyzja, dokładność i poufność.",
        "Naszym celem jest pomóc Ci odnieść sukces w relacjach z klientami, dlatego stronę językową pozostaw nam i skup się w pełni na merytoryce sprawy.",
        "W <b>tłumaczeniu symultanicznym</b> wypowiedź mówcy nie jest zakłócana i pozwala słuchaczom na jej zrozumienie w czasie rzeczywistym, ponieważ nie muszą czekać na tłumaczenie. Stąd też tłumaczenie symultaniczne jest zalecane na konferencjach i wydarzeniach o dużej skali, gdzie nie ma czasu na opóźnienia w przekazie wiadomości. ",
        "Podczas <b>tłumaczenia konsekutywnego</b> prelegent zatrzymuje się co kilka minut, po czym wkracza tłumacz i tłumaczy na język słuchaczy to, co zostało powiedziane. Tłumaczenie konsekutywne wymaga sporządzania notatek, aby nie umknął żaden istotny szczegół. Jest ono zalecane w przypadku mniejszych spotkaniach biznesowych.",
        "<b>Tłumaczenie szeptane</b> jest podobne do tłumaczenia symultanicznego, jednak tłumacz nie używa mikrofonu ani zestawu słuchawkowego, a raczej siedzi obok osoby (lub małej grupy), która wymaga tłumaczenia. Ten tryb jest zalecany podczas spotkań biznesowych, w których tylko jedna osoba potrzebuje tłumaczenia.",
      ],
      img: interpreterImg,
    },
  ],

  courses: {
    title: "Kursy",
    id: "courses",
    listOfItems: [
      {
        itemTitle: "angielski / niemiecki / włoski",
        imageSrc:
          "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Na opanowanie języka obcego składa się ćwiczenie mówienia, czytania, słuchania, gramatyki i pisania. W BTL ćwiczymy wszystkie te umiejętności! Opracowując dla Ciebie indywidualny plan nauki, bierzemy pod uwagę Twój unikalny styl pracy, a także cele, które chcesz osiągnąć. Materiał z każdych zajęć jest utrwalany i powtarzany. Ponadto regularnie monitorujemy Twoje postępy, także zawsze wiesz nad czym pracować, aby zmaksymalizować efekty nauki.",
          "Atmosfera na zajęciach jest przyjazna i nieformalna, ponieważ chcemy wspierać Cię w nauce języka raczej jako mentorzy, niż nauczyciele. ",
          `Zarezerwuj bezpłatną sesję próbną <a href='${bookSessionLink}' target="_blank">tutaj</a>.`,
        ],
      },
      {
        itemTitle: "Konwersacje",
        imageSrc:
          "https://images.pexels.com/photos/6457524/pexels-photo-6457524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Konwersacje prowadzimy w pozytywnej i swobodnej atmosferze, abyś się „otworzył” i zaczął mówić. Tak jak dzieci zaczynają mówić niekoniecznie skupiając się cały czas na gramatyce, tak w przypadku nauki języka obcego najważniejsze byś mówił i to dużo!",
          "Najpierw jednak, musisz się pozbyć bariery językowej i obawy, że popełnisz błąd. Z czasem Twoje wypowiedzi będą coraz bardziej poprawne i będziesz je formułował coraz bardziej świadomie. Pomożemy Ci pozbyć się bariery językowej i nabrać pewności siebie w mówieniu!",
        ],
      },
      {
        itemTitle: "Angielski biznesowy",
        imageSrc:
          "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Jako lingwiści, a zarazem profesjonaliści z zakresu ekonomii i HR, opracowaliśmy specjalistyczne kursy biznesowe, które mają na celu podniesienie Twoich kompetencji komunikacyjnych w środowisku zawodowym. Znamy sektor korporacyjny „od wewnątrz”, co w połączeniu z naszym wieloletnim doświadczeniem w pracy akademickiej pomoże Ci opanować kompleksowo najważniejsze umiejętności w komunikacji biznesowej: wygłaszanie prezentacji, aktywny udział w spotkaniach z zagranicznymi partnerami, small talk, sztukę negocjacji, sporządzanie raportów, a także aktywny udział w firmowych spotkaniach towarzyskich.",
        ],
      },
      {
        itemTitle: "Nowa praca",
        imageSrc:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Nasz specjalista ds. zasobów ludzkich, przygotuje Cię gruntownie do rozmowy kwalifikacyjnej w języku obcym. Pracując w branży HR od ponad 4 lat i rekrutując setki kandydatów z całego świata, Natalia zna tę branżę od podszewki i chętnie pomoże Ci zdobyć wymarzoną pracę.",
        ],
      },
      {
        itemTitle: "Przygotowanie do egzaminów",
        imageSrc:
          "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Jako wykładowcy akademiccy i licencjonowani egzaminatorzy Pearson, oferujemy kompleksowe przygotowanie do egzaminów FCE, CAE, LCCI English for Business / English for Accounting (A2, B1, B2, C1, C2), PTE General oraz do matury egzaminu Maturalnego (podstawa i rozszerzenie).",
          "Wspólnie opracujemy plan nauki i pomożemy Ci zdobyć kwalifikacje językowe abyś mógł zdobyć pracę marzeń lub podjąć wymarzone studia.",
        ],
      },
      {
        itemTitle: "Redukcja akcentu",
        imageSrc:
          "https://images.pexels.com/photos/5935755/pexels-photo-5935755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Sesje redukcji akcentu bazują na technice shadowing (więcej informacji na temat shadowing można znaleźć na naszym <a href='${blogUrl}' target="_blank">blogu</a>), używanej przez tłumaczy symultanicznych jako niezywkle skutecznej metody  nauki. Podczas zajęć z redukcji akcentu pracujemy nad akcentem, rytmem, płynnością i intonacją. W tym celu wykorzystujemy metody audiowizualne oraz zestaw słuchawkowy. Po zajęciach dostajesz serię ćwiczeń do wykonania samodzielnie w domu. Trenuj z nami jak zawodowiec!`,
        ],
      },
      {
        itemTitle: "Młodzież",
        imageSrc:
          "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Nauka języka obcego może i powinna być świetną zabawą! Wiemy o tym doskonale i mamy w zanadrzu szeroką gamę gier, filmów i innych interaktywnych technik nauczania!",
        ],
      },
      {
        itemTitle: "Kurs kreatywnego pisania",
        imageSrc:
          "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1000",
        paragraphs: [
          "Jeśli także uwielbiasz blogować lub przelewać swoje myśli na papier, skontaktuj się z nami! Pomożemy Ci wypracować Twój unikalny styl pisania w języku obcym, który będzie poprawny, prosty w odbiorze a zarazem perswazyjny. Z nami poznasz odpowiednie środki przekazu, wzbogacisz swoje słownictwo, a także zachwycisz wszystkich elokwencją!",
          `Kurs kreatywnego pisania jest dedykowany dla wszystkich, którzy mają do czynienia z tekstami, lub chcieliby poszerzyć swoje słownictwo, a także podnieść swoje umiejętności marketingowe. Zajrzyj na naszego <a href='${blogUrl}' target="_blank">bloga</a>.`,
        ],
      },
    ],
  },
  ...commonData,
}
