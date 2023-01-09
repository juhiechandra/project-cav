const HEADER = "Cryptorenim";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#about-us", label: "About us" },
  { id: 3, url: "#howtostart", label: "How to start" },
];
const BANNER_DATA = {
  HEADING: "One place for Crypto address validation",
  DECRIPTION:
    "To ensure the security and success of your transaction, choose a coin and carefully enter the correct wallet address, and double check the syntax of the wallet address to avoid any potential errors or issues.",
  HINT: "This is a hint text to help user.",
};
const ABOUT_DATA = {
  HEADING: "Our goal and mission",
  DESCRIPTION:
    "Ensuring the security and accuracy of your cryptocurrency transactions,one wallet address verification at a time.",
  OUR_GOALS: [
    "Our company was founded with the goal of providing a reliable and secure platform for verifying cryptocurrency wallet addresses. ",
    "Our team is dedicated to constantly improving and updating our system to ensure the highest level of accuracy and efficiency.",
    "We prioritize the security of our users and take all necessary measures to protect their personal information and transactions.",
  ],
};
const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Search Engine Optimisation",
      DESCRIPTION:
        "To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",
      URL: "images/service1.png",
    },
    {
      LABEL: "Content Marketing Strategy",
      DESCRIPTION:
        "It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
      URL: "images/service2.png",
    },
    {
      LABEL: "Develop Social Media Strategy",
      DESCRIPTION:
        "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
      URL: "images/service3.png",
    },
  ],
};

const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Nixalar has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "Co-founder at ABC",
    },
    {
      DESCRIPTION:
        "Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "Co-founder at xyz",
    },
  ],
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png",
  ],
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "La trobe street docklands, Melbourne",
    MOBILE: "+1 61234567890",
    EMAIL: "nixalar@gmail.com",
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe",
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA,
};
export default MOCK_DATA;
