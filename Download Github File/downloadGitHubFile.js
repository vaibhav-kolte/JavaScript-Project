const axios = require('axios');
const fs = require('fs');
const path = require('path');
const owner = 'vaibhav0910';
const accessToken = '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';

// const repo = 'FileDownloadTesting';
// const filePath = 'main/WifiBLECombo_v0_3_15_99_OTA.apl';

const repo = 'assignment';
const filePath = 'main/app/src/main/java/com/vkolte/iprogramtest/CompareAdapter.java';

// const repo = 'Network_Connectivity';
// const filePath = 'master/app/proguard-rules.pro';


downloadFileFromGitHub(owner, repo, filePath, accessToken);
function downloadFileFromGitHub(owner, repo, filePath, accessToken) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${filePath}`;
  // console.log("URL : ", url)
  const headers = {
    'Authorization': `token ${accessToken}`,
    'Accept': 'application/vnd.github.v3.raw'
  };

  axios.get(url, { headers, responseType: 'arraybuffer' })
    .then(async response => {

      if (response.status === 200) {
        const bufferData = Buffer.from(response.data)

        // Convert Buffer data to human-readable text
        const humanReadableText = bufferData.toString('utf-8');
        // console.log("response : ", humanReadableText)

        const pathParts = filePath.split("/");
        const fileName = pathParts[pathParts.length - 1];
        const saveFilePath = `${__dirname}/files/${fileName}`

        // Extract the directory path from the file path
        const directoryPath = path.dirname(saveFilePath);

        // Check if the directory exists, create it if not
        if (!fs.existsSync(directoryPath)) {
          fs.mkdirSync(directoryPath, { recursive: true });
        }
        // Write content to the file
        fs.writeFile(saveFilePath, humanReadableText, (err) => {
          if (err) {
            console.error('Error writing to file:', err);
          } else {
            console.log('File created and content written successfully.');
          }
        })

      } else {
        console.error(`Failed to download file. Status code: ${response.status}`);
        console.error(`Response content: ${response.data.toString('utf-8')}`);
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}



