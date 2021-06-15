const commonData = require("./commonData")
const {
  interpreterImg,
  blogUrl,
  bookSessionLink,
  languages,
  gmapsLink,
} = require("./commonData")

export default {
  currentLng: languages.PL,
  title: "BTL Kursy językowe, tłumaczenia ustne/pisemne/symultaniczne",
  seo: {
    url: "https://btl-languagestudio.pl/pl/",
    lang: languages.PL.code,
    title: "BTL Kursy językowe, tłumaczenia ustne/pisemne/symultaniczne",
    description:
      "BTL Profesjonalne Usługi Językowe: jesteśmy profesjonalnymi tłumaczami konferencyjnymi i lektorami. Pracujemy z angielskim, włoskim, niemieckim i polskim.",
  },
  name: "Between The Lines",
  promoVideoId: "efYmKA3TP4g", // PL
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
    emailText: "Napisz do nas!",
    facebookContactText: "Skontaktuj się przez Facebook!",
    fbBookSessionText: "Zarezerwuj bezpłatne spotkanie",
    gmapsText: "Znajdź nas na Google Maps!",
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
      title: "Tłumaczenia pisemne / Copywriting",
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
        "Nasze doświadczenie obejmuje między innymi tłumaczenie dokumentów unijnych w Parlamencie Europejskim w Luksemburgu, pracę dla najważniejszych firm tłumaczeniowych we Włoszech (dokumenty oraz strony internetowe), tłumaczenia sądowe, a także współpracę z międzynarodowymi firmami i globalnymi koncernami budowlanymi. ",
        "Specjalizujemy się w tekstach finansowo-ekonomicznych, marketingowych, prawnych i IT. Oferujemy tłumaczenia w dowolnej kombinacji językowej spośród języków:",
        "<b> • angielskiego</b>",
        "<b> • włoskiego</b>",
        "<b> • polskiego</b>",
        "<b> • niemieckiego</b>",
        "<b> • chińskiego</b>",
        "<h2>Copywriting</h2>",
        'Czasem nie potrzeba tłumacza, a po prostu osoby z "lekkim piórem" i doskonałymi umiejętnościami językowymi, która w sposób perswazyjny, a zarazem czytelny i łatwy w odbiorze, przekaże określone treści, wywoła określoną reakcję w odbiorcy.',
        "Potrzebujesz opracować materiał promocyjny w języku obcym? Chcesz powiedzieć światu co wyróżnia Twoją markę, produkt lub usługę spośród wszystkich innych dostępnych na rynku? Pomożemy Ci to osiągnąć w sposób skuteczny i kreatywny! W BTL oferujemy usługi z zakresu marketingu treści i copywritingu w językach obcych. ",
        `Zapraszamy do zapoznania się z naszym <a href="${blogUrl}", target="_blank">blogiem</a>.`,
      ],
      img:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1000",
      imgRight: true,
    },
    {
      title: "Tłumaczenia ustne",
      id: "interpreting",
      paragraphs: [
        "<b>TŁUMACZENIA SYMULTANICZNE</b> | <b>KONSEKUTYWNE</b> | <b>SZEPTANE</b> <br/>[angielski / włoski / polski / chiński]",
        "Przy wyborze tłumacza ustnego, fachowa wiedza merytoryczna jest równie ważna, jak doświadczenie w tłumaczeniu. Dlatego też oferujemy naszą wiedzą nie tylko jako lingwiści, ale także specjaliści w dziedzinie ekonomii i HR. Pracując dla światowych organizacji, takich jak Organizacja Narodów Zjednoczonych i wielu globalnych firm, a także tłumacząc wystąpienia na międzynarodowych targach handlowych i gospodarczych, wiemy, jak ważna jest precyzja, dokładność i poufność.",
        "Naszym celem jest pomóc Ci odnieść sukces w relacjach z klientami. Pozwól nam zadbać o stronę językową i skoncentruj się w pełni na kwestiach merytorycznych.",
        "W <b>tłumaczeniu symultanicznym</b> wypowiedź mówcy nie jest zakłócana, co pozwala słuchaczom na jej zrozumienie w czasie rzeczywistym, ponieważ nie muszą czekać na tłumaczenie. Stąd też tłumaczenie symultaniczne jest zalecane na konferencjach i wydarzeniach o dużej skali, gdzie nie ma czasu na opóźnienia w przekazie wiadomości.",
        "Podczas <b>tłumaczenia konsekutywnego</b> prelegent zatrzymuje się co kilka minut, po czym wkracza tłumacz i tłumaczy na język słuchaczy to, co zostało powiedziane. Tłumaczenie konsekutywne wymaga sporządzania notatek, aby w ciągu kilku minut nie umknął żaden istotny szczegół. Jest ono zalecane w przypadku mniejszych spotkaniach biznesowych.",
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
        itemTitle: "Angielski / Niemiecki / Włoski – kursy ogólne",
        imageSrc:
          "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Na opanowanie języka obcego składa się ćwiczenie mówienia, czytania, słuchania, gramatyki i pisania. W BTL ćwiczymy wszystkie te umiejętności! Opracowując dla Ciebie indywidualny plan nauki, bierzemy pod uwagę Twój unikalny styl pracy, a także cele, które chcesz osiągnąć. Nowy materiał z każdych zajęć jest następnie utrwalany i powtarzany. Ponadto regularnie monitorujemy Twoje postępy, abyś zawsze wiedział, nad czym pracować, aby zmaksymalizować efekty nauki. Atmosfera na zajęciach jest przyjazna i nieformalna, ponieważ chcemy Cię wspierać w nauce języka raczej jako mentorzy, niż nauczyciele. Zajęcia dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie. Więcej o naszym stylu pracy znajdziesz na naszym blogu <a href='${blogUrl}' target="_blank">language coaching</a>.`,
          `Zarezerwuj bezpłatną sesję próbną <a href='${bookSessionLink}' target="_blank">tutaj</a>.`,
        ],
      },
      {
        itemTitle: "Konwersacje",
        imageSrc:
          "https://images.pexels.com/photos/6457524/pexels-photo-6457524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Konwersacje prowadzimy „na luzie”, w pozytywnej i swobodnej atmosferze. Chcemy, abyś poczuł się swobodnie mówiąc w języku obcym, niezależnie od Twojego aktualnego poziomu językowego. Dzieci przyswajając język ojczysty, niekoniecznie skupiają się cały czas na gramatyce. Również w przypadku nauki języka obcego najważniejsze jest to, abyś mówił!",
          "...A może już jesteś na poziomie zaawansowanym, ale wciąż brakuje Ci pewności siebie? Masz wrażenie, że znasz te wszystkie słowa i zwroty, ale po prostu nie przychodzą Ci do głowy na czas?",
          "Pomożemy Ci pozbyć się bariery językowej i obawy, że popełnisz błąd. Z czasem Twoje wypowiedzi będą coraz bardziej poprawne i będziesz je formułował coraz bardziej świadomie i pewnie. ",
          `Zajęcia dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie.`,
        ],
      },
      {
        itemTitle: "Angielski biznesowy",
        imageSrc:
          "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Jako lingwiści, a zarazem profesjonaliści w dziedzinie ekonomii i HR, opracowaliśmy specjalistyczne kursy biznesowe, które mają na celu podniesienie Twoich kompetencji komunikacyjnych w środowisku zawodowym. Znamy sektor korporacyjny „od wewnątrz”, co w połączeniu z naszym wieloletnim doświadczeniem w pracy akademickiej pomoże Ci opanować najważniejsze umiejętności w komunikacji biznesowej. Na naszych zajęciach nabierzesz kompetencji w zakresie: wygłaszania prezentacji, aktywnego udziału w spotkaniach z zagranicznymi partnerami, small talk, sztuki negocjacji, sporządzania raportów, a także aktywnego udziału w firmowych spotkaniach towarzyskich.",
          `Konwersacje dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie.`,
        ],
      },
      {
        itemTitle: "Nowa praca",
        imageSrc:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Nasz specjalista ds. zasobów ludzkich, Natalia, jest także profesjonalnym lingwistą; pracowała w branży HR przez ponad 4 lata i rekrutowała setki kandydatów z całego świata w językach włoskim i angielskim. Zna tę branżę od podszewki i chętnie pomoże Ci przygotować się gruntownie do rozmowy kwalifikacyjnej w języku obcym, a co za tym idzie... zdobyć wymarzoną pracę! ",
          `Zajęcia dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie.`,
        ],
      },
      {
        itemTitle: "Przygotowanie do egzaminów",
        imageSrc:
          "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Jako wykładowcy akademiccy i licencjonowani egzaminatorzy Pearson, oferujemy kompleksowe przygotowanie do egzaminów FCE, CAE, LCCI English for Business / English for Accounting (A2, B1, B2, C1, C2), PTE General oraz do egzaminu maturalnego (poziom podstawowy i rozszerzony). Wspólnie opracujemy plan nauki i pomożemy Ci zdobyć kwalifikacje językowe, abyś mógł zdobyć pracę marzeń lub podjąć wymarzone studia.",
          `Zajęcia dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie.`,
        ],
      },
      {
        itemTitle: "Redukcja akcentu",
        imageSrc:
          "https://images.pexels.com/photos/5935755/pexels-photo-5935755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Sesje redukcji akcentu bazują na technice shadowing (więcej informacji na temat shadowing można znaleźć na <a href='${blogUrl}' target="_blank">naszym blogu</a>), używanej przez tłumaczy symultanicznych jako niezwykle skutecznej metody formułowania wypowiedzi, które są płynne i brzmią naturalnie. Podczas zajęć z redukcji akcentu pracujemy nad akcentem, rytmem, płynnością i intonacją w języku obcym. W tym celu wykorzystujemy metody audiowizualne oraz zestaw słuchawkowy. Po zajęciach dostajesz serię ćwiczeń do wykonania samodzielnie w domu. Trenuj z nami jak zawodowiec!`,
          `Zajęcia dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie.`,
        ],
      },
      {
        itemTitle: "Młodzież",
        imageSrc:
          "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Nauka języka obcego może i powinna być świetną zabawą! Wiemy o tym doskonale i mamy w zanadrzu szeroką gamę gier, filmów i innych interaktywnych technik nauczania!",
          `Zajęcia dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie.`,
        ],
      },
      {
        itemTitle: "Kurs kreatywnego pisania",
        imageSrc:
          "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1000",
        paragraphs: [
          "Jeśli uwielbiasz blogować lub przelewać swoje myśli na papier, skontaktuj się z nami! Pomożemy Ci wypracować Twój unikalny styl pisania w języku obcym, który będzie poprawny, prosty w odbiorze, a zarazem perswazyjny. Z nami poznasz odpowiednie środki przekazu, wzbogacisz swoje słownictwo, a także zachwycisz wszystkich elokwencją!",
          "Kurs kreatywnego pisania jest dedykowany dla wszystkich, którzy mają do czynienia z językiem pisanym, chcieliby poszerzyć swoje słownictwo lub rozwinąć swoje umiejętności marketingowe w języku obcym.",
          `Zajęcia dostępne są w formie on-line oraz na żywo w naszym <a href='${gmapsLink}' target="_blank">studio</a> w Krakowie.`,
          `Zajrzyj na naszego <a href='${blogUrl}' target="_blank">bloga</a>.`,
        ],
      },
    ],
  },
  ...commonData,
}
