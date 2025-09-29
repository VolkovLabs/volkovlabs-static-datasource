# Changelog

All notable changes to **Business Input Data Source** will be documented in this file. This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). Thank you for using our plugin! For any questions or contributions, feel free to visit our [GitHub repository](https://github.com/VolkovLabs/business-input).

## [5.1.0] - 2025-09-29

### Changed

- **ESLint Configuration**: Updated linting rules and settings for better code quality and consistency. ([#104](https://github.com/VolkovLabs/business-input/pull/104))
- **LLM Behavior & Plugin Handling**: Improved LLM functionality and added better error handling for cases when a plugin is not found. ([#106](https://github.com/VolkovLabs/business-input/pull/106))
- **E2E Tests**: Adjusted end-to-end tests to resolve compatibility issues with the Main branch. ([#107](https://github.com/VolkovLabs/business-input/pull/107))

## [5.0.0] - 2025-07-21

### Breaking Changes

- Requires Grafana 11 and Grafana 12.

### Features & Enhancements

- Updated to Grafana 12 and dependencies ([#103](https://github.com/VolkovLabs/business-input/pull/103)).

## [4.5.0] - 2024-12-23

### Features & Enhancements

- Added editor for boolean values ([#97](https://github.com/VolkovLabs/business-input/pull/97)).
- Updated end-to-end (E2E) tests ([#98](https://github.com/VolkovLabs/business-input/pull/98)).
- Updated to Grafana 11.4 and dependencies ([#99](https://github.com/VolkovLabs/business-input/pull/99)).

## [4.4.0] - 2024-11-18

### Features & Enhancements

- Updated Autosize Code Editor toolbar ([#91](https://github.com/VolkovLabs/business-input/pull/91)).
- Updated to Grafana 11.3 and dependencies ([#95](https://github.com/VolkovLabs/business-input/pull/95)).

## [4.3.0] - 2024-09-13

### Features & Enhancements

- Updated "Add a row" below the rows list ([#83](https://github.com/VolkovLabs/business-input/pull/83), [#84](https://github.com/VolkovLabs/business-input/pull/84)).
- Added `toDataFrame` helper to code parameters ([#86](https://github.com/VolkovLabs/business-input/pull/86)).
- Updated to Grafana 11.2 and dependencies ([#87](https://github.com/VolkovLabs/business-input/pull/87)).
- Updated code editor from business components ([#89](https://github.com/VolkovLabs/business-input/pull/89)).

## [4.2.0] - 2024-07-24

### Breaking Changes

- Requires Grafana 10.2 and Grafana 11.

### Features & Enhancements

- Updated variable support in Scenes dashboard ([#79](https://github.com/VolkovLabs/business-input/pull/79)).
- Updated to Grafana 11.1 and dependencies ([#80](https://github.com/VolkovLabs/business-input/pull/80)).

## [4.1.0] - 2024-06-25

### Features & Enhancements

- Added support for OpenAI completions ([#73](https://github.com/VolkovLabs/business-input/pull/73)).
- Updated E2E workflow to use Docker ([#75](https://github.com/VolkovLabs/business-input/pull/75), [#77](https://github.com/VolkovLabs/business-input/pull/77)).
- Updated plugin logo ([#76](https://github.com/VolkovLabs/business-input/pull/76)).

## [4.0.0] - 2024-06-12

### Breaking Changes

- Requires Grafana 10 and Grafana 11.

### Features & Enhancements

- Updated name to **Business Input Data Source** ([#268](https://github.com/VolkovLabs/business-input/pull/268)).
- Added plugin E2E tests and removed Cypress ([#66](https://github.com/VolkovLabs/business-input/pull/66)).
- Prepared for Grafana 11 ([#67](https://github.com/VolkovLabs/business-input/pull/67)).
- Updated to Grafana 11 and dependencies ([#69](https://github.com/VolkovLabs/business-input/pull/69)).
- Added support for variables in code editor ([#70](https://github.com/VolkovLabs/business-input/pull/70)).

## [3.1.1] - 2024-03-03

### Bug Fixes

- Fixed issue with reading property of undefined for empty fields ([#63](https://github.com/VolkovLabs/business-input/pull/63)).

## [3.1.0] - 2024-02-21

### Breaking Changes

- Requires Grafana 9.2 and Grafana 10.

### Features & Enhancements

- Increased test coverage ([#47](https://github.com/VolkovLabs/business-input/pull/47)).
- Updated ESLint configuration and refactoring ([#53](https://github.com/VolkovLabs/business-input/pull/53)).
- Added drag-and-drop for rows and fields ([#54](https://github.com/VolkovLabs/business-input/pull/54)).
- Updated custom code when switching value editor from manual to JS ([#59](https://github.com/VolkovLabs/business-input/pull/59)).
- Added Variable Editor with Fields and JavaScript ([#58](https://github.com/VolkovLabs/business-input/pull/58)).
- Added Collapse/Expand All for Fields and Values ([#57](https://github.com/VolkovLabs/business-input/pull/57)).
- Updated to Grafana 10.3.3 ([#60](https://github.com/VolkovLabs/business-input/pull/60)).

## [3.0.0] - 2023-06-28

### Breaking Changes

- Requires Grafana 9 and Grafana 10.

### Features & Enhancements

- Refactored Types and Fields Editor ([#37](https://github.com/VolkovLabs/business-input/pull/37)).
- Updated tests with `testing-library/react` ([#40](https://github.com/VolkovLabs/business-input/pull/40)).
- Updated to Grafana 10.0.0 ([#41](https://github.com/VolkovLabs/business-input/pull/41), [#46](https://github.com/VolkovLabs/business-input/pull/46)).
- Migrated to Plugin Tools 1.5.2 ([#42](https://github.com/VolkovLabs/business-input/pull/42)).
- Updated to Node 18 and npm ([#42](https://github.com/VolkovLabs/business-input/pull/42)).
- Added E2E Cypress testing ([#43](https://github.com/VolkovLabs/business-input/pull/43)).
- Added JavaScript Values Editor ([#44](https://github.com/VolkovLabs/business-input/pull/44)).
- Removed Grafana 8.5 support ([#46](https://github.com/VolkovLabs/business-input/pull/46)).

## [2.2.0] - 2023-03-27

### Features & Enhancements

- Updated CI and Release workflows ([#33](https://github.com/VolkovLabs/business-input/pull/33)).
- Updated to Grafana 9.4.7 ([#34](https://github.com/VolkovLabs/business-input/pull/34)).
- Updated README with documentation ([#35](https://github.com/VolkovLabs/business-input/pull/35)).
- Added Scoped Variables for variable replacement ([#35](https://github.com/VolkovLabs/business-input/pull/35)).

## [2.1.0] - 2022-12-29

### Breaking Changes

- Refactoring may introduce breaking changes. Please test before upgrading in production.

### Features & Enhancements

- Updated CI to upload signed artifacts ([#23](https://github.com/VolkovLabs/business-input/pull/23)).
- Added "Static data source for Grafana | Mimic any data source | Tutorial and examples" video in README ([#23](https://github.com/VolkovLabs/business-input/pull/23)).
- Updated to Grafana 9.3.2 ([#24](https://github.com/VolkovLabs/business-input/pull/24)).
- Refactored and improved test coverage for data source ([#25](https://github.com/VolkovLabs/business-input/pull/25)).
- Updated Field and Values Editors to labels and fields structure ([#27](https://github.com/VolkovLabs/business-input/pull/27)).
- Removed Frame Reducer to simplify code ([#28](https://github.com/VolkovLabs/business-input/pull/28)).
- Refactored frame and field utilities ([#29](https://github.com/VolkovLabs/business-input/pull/29)).
- Added Date Time Picker, Number, and Text Area Inputs ([#30](https://github.com/VolkovLabs/business-input/pull/30)).

## [2.0.0] - 2022-11-01

### Features & Enhancements

- Maintained by Volkov Labs ([#19](https://github.com/VolkovLabs/business-input/pull/19)).
- Updated based on Volkov Labs Panel Template ([#19](https://github.com/VolkovLabs/business-input/pull/19)).
- Updated CI to Node 16 and synchronized with Release workflow ([#20](https://github.com/VolkovLabs/business-input/pull/20)).
- Updated to Grafana 9.2.2 ([#21](https://github.com/VolkovLabs/business-input/pull/21)).
- Refactored components and updated theme ([#22](https://github.com/VolkovLabs/business-input/pull/22)).

## [1.4.4] - 2022-08-28

### Features & Enhancements

- Updated to Grafana 9.

## [1.4.3] - 2021-09-03

### Features & Enhancements

- Updated dependencies.

### Bug Fixes

- Fixed an issue where fields and rows were added twice in development.

## [1.4.2] - 2021-07-08

### Features & Enhancements

- Updated metadata, docs, and dependencies.

### Bug Fixes

- Fixed an issue where frame changes were not synced correctly.

## [1.4.1] - 2021-06-12

### Features & Enhancements

- Minor docs and metadata updates.
- Changed from `useState` to `useReducer` for manipulating form model.
- Replaced custom input component with `Input` from `@grafana/ui`.

## [1.4.0] - 2021-06-10

### Features & Enhancements

- Added support for annotations.
- Added button for duplicating value rows.
- Added option to set preferred visualization type for Explore.

## [1.3.1] - 2021-01-29

### Bug Fixes

- Set reference ID on data frames.

## [1.3.0] - 2021-01-29

### Features & Enhancements

- Updated to new form styles. Bumps the minimum required Grafana version to 7.3.

## [1.2.1] - 2020-11-27

### Features & Enhancements

- Updated `@grafana` dependencies from `^7.0.0` to `^7.3.0`.
- Improved release process using the new [GitHub workflows](https://github.com/grafana/plugin-workflows) for Grafana plugins.
