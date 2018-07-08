# Webpack setup

npm install -g webpack # installs webpack globally
npm init # sets up the package.json file

then (don't run these commands, more taken as an operator's handbook)

* Create ``index.html`` file
* Create ``index.js`` file with the line alert('Hello world')
* Run ``webpack index.js``

Note: may also need to install ``webpack-cli`` and call ``npm install webpack``.

In ``index.html`` need to reference ``bundle.js``.

The magic command to produce ``bundle.js`` is

webpack index.js

Everytime a change is made, this command needs to be re-run. You can use watch mode to avoid the need to keep running that command.

webpack index.js --watch

To use another package (for instance, jquery) you can use npm install and webpack will put it into package.json automatically.

To install a package, use

sudo npm install jquery --save

Some npm packages for loaders are:

* css-loader
* style-loader

You can use --save-dev to add to dev-dependencies.

Running all these commands from command line all the time can be eliminated with a webpack.config.js file.

* Loaders are handled in webpack.config.js file.

In package.json file, you can specify different npm commands, such as ``npm run build`` with "build" as I have done. Note watch flag may be useful to enable in webpack.config.js.

The npm package for webpack-server is:

* webpack-dev-server

Configure this with the "start" command in the package.json file.

The loader for js is babel. Do something like this

 npm install babel-core babel-loader babel-preset-es2015 --save-dev