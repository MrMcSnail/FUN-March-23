# Section 2 - Project Generator

First, ensure that you have the latest version of `nodejs` installed. This is most easilly achieved by using [this nvm install script](https://github.com/nvm-sh/nvm#install--update-script) as per [these instructions on the nodejs website](https://nodejs.org/en/download/package-manager/#nvm)

Build a project generator. The goal is to be able to use the terminal command `$generate my_new_project` which should create a directory with the project name passed in your current location and fill it with the necessary files to start a basic JS project.
These should include:

- an index.js √
- a spec folder √
- an index.test.js √
- a package.json set up with the basic dependencies and scripts
- a README.md file √
- an eslint config file √
- a .gitignore file √
- a git repository initialised √

In order to do this you will need to utilise the **File System** module available in Node. Only use the asynchronous methods - any ending in 'sync' are not allowed.

A big part of problem solving is reading documentation and establishing what you will need and how to use it - here is the [documentation for Node's File System module](https://nodejs.org/api/fs.html).

You'll also have to research how to install your program on your computer to make the generate command globally available from your terminal.

## Advanced Features

- Configure your generator to automatically run npm install when used, installing all the packages listed in the package.json.
- If called like so: `generate [project name][github http]`, it should automatically add the github http as a remote.
- It should perform an initial commit with the message 'initial commit' and push it to your github on the link provided.
- Explore how you could add interactivity purely with Node, i.e. ask the user to input the name of the project on the console or select between a choice of project templates.
