const constants = {
  media: {
    portrait: "(orientation: portrait)",
    breakpoints: {
      phone: "320px",
      lgphone: "425px",
      tablet: "768px",
      desktop: "1024px",
      smdesktop: "1280px",
      mddesktop: "1440px",
      lgdesktop: "1920px",
      "4k": "2560px",
    },
    maxWidth: maxWidth => `(max-width:${maxWidth})`,
  },
}

export default constants
