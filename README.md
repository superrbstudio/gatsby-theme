# Superrb Gatsby Theme

> [Gatsby](https://www.gatsbyjs.org/) template for websites with content managed in [Prismic](https://prismic.io)

You will need Prismic API keys to start to build this project. Please refer to `.env.example` for instructions.

## Requirements

* Node v16.x
* Yarn
* [Prismic CLI](https://npmjs.com/package/prismic-cli)

## Getting Started

Create a new site and Prismic repository using the following command

```sh
prismic theme --theme-url https://github.com/superrbstudio/gatsby-theme
```

Enter the repository name when prompted, and this will be created for you.

## Developing (Local Development)

Use the following to perform a development build and run a local server.
* copy `.env.example` to `.env.development`
* populate Prismic API keys and repository name
* Run `yarn`
* Run `yarn start`

## Production Build (Local Simulation)

Use the following to perform a production build and run a local server.
* copy `.env.example` to `.env.production`
* populate Prismic API keys and repository name
* Run `yarn`
* Run `yarn start:prod`

## Production Build

Use the following to create a production build.
* copy `.env.example` to `.env.production`
* populate Prismic API keys and repository name
* Run `yarn`
* Run `yarn build`

The production build files will be found in `/public`

## More information

* [Gatsby.js Documentation](https://v4.gatsbyjs.com/docs/)
* [Prismic + Gatsby.js Documentation](https://prismic.io/docs/technologies/gatsby)
