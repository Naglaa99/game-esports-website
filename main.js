const elements = {
  navbarLinks: document.querySelectorAll(".nav-link"),
  header: document.getElementById("header"),
  navSocialLink: document.querySelectorAll(".nav-social-list li a"),
  openMenuIcon: document.querySelector(".open-menu i"),
  closeMenuIcon: document.querySelector(".close-menu i"),
  navbar: document.querySelector("nav"),
  overlay: document.querySelector(".overlay"),
  h1: document.querySelectorAll("h1"),
  headers: document.querySelectorAll("h2,h3"),
  h2: document.querySelectorAll("h2"),
  container: document.querySelectorAll(".container"),
  button: document.querySelectorAll(".button"),
  primaryButton: document.querySelectorAll(".primary-button"),
  galleryItems: document.querySelectorAll(".gallery-list li"),
  galleryImage: document.querySelectorAll(".gallery-list li img"),
  teamMemberItems: document.querySelectorAll(".team-member-list li"),
  teamMember: document.querySelectorAll(".team-member-list li a"),
  teamMemberImage: document.querySelectorAll(".team-member-list a img"),
  materialSymbolsOutlined: document.querySelectorAll(
    ".material-symbols-outlined"
  ),
  cardButton: document.querySelectorAll(".card-button"),
  footerMenuLink: document.querySelectorAll(".footer-menu-list li"),
  searchButton: document.querySelector(".footer-search-button"),
  footerQuickLinksItems: document.querySelectorAll(
    ".footer-quicklinks-list li"
  ),
  footerSocialItem: document.querySelectorAll(".footer-social-list li"),
  gearItems: document.querySelectorAll(".gears-list li"),
  goTopButton: document.querySelector(".go-top"),
};

/**
 * Adds header styles to elements in the header section.
 */

const applyHeaderStyles = () => {
  elements.navSocialLink.forEach((item) => {
    item.classList.add("text-orange", "text-[20px]");
  });

  elements.navbarLinks.forEach((item) => {
    item.classList.add(
      "text-white",
      "py-[10px]",
      "px-[25px]",
      "text-fs-8",
      "border-b-[1px]",
      "font-medium",
      "transition",
      "duration-[.15s]",
      "ease-in-out",
      "border-custom",
      "border-solid",
      "capitalize",
      "cursor-pointer",
      "hover:text-orange",
      "custom-1024:navbar-link",
      "custom-1200:py-[45px]"
    );
  });
};

/**
 * Adds heading styles to all headings.
 */

const applyHeadingStyles = () => {
  elements.h1.forEach((style) => {
    style.classList.add(
      "text-white",
      "font-refault",
      "text-fs-1",
      "custom-420:text-[70px]",
      "custom-300:text-[40px]",
      "custom-575:text-[90px]",
      "custom-768:text-[115px]",
      "custom-1200:text-[150px]",
      "font-normal",
      "uppercase"
    );
  });

  elements.headers.forEach((style) => {
    style.classList.add(
      "text-white",
      "font-oswald",
      "text-fs-2",
      "leading-[1.2]",
      "uppercase"
    );
  });

  elements.h2.forEach((style) => {
    style.classList.add("custom-768:text-[45px]");
  });
};

/**
 * Applies styles to various button elements.
 * @function
 * @returns {void}
 */

const applyButtonStyles = () => {
  elements.button.forEach((style) => {
    style.classList.add(
      "text-white",
      "font-oswald",
      "text-fs-6",
      "custom-300:text-fs-9",
      "tracking-[1px]",
      "uppercase",
      "font-medium",
      "py-[14px]",
      "px-[35px]",
      "clip-polygon-1",
      "ease-in-out",
      "transition",
      "duration-[0.15s]",
      "cursor-pointer"
    );
  });

  elements.cardButton.forEach((style) => {
    style.classList.replace("py-[14px]", "py-[15px]");
    style.classList.replace("px-[35px]", "px-[20px]");
  });

  elements.primaryButton.forEach((style) => {
    style.classList.add("bg-orange", "hover:bg-raisin-black-1");
  });

  elements.searchButton.classList.remove("py-[14px]", "px-[35px]");
};

/**
 * Applies styles to section elements such as containers and galleries.
 * @function
 * @returns {void}
 */
const applySectionStyles = () => {
  elements.container.forEach((style) => {
    style.classList.add(
      "px-[15px]",
      "custom-420:max-w-full",
      "custom-575:max-w-[540px]",
      "custom-575:mx-auto",
      "custom-768:max-w-[720px]",
      "custom-1024:max-w-[1000px]",
      "custom-1200:max-w-[1200px]"
    );
  });

  elements.galleryItems.forEach((style) => {
    style.classList.add(
      "min-w-[95%]",
      "snap-center",
      "custom-575:min-w-[80%]",
      "custom-768:min-w-[70%]",
      "custom-1024:min-w-[60%]",
      "custom-1200:min-w-[50%]"
    );
  });

  elements.galleryImage.forEach((style) => {
    style.classList.add("w-full", "rounded-[4px]", "shadow-card");
  });

  elements.teamMemberItems.forEach((style) => {
    style.classList.add(
      "group",
      "max-w-[40%]",
      "transition",
      "ease-in-out",
      "duration-[0.15s]"
    );
  });

  elements.teamMember.forEach((style) => {
    style.classList.add(
      "relative",
      "block",
      "rounded-[50%]",
      "border-[3px]",
      "border-raisin-black-3",
      "hover:border-orange"
    );
  });

  elements.teamMemberImage.forEach((style) => {
    style.classList.add("w-full", "group-hover:opacity-[0.5]");
  });

  elements.materialSymbolsOutlined.forEach((style) => {
    style.classList.add(
      "absolute",
      "top-[50%]",
      "left-[50%]",
      "translate-x-[-50%]",
      "translate-y-[-50%]",
      "text-orange",
      "text-[50px]",
      "opacity-0",
      "group-hover:opacity-100",
      "transition",
      "ease-in-out",
      "duration-[0.15s]"
    );
  });
};

