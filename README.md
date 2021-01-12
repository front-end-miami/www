# www

> frontend.miami site

## Pages

#### /index

Homepage of the site, featuring links to the Slack channel and MeetUp page, as well as the next MeetUp event.

#### /invite

Simple Redirect Route to our slack inviter.


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

### Deploy

#### Automated

Using a github action this repo is automatically compiled and deployed when a Pull Request is merged into the Master
 branch. 
 
#### Manual

In the case of failure the site can be deployed with the following command.

```sh
# deploy to gh-page branch
yarn deploy
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## To-Dos
- [] Speaker submissions page
- [] Content edits
- [] Layout revisions?
