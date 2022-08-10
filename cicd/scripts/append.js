const fs = require('fs');

const generateDate = () => {
  const today = new Date().toISOString();
  
  const dateSplit = today.toString().split("T");
  
  const replaceWith = "";

  const dateFormat = dateSplit[0];
  
  const dateTime = dateSplit[1].split(".")[0].replaceAll(":", replaceWith);

  return `${dateFormat}-${dateTime}`;
};


const copyAndRenameFile = () => {

    fs.copyFile("reports/index.html", `reports/cucumber-test-result-${generateDate()}.html`, (err) => {
        if (err) {
          console.log("Error copying report file:", err);
        }
        
      });
};

copyAndRenameFile();

