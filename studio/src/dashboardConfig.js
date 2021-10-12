export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6165b6c435a2531a06ccaa26",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wpcuzmpg",
                  apiId: "8d88be94-1a0c-4bf6-9cfa-020a4c243fc7",
                },
                {
                  buildHookId: "6165b6c539f1cb1d82ff74a2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5k116r3j",
                  apiId: "0cbdaee4-a038-4afa-bdef-1cf26ad25f73",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mithun9421/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5k116r3j.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
