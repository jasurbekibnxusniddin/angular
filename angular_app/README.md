# Create a Project Folder
```sh
mkdir my-angular-app
cd my-angular-app
```

# Initialize a Node.js Project
Run the following command and follow the prompts to set up package.json:
```sh
npm init -y
```

# Install Angular Packages
Since you're not using ng new, you need to manually install Angular and its dependencies:
```sh
npm install @angular/core @angular/cli @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic rxjs zone.js tslib --save
```

Also, install TypeScript:
```sh
npm install typescript --save-dev
```

# Set Up TypeScript Configuration
Create a tsconfig.json file in the root folder and add the following configuration:
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@angular/*": ["node_modules/@angular/*"]
    }
  },
  "exclude": ["node_modules"]
}
```

# Create the Project Structure
Manually create the necessary files and folders:
```scheme
my-angular-app/
│── src/
│   ├── index.html
│   ├── main.ts
│   ├── app/
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│── tsconfig.json
│── package.json
```

# write your codes

# Compile the Project
Since you're not using Angular CLI, you need to compile TypeScript manually:
```sh
npx tsc
```
This will generate JavaScript files in the dist/ folder.

# Serve the Application
To serve the application, you can use a simple HTTP server like lite-server:

```sh
npm install lite-server --save-dev
```
Then, add a script to your package.json:

```json
"scripts": {
  "start": "lite-server"
}
```
Run the application:

```sh
npm start
```
It will open the browser and display your Angular app.

