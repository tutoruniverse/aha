export default {
  title: "Aha Design System",
  titleTemplate: ":title | Aha Design System",
  description:
    "An ever-evolving system that enables us to build higher quality products more efficiently",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Aha Design System",
    markdown: {
      headers: {
        level: [0, 0],
      },
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/gotitinc/ahaui#readme",
      },
      {
        icon: "slack",
        link: "https://bit.ly/aha-design-system-slack-invitation",
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/gotitinc/ahaui/blob/main/LICENSE" target="_blank">Apache-2.0 License.</a>',
      copyright:
        'Copyright © 2019-present <a href="https://www.got-it.co/" target="_blank">Got It, Inc.</a>',
    },
    editLink: {
      pattern: "https://github.com/aha/docs/tree/v2x/main/docs/:path",
    },
    nav: [
      { text: "Design", link: "/design/overview" },
      {
        text: "Components",
        link: "/components/overview",
        activeMatch: "^/components/",
      },
      { text: "CSS", link: "/css/overview" },
      { text: "Examples", link: "/examples/overview" },
    ],
    sidebar: {
      "/design/": designSidebar(),
      "/components/": componentsSidebar(),
      "/css/": cssSidebar(),
      "/examples/": examplesSidebar(),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/v2x/" : "/",
};

function designSidebar() {
  return [
    { text: "Overview", link: "/design/overview" },
    { text: "Colors", link: "/design/colors" },
  ];
}

function componentsSidebar() {
  return [
    { text: "Overview", link: "/components/overview" },
    { text: "Button", link: "/components/button" },
  ];
}

function cssSidebar() {
  return [
    { text: "Overview", link: "/css/overview" },
    { text: "Customization", link: "/css/customization" },
    {
      text: "Layout",
      items: [{ text: "Aspect Ratio", link: "/css/aspect-ratio" }],
    },
    {
      text: "Typography",
      items: [{ text: "Paragraph", link: "/css/paragraph" }],
    },
    {
      text: "Backgrounds",
      items: [{ text: "Background Color", link: "/css/background-color" }],
    },
  ];
}

function examplesSidebar() {
  return [
    { text: "Overview", link: "/examples/overview" },
    {
      text: "Marketing",
      items: [
        {
          text: "Page Sections",
          items: [
            {
              text: "CTA Sections",
              link: "/examples/marketing/page-sections/cta-sections",
            },
            {
              text: "Logo Clouds",
              link: "/examples/marketing/page-sections/logo-clouds",
            },
            {
              text: "Team Sections",
              link: "/examples/marketing/page-sections/team-sections",
            },
          ],
        },
        {
          text: "Elements",
          items: [
            { text: "Headers", link: "/examples/marketing/elements/headers" },
            {
              text: "Flyout Menus",
              link: "/examples/marketing/elements/flyout-menus",
            },
            { text: "Banners", link: "/examples/marketing/elements/banners" },
          ],
        },
        {
          text: "Page Templates",
          items: [
            {
              text: "404 Pages",
              link: "/examples/marketing/page-examples/404-pages",
            },
            {
              text: "Contact Pages",
              link: "/examples/marketing/page-examples/contact-pages",
            },
            {
              text: "Pricing Pages",
              link: "/examples/marketing/page-examples/pricing-pages",
            },
            {
              text: "Landing Pages",
              link: "/examples/marketing/page-examples/landing-pages",
            },
          ],
        },
      ],
    },
    {
      text: "Application UI",
      items: [
        {
          text: "Forms",
          items: [
            {
              text: "Form Layouts",
              link: "/examples/application-ui/forms/form-layouts",
            },
            {
              text: "Input Groups",
              link: "/examples/application-ui/forms/input-groups",
            },
            {
              text: "Select Menus",
              link: "/examples/application-ui/forms/select-menus",
            },
            {
              text: "Sign-in and Registration",
              link: "/examples/application-ui/forms/sign-in-and-registration",
            },
          ],
        },
      ],
    },
    {
      text: "Ecommerce",
      items: [],
    },
  ];
}
