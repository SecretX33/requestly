<p align="center">
  <a rel="noreferrer noopener" href="https://requestly.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/requestly/requestly/blob/master/app/src/assets/img/brand/rq_logo_full.svg?raw=true">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/requestly/requestly/blob/master/app/src/assets/img/brand/rq_logo_full_light_mode.svg?raw=true">
        <img alt="Requestly Logo" src="https://github.com/requestly/requestly/blob/master/app/src/assets/img/brand/rq_logo_full.svg?raw=true" width="40%">
      </picture>
  </a>
</p>

<p align="center">
  <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/requestly/requestly"/>
  <a target="_blank" href="https://chrome.google.com/webstore/detail/redirect-url-modify-heade/mdnleldcmiljblolnjhpnblkcekpdkpa/">
    <img alt="Chrome Web Store Rating" src="https://img.shields.io/chrome-web-store/rating/mdnleldcmiljblolnjhpnblkcekpdkpa" />
  </a>
  <a target="_blank" href="https://chrome.google.com/webstore/detail/redirect-url-modify-heade/mdnleldcmiljblolnjhpnblkcekpdkpa/">
    <img alt="Chrome Web Store Reviews" src="https://img.shields.io/chrome-web-store/rating-count/mdnleldcmiljblolnjhpnblkcekpdkpa?label=reviews" />
  </a>
  <a target="_blank" href="https://chrome.google.com/webstore/detail/redirect-url-modify-heade/mdnleldcmiljblolnjhpnblkcekpdkpa/">
    <img alt="Chrome Web Store Downloads" src="https://img.shields.io/chrome-web-store/users/mdnleldcmiljblolnjhpnblkcekpdkpa?label=downloads" />
  </a>
    <a target="_blank" href="https://status.requestly.io">
    <img alt="Status badge" src="https://uptime.betterstack.com/status-badges/v2/monitor/13j20.svg" />
  </a>
</p>

<h3 align="center">⚡ HTTP Interceptor for browsers </h2>

**Requestly was built to save developers time by intercepting and modifying HTTP Requests. It has now developed into an open-source alternative to Charles Proxy and Telerik Fiddler that works directly in browsers without VPN and proxy Issues. It is used by more than 200,000+ front-end developers and 11,000+ companies worldwide.**



