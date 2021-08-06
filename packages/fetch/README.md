<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire-banner.png)

# @sapphire/fetch

**Tiny wrapper around node-fetch for improved TypeScript and data type support**

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/sapphiredev/utilities/branch/main/graph/badge.svg?token=OEGIV6RFDO)](https://codecov.io/gh/sapphiredev/utilities)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/fetch?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/fetch)
[![npm](https://img.shields.io/npm/v/@sapphire/fetch?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/fetch)
[![Depfu](https://badges.depfu.com/badges/ec42ff3d6bae55eee1de4749960852b3/count.svg)](https://depfu.com/github/sapphiredev/utilities?project_id=15195)

</div>

**Table of Contents**

-   [@sapphire/fetch](#sapphirefetch)
    -   [Description](#description)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [`GET`ting JSON data](#getting-json-data)
        -   [`GET`ting Buffer data (images, etc.)](#getting-buffer-data-images-etc)
        -   [`POST`ing JSON data](#posting-json-data)
    -   [API Documentation](#api-documentation)
    -   [Buy us some doughnuts](#buy-us-some-doughnuts)
    -   [Contributors ✨](#contributors-%E2%9C%A8)

## Description

[cross-fetch] is already a great library for making API calls, but because it focuses solely on bringing the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to Node.js, it doesn't provide specific error messages and handling for different return types (JSON, Buffer, plain text, etc). This is where `@sapphire/fetch` comes in. The syntax is more restrictive than that of [cross-fetch], but that makes it consistent and easier to use in TypeScript.

## Features

-   Written in TypeScript
-   Fully tested
-   Exported `const enum` for the common return data types.
-   Throws distinctive errors when the API returns a "not ok" status code to make them easier to understand.
-   Enforces casting the return type when requesting JSON data, to ensure your return data is strictly typed.
-   Uses [cross-fetch] so this package can be used in NodeJS (where it uses [node-fetch]) and browser (where it uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))

## Installation

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/fetch
```

## Usage

**Note:** While this section uses `import`, it maps 1:1 with CommonJS' require syntax. For example, `import { fetch } from '@sapphire/fetch'` is the same as `const { fetch } = require('@sapphire/fetch')`.

**Note**: `fetch` can also be imported as a default import: `import fetch from '@sapphire/fetch'`.

### `GET`ting JSON data

```ts
// Import the fetch function
import { fetch, FetchResultTypes } from '@sapphire/fetch';

interface JsonPlaceholderResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

// Fetch the data. No need to call `.json()` after making the request!
const data = await fetch<JsonPlaceholderResponse>('https://jsonplaceholder.typicode.com/todos/1', FetchResultTypes.JSON);

// Do something with the data
console.log(data.userId);
```

### `GET`ting Buffer data (images, etc.)

```ts
// Import the fetch function
import { fetch, FetchResultTypes } from '@sapphire/fetch';

// Fetch the data. No need to call `.buffer()` after making the request!
const sapphireLogo = await fetch('https://github.com/sapphiredev.png', FetchResultTypes.Buffer);

// sapphireLogo is the `Buffer` of the image
console.log(sapphireLogo);
```

### `POST`ing JSON data

```ts
// Import the fetch function
import { fetch, FetchResultTypes, FetchMethods } from '@sapphire/fetch';

// Fetch the data. No need to call `.json()` after making the request!
const responseData = await fetch(
	'https://jsonplaceholder.typicode.com/todos',
	{
		method: FetchMethods.Post,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: 'John Doe'
		})
	},
	FetchResultTypes.JSON
);

// Do something with the response data
console.log(responseData);
```

---

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://sapphiredev.github.io/utilities/modules/_sapphire_fetch.html).

## Buy us some doughnuts

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, PayPal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                       Address                       |
| :-------------: | :-------------------------------------------------: |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
|      Ko-fi      |      [Click Here](https://sapphirejs.dev/kofi)      |
|     Patreon     |    [Click Here](https://sapphirejs.dev/patreon)     |
|     PayPal      |     [Click Here](https://sapphirejs.dev/paypal)     |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Favna" title="Code">💻</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-Favna" title="Project Management">📆</a> <a href="https://github.com/sapphiredev/utilities/commits?author=Favna" title="Documentation">📖</a> <a href="https://github.com/sapphiredev/utilities/commits?author=Favna" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/kyranet"><img src="https://avatars0.githubusercontent.com/u/24852502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Antonio Román</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=kyranet" title="Code">💻</a> <a href="#projectManagement-kyranet" title="Project Management">📆</a> <a href="https://github.com/sapphiredev/utilities/pulls?q=is%3Apr+reviewed-by%3Akyranet" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/sapphiredev/utilities/commits?author=kyranet" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/PyroTechniac"><img src="https://avatars2.githubusercontent.com/u/39341355?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gryffon Bellish</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=PyroTechniac" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/pulls?q=is%3Apr+reviewed-by%3APyroTechniac" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/sapphiredev/utilities/commits?author=PyroTechniac" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/vladfrangu"><img src="https://avatars3.githubusercontent.com/u/17960496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vlad Frangu</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=vladfrangu" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/issues?q=author%3Avladfrangu" title="Bug reports">🐛</a> <a href="https://github.com/sapphiredev/utilities/pulls?q=is%3Apr+reviewed-by%3Avladfrangu" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-vladfrangu" title="User Testing">📓</a> <a href="https://github.com/sapphiredev/utilities/commits?author=vladfrangu" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Stitch07"><img src="https://avatars0.githubusercontent.com/u/29275227?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stitch07</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Stitch07" title="Code">💻</a> <a href="#projectManagement-Stitch07" title="Project Management">📆</a> <a href="https://github.com/sapphiredev/utilities/commits?author=Stitch07" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars3.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars0.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Nytelife26"><img src="https://avatars1.githubusercontent.com/u/22531310?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler J Russell</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Nytelife26" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Alcremie"><img src="https://avatars0.githubusercontent.com/u/54785334?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ivan Lieder</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Alcremie" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/issues?q=author%3AAlcremie" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/RealShadowNova"><img src="https://avatars3.githubusercontent.com/u/46537907?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hezekiah Hendry</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=RealShadowNova" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Stitch07"><img src="https://avatars.githubusercontent.com/u/29275227?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stitch07</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Stitch07" title="Code">💻</a> <a href="https://github.com/sapphiredev/utilities/commits?author=Stitch07" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Vetlix"><img src="https://avatars.githubusercontent.com/u/31412314?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vetlix</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=Vetlix" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ethamitc"><img src="https://avatars.githubusercontent.com/u/27776796?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ethan Mitchell</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=ethamitc" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/noftaly"><img src="https://avatars.githubusercontent.com/u/34779161?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Elliot</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=noftaly" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://jurien.dev"><img src="https://avatars.githubusercontent.com/u/5418114?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jurien Hamaker</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=jurienhamaker" title="Code">💻</a></td>
    <td align="center"><a href="https://fanoulis.dev/"><img src="https://avatars.githubusercontent.com/u/38255093?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Charalampos Fanoulis</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=cfanoulis" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#maintenance-dependabot[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://kaname.netlify.app/"><img src="https://avatars.githubusercontent.com/u/56084970?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kaname</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/commits?author=kaname-png" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nandhagk"><img src="https://avatars.githubusercontent.com/u/62976649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nandhagk</b></sub></a><br /><a href="https://github.com/sapphiredev/utilities/issues?q=author%3Anandhagk" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- LINKS -->

[node-fetch]: https://github.com/node-fetch/node-fetch
[cross-fetch]: https://github.com/lquixada/cross-fetch
