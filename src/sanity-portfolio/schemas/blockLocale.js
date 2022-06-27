export default {
    name: "blockLocale",
    title: "Languages",
    type: "object",
    fields: [
      {
        name: "en",
        title: "English",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "es",
        title: "Spanish",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "pt",
        title: "Portuguese",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  }