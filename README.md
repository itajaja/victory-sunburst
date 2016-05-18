[![Travis Status][trav_img]][trav_site]

Victory Component Boilerplate
===========================

This is a starter Victory component.

## The Generator

We expect these opinions to change *often*.  We've written a yeoman generator to
pull down the freshest copy of this repo whenever you use it.  It just copies
this repo so you don't have to. Check it out
[here](https://github.com/FormidableLabs/generator-formidable-react-component)

To create a new project based on this boilerplate:

```sh
$ npm install -g yo
$ npm install -g generator-formidable-react-component
$ yo formidable-react-component
```

The generator replaces `victory-sunburst` and
`VictorySunburst` across this repo with names specific to
your new project. `src/components/victory-sunburst.jsx`
and `test/client/spec/components/victory-sunburst.spec.jsx`
are also renamed, and a fresh `README.md` is created.

## Development

Please see [DEVELOPMENT](https://github.com/FormidableLabs/builder-victory-component/blob/master/dev/DEVELOPMENT.md)

## Contributing

Please see [CONTRIBUTING](https://github.com/FormidableLabs/builder-victory-component/blob/master/dev/CONTRIBUTING.md)

[trav_img]: https://api.travis-ci.org/FormidableLabs/victory-sunburst.svg
[trav_site]: https://travis-ci.org/FormidableLabs/victory-sunburst
