module.exports = {
  docs: [
    "docs/getting-started",
    "docs/development-ui",
    "docs/encryption",
    {
      type: "category",
      label: "Deployment",
      collapsed: false,
      items: ["docs/deployments/vercel"],
    },
    "docs/faq",
  ],
  api: [
    "api",
    {
      type: "category",
      label: "Clients",
      collapsed: false,
      items: ["api/next"],
    },
    
  ]
};
