# Cherie Frontend

Hi, :wave: This is the main repo that includes all the frontend codebase of the **Cherie** project.  The backend of this project depends on different `microservices` and in general, it is using data sources like `REST API`. This repo is the main frontend implementation of the project so all `API routes` handling and `page routing` will be done here. So it is important to know:

**What technologies is this repo using?**

**What do we need to know to work on this repo?**

## Table of contents

- [Technology stack](#technology-stack)
    - [Yarn](#yarn)
    - [Typescript](#typescript)
    - [ReactJS](#reactjs)
    - [NextJS](#nextjs)
    - [Redux](#redux)
    - [Styled-components](#styled-components)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Package.json scripts](#packagejson-scripts)
- [Directory structure](#directory-structure)
- [Onboard Developers](#onboard-developers)

## Technology stack

Our frontend layer of the **Cherie** project is depends on the following technology stack.

### [Yarn](https://classic.yarnpkg.com/en/)

We are using [Yarn](https://classic.yarnpkg.com/en/) as a package manager instead of [Npm](https://docs.npmjs.com/). Therefore, [Yarn](https://classic.yarnpkg.com/en/) must be installed in your machine. But this project will also work well with [Npm](https://docs.npmjs.com/) and run successfully on your local machine but we recommend [Yarn](https://classic.yarnpkg.com/en/).

You can also see the official documentation of [Yarn](https://classic.yarnpkg.com/en/) to see the installation process, it is very easy.

At the root of the project is a file called `yarn.lock`.  This file is auto-generated and handles it entirely through [Yarn](https://classic.yarnpkg.com/en/) when we install new dependencies related to the project.

### [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

All our code will be written in [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html). Because [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) provides highly productive development tools and practices, such as static checking. This makes the code easier to read and understand. That's why we're using it.

### [ReactJS](https://reactjs.org/docs/hello-world.html)

Our view/presentation layer depends on the [React.js](https://reactjs.org/docs/hello-world.html) because [React.js](https://reactjs.org/docs/hello-world.html) will help us to create reusable UI components and it is also providing us with a good way to create state management for all components.

### [NextJS](https://nextjs.org/docs/getting-started)

We do not want to render our [React.js](https://reactjs.org/docs/hello-world.html) frontend to client side JavaScript. So we need a way to present the [React.js](https://reactjs.org/docs/hello-world.html) frontend from the server and send it to the client.

So [Next.js](https://nextjs.org/docs/getting-started) will render the [React.js](https://reactjs.org/docs/hello-world.html) on the server and send it to the client which is also called server-side rendering.

Our web application `page routing` is also dependent upon this [framework](https://nextjs.org/docs/getting-started). So some little knowledge of [Next.js](https://nextjs.org/docs/getting-started) is necessary. In Next.js a `page` is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file.  You can also create new pages and consume backend APIs routes on these pages.

**How can we create new pages?**

The web application pages are located in the `src/pages` directory and `src/pages/index.tsx` represents the homepage of our web application. You can also read the official documentation.

**How can we use the API?**

The nature of the project depends on some blockchain and other third party `APIs` so we need to use these `APIs` on pages. There are 2 ways to work with the `API` in [Next.js](https://nextjs.org/docs/getting-started).

- Client side Data Fetching
- Pre-rendering

#### Client side Data Fetching:
If your page contains frequently updated data, and you don't need to pre-render the data, then use these approaches. There are libraries like [axios](https://github.com/axios/axios), [react-query](https://react-query.tanstack.com/overview), and [swr](https://swr.vercel.app/docs/getting-started) that help us in this task.

#### Pre-rendering:
Next.js also has the functionality of pre-rendering. If the page must be pre-rendered, Next.js supports [2 pre-rendered forms](https://nextjs.org/docs/basic-features/data-fetching):  
[Static Site Generation (SSG)](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) and [Server Side Rendering (SSR)](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) . You can read this in [documentation](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

### [Redux](https://redux.js.org/introduction/getting-started)
Our app needs global state management so we can access our app state globally on all pages. For this, [Redux](https://redux.js.org/introduction/getting-started) comes to our mind as it also helps us to avoid the problem of [prop drilling of React.js](https://kentcdodds.com/blog/prop-drilling). We are using the latest [@reduxjs/tookit](https://redux-toolkit.js.org/introduction/getting-started).

### [Styled-components](https://styled-components.com/docs/basics#getting-started)

We are using the [styled-components](https://styled-components.com/docs/basics#getting-started) library to style our React.js components. This  [library](https://styled-components.com/docs/basics#getting-started) helps us to separate the styles of all the components to its file. We are not using the old method of styling in which we create only 1 stylesheet for all pages because this approach will render unnecessary styles that the page doesn't need.

So we will use this [library](https://styled-components.com/docs/basics#getting-started) to present a style based on the usage of the component.

## Usage

After cloning the branch. Please install the dependencies of the project with the following command.

***npm:***

`npm install`

***yarn:***

`yarn install`

After installation, You will see there will be `node_modules` directory inside the root of the repo.

## Environment Variables

To run the project locally on your machine, you need to create an environment variables file `.env.local`. It is a very important step otherwise the project will not work.

#### List of environmental variables for local development:

```
# Exposed to the browser
NEXT_PUBLIC_ENVIRONMENT=
NEXT_PUBLIC_HOST=
NEXT_PUBLIC_ORIGIN=
```

## Package.json scripts

Inside the `package.json` file, currently there are 5 scripts.

#### *1. Start the server in local development environment:*

`yarn dev`

or

`npm dev`

#### *2. Before deploying to the production server :*

Before deploying to the production server we have to create the project build files. So we have to use the following command/script.

`yarn build`

or

`npm build`

#### *3. After the successfully build of the production version:*

We have to use the following command/script.

`yarn start`

or

`npm start`

These are 3 major command/scripts for the staging and production environment.

#### *4. Perform the static code analysis on the whole codebase:*

`yarn lint`

or

`npm lint`

#### *5. Formatting the whole codebase with prettier configuration:*

`yarn format`

or

`npm format`

## Directory structure

#### package.json and yarn.lock

The `package.json` file is normally located at the root directory. It holds the important metadata about a project. When we install a new dependency with package manager in my case Yarn then `yarn.lock` will keep track of the whole metadata about this file and will update automatically whenever a new dependency will install.

It also helps other developers to install the same version of the dependency in their local machine.

#### tsconfig.json and next-env.d.ts

The `tsconfig.json` file includes all the Typescript compile options whereas `next-env.d.ts` file ensures that Next.js types are picked up by the TypeScript compiler.

#### .prettierrc and .prettierignore

Make sure codebase files should be formatted with the prettier rules. So we are using `.prettierrc` configuration formatting rules on all our code files. In the code formatting process `.prettierignore` will ignore those files and directories which are written inside this file.

#### .eslintrc and .eslintignore

These `eslint` files are basically for the static code analysis which helps us to identify problematic patterns found in the codebase whereas the `.eslintignore` file will ignore the static code analysis based on the written files.

#### config.ts

This file will contain configuration / environmental variables or project settings that we can `import` into various files.

#### next.config.js

`next.config.js` is a regular `Node.js` module, not a JSON file. It gets used by the `Next.js` server and build phases, and it's not included in the browser build. We can also define our `next.config.js` custom rules according to the docs.

#### .babelrc

During the build phase of the project. Babel transpiler will use the `.babelrc` configuration file to create the build of our codebase according to the babel plugins that we are using.

#### public

`Next.js` will serve all static files from this directory. It could be fonts, images, favicons, and icons.

#### src/pages

Next.js has a file-system-based router built on the concept of pages. When a file is added to the `src/pages` directory it's automatically available as a route.

##### `_document.tsx`:

`_document.tsx` is only rendered on the server side and not on the client side. The `_document.tsx` file wraps the `_app.tsx` file.

##### `_app.tsx`:

`_app.tsx` is rendered on both server-side and client-side (on the server during the initial SSR, on the client-side after hydration, and then on every page/route navigation.

##### `index.tsx`:

This file represents our main homepage.

#### src/helpers

Here we will create all our reusable helper function files. Sometimes people call this directory `utils` but we will stay with the name `helpers`.

#### src/styles

In this directory, we will create all our `styled-components related utilities, reset files, and theme files that will be used by our application.

#### src/types

Our project is using [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html), sometimes we need the same `Types` declaration on more than one file. So we can create different `Types` that can be reused on multiple files.

#### src/services

This directory contains files for `API` calls for various services. Each file will abstract the logic of the `API` calls and depend on the `helper` functions. We can create a separate file for each service.

#### src/components

This directory is very important all our reusable components will reside there.

#### src/constants

This directory contains various files that represent `constant` variables and the value of these variables will never change.

#### src/redux

We are using [Redux (@reduxjs/toolkit)](https://redux-toolkit.js.org/introduction/getting-started) to avoid the problem of [prop drilling](https://kentcdodds.com/blog/prop-drilling) and to access our data state globally on all pages. This directory contains all the files related to [Redux](https://redux-toolkit.js.org/introduction/getting-started).

## Onboard Developers

Interested in contributing? Then you can help us build new features or help us improve the project documentation. Please push your code with your branch and feel free to make a PR, after the successful code review the branch will be merged.
