# ТеплоГид · Insulation materials guide

A Russian-language informational frontend covering insulation materials, their
characteristics, environmental considerations, brand comparisons, and sources.
The project demonstrates a component-based React content site with an animated,
responsive reading experience.

**Status:** frontend source. Material specifications and comparison content require
independent domain verification before use in a construction decision. Hosted availability
and the production build were not verified in this documentation-only pass.

## Implementation highlights

- React 18 with a Vite 6 development / build setup.
- Reusable content sections for material types, characteristics, comparisons, and sources.
- Responsive navigation with local menu and scroll state.
- Framer Motion for section and interface animation.
- Local illustration assets and a shared stylesheet.

## Source map

| Path | Responsibility |
| --- | --- |
| [index.html](index.html) | Vite HTML entrypoint and document metadata |
| [src/main.jsx](src/main.jsx) | React application bootstrap |
| [src/App.jsx](src/App.jsx) | Navigation and composition of content sections |
| [src/components/](src/components/) | Hero, material, comparison, source, and footer components |
| [src/assets/](src/assets/) | Local illustrations referenced by the components |
| [src/index.css](src/index.css) | Shared visual system and responsive styling |
| [vite.config.js](vite.config.js) | Vite React plugin configuration |
| [package.json](package.json) / [package-lock.json](package-lock.json) | Scripts and locked dependency tree |

## Local development

Use Node.js 22 and npm. From the repository root:

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`.
The dependency installation uses the committed lockfile.

## Build and preview

```sh
npm run build
npm run preview -- --host 127.0.0.1
```

The build script runs Vite and writes static output to `dist/`. Preview serves that output
locally, normally on port 4173. The repository does not include a deployment workflow;
a host configuration and a production smoke test are separate work.

## Content maintenance

Add or revise a section in `src/components/`, compose it in `App.jsx`, and keep navigation
anchors aligned with the section IDs. Preserve the Russian product text when modifying
layout, and update `Sources.jsx` alongside factual material or brand-comparison changes.

The comparison sections present editorial content from the source, not certified measurements
or a substitute for an engineering assessment. Source links and material claims were not
revalidated during this repository presentation pass.

## Verification and reuse

Checks performed here cover the declared npm scripts, tracked entrypoints, and README links.
No test or lint script is currently declared in `package.json`; this pass did not install
dependencies or execute the build. A broader quality pass should add component / navigation
coverage and check the interface on narrow and wide viewports.

The repository has no license file. Third-party brand names and local illustrations retain
any applicable rights; public source access does not imply separate asset reuse permission.
