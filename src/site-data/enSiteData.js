const commonData = require("./commonData")
const {
  interpreterImg,
  blogUrl,
  bookSessionLink,
  languages,
  gmapsLink,
} = require("./commonData")

export default {
  currentLng: languages.EN,
  seo: {
    title: "BTL - Language Courses, Translations, Interpreting",
    description:
      "Professional conference interpreters working with English, Italian, German, and Polish. We offer language courses, translations and interpreting.",
  },
  name: "Between The Lines",
  promoVideoId: "LWImGqRbBzo", // EN
  headerTagline: ["Get your language skills", "to the next level", "with us!"],

  about: {
    heading: "Hi, we're Between The Lines",
    content: [
      "We are professional conference interpreters and language trainers. We work in <b>English</b>, <b>Italian</b>, <b>German</b>, and <b>Polish</b>. Our clients are global companies (e.g., construction concerns), international organizations (e.g., the United Nations), the City of Krakow, cultural institutions, local companies, non-governmental organizations, as well as individuals, to whom we render various language services.",
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
    facebookContactText: "Contact us via Facebook!",
    facebookSessionLink: "https://www.facebook.com/btllanguages/services/",
    fbBookSessionText: "Book a session now!",
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
      title: "Translations & copywriting",
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
        "Our experience in translation includes working for the European Parliament translating EU documents, working for leading translation companies in Italy translating documents and websites for the Tuscany and Veneto Region, court translations, and helping a leading Austrian railway construction company with its strategic projects.",
        "We specialize in financial, marketing, IT, and legal texts and offer translation services in any of the following languages: ",
        "<b>[English <=> Italian<=> Polish <=> German <=> Chinese]</b>",
        "<h2>Copywriting</h2>",
        `Sometimes you do not need a translator but simply a person with excellent language and writing skills, who can write up a persuasive and easy-to-read text.`,
        "Do you need to develop promotional material in a foreign language? Or maybe you want to tell the world what distinguishes your brand, product, or service from all others available on the market? We will help you achieve this goal in a creative way! At BTL, we offer content marketing and copywriting services in foreign languages.",
        `Read our <a href='${blogUrl}' target="_blank">blog</a>.`,
      ],
      img:
        "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1000",
      imgRight: true,
    },
    {
      title: "Interpreting",
      id: "interpreting",
      paragraphs: [
        "<b>SIMULTANEOUS | CONSECUTIVE | WHISPER</b> [English / Italian / Polish / Chinese]",
        "When choosing an interpreter, their expert knowledge of the subject matter is just as important as their interpreting experience. Therefore, we wish to share with you our expertise not only as linguists but also as qualified professionals in the areas of Economics and Human Resources. Having worked for world organizations such as the United Nations and multiple global companies as well as rendering interpretation services during international trade fairs, we know how important precision, accuracy and confidentiality are.",
        "Our goal is to help you succeed in the relations with your clients, so let us take care of the language aspect.</br>",
        "In <b>simultaneous interpretation</b>, the natural flow of the speaker is not disturbed and it allows for a smooth listening experience, as the listeners do not need to wait in order to understand the message. Simultaneous interpretation is therefore recommended for large-scale conferences and events, where there is no time for delay in the delivery of the message.",
        "During <b>consecutive interpretation</b> the speaker stops every few minutes, after which the interpreter steps in and renders what has just been said into the language of the listeners. Consecutive interpreting involves note-taking (to prevent the loss of detail) and is recommended for smaller business meetings.",
        "<b>Whisper interpretation</b> is similar to simultaneous interpretation, however, the interpreter does not use a microphone or a headset, but rather sits next to the person (or small group) who requires the interpretation. This mode of interpretation is recommended for business meetings, where only one person requires interpretation.",
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
          `Practicing speaking, reading, listening, grammar, and writing translates into mastering a foreign language. We focus on all of these to ensure that you make progress in leaps and bounds! By creating a study plan specifically for you, we take into consideration your unique learning style as well as your goals. New material is then revised to get it fixed in your mind and your progress is regularly monitored. The atmosphere is always friendly and informal, as we want to support you in your language learning experience as mentors, rather than teachers. Find out more about our working style on our <a href='${blogUrl}' target="_blank">blog</a>.`,
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
          `Book your free trial session <a href='${bookSessionLink}' target="_blank">here</a>.`,
        ],
      },
      {
        itemTitle: "Conversations",
        imageSrc:
          "https://images.pexels.com/photos/6457524/pexels-photo-6457524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Conversation sessions are conducted in a positive and relaxed atmosphere so that you can “open up” and start speaking. Just as children start talking in their mother tongue without the formal study of grammar beforehand, the most important thing when learning a foreign language is to talk and to talk a lot! We will help you get rid of the language barrier and the fear of making a mistake. Over time, your utterances will become more and more correct in terms of grammar and you will formulate them more and more consciously and freely.",
          "If you are already an advanced speaker, we can help you to further improve the quality of your vocabulary to speak even more fluently. ",
          "Our student-oriented conversation sessions are based on current events and topics of your interest. You speak, we listen and provide constructive feedback. The language barrier is gradually replaced with confidence!",
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
        ],
      },
      {
        itemTitle: "Business English",
        imageSrc:
          "https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          'As linguists and professionals in the field of Economics and HR, we have developed hands-on business courses aimed at improving your communication skills in the professional environment. We know the corporate sector "from within” which, combined with our experience in academic work, will help you master the most important skills sought after in business communication, such as giving presentations, active participation in meetings with foreign partners, small talk, the art of negotiations, compiling reports, as well as active participation in company social events (both formally and informally).',
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
        ],
      },
      {
        itemTitle: "Landing a new job",
        imageSrc:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Our Talent Acquisition Specialist, Natalia, will arm you with the skills needed for a successful job interview. Having worked in the HR field for over 4 years and recruited hundreds of candidates from all over the world, she “knows the ins and outs” of the industry, and will help you land your dream job.",
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
        ],
      },
      {
        itemTitle: "Exam preparation",
        imageSrc:
          "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "As academic lecturers and licensed Pearson examiners, we offer comprehensive exam preparation for a wide variety of formal language examinations, such as the FCE, CAE, LCCI English for Business / English for Accounting (A2, B1, B2, C1, C2), PTE General, and the Polish “Matura” exam. Together we will create a study plan and make sure you stick to it so that your certified language skills will help you pursue your dream studies or dream career.",
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
        ],
      },
      {
        itemTitle: "Accent reduction",
        imageSrc:
          "https://images.pexels.com/photos/5935755/pexels-photo-5935755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          `Accent reduction sessions are based on the <i>shadowing</i> technique (find out more about <i>shadowing</i> on our <a href='${blogUrl}' target="_blank">blog</a>), which is an extremely powerful training method used by simultaneous interpreters. In accent reduction classes we work on your accent, rhythm, “flow” and intonation. To this end, we use audiovisual facilities and a headset. After the class, you are given special exercises to do by yourself at home. Train like a pro with us!`,
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
        ],
      },
      {
        itemTitle: "Young Lerners / Teenagers",
        imageSrc:
          "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        paragraphs: [
          "Learning a foreign language can and should be loads of fun! We have a wide range of engaging activities, games, videos, and other interactive teaching techniques up our sleeve!",
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
        ],
      },
      {
        itemTitle: "Creative writing course",
        imageSrc:
          "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1000",
        paragraphs: [
          "If you love blogging or transferring your thoughts into writing, get in touch with us! As avid bloggers, we will not only help you make your writing in a foreign language correct and crystal clear, but also help you apply the appropriate tone and style, as well as idioms to eloquently get your message across. This course is highly recommended if you wish to elevate your vocabulary or level up your marketing skills.",
          `Classes are available online and live in our <a href='${gmapsLink}' target="_blank">studio</a> in Krakow.`,
          `Read our <a href='${blogUrl}' target="_blank">blog</a>.`,
        ],
      },
    ],
  },
  ...commonData,
}
