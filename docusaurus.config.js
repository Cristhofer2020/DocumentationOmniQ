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
          label: "Inicio",
          position: "right",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentacion",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Documentacion",
          items: [
            {
              label: "Empezando",
              to: "docs/",
            },
          ],
        },
        {
          title: "Nuestra Comunidad",
          items: [
            {
              label: "Contactos",
              href: "http://icq24.com/contact-us/",
            },
            {
              label: "Acceso",
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
