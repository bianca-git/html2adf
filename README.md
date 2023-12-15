# html2adf

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This is a console application that converts HTML to Atlassian Document Format (ADF).


### Tech Stack

<!--
&lt;--- Readme.md Snippet without images Start ---&gt;
## Tech Stack
bianca-git/html2adf is built on the following main stack:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Languages
- [jsdom](https://github.com/jsdom/jsdom) – Headless Browsers

Full tech stack [here](/techstack.md)

&lt;--- Readme.md Snippet without images End ---&gt;

&lt;--- Readme.md Snippet with images Start ---&gt;
## Tech Stack
bianca-git/html2adf is built on the following main stack:

- <img width='25' height='25' src='https://img.stackshare.io/service/1209/javascript.jpeg' alt='JavaScript'/> [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Languages
- <img width='25' height='25' src='https://img.stackshare.io/service/7054/preview.jpeg' alt='jsdom'/> [jsdom](https://github.com/jsdom/jsdom) – Headless Browsers

Full tech stack [here](/techstack.md)

&lt;--- Readme.md Snippet with images End ---&gt;
-->
<div align="center">

#### Tech Stack File
![](https://img.stackshare.io/repo.svg "repo") [bianca-git/html2adf](https://github.com/bianca-git/html2adf)![](https://img.stackshare.io/public_badge.svg "public")
<br/><br/>
|4<br/>Tools used|12/03/23 <br/>Report generated|
|------|------|
</div>

##### <img src='https://img.stackshare.io/languages.svg'/> Languages (1)
<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1209/javascript.jpeg' alt='JavaScript'>
  <br>
  <sub><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

##### <img src='https://img.stackshare.io/devops.svg'/> DevOps (3)
<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1046/git.png' alt='Git'>
  <br>
  <sub><a href="http://git-scm.com/">Git</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/7054/preview.jpeg' alt='jsdom'>
  <br>
  <sub><a href="https://github.com/jsdom/jsdom">jsdom</a></sub>
  <br>
  <sub>v23.0.1</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1120/lejvzrnlpb308aftn31u.png' alt='npm'>
  <br>
  <sub><a href="https://www.npmjs.com/">npm</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

<br/>
<div align='center'>

Generated via [Stack File](https://github.com/marketplace/stack-file)</div>


## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Please note that you need to have Node.js and npm installed on your machine to run this program. If you don't have them installed, you can download them from the [official Node.js website](https://nodejs.org/).

### Installing

To install this program, you would typically follow these steps:

1. **Clone the repository**: If this code is part of a repository, you would first clone it to your local machine using Git. If it's not part of a repository, you would need to create a new directory on your machine and add this file to it.

```bash
mkdir html2adf && git clone https://github.com/bianca-git/html2adf-node ./html2adf
```

2. **Navigate to the directory**: Change your current directory to the directory containing the code.

```bash
cd html2adf
```

3. **Install dependencies**: If there's a `package.json` file in the directory, you would install the dependencies using npm (Node Package Manager). The `commander` package is a dependency of this program.

```bash
npm install
```

4. **Install the CLI program globally**: This will make it callable from any location on your system.

```bash
npm -g install
```

## Usage <a name = "usage"></a>


```bash
html2adf parse "<h1>This is where you put your HTML Input</h1>"

# OR

html2adf file ./MS123456.html
```

```text
Usage: command [options] [command]

Options:
  -h, --help      Display help for command

Commands:
  parse "<html>"    Convert HTML to ADF
  file <file>     Convert HTML to ADF
  help [command]  display help for command

Examples:

  $ htmladf parse "<h1>Hello World</h1>"
  $ htmladf parse "<h1>Hello World</h1>" > output.json

  $ htmladf file ./input.html
  
  $ htmladf --help
```