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

Regarding `WARN core: Open Exchange Rates AppId not configured. Configure for current rates`. Looks like we need an API key from [here] (https://openexchangerates.org/signup/free)? Is this a requirement if we are only using 1 form of currency?

---

## Official Repo/README.md

View the [Reaction Commerce](https://github.com/reactioncommerce/) repo and original readme [here](https://github.com/reactioncommerce/).
