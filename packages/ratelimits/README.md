<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire.png)

# @sapphire/ratelimits

**Bucket implementation for Ratelimits.**

[![GitHub](https://img.shields.io/github/license/sapphire-project/utilities)](https://github.com/sapphire-project/utilities/blob/main/LICENSE.md)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/sapphire-project/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-project/utilities/alerts/)
[![Language grade: JavaScript/TypeScript](https://img.shields.io/lgtm/grade/javascript/g/sapphire-project/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-project/utilities/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/sapphire-project/utilities/badge.svg?branch=main)](https://coveralls.io/github/sapphire-project/utilities?branch=main)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/ratelimits?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/ratelimits)
[![npm](https://img.shields.io/npm/v/@sapphire/ratelimits?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/ratelimits)
[![Depfu](https://badges.depfu.com/badges/ec42ff3d6bae55eee1de4749960852b3/count.svg)](https://depfu.com/github/sapphire-project/utilities?project_id=15195)

</div>

**Table of Contents**

-   [Description](#description)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Token Bucket](#token-bucket)
    -   [Leaky Bucket](#leaky-bucket)
-   [API Documentation](#api-documentation)
-   [Buy us some doughnuts](#buy-us-some-doughnuts)
-   [Contributors ✨](#contributors-%E2%9C%A8)

## Description

There is often a need to apply ratelimits to protect a network from excessive traffic levels on connections routed through it. This package offers two different techniques in the same implementation: the simple [Token Bucket](https://en.wikipedia.org/wiki/Token_bucket), and the more complex [Leaky Bucket](https://en.wikipedia.org/wiki/Leaky_bucket).

## Features

-   Written in TypeScript
-   Bundled with Rollup so it can be used in NodeJS and browsers
-   Offers CommonJS, ESM and UMD bundles
-   Fully tested

## Installation

```sh
yarn add @sapphire/ratelimits
# npm install @sapphire/ratelimits
```

## Usage

**Note:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { Bucket } = require('@sapphire/ratelimits')` equals `import { Bucket } from '@sapphire/ratelimits'`.

### Token Bucket

```ts
// Import the Bucket class
const { Bucket } = require('@sapphire/ratelimits');

// Define a bucket with 1 usage every 5 seconds
const bucket = new Bucket().setDelay(5000);

console.log(bucket.take(420)); // -> 0
console.log(bucket.take(420)); // -> 5000
```

### Leaky Bucket

```ts
// Import the Bucket class
const { Bucket } = require('@sapphire/ratelimits');

// Define a bucket with 2 usages every 5 seconds
const bucket = new Bucket().setLimit({ timespan: 5000, maximum: 2 });

console.log(bucket.take(420)); // -> 0
console.log(bucket.take(420)); // -> 0
console.log(bucket.take(420)); // -> 5000
```

---

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://sapphire-project.github.io/utilities/modules/_sapphire_ratelimits.html).

## Buy us some doughnuts

Sapphire Project is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, PayPal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                                             Address                                              |
| :-------------: | :----------------------------------------------------------------------------------------------: |
| Open Collective |                    [Click Here](https://opencollective.com/sapphire-project)                     |
|      Ko-fi      |                         [Click Here](https://ko-fi.com/sapphireproject)                          |
|     Patreon     |                      [Click Here](https://www.patreon.com/sapphire_project)                      |
|     PayPal      | [Click Here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SP738BQTQQYZY) |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/sapphire-project/utilities/commits?author=Favna" title="Code">💻</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-Favna" title="Project Management">📆</a> <a href="https://github.com/sapphire-project/utilities/commits?author=Favna" title="Documentation">📖</a> <a href="https://github.com/sapphire-project/utilities/commits?author=Favna" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/kyranet"><img src="https://avatars0.githubusercontent.com/u/24852502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Antonio Román</b></sub></a><br /><a href="https://github.com/sapphire-project/utilities/commits?author=kyranet" title="Code">💻</a> <a href="#projectManagement-kyranet" title="Project Management">📆</a> <a href="https://github.com/sapphire-project/utilities/pulls?q=is%3Apr+reviewed-by%3Akyranet" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/sapphire-project/utilities/commits?author=kyranet" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/PyroTechniac"><img src="https://avatars2.githubusercontent.com/u/39341355?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gryffon Bellish</b></sub></a><br /><a href="https://github.com/sapphire-project/utilities/commits?author=PyroTechniac" title="Code">💻</a> <a href="https://github.com/sapphire-project/utilities/pulls?q=is%3Apr+reviewed-by%3APyroTechniac" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/sapphire-project/utilities/commits?author=PyroTechniac" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/vladfrangu"><img src="https://avatars3.githubusercontent.com/u/17960496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vlad Frangu</b></sub></a><br /><a href="https://github.com/sapphire-project/utilities/commits?author=vladfrangu" title="Code">💻</a> <a href="https://github.com/sapphire-project/utilities/issues?q=author%3Avladfrangu" title="Bug reports">🐛</a> <a href="https://github.com/sapphire-project/utilities/pulls?q=is%3Apr+reviewed-by%3Avladfrangu" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-vladfrangu" title="User Testing">📓</a> <a href="https://github.com/sapphire-project/utilities/commits?author=vladfrangu" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
