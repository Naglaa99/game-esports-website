const navbarLinks = document.querySelectorAll(".nav-link");
const header = document.getElementById("header");
const navSocialList = document.querySelectorAll(".nav-social-list li a");
const openMenuIcon = document.querySelector(".open-menu i");
const closeMenuIcon = document.querySelector(".close-menu i");
const navbar = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const h1 = document.querySelectorAll("h1");
const headers = document.querySelectorAll("h2,h3");
const h2 = document.querySelectorAll("h2");
const container = document.querySelectorAll(".container");
const button = document.querySelectorAll(".button");
const primaryButton = document.querySelectorAll(".primary-button");
const galleryList = document.querySelectorAll(".gallery-list li");
const teamMemberList = document.querySelectorAll(".team-member-list li");
const teamMember = document.querySelectorAll(".team-member-list li a");
const teamMemberImage = document.querySelectorAll(".team-member-list a img");
const materialSymbolsOutlined = document.querySelectorAll(
  ".material-symbols-outlined"
);
const cardButton = document.querySelectorAll(".card-button");
const footerMenuLink = document.querySelectorAll(".footer-menu-list li");
const searchButton = document.querySelector(".footer-search-button");
const footerQuickLinksList = document.querySelectorAll(
  ".footer-quicklinks-list li"
);
const footerSocialItem = document.querySelectorAll(".footer-social-list li");
const goTopButton = document.querySelector(".go-top");
const applyUiStyle = () => {
  navSocialList.forEach((item) => {
    item.classList.add("text-orange", "text-[20px]");
  });
  navbarLinks.forEach((item) => {
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
    // item.addEventListener("click", () => {
    //   navbar.classList.add("hidden");
    // });
  });

  h1.forEach((style) => {
    style.classList.add(
      "text-white",
      "font-refault",
      "text-fs-1",
      "custom-420:text-[70px]",
      "custom-575:text-[90px]",
      "custom-768:text-[115px]",
      "custom-1200:text-[150px]",
      "font-normal",
      "uppercase"
    );
  });
  headers.forEach((style) => {
    style.classList.add(
      "text-white",
      "font-oswald",
      "text-fs-2",
      "leading-[1.2]",
      "uppercase"
    );
  });

  h2.forEach((style) => {
    style.classList.add("custom-768:text-[45px]");
  });
  button.forEach((style) => {
    style.classList.add(
      "text-white",
      "font-oswald",
      "text-fs-6",
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
  cardButton.forEach((style) => {
    style.classList.replace("py-[14px]", "py-[15px]");
    style.classList.replace("px-[35px]", "px-[20px]");
  });
  primaryButton.forEach((style) => {
    style.classList.add("bg-orange", "hover:bg-raisin-black-1");
  });
  container.forEach((style) => {
    style.classList.add(
      "px-[15px]",
      "custom-420:mx-auto",
      "custom-575:max-w-[550px]",
      "custom-575:mx-auto",
      "custom-768:max-w-[720px]",
      "custom-1024:max-w-[1000px]",
      "custom-1200:max-w-[1200px]"
    );
  });
  galleryList.forEach((style) => {
    style.classList.add(
      "min-w-[95%]",
      "snap-center",
      "custom-575:min-w-[80%]",
      "custom-768:min-w-[70%]",
      "custom-1024:min-w-[60%]",
      "custom-1200:min-w-[50%]"
    );
  });
  teamMemberList.forEach((style) => {
    style.classList.add(
      "group",
      "max-w-[40%]",
      "transition",
      "ease-in-out",
      "duration-[0.15s]"
    );
  });
  teamMember.forEach((style) => {
    style.classList.add(
      "relative",
      "block",
      "rounded-[50%]",
      "border-[3px]",
      "border-raisin-black-3",
      "hover:border-orange"
    );
  });
  teamMemberImage.forEach((style) => {
    style.classList.add("w-full", "group-hover:opacity-[0.5]");
  });
  materialSymbolsOutlined.forEach((style) => {
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
  footerMenuLink.forEach((style) => {
    style.classList.add(
      "px-[10px]",
      "py-[5px]",
      "hover:text-orange",
      "transition",
      "ease-in-out",
      "duration-[0.15s]"
    );
  });
  footerQuickLinksList.forEach((style) => {
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
  footerSocialItem.forEach((style) => {
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

  searchButton.classList.remove("py-[14px]", "px-[35px]");
  goTopButton.classList.remove("py-[14px]", "px-[35px]");
};

openMenuIcon.addEventListener("click", () => {
  navbar.classList.remove("hidden");
  navbar.classList.add("right-0", "transition", "ease-out", "duration-[0.25s]");
  overlay.classList.add(
    "pointer-events-auto",
    "bg-overlay",
    "transition",
    "ease-out",
    "duration-[0.25s]"
  );
});

const navElementArray = [closeMenuIcon, overlay];
navElementArray.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.add("hidden");
    overlay.classList.remove(
      "pointer-events-auto",
      "bg-overlay",
      "transition",
      "ease-out",
      "duration-[0.25s]"
    );
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    // Show the button when scrolled 200px down
    goTopButton.classList.remove("hidden");
  } else {
    // Hide the button when near the top
    goTopButton.classList.add("hidden");
  }
});
goTopButton.addEventListener("click", (element) => {
  element.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

applyUiStyle();
