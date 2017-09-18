# Caddy

Low fidelity front-end toolkit. Comes with

- HTML Partials
- SASS + Sourcemaps
- Lean Foundation Grid
- JSHINT + Uglify (revisit)
- Browsersync

### Install

- Run `yarn`

### Development

Launch development server on http://localhost:3000

- Run `gulp`

### Production Build

Remove sourcemaps, uglify and cache-bust goodness

- `gulp build --production`

### Deploy to Production

- Create url own `.deploy` file. Use `.deploy.example` as a starting point: `cp .deploy.example .deploy`
- Enter your production server details into `.deploy`
- `source .deploy`