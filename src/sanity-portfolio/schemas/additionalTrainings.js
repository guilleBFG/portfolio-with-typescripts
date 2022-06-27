export default {
  name: "additionalTrainings",
  title: "Additional Trainings - General Knoledge",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
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
