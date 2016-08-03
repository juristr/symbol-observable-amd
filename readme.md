# symbol-observable-amd

**IMPORTANT**: this is a _temporary_ repository that holds a bundle to use the [symbol-observable](https://github.com/blesh/symbol-observable) library
required by [RxJS 5](https://github.com/ReactiveX/rxjs) in an AMD / RequireJS project.

**WARN:** As soon as these issues get resolved, this repository will be deleted:

- https://github.com/ReactiveX/rxjs/issues/1664
- https://github.com/blesh/symbol-observable/pull/20

## Install

Since it's temporary, I'm not going to publish this to npm. Simply include it like this in your `package.json`:

```
{
    "dependencies": {
        "symbol-observable-amd": ""git+ssh://git@github.com:juristr/symbol-observable-amd.git"
    }
}
```

## Usage

Configure RequireJS like


```javascript
require.config({
  paths: {
     ...
     rxjs: '../../node_modules/@reactivex/rxjs/dist/amd',
    'symbol-observable': '../../node_modules/symbol-observable-amd/bundle/symbol-observable.amd'
  }
})
```

(Adjust the `node_modules` base path as needed obviously)