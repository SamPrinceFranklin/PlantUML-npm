## PlantUML-txt 

![npm](https://img.shields.io/npm/v/plantuml-txt?color=f&label=plantuml-txt) ![npm](https://img.shields.io/npm/dt/plantuml-txt) ![NPM](https://img.shields.io/npm/l/plantuml-txt) ![Lines of code](https://img.shields.io/tokei/lines/github/SamPrinceFranklin/PlantUML-npm) ![Twitter Follow](https://img.shields.io/twitter/follow/Franky_Sagan?style=social)

**PlantUml-txt** is an npm package that allows you to convert **PlantUML code** in `**.txt**` format to `**.png**` files. It provides a convenient way to generate visual representations of your PlantUML diagrams for use in your projects or documentation.

## **Features**

*   Converts PlantUML code in **.txt** format to **.png** images.
*   Easy to use and integrate into your workflow.
*   Supports a wide range of PlantUML diagram types.
*   Customizable output file name and destination.
*   Works on both Node.js and browser environments.

## **Installation**

You can install the package using npm:

```javascript
npm install plantuml-txt                
```

## **Usage**

```javascript
const { convertPlantUmlToPng } = require('plantuml-txt');

// Convert PlantUML code in .txt format to .png
convertPlantUmlToPng('path/to/plantuml.txt', 'output/path/diagram.png')
  .then(() => {
    console.log('PlantUML diagram converted to .png successfully!');
  })
  .catch((error) => {
    console.error('Error converting PlantUML diagram:', error);
  });
```

## **License**

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for details.

## **Contributing**

Contributions are welcome! If you find any issues or would like to add new features or improvements, please feel free to open a pull request. Make sure to follow the contribution guidelies.

## **Acknowledgments**

*   This package is inspired by the PlantUML project ([https://plantuml.com/](https://plantuml.com/)).
*   Thanks to the contributors to this project.

## **Support**

For any questions or support regarding the PlantUml-txt package, please [open an issue](https://github.com/SamPrinceFranklin/PlantUML-npm/issues) on GitHub.
