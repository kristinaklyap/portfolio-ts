
# Portfolio website

Personal website built with React and TypeScript. Fun fact: portfolio can be easily adapted by anyone to meet their needs, with only updating config.json file.






## Author

[@kristinaklyap](https://www.github.com/kristinaklyap)


## Demo

https://github.com/kristinaklyap/portfolio-ts


## Tech Stack

React, TypeScript, CSS Modules (SCSS)


## Run Locally

Clone the project

```bash
  git clone https://github.com/kristinaklyap/portfolio-ts.git
```

Go to the project directory

```bash
  cd portfolio-ts
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tree


 ```
 🗂️ src
    ├── assets
    │   ├── about
    │   ├── brands
    │   ├── intro
    │   └── portfolio
    ├── components
    │   ├── Breadcrumbs
    │   ├── Header
    │   ├── NotFound
    │   ├── Pagination
    │   ├── Projects
    │   └── Socials
    ├── hooks
    ├── models
    ├── pages
    │   ├── About
    │   ├── Intro
    │   ├── NotFound
    │   ├── Portfolio
    │   └── Project
    └── styles


 ```

## Configuration file

In order to adapt this project to yourself, change content inside config.json file from root directory.

Code:

``` json
 "pages": {
    "intro": {
      "title": "Hi, I'm Name!",
      "content": "Lorem ipsum dolor sit amet. Qui voluptatem quae et quia consectetur vel magnam veritatis.",
      "breadcrumbs": {
        "pageNo": "01",
        "pageTitle": "Introduce"
      }
    },
```
