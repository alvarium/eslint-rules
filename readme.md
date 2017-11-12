Alvarium.io eslint rules
========================

This package contains all the rules used by our javascript projects.

The configurations have been splitted into multiple modules which you can
extend.

Installing
----------

As easy as

~~~bash
npm install --save-dev eslint-config-alvarium eslint-plugin-import
~~~

And to use it, just create an `.eslintrc` file extending from the desired config.
Using YAML would be something like:

~~~yaml
extends: alvarium
~~~

Node.js
-------

When extending, specify the Node.js module:

~~~yaml
extends: alvarium/node
~~~

React.js
--------


When extending, specify the React.js module:

~~~yaml
extends: alvarium/react
~~~

Using the react linter requires some additional packages (added as peer
dependencies to this project):

~~~bash
yarn add --dev babel-eslint eslint-config-react-app
~~~

License
-------

This project is licensed under a [GNU GPL-3.0 license][license].

[license]: ./LICENSE
