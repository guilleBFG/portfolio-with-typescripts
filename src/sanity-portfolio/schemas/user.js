export default {
  name: "user",
  title: "User Information",
  type: "document",
  fields: [
    {
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "stringLocale",
    },
    {
      title: "Main email",
      name: "email",
      type: "string",
    },
    {
      title: "LinkedIn",
      name: "linkedIn",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
    {
      title: "Telephone",
      name: "telephone",
      type: "string",
    },
    {
      title: "GitHub",
      name: "github",
      type: "string",
    },
    {
      title: "NFT Wallet",
      name: "nftWallet",
      type: "string",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "blockLocale",
    },
    {
      name: "coverLetter",
      title: "Cover Letter",
      type: "blockLocale",
    },
  ],
};
