export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "projectSlug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectName",
        maxLength: 100,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
};
