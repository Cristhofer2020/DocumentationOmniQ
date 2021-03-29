/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  plugins: [
    'plugin-image-zoom'
  ],
  title: "OmniQ",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/omni.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    zoomSelector: '.markdown :not(em) > img',
    navbar: {
      title: "Omni-Q",
      logo: {
        alt: "My Site Logo",
        src: "img/omni.svg",
      },
      items: [
        {
          to: "/#",
          activeBasePath: "/#",
          label: "Home",
          position: "right",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "Our Community",
          items: [
            {
              label: "Contacts",
              href: "http://icq24.com/contact-us/",
            },
            {
              label: "Website",
              href: "https://omniq.icq24.com",
            },
          ],
        },
      ],
      logo: {
        alt: "logo",
        src: "../static/img/logo-icq.png",
        href: "http://icq24.com/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} OmniQ,  ICQ247`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
