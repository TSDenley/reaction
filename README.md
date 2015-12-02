# Reaction Commerce

E-commerce project based on [Reaction Commerce](https://github.com/reactioncommerce/).

## Theming

### Overriding Templates

__Location of default templates:
`~/.meteor/packages/reactioncommerce_core/0.9.2/web.browser/client/`__

```
client/
├── helpers
└── templates
    ├── cart
    │   ├── cartDrawer
    │   ├── cartIcon
    │   ├── cartPanel
    │   └── checkout
    ├── dashboard
    │   ├── console
    │   ├── orders
    │   ├── packages
    │   ├── settings
    │   └── shop
    ├── layout
    │   ├── alerts
    │   ├── footer
    │   ├── header
    │   ├── loading
    │   ├── notFound
    │   └── notice
    └── products
        ├── productDetail
        ├── productGrid
        ├── productList
        └── productSettings

```

Default templates can be overridden by creating replacements in the project directory. Technically, it doesn't matter where you put them but it's recommended to keep the same file structure i.e. `/reaction/client/templates/`.

### Styling

There's a new theme, '10a', in `/reaction/client/themes/` that contains all of the [LESS](http://lesscss.org/) stylesheets.

It's included after Bootstrap and the default styling so it can be overridden and all the variables can be accessed.

### Static pages

__Static pages are located in `/reaction/client/templates/static/`.__

To add new static pages:

- Add the new template.
- Modify the array in `/reaction/common/routing.js` to include the name of the new static page template.
- [Iron router's "pathFor" helper](http://iron-meteor.github.io/iron-router/#pathfor) can be used to create a link (see `/reaction/client/templates/layout/footer/footer.html`). E.g.:

```
<a href="{{pathFor 'newPage'}}">New Page</a>
```


### Issues

Regarding `WARN core: Open Exchange Rates AppId not configured. Configure for current rates`. Looks like we need an API key from [here] (https://openexchangerates.org/signup/free)? Is this a requirement if we are only using I form of currency?

---

## From the Official README.md

Reaction is a modern reactive, real-time event driven ecommerce platform.

Reaction is built with JavaScript, Meteor, Node.js and works nicely with Docker.

See: [Atmosphere Packages for Reaction](https://atmospherejs.com/?q=reactioncommerce)

### Installation

```
Node.js and NPM are required. Install from http://nodejs.org/
```

To install Meteor + Reaction, and start the latest release:

```bash
curl https://install.meteor.com | /bin/sh
git clone https://github.com/reactioncommerce/reaction.git
cd reaction && git checkout master
meteor
```

Additional installation options are in the [developer documentation](https://github.com/reactioncommerce/reaction/blob/development/docs/developer/installation.md).

_Note: for windows installation you also need:_
- OpenSSL x86 ([windows installer](https://slproweb.com/products/Win32OpenSSL.html))
- Visual Studio 2008 redistributables
- Git + msysGit ([git-for-windows/git](https://github.com/git-for-windows/git/releases))
- ImageMagick

A Docker image is available on the [Reaction Commerce Docker Hub ](https://hub.docker.com/r/reactioncommerce/reaction/).

### Developer Documentation

[Getting started guide](http://blog.reactioncommerce.com/how-to-get-involved-with-reaction-commerce/)

[Installation](https://github.com/reactioncommerce/reaction/tree/master/docs/developer/installation.md)

[Overview](https://github.com/reactioncommerce/reaction/tree/master/docs/developer/overview.md)

[Methods](https://github.com/reactioncommerce/reaction/tree/master/docs/developer/methods.md)

[Package Development](https://github.com/reactioncommerce/reaction/tree/master/docs/developer/packages.md)

[Theme Development](https://github.com/reactioncommerce/reaction/tree/master/docs/developer/themes.md)

[i18n Translations](https://github.com/reactioncommerce/reaction/tree/master/docs/developer/i18n.md)

[Template Development](https://github.com/reactioncommerce/reaction/tree/master/docs/developer/templates.md)
