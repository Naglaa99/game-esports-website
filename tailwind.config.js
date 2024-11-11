/** @type {import('tailwindcss').Config} */
const textShadow = require("tailwindcss-textshadow");

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "custom-420": "420px",
        "custom-575": "575px",
        "custom-768": "768px",
        "custom-1024": "1024px",
        "custom-1200": "1200px",
      },
      boxShadow: {
        header: "0 3px 27px hsla(0, 0%, 0%, 0.5)",
        navbar: "0px 2px 8px hsla(0, 0%, 0%, 0.5)",
        card: "0px 2px 4px hsla(0,0%,0%,0.2)",
        icon: "0 3px 7px hsla(345, 75%, 30%, 0.2), inset 0 3px 7px 0 hsla(335, 53%, 14%, 0.4)",
      },
      textShadow: {
        text: "0px 7px hsla(0, 0%, 0%, 0.4)",
      },
      fontSize: {
        "fs-1": "54px",
        "fs-2": "34px",
        "fs-3": "30px",
        "fs-4": "26px",
        "fs-5": "22px",
        "fs-6": "20px",
        "fs-7": "18px",
        "fs-8": "15px",
        "fs-9": "14px",
        "fs-10": "13px",
        "fs-11": "12px",
      },
      backgroundImage: {
        "hero-banner": "url('./assets/images/hero-banner.jpg')",
      },
      fontFamily: {
        refault: ["Refault"],
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      aspectRatio: {
        "2/1.7": "2 / 1.7",
      },
      maxWidth: {
        unset: "unset",
      },
      colors: {
        "raisin-black-1": "hsl(234, 14%, 14%)",
        "raisin-black-2": "hsl(231, 12%, 12%)",
        "raisin-black-3": "hsl(228, 12%, 17%)",
        "eerie-black": "hsl(240, 11%, 9%)",
        "light-gray": "hsl(0, 0%, 80%)",
        platinum: "hsl(0, 4%, 91%)",
        xiketic: "hsl(275, 24%, 10%)",
        orange: "hsl(31, 100%, 51%)",
        onyx: "hsl(240, 5%, 26%)",
        custom: "hsla(0, 0%, 100%, .1)",
        overlay: "hsla(0, 0%, 0%, 0.7)",
      },
      transition: {
        "transition-1": "0.15s ease-in-out",
        "transition-2": "0.15s ease-in",
        "transition-3": "0.25s ease-out",
      },
    },
  },
  plugins: [
    textShadow,
    plugin(function ({ addUtilities }) {
      addUtilities({
        "@font-face": {
          fontFamily: "Refault",
          src: `url('../assets/fonts/REFAULT.woff') format('woff');`,
          fontStyle: "italic",
          fontWeight: "normal",
          textRendering: "optimizeLegibility",
        },
        ".custom-1024-navbar": {
          position: "static",
          opacity: "1",
          visibility: "visible",
          background: "none",
          maxWidth: "unset",
          width: "max-content",
          height: "auto",
          boxShadow: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".navbar-link": {
          position: "relative",
          color: "hsl(0, 4%, 91%)",
          paddingBlock: "34px",
          border: "none",
          fontFamily: "Oswald",
          textTransform: "uppercase",
          letterSpacing: "1px",
          zIndex: "1",
          "&::after": {
            content: "''",
            position: "absolute",
            inset: "0",
            transform: "skew(-15deg)",
            borderBottom: "5px solid transparent",
            zIndex: "-1",
            transition: "all 0.15s ease-in-out",
          },
          "&:is(:hover, :focus)::after": {
            background: "hsl(231, 12%, 12%)",
            borderColor: "hsl(31, 100%, 51%)",
          },
        },

        ".button-sign-in": {
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "hsl(228, 12%, 17%)",
          color: "hsl(0, 0%, 80%)",
          fontFamily: "Oswald",
          fontSize: "12px",
          fontWeight: "500",
          textTransform: "uppercase",
          letterSpacing: "1px",
          padding: "4px",
          borderRight: "5px solid hsl(31, 100%, 51%)",
          boxShadow: "0 0 4px hsla(0, 0%, 0%, 0.2)",
          marginLeft: "15px",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-20px",
            transform: "translateY(-50%)",
            width: "5px",
            height: "40px",
            backgroundColor: "hsl(240, 11%, 9%)",
            boxShadow:
              "0 3px 7px hsla(345, 75%, 30%, 0.2), inset 0 3px 7px 0 hsla(335, 53%, 14%, 0.4)",
          },
          "&:is(:hover, :focus)": {
            color: "hsl(31, 100%, 51%)",
            transition: "0.3s ease-in-out",
          },
          "&:hover .icon": {
            color: "hsl(31, 100%, 51%)",
          },
        },

        ".scrollbar-thin": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "hsl(231, 12%, 12%)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "hsl(31, 100%, 51%)",
            borderRadius: "10px",
          },
        },
        ".has-scrollbar": {
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-button": {
            width: "40px",
          },
        },
        ".custom-768-scrollbar": {
          "&::-webkit-scrollbar-button": {
            width: "150px",
          },
        },
        ".custom-1024-scrollbar": {
          "&::-webkit-scrollbar-button": {
            width: "200px",
          },
        },
        ".header-shape": {
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            height: "20px",
            width: "115px",
            background: "hsl(234, 14%, 14%)",
            bottom: "-17px",
          },
          "&::before": {
            left: "0",
            clipPath: "polygon(0 0, 100% 0%, 82% 100%, 0% 100%)",
          },
          "&::after": {
            right: "0",
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 18% 100%)",
          },
        },
        ".newsletter-form": {
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "9px",
            left: "-3px",
            height: "1px",
            width: "27px",
            background: "#ffffff",
            transform: "rotate(43deg)",
          },
        },

        ".custom-1024-newsletter-form": {
          "&::after": {
            bottom: "9px",
            left: "-5px",
            width: "25px",
            transform: "rotate(52deg)",
          },
        },
        ".custom-1200-newsletter-form": {
          "&::after": {
            left: "-3px",
            transform: "rotate(46deg)",
          },
        },

        ".section-title": {
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "5px",
            width: "120px",
            background: "hsl(31, 100%, 51%)",
            borderRadius: "0 0 5px 5px",
          },
          "&::before": {
            bottom: "-23px",
            height: "4px",
            width: "30px",
          },
        },
        ".footer-brand-wrapper": {
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-4px",
            left: "0",
            height: "1px",
            width: "100%",
            background: "hsla(0, 0%,50%,0.2)",
          },
        },
        ".about-background": {
          backgroundSize: "55%",
          backgroundPosition: "90% center",
        },
        // Polygon clip-path utilities
        ".clip-polygon-1": {
          clipPath: "polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)",
        },
        ".clip-polygon-2": {
          clipPath: "polygon(0 0, 100% 0%, 82% 100%, 0% 100%)",
        },
        ".clip-polygon-3": {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 18% 100%)",
        },
        ".clip-polygon-4": {
          clipPath: "polygon(96% 0, 100% 36%, 100% 100%, 4% 100%, 0 66%, 0 0)",
        },
        ".clip-polygon-5": {
          clipPath: "polygon(75% 0, 100% 25%, 100% 100%, 25% 100%, 0 75%, 0 0)",
        },
        ".clip-polygon-6": {
          clipPath: "polygon(93% 0, 100% 30%, 100% 100%, 7% 100%, 0 63%, 0 0)",
        },
        ".clip-polygon-7": {
          clipPath: "polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 63%, 0 0)",
        },
        ".clip-polygon-8": {
          clipPath: "polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%, 0 0)",
        },
      });
    }),
  ],
};
