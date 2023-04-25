const { argv } = require('process');
console.log('argv: ', argv);
const { mkdir } = require('node:fs');
const { writeFile, copyFile } = require('fs');
const projectName = argv[2];

function generateProject(name) {
  // Create Root
  mkdir(`./${name}`, (err) => {
    if (err) throw err;
    console.log(`New project directory created for ${name}`);
    // Create index.js file √
    copyFile(
      './FUN-March-23/fun-project-generator/templates/template.index.js',
      `./${name}/index.js`,
      (err) => {
        if (err) throw err;
        console.log(
          `Created index file in root directory for ${name}, './index.js'`
        );
        console.log('Setup standard config...: ');
        // Create .gitignore file √
        writeFile(`./${name}/.gitignore`, 'node_modules', (err) => {
          if (err) throw err;
          console.log(
            `Created .gitignore file, ignoring node package modules' './.gitignore'`
          );
          // Create eslint standard template for eslint/prettier config. √
          copyFile(
            './FUN-March-23/fun-project-generator/templates/template.eslintrc.js',
            `./${name}/.eslintrc.js`,
            (err) => {
              if (err) throw err;
              console.log(
                `Create eslint standard config template for eslint/prettier. './eslintrc.js' `
              );
              // Create README from generator template √
              writeFile(`./${name}/README.md`, `# ${name}`, (err) => {
                if (err) throw err;
                // Create spec directory √
                mkdir(`./${name}/spec`, (err) => {
                  console.log('Created spec directory.');
                  if (err) throw err;
                  // Create jest.js test suite boilerplate √
                  copyFile(
                    `./FUN-March-23/fun-project-generator/templates/template.index.test.js`,
                    `./${name}/spec/index.test.js`,
                    (err) => {
                      if (err) throw err;
                      console.log('Created jest.js test suite boilerplate');
                      writeFile(
                        `./${name}/package.json`,
                        JSON.stringify(
                          require('./templates/template.package-json')
                        ),
                        (err) => {
                          if (err) throw err;
                          console.log(
                            'Setup standard config complete. \nYour project has been created! '
                          );
                        }
                      );
                    }
                  );
                });
              });
            }
          );
        });
      }
    );
  });
}

generateProject(projectName);