## 🏡 Getting Started
- [🚀 What is Requestly?](#-what-is-requestly)
- [✨ Features](#-features)
    - [HTTP Rules (Intercept & Modify HTTPs Requests)](#-http-rules-intercept--modify-https-requests)
    - [API Client](#-api-client)
    - [Mock Server (Create API Mocks in seconds)](#-mock-server-create-api-mocks-in-seconds)
    - [Sessions for faster debugging](#-sessions)
- [📕 Documentation](#-documentation)
- [👩‍💻 Development](#-development)
- [🙏 Contributing](#-contributing)
- [🎯 Our Mission](#-our-mission)

## 🚀 What is Requestly

Requestly is an Open-Source platform for front-end developers with essential tooling & integrations that helps them write, test & debug their code 10x faster. Requestly reduces dependency on backend devs and environments for development & testing needs. 

Using Requestly, devs can create mock, test, validate & override API responses, modify request & response headers, set up redirects (Map local, Map remote), and use Requestly sessions for faster debugging.

## ✨ Features

### 👉 HTTP Rules (Intercept & Modify HTTPs Requests)
Intercept & Modify HTTPs requests & responses from browsers & mobile apps. 
- 👉 Use the browser extension for capturing & modifying traffic from browsers
- 👉 Use the desktop app for capturing & modifying traffic from mobile apps & other desktop apps.

Different Modifications supported
- Rewriting URLs (Map Local & Map Remote) e.g.
    - Change Hostname, QueryParams, etc in the URL
    - Redirect traffic from one environment to another (e.g. production to dev)
    - Swap Tag Manager scripts from production to staging/dev environment
- Modify HTTP Request & Response Headers
- Modify API Request & Response body
- Throttles & Blocking of Requests
- Inject scripts on web pages

<br/>

<p align="center">
  <a target="_blank" href="https://requestly.com/products/web-debugger">
    <img width="60%" alt="intercept_ _modify_https_requests_-_1280x800_5" src="https://github.com/requestly/requestly/assets/3108399/c69f0935-40d5-4b91-bd50-102696c55560">
  </a>
</p>

### 👉 API Client

Requestly offers a minimal, lightweight API client that works directly in the browser. It can help you 
- Import cURL requests,
- Send new requests, and
- Quickly test API responses.
- Integration with Mock Server to clone an API endpoint with the same response
- Integration with Modify Response Rule to override the response body

<p align="center">
  <a target="_blank" href="https://requestly.com/products/api-client">
    <img width="60%" alt="store_asset_-_api_client_-_1280x800_8" src="https://github.com/requestly/requestly/assets/3108399/d04e3116-665c-4e60-8a50-4ce50326c900">
  </a>
</p>

### 👉 Mock Server (Create API Mocks in seconds)

Mock Server helps you quickly create API mocks. Especially helpful when APIs don't exist and you have to build a feature, just define the response you need and get an endpoint to be used in your code.

<p align="center">
  <a target="_blank" href="https://requestly.com/products/mock-server">
    <img width="60%" alt="mock_server_-_1280x800_4" src="https://github.com/requestly/requestly/assets/3108399/337b8251-3b62-4f87-825f-f3166417c7d5">
  </a>
</p>

### 👉 Sessions

Collaborate with other teammates and get Requestly sessions that contain video, console logs, network logs, and env details for faster troubleshooting.

<p align="center">
  <a target="_blank" href="https://requestly.com/products/session-book">
  <img width="60%" alt="session_-_1280x800_5" src="https://github.com/requestly/requestly/assets/3108399/41375ad4-021e-490e-b488-1967cade727c">
  </a>
</p>


## 📕 Documentation

Please find our [documentation here](https://docs.requestly.com/). Our docs can help with
- [Getting Started](https://docs.requestly.com/)
- Product Documentation
- FAQs
- Troubleshooting
- [Security & Privacy](https://docs.requestly.com/security-privacy/)

## 👩‍💻 Development

This repository contains the source code for Browser extension and UI application which make up the core of Requestly.
Please follow the [Getting Started Guide](./getting-started.md) to get to know about the development process in this repository.

Start working on individual modules:

- [Browser extension](./browser-extension)
- [UI application](./app)
- [Desktop application](https://github.com/requestly/requestly-desktop-app) (Electron-based application for MacOS, Linux, Windows)
- [Web SDK](https://github.com/requestly/requestly-web-sdk) (facilitates SessionBook)
- [Mock Server](https://github.com/requestly/requestly-mock-server)
- [Backend](https://github.com/requestly/requestly-backend)

## 🙏 Contributing

Currently, while Requestly is open source, we are not accepting pull requests. As a startup with a small team, our focus is on moving quickly and we currently lack the resources and documentation needed to actively support an open-source community. This will probably change in the future.

If you are still interested, read our [contributing guide](./CONTRIBUTING.md) to learn about how to propose bugfixes and improvements, and how the development process works.

## 🎯 Our Mission

Our mission is to help developers ship web and mobile apps faster and with confidence by giving them the tools to debug & resolve issues without external dependency.

## Contributors

[![All Contributors](https://img.shields.io/github/all-contributors/requestly/requestly?color=ee8449&style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://sagarsoni.dev/"><img src="https://avatars.githubusercontent.com/u/29792913?v=4?s=100" width="100px;" alt="Sagar Soni"/><br /><sub><b>Sagar Soni</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=sagarsoni7" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://sahil865gupta.github.io"><img src="https://avatars.githubusercontent.com/u/16779465?v=4?s=100" width="100px;" alt="Sahil Gupta"/><br /><sub><b>Sahil Gupta</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=wrongsahil" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lazyvab"><img src="https://avatars.githubusercontent.com/u/6367566?v=4?s=100" width="100px;" alt="Vaibhav Nigam"/><br /><sub><b>Vaibhav Nigam</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=lazyvab" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/RuntimeTerror10"><img src="https://avatars.githubusercontent.com/u/53986600?v=4?s=100" width="100px;" alt="Parth Bhardwaj"/><br /><sub><b>Parth Bhardwaj</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=RuntimeTerror10" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://linkedin.com/in/rohanmathur91"><img src="https://avatars.githubusercontent.com/u/61556757?v=4?s=100" width="100px;" alt="Rohan Mathur"/><br /><sub><b>Rohan Mathur</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=rohanmathur91" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nafees87n"><img src="https://avatars.githubusercontent.com/u/56021937?v=4?s=100" width="100px;" alt="Nafees Nehar"/><br /><sub><b>Nafees Nehar</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=nafees87n" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nsrCodes"><img src="https://avatars.githubusercontent.com/u/57226514?v=4?s=100" width="100px;" alt="Navdeep Singh Rathore"/><br /><sub><b>Navdeep Singh Rathore</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=nsrCodes" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://requestly.com"><img src="https://avatars.githubusercontent.com/u/3108399?v=4?s=100" width="100px;" alt="Sachin Jain"/><br /><sub><b>Sachin Jain</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=sachinjain024" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ashishsangle707"><img src="https://avatars.githubusercontent.com/u/124448580?v=4?s=100" width="100px;" alt="ashishsangle707"/><br /><sub><b>ashishsangle707</b></sub></a><br /><a href="#projectManagement-ashishsangle707" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/echo-sg"><img src="https://avatars.githubusercontent.com/u/56088056?v=4?s=100" width="100px;" alt="Shrey Gupta"/><br /><sub><b>Shrey Gupta</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=echo-sg" title="Code">💻</a> <a href="#projectManagement-echo-sg" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ncharanaraj"><img src="https://avatars.githubusercontent.com/u/43924299?v=4?s=100" width="100px;" alt="Charanaraj N"/><br /><sub><b>Charanaraj N</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=ncharanaraj" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Muhammad-Daniyal-Jawad1"><img src="https://avatars.githubusercontent.com/u/130592856?v=4?s=100" width="100px;" alt="Muhammad-Daniyal-Jawad1"/><br /><sub><b>Muhammad-Daniyal-Jawad1</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=Muhammad-Daniyal-Jawad1" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://piyush-web-app.web.app/"><img src="https://avatars.githubusercontent.com/u/43876655?v=4?s=100" width="100px;" alt="PIYUSH NEGI"/><br /><sub><b>PIYUSH NEGI</b></sub></a><br /><a href="https://github.com/requestly/requestly/commits?author=npiyush97" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Special Mentions
A big shoutout to these amazing Open Source projects that have helped make Requestly possible.
- [rrweb](https://github.com/rrweb-io/rrweb)
