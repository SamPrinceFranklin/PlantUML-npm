const plantumlEncoder = require('plantuml-encoder');
const request = require('request');
const fs = require('fs');
const readline = require('readline');

function plantumltxt() {
  // Create an interface for reading user input from the command line
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Ask the user to enter the path of the .txt file
  rl.question('Enter the path of the .txt file: ', function (filePath) {
    // Read the diagram from the specified .txt file
    fs.readFile(filePath, 'utf8', function (err, diagram) {
      if (err) {
        console.error(err);
        rl.close();
        return;
      }

      // Encode the diagram using the plantuml-encoder module
      const encoded = plantumlEncoder.encode(diagram);

      // Make a GET request to the PlantUML server with the encoded text
      request
        .get('https://www.plantuml.com/plantuml/png/' + encoded)
        .on('error', function (err) {
          // Handle errors that occur during the GET request
          console.error(err);
        })
        .pipe(fs.createWriteStream('diagram.png'))
        .on('finish', function () {
          // Callback function called when the image export is complete
          console.log('Image exported successfully!');
          rl.close();
        });

      // Log a message indicating that the image export process has started
      console.log('Exporting image...');
    });
  });
}

// Export the exportDiagram function as a module
module.exports = plantumltxt;
