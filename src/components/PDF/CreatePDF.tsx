import jsPDF from "jspdf";
import moment from "moment";
import { blockContentToPlainText } from "react-portable-text";

function createPDF() {
  const rowHeight = 10;
  const smallHeight = 5;
  const verySmallHeight = 2;
  const colorAccent = "#3D85C6";
  const colorDefault = "#444444";
  const colorDarkGrey = "#666666";
  const colorLightGrey = "#999999";
  const fontType = "Courier";

  const doc = new jsPDF();
  let xPosition = 20;
  let yPosition = 20;
  let pageHeight = 280;

  const updateHeight = (row) => {
    yPosition = yPosition + row;
    if (yPosition >= pageHeight) {
      doc.addPage();
      yPosition = 20;
    }
  };

  const createPersonalInfo = (user, intl) => {
    // section name
    doc.setFont(fontType, "bold");
    doc.setFontSize(18);
    doc.setTextColor(colorAccent);
    doc.setFont(fontType, "bold");
    doc.text(xPosition, yPosition, `${user.fullName}`);
    updateHeight(smallHeight);

    // Telephone and Email
    doc.setTextColor(colorDarkGrey);
    doc.setFontSize(10);
    doc.text(
      xPosition,
      yPosition,
      `${intl.formatMessage({ id: "page.resume.telephone" })}: +${user.telephone}`
    );
    updateHeight(smallHeight);
    doc.setFont(fontType, "bold");
    doc.setTextColor(colorDarkGrey);
    doc.text(
      xPosition,
      yPosition,
      `${intl.formatMessage({ id: "page.resume.email" })}: ${user.email}`
    );
    updateHeight(smallHeight);
    doc.setFont(fontType, "bold");
    doc.setTextColor(colorDarkGrey);
    doc.text(
      xPosition,
      yPosition,
      `${intl.formatMessage({ id: "page.my.site" })}: https://gwester.com.ar`
    );
    updateHeight(verySmallHeight);

    // line
    doc.setDrawColor(colorLightGrey);
    doc.line(xPosition, yPosition, 200, yPosition, "FD");
    updateHeight(rowHeight);
    updateHeight(smallHeight);
  };
  const createWorkExperience = (workHistorys, locale, intl) => {
    // section work experience title
    doc.setFont(fontType, "bold");
    doc.setTextColor(colorAccent);
    doc.setFontSize(14);
    doc.text(
      xPosition,
      yPosition,
      `${intl.formatMessage({ id: "page.resume.workHistory" })}`
    );
    updateHeight(rowHeight);
    // work experience content
    doc.setTextColor(colorDefault);
    doc.setFontSize(12);
    doc.setFont(fontType, "normal");

    workHistorys.map((workHistory) => {
      // init translation block
      let jobTitle = "";
      let jobDescription = "";
      let toDate = "";

      if (workHistory.toDate) {
        toDate = moment(workHistory.toDate).format("DD-MM-YYYY");
      } else {
        toDate = `${intl.formatMessage({ id: "page.resume.current" })}`;
      }

      switch (locale) {
        case "es":
          jobTitle = workHistory?.jobTitle?.es;
          jobDescription = workHistory?.jobDescription?.es;
          break;
        case "en":
          jobTitle = workHistory?.jobTitle?.en;
          jobDescription = workHistory?.jobDescription?.en;
          break;
        case "pt":
          jobTitle = workHistory?.jobTitle?.pt;
          jobDescription = workHistory?.jobDescription?.pt;
          break;
        default:
          jobTitle = workHistory?.jobTitle?.en;
          jobDescription = workHistory?.jobDescription?.en;
          break;
      }
      // end translations blocks

      // job title
      doc.setFont(fontType, "bold");
      doc.setFontSize(12);
      // job title at organization name
      doc.text(
        xPosition,
        yPosition,
        `${jobTitle} ${intl.formatMessage({ id: "page.pdf.at" })} ${
          workHistory.companyName
        } `
      );
      updateHeight(smallHeight);
      // organization name
      doc.text(
        xPosition,
        yPosition,
        `(${moment(workHistory.fromDate).format("DD-MM-YYYY")} - ${toDate})`
      );
      updateHeight(smallHeight);
      // job responsibilities
      let degreeSkills =
        blockContentToPlainText(jobDescription).split("\n");
      degreeSkills = degreeSkills.filter(function (n) {
        return n;
      });

      if (degreeSkills) {
        for (let i = 0; i < degreeSkills.length; i++) {
          let numberOfRows = Math.floor(degreeSkills[i].length / 66);
          doc.text(`- ${degreeSkills[i]}`, xPosition + 10, yPosition, {
            maxWidth: 170,
          });
          if (numberOfRows > 0) {
            updateHeight(smallHeight * (numberOfRows + 1));
          } else {
            updateHeight(smallHeight);
          }
        }
      }

      updateHeight(rowHeight);
    });
  };

  const createEducation = (educations, locale, intl) => {
    let degreeTitle = "";
    let degreeDescription = "";

    // section education title
    doc.setFont(fontType, "bold");
    doc.setTextColor(colorAccent);
    doc.setFontSize(14);
    doc.text(
      xPosition,
      yPosition,
      `${intl.formatMessage({ id: "page.resume.educationAndTrainings" })}`
    );
    updateHeight(rowHeight);

    // section education content
    doc.setTextColor(colorDefault);
    doc.setFontSize(12);
    doc.setFont(fontType, "normal");
    educations.map((education) => {
      switch (locale) {
        case "es":
          degreeTitle = education?.degreeTitle?.es;
          degreeDescription = education?.degreeDescription?.es;
          break;
        case "en":
          degreeTitle = education?.degreeTitle?.en;
          degreeDescription = education?.degreeDescription?.en;
          break;
        case "pt":
          degreeTitle = education?.degreeTitle?.pt;
          degreeDescription = education?.degreeDescription?.pt;
          break;
        default:
          degreeTitle = education?.degreeTitle?.en;
          degreeDescription = education?.degreeDescription?.en;
          break;
      }

      // Education Title
      doc.setFont(fontType, "bold");
      doc.setFontSize(12);
      // education at organization name
      doc.text(xPosition, yPosition, `${degreeTitle}`);
      doc.setFont(fontType, "bold");
      updateHeight(smallHeight);
      // organization education name
      doc.setFontSize(11);
      
      doc.text(xPosition, yPosition, `${education.institutionName}`);
      updateHeight(smallHeight);

      doc.text(
        xPosition,
        yPosition,
        `(${moment(education.fromDate).format("DD-MM-YYYY")} - ${moment(education.toDate).format("DD-MM-YYYY")})`
      );
      updateHeight(smallHeight);

      // job responsibilities
      let degreeSkills =
        blockContentToPlainText(degreeDescription).split("\n");
        degreeSkills = degreeSkills.filter(function (n) {
        return n;
      });

      if (degreeSkills) {
        for (let i = 0; i < degreeSkills.length; i++) {
          let numberOfRows = Math.floor(degreeSkills[i].length / 66);
          doc.text(`- ${degreeSkills[i]}`, xPosition + 10, yPosition, {
            maxWidth: 170,
          });
          if (numberOfRows > 0) {
            updateHeight(smallHeight * (numberOfRows + 1));
          } else {
            updateHeight(smallHeight);
          }
        }
      }
      updateHeight(rowHeight);

    });
  };
  const createTrainings = (additionalTrainings, locale) => {
    let degreeTitle = "";
    let degreeDescription = "";

    updateHeight(rowHeight);

    // section education content
    doc.setTextColor(colorDefault);
    doc.setFontSize(12);
    doc.setFont(fontType, "normal");
    additionalTrainings.map((additionalTraining) => {
      switch (locale) {
        case "es":
          degreeTitle = additionalTraining?.degreeTitle?.es;
          degreeDescription = additionalTraining?.degreeDescription?.es;
          break;
        case "en":
          degreeTitle = additionalTraining?.degreeTitle?.en;
          degreeDescription = additionalTraining?.degreeDescription?.en;
          break;
        case "pt":
          degreeTitle = additionalTraining?.degreeTitle?.pt;
          degreeDescription = additionalTraining?.degreeDescription?.pt;
          break;
        default:
          degreeTitle = additionalTraining?.degreeTitle?.en;
          degreeDescription = additionalTraining?.degreeDescription?.en;
          break;
      }

      // Education Title
      doc.setFont(fontType, "bold");
      doc.setFontSize(12);
      // education at organization name
      doc.text(xPosition, yPosition, `${degreeTitle}`);
      doc.setFont(fontType, "bold");
      updateHeight(smallHeight);
      // organization education name
      doc.setFontSize(11);
      
      doc.text(xPosition, yPosition, `${additionalTraining.institutionName}`);
      updateHeight(smallHeight);

      // job responsibilities
      let degreeSkills =
        blockContentToPlainText(degreeDescription).split("\n");
        degreeSkills = degreeSkills.filter(function (n) {
        return n;
      });

      if (degreeSkills) {
        for (let i = 0; i < degreeSkills.length; i++) {
          let numberOfRows = Math.floor(degreeSkills[i].length / 66);
          doc.text(`- ${degreeSkills[i]}`, xPosition + 10, yPosition, {
            maxWidth: 170,
          });
          if (numberOfRows > 0) {
            updateHeight(smallHeight * (numberOfRows + 1));
          } else {
            updateHeight(smallHeight);
          }
        }
      }
      updateHeight(rowHeight);

    });
  };

  return {
    addPersInfo: (user, intl) => {
      createPersonalInfo(user, intl);
    },

    addWorkExperience: (workHistorys, locale, intl) => {
      createWorkExperience(workHistorys, locale, intl);
    },
    addEducation: (educations, locale, intl) => {
      createEducation(educations, locale, intl);
    },
    addTrainings: (additionalTrainings, locale) => {
      createTrainings(additionalTrainings, locale);
    },
    savePDF: (title) => {
      doc.save(title);
    },
  };
}

export default createPDF;
