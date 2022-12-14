# wk3-code-challenge

## Description
This project is a web app named **Flatdango**, a m ovie application that is used to display information to a user about the different movies available and allowing the user to purchase tickets for a movie.\
The app is created to satisfy a code-challenge by Moringa School. The app uses JSON-server so as to setup the db.json file found in the project folder to act as the web-app's server.\
The app utilizes the fetch() javascript function to retrieve and post data to the db.json file, while using events to trigger correspnding actions.

## Project Setup
### Getting Started
In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following: (Windows 7+, Linux, Mac OS)
- NPM
- JSON server (Find how to install below)

### Installation of JSON server
JSON server may be installed using npm by running the following command:\

        npm install -g json-server
This installs JSON server globally on your system allowing you to use it in any project.

### Installation of application

The installation steps below are described for a linux machine.\
To use this repo on your machine requires some simple steps

#### Alternative One (Cloning directly from my repository)
- Open a terminal / command line interface on your computer

- Clone the repo into your folder of choice by using the following:


        git clone https://github.com/Malcolm-G-Moringa/wk3-code-challenge.git

- Change directory to the repo folder:


        cd wk3-code-challenge
- (Optional) Open it in Visual Studio Code

  
        code .
- (Alternate Option) Open it in any editor of your choice.

#### Alternative Two (Forking to your own repository)
- On the top right corner of this page there is a button labelled **Fork**.

- Click on that button to fork the repo to your own account.

- Take on the process in Alternative One above.

- Remember to use your username when cloning.


        git clone https://github.com/your-username-here/wk3-code-challenge.git

### Running the application
To run the application, follow these steps:

- In the VS code project terminal or in the system terminal while in the project directory, run the following command:\
  `json-server --watch db.json`\
  The above command will allow the db.json file to act as a server for the application.
- Access the website by going to the following link: `https://malcolm-g-moringa.github.io/wk3-code-challenge/`.
- Alternatively, you can open index.html by running in the terminal the command: `open index.html` or by navigating to the folder containing the index.html file through the file manager of your system and double-clicking on the file.

---
## Authors
This project was contributed to by:
- [Malcolm Githuka](https://github.com/Malcolm-G-Moringa)
## License
The project is under GNU GENERAL PUBLIC LICENSE Version 3