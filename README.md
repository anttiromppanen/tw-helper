# CLI Helper For Tailwind CSS [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/anttiromppanen/tw-helper/jest.yml)
![Codecov](https://img.shields.io/codecov/c/github/anttiromppanen/tw-helper)
![GitHub last commit](https://img.shields.io/github/last-commit/anttiromppanen/tw-helper)

## Contents
* [Motivation](#motivation)
* [Usage](#usage)
* [Commands](#commands)
  * [colors Command](#colors-command)
  * [breakpoints Command](#breakpoints-command)
  * [css Command](#css-command)

## Motivation

How many times you forgot what the helper classes for line-height were, or what the default breakpoints for Tailwind CSS are? Tw-helper is a command-line tool that provides fast, and easy to use commands retrieving information on Tailwind CSS, so you don't have to necessarily go browse documentation and lose focus!

## Usage

```javascript
npm install tw-helper --save-dev
```

```javascript
npx tw-helper
```

## Commands

### `colors` Command

> **_NOTE:_**  24-bit True color for command line is required for the colors to show up correctly.

The colors command allows you to list the colors on the Tailwind CSS project.

**Syntax:**

```javascript
tw-helper colors [options]
```

**Options:**

* -d, --default:

  Use this flag to list the default color palette from Tailwind CSS.

  Example:

  ```javascript
  tw-helper colors --default
  ```

  This command will print the default set of colors provided by Tailwind CSS.

* -c, --config \<file>:

  Use this flag to provide a custom Tailwind CSS configuration file. The file should specify custom colors used in your project. This flag is only required, if the Tailwind CSS configuration file is renamed, or relocated from the project root.

  Example:

  ```javascript
  tw-helper colors --config "/path/to/your-config.js"
  ```

  This command will print the colors defined in the specified configuration file.

<br /> **Example output:**

```javascript
tw-helper colors
```

<br /> ![colors command output](https://github.com/anttiromppanen/tw-helper/blob/main/static/img/colors.png)

<br /> **Example output:**

```javascript
tw-helper colors -d
```

<br /> ![colors --default command output](https://github.com/anttiromppanen/tw-helper/blob/main/static/img/colors-default.png)

### `breakpoints` Command

The breakpoints command allows you to list the breakpoints on the Tailwind CSS project.

* -c, --config \<file>:

  Use this flag to provide a custom Tailwind CSS configuration file. The file should specify custom colors used in your project. This flag is only required, if the Tailwind CSS configuration file is renamed, or relocated from the project root.

  Example:

  ```javascript
  tw-helper breakpoints --config "/path/to/your-config.js"
  ```

<br /> **Example output:**

```javascript
tw-helper breakpoints
```

<br /> ![breakpoints command output](https://github.com/anttiromppanen/tw-helper/blob/main/static/img/breakpoints.png) <br />

### `css` Command

The css command allows you to list the Tailwind CSS helper classes associated for the provided css property. Also provides a link to the Tailwind CSS documentation for the given property.

**Syntax:**

```javascript
tw-helper css <property>
```

**Property:**

* Css property to list the Tailwind CSS classes for.

<br /> **Example output:**

```javascript
tw-helper css opacity
```

<br /> ![css command output](https://github.com/anttiromppanen/tw-helper/blob/main/static/img/css.png)

## Contributing

All contributions are welcome, please read [how to contribute](CONTRIBUTING.md) fist.
