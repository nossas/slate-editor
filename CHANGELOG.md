# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.4.1"></a>
## [2.4.1](https://github.com/nossas/slate-editor/compare/v2.4.0...v2.4.1) (2017-05-18)


### Bug Fixes

* **build:** generate build ([55e273d](https://github.com/nossas/slate-editor/commit/55e273d))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/nossas/slate-editor/compare/v2.3.1...v2.4.0) (2017-05-18)


### Features

* **image-plugin:** image data management via modal [#17](https://github.com/nossas/slate-editor/issues/17) ([b63843f](https://github.com/nossas/slate-editor/commit/b63843f))
* **packages:** add standard-version [#17](https://github.com/nossas/slate-editor/issues/17) ([0570357](https://github.com/nossas/slate-editor/commit/0570357))



# Changelog

### 2.3.1 (May 09, 2017)

- Upgrade `react-fontawesome` to v1.6.1 #18

### 2.3.0 (Apr 01, 2017)

- Fix image width when grid column be too small
- Make columns of grid plugin with the same width

### 2.2.8 (Mar 31, 2017)

- Identify the instance of editor with an uid

### 2.2.7 (Mar 31, 2017)

- Allow image upload multiple times

### 2.2.6 (Mar 21, 2017)

- Upgrade slate to v0.19.3
- Add strategy to render a <td /> tag when block type is grid-cell

### 2.2.4 (Mar 20, 2017)

- Fix color plugin colorpicker draggable bar style

### 2.2.3 (Mar 20, 2017)

- Replace process.env.BROWSER to exenv.canUseDOM

### 2.2.1 (Feb 24, 2017)

- Prepare project to publish on npm

### 2.2.0 (Feb 24, 2017)

- Make ImagePlugin signingUrl injectable
- Use react-s3-uploader package to upload images from slate-editor
- Make editor's initial state can be injected
- Move SlateContent component rest props to Editor
- Make SlateEditor components stylish

### 2.1.0 (Feb 21, 2017)

- Add environment variable check to load assets files only on browser to SSR works

### 2.0.0 (Feb 20, 2017)

- Change the way that the plugins are exposed via api
- Add [slate](https://github.com/ianstormtaylor/slate) as a peer dependency

### 1.0.0 (Dec 12, 2016)

- Initial stable version