/**
 * Applies styles to footer
 * @function
 * @returns {void}
 */

const applyFooterStyles = () => {
  elements.footerMenuLink.forEach((style) => {
    style.classList.add(
      "px-[10px]",
      "py-[5px]",
      "hover:text-orange",
      "transition",
      "ease-in-out",
      "duration-[0.15s]"
    );
  });

  elements.footerQuickLinksItems.forEach((style) => {
    style.classList.add(
      "py-[5px]",
      "px-[10px]",
      "transition",
      "ease-in-out",
      "duration-[0.15s]",
      "tracking-[1px]",
      "hover:text-orange"
    );
  });

  elements.footerSocialItem.forEach((style) => {
    style.classList.add(
      "bg-xiketic",
      "text-light-gray",
      "w-[35px]",
      "h-[35px]",
      "grid",
      "place-items-center",
      "text-[14px]",
      "rounded-[50%]",
      "hover:text-orange",
      "transition",
      "ease-in-out",
      "duration-[0.15s]"
    );
  });
  elements.goTopButton.classList.remove("py-[14px]", "px-[35px]");
};

/**
 * Applies styles to elements within the gear section, including card banners,
 * share buttons, time wrappers, content areas, titles, subtitles, and prices.
 * This function iterates through each `gearItem` and applies the appropriate
 * Tailwind CSS classes to achieve consistent styling across the section.
 *
 * @function
 * @returns {void}
 */

const applyGearSectionStyle = () => {
  elements.gearItems.forEach((item) => {
    const cardBanner = item.querySelector(".card-banner");
    cardBanner.classList.add(
      "relative",
      "bg-[url('../assets/images/gears-card-bg.png')]",
      "bg-contain",
      "bg-center",
      "w-full",
      "bg-no-repeat",
      "aspect-2/1.7",
      "grid",
      "place-items-center",
      "mb-[30px]"
    );

    const shareButton = item.querySelector(".share");
    shareButton.classList.add(
      "text-orange",
      "absolute",
      "top-[25%]",
      "right-[8%]",
      "text-[20px]",
      "border-onyx",
      "border-[2px]",
      "border-solid",
      "w-[45px]",
      "h-[45px]",
      "rounded-[50%]",
      "grid",
      "place-items-center",
      "transition",
      "ease-in-out",
      "duration-[0.15s]",
      "hover:border-orange"
    );

    const cardTimeWrapper = item.querySelector(".card-time-wrapper");
    cardTimeWrapper.classList.add(
      "text-orange",
      "absolute",
      "top-[2%]",
      "right-[5%]",
      "custom-1024:top-[4%]",
      "custom-1024:right-[8%]",
      "custom-1200:top-[3.5%]",
      "custom-1200:right-[7%]",
      "font-oswald",
      "text-fs-9",
      "font-medium",
      "uppercase",
      "flex",
      "justify-center",
      "items-center",
      "gap-[5px]"
    );

    const cardContent = item.querySelector(".card-content");
    cardContent.classList.add(
      "text-white",
      "flex",
      "justify-between",
      "items-center",
      "uppercase",
      "mb-[25px]"
    );

    const cardTitleWrapper = item.querySelector(".card-title-wrapper");

    const cardTitle = cardTitleWrapper.querySelector("h3");
    cardTitle.classList.add("font-oswald", "text-fs-5", "font-medium");

    const subtitle = cardTitleWrapper.querySelector("p");
    subtitle.classList.add("mt-[5px]", "text-light-gray", "text-fs-8");

    const cardPrice = item.querySelector(".card-price");
    cardPrice.classList.add("font-oswald", "font-medium", "text-fs-5");
  });
};

/**
 * Toggles the "active" class on a given HTML element.
 *
 * @param {HTMLElement} element - The element to toggle the "active" class on.
 */

const elementToggle = (element) => element.classList.toggle("active");

/**
 * Array of navigation-related elements, including icons, overlay, and navbar links.
 * These elements trigger toggle functionality for menu visibility.
 *
 * @type {HTMLElement[]}
 */
const navElementArray = [
  elements.openMenuIcon,
  elements.closeMenuIcon,
  elements.overlay,
  ...elements.navbarLinks,
];

/**
 * Adds click event listeners to each element in `navElementArray` to toggle
 * the visibility of the navbar, overlay, and body scroll lock.
 */
navElementArray.forEach((element) => {
  element.addEventListener("click", () => {
    elementToggle(elements.navbar);
    elementToggle(elements.overlay);
    elementToggle(document.body);
  });
});

/**
 * Shows or hides the "go to top" button based on the user's scroll position.
 * The button becomes visible when scrolling down past 800px.
 */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    elements.goTopButton.classList.remove("hidden");
  } else {
    elements.goTopButton.classList.add("hidden");
  }
});

/**
 * Scrolls the page smoothly to the top when the "go to top" button is clicked.
 *
 * @param {Event} element - The click event for the "go to top" button.
 */
elements.goTopButton.addEventListener("click", (element) => {
  element.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

applyHeaderStyles();
applyHeadingStyles();
applyButtonStyles();
applySectionStyles();
applyFooterStyles();
applyGearSectionStyle();
