module.exports = {
  title: "Quirrel",
  tagline: "The Task Queueing Solution for Next.js x Vercel.",
  url: "https://docs.quirrel.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "quirrel-dev", // Usually your GitHub org/user name.
  projectName: "Quirrel", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Quirrel",
      logo: {
        alt: "Quirrel Logo Logo",
        src: "https://tailwindui.com/img/logos/workflow-mark-on-white.svg",
        href: "https://quirrel.dev",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/quirrel-dev",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/quirrel",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/quirrel_dev",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://dev.to/quirrel",
            },
            {
              label: "GitHub",
              href: "https://github.com/quirrel-dev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simon Knott. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/quirrel-dev/docs.quirrel.dev/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
