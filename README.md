# angular
Angular

# Introduction

## What is Angular?
Angular is a web framework that empowers developers to build fast, reliable applications.
Maintained by a dedicated team at Google, Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.

## Installation

## Setup a new project locally
If you're starting a new project, you'll most likely want to create a local project so that you can use tooling such as Git.

### Prerequisites
* Node.js - v^18.19.1 or newer
* Text editor - We recommend Visual Studio Code
* Terminal - Required for running Angular CLI commands

### Instructions
The following guide will walk you through setting up a local Angular project.

### Install Angular CLI
Open a terminal (if you're using Visual Studio Code, you can open an integrated terminal) and run the following command:

```sh
npm install -g @angular/cli
```

If you are having issues running this command in Windows or Unix, check out the CLI docs for more info.

### Create a new project
In your terminal, run the CLI command `ng new` with the desired project name. In the following examples, we'll be using the example project name of `my-first-angular-app`.
```sh
ng new <project-name>
```
You will be presented with some configuration options for your project. Use the arrow and enter keys to navigate and select which options you desire.

If you don't have any preferences, just hit the enter key to take the default options and continue with the setup.

After you select the configuration options and the CLI runs through the setup, you should see the following message:
```sh
✔ Packages installed successfully.
 Successfully initialized git.
 ```

 #### package-loc.json