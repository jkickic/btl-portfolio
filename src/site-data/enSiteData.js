const interpreterImg = require("../images/interpreter-small.jpg")
const blogUrl = "https://btllanguages.blogspot.com/"
const bookSessionLink = "https://www.facebook.com/btllanguages/services/"

export default {
  title: "Between The Lines - Language Courses, Translations and Interpreting",
  name: "Between The Lines",
  promoVideo: "https://www.youtube.com/embed/LWImGqRbBzo", // EN
  headerTagline: ["Get your language skills", "to the next level", "with us!"],

  about: {
    heading: "Hi, we're Between The Lines",
    content: [
      "We are professional conference interpreters and language trainers and work with <b>English, Italian, German,</b> and <b>Polish</b>. Our clients are global companies (construction concerns), international organizations (United Nations), the City of Cracow, cultural institutions, local companies, non-governmental organizations, as well as individuals.",
      "Offstage we love traveling and public speaking. Watch the video below and find out more!",
    ],
  },

  navigation: [
    {
      text: "About",
      selector: "#home",
    },
    {
      text: "Services",
      selector: "#services",
    },
    {
      text: "Blog",
      href: blogUrl,
    },
    {
      text: "Contact",
      selector: "#contact",
    },
  ],

  contact: {
    heading: "Contact",
    subHeading: "Write us a message!",
    email: "btl.languagestudio@gmail.com",
    emailText: "Send us an email!",
    fbLink: "https://www.facebook.com/btllanguages",
    facebookContactText: "Contact us via facebook!",
    facebookSessionLink: "https://www.facebook.com/btllanguages/services/",
    fbBookSessionText: "Book a session now!",
    gmapsLink: "https://goo.gl/maps/iUE6ui1WRi7A5ERPA",
    gmapsText: "Find us on Google Maps!",
    phoneNumber: "+48791111655",
    phoneText: "Give us a phone call!",
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
      imageSrc: interpreterImg,
      moveTo: "#interpreting",
    },
  ],

  servicesHeading: "Our services",
  services: [
    {
      title: "Translations",
      id: "translations",
      paragraphs: [
        "Our experience in translation includes working for the European Parliament translating EU documents, working for leading translation companies in Italy translating documents and websites for the Tuscany and Veneto Region, and helping a leading railway construction company in Austria and other European countries.",
        "We specialize in financial, marketing, and legal texts. We offer translation services in any of the following language pair: ",
        "<b>[ENG <=> ITA <=> PL <=> DE]</b>",
        `In case of marketing content, sometimes you do not need a translator, but simply a person with "flow" and excellent language and writing skills, who can write up a persuasive and easy-to-read text. As avid bloggers, we offer also content marketing and copywriting services. Take a look at our portfolio of articles in the <a href="${blogUrl}", target="_blank">BLOG</a> section.`,
      ],
      img:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1000",
      imgRight: true,
    },
    {
      title: "Interpreting",
      id: "interpreting",
      paragraphs: [
        "<b>SIMULTANEOUS | CONSECUTIVE | WHISPER</b> [ENG / ITA / PL]",
        "When choosing an interpreter, expert knowledge of the subject matter is just as important as interpreting experience. Therefore, we wish to share with you our expertise not only as linguists but also qualified professionals in the areas of Economy and Human Resources. Having worked for world organizations such as the United Nations and multiple global companies, we know how important precision, accuracy, and confidentiality are.",
        "Our goal is to help you succeed in the relations with your clients, so leave the language aspect to us and focus fully on the merits of the matter.",
        "In <b>simultaneous interpreting</b>, the natural flow of the speaker is not disturbed and allows for a smooth experience for listeners, as they don't need to wait in order to understand the message. Simultaneous interpretation is therefore recommended for large-scale conferences and events, where there is no time for the delay in the delivery of the message.",
        "During <b>consecutive interpreting</b> the speaker stops every few minutes after which the interpreter steps in and renders what has just been said to the language of the listeners. Consecutive interpreting involves notetaking (to prevent loss of detail) and is recommended for smaller business meetings.",
        "<b>Whisper interpreting</b> is similar to simultaneous interpreting however, the interpreter doesn't use a microphone or a headset, rather he or she sits next to the person (or a small group) who requires interpreting. This mode is recommended for business meetings where only one person requires interpreting.",
      ],
      img: interpreterImg,
    },
  ],

  courses: {
    title: "Courses",
    id: "courses",
    listOfItems: [
      {
        itemTitle: "General English / German / Italian",
        imageSrc:
          "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Practicing speaking, reading, listening, grammar, and writing translates into mastering a foreign language. We focus on all of these to ensure you make progress in leaps and bounds! By creating a study plan specifically for you, we take into consideration your unique learning style as well as your goals. Each session is then revised to get it fixed in your mind and your progress is regularly monitored. " +
            "The atmosphere is always friendly and informal, as we want to support you in your language learning experience as mentors, rather than teachers.",
          `Book your free trial session now <a href='${bookSessionLink}' target="_blank">here</a>.`,
        ],
      },
      {
        itemTitle: "Conversations",
        imageSrc:
          "https://images.pexels.com/photos/6457524/pexels-photo-6457524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "We conduct conversation sessions in a positive and relaxed atmosphere so that you “open up” and start speaking. Just as children start talking without necessarily focusing on grammar all the time, when learning a foreign language, the most important thing is to talk and to talk a lot! First, however, you need to get rid of the language barrier and the fear of making a mistake. Over time, your utterances will become more and more correct in terms of grammar and you will formulate them more and more consciously.",
          "Our student-oriented conversation sessions are based on the current events and topics of your interest. You speak, we listen, and provide constructive feedback. Your language barrier is gradually replaced with confidence!",
        ],
      },
      {
        itemTitle: "Business English",
        imageSrc:
          "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          'As linguists and professionals in the field of Economics and HR, we have developed specialized business courses aiming at improving your communication skills in the professional environment. We know the corporate sector "from within", which, combined with our experience in academic work, will help you master the most important skills sought after in business communication: giving presentations, active participation in meetings with foreign partners, small talk, the art of negotiations, reporting, as well as active participation in company social events.',
        ],
      },
      {
        itemTitle: "Landing a new job",
        imageSrc:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Our Talent Acquisition specialist, Natalia, will arm you with the skills needed for a successful job interview. Having worked in the HR field for over 4 years and recruited hundreds of candidates from all over the world, she knows this business inside out and is more than willing to help you land your dream job.",
        ],
      },
      {
        itemTitle: "Exam preparation",
        imageSrc:
          "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "As academic lecturers and licensed Pearson examiners we offer comprehensive exam preparation for FCE, CAE, LCCI English for Business / English for Accounting (A2, B1, B2, C1, C2), PTE General, and the „Matura” exam. Together we will create a study plan and make sure you stick to it so that your certified language skills will help you pursue your dream studies or career.",
        ],
      },
      {
        itemTitle: "Accent reduction",
        imageSrc:
          "https://images.pexels.com/photos/5935755/pexels-photo-5935755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Accent reduction sessions are based on the shadowing technique (find out more about shadowing at our <a href='${blogUrl}' target="_blank">blog</a>), which is used by simultaneous interpreters as an extremely powerful training method. In stress reduction classes, we work on your accent, rhythm, „flow”, and intonation. To this end, we use audiovisual facilities and a headset. Later on, you are given special exercises to do yourself at home. Train like a pro with us and sound natural in a blink of an eye!!`,
        ],
      },
      {
        itemTitle: "Young Lerners / Teenagers",
        imageSrc:
          "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Learning a foreign language can and should be loads of fun! We know it perfectly well and have a wide range of engaging activities, games, videos, and other interactive teaching techniques up our sleeve!",
        ],
      },
      {
        itemTitle: "Creative writing course",
        imageSrc:
          "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1000",
        paragraphs: [
          `If you're like us and love blogging or transferring your thoughts into writing, get in touch with us! As avid bloggers, we will not only help you make your writing in a foreign language correct and crystal clear but also help you apply the appropriate tone and style as well as idioms to eloquently get your message across. This course is highly recomended if you wish to elevate your vocabulary and level up your marketing skills. To get a taste of our writing style, read our <a href="${blogUrl}" target="_blank">blog</a>.`,
        ],
      },
    ],
  },
}
