# Caddy

Low fidelity front-end toolkit. Comes with

- HTML Partials
- SASS + Sourcemaps
- Lean Foundation Grid
- JSHINT + Uglify (revisit)
- Browsersync

### Install

- Run `npm install`
- Run `bower install` (removing this soon)


### Production Build

Remove sourcemaps, uglify and cache-bust goodness

- `gulp build --production`

### Deploy to Production

- Create url own `.deploy` file. Use `.deploy.example` if you need `cp .deploy.example .deploy`
- Enter your production server details into `.deploy`
- `source .deploy`