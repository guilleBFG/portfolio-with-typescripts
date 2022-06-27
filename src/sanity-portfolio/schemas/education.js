export default {
  name: "education",
  title: "Education History",
  type: "document",
  fields: [
    {
      name: "institutionName",
      title: "Institution Name",
      type: "string",
    },
    {
      name: "institutionImage",
      title: "institution Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "fromDate",
      title: "From Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    },
    {
      name: "toDate",
      title: "To Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    },
    {
      name: "degreeTitle",
      title: "Degree Obtained",
      type: "stringLocale",
    },
    {
      name: "degreeDescription",
      title: "Degree Description",
      type: "blockLocale",
    },
  ],
};
