## Http status

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/http-status.svg)](https://greenkeeper.io/)
![License](https://img.shields.io/badge/license-Apache-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/%40axetroy%2Fnid.svg)](https://badge.fury.io/js/%40axetroy%2Fnid)
![Size](https://github-size-badge.herokuapp.com/axetroy/http-status.svg)


Get http status

## Usage

```bash
npm isntall @axetroy/http-status --save
```

```javascript
const httpStatus = require('@axetroy/http-status');

console.log(httpStatus.OK.code);  // 200
console.log(+httpStatus.OK);      // 200

console.log(httpStatus.OK.message);   // OK
console.log(httpStatus.OK + "");      // OK

```

## Contributing

[Contributing Guid](https://github.com/axetroy/Github/blob/master/CONTRIBUTING.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/http-status/commits?author=axetroy) [🐛](https://github.com/axetroy/http-status/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faxetroy%2Fhttp-status.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Faxetroy%2Fhttp-status?ref=badge_large)
