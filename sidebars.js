module.exports = {
  docs: [
    "docs/introduction",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["docs/getting-started/next-js", "docs/getting-started/blitz-js"],
    },
    {
      type: "category",
      label: "Deploying",
      collapsed: false,
      items: ["docs/deploying/vercel"],
    },
    // "docs/how-quirrel-works",
    "docs/faq",
  ],
  api: [
    "api/api",
    {
      type: "category",
      label: "Clients",
      collapsed: false,
      items: ["api/next", "api/blitz"],
    },
  ],
};
