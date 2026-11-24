# team-3-d2d

FWDP 2100 Team Project 2 — **Lando** real estate website (Option 2), built from the Figma mockup.

- **Figma (accessible copy):** https://www.figma.com/design/FHp9lMcArRBUBgGZnMfRI1 — start with the *Style Guide* page
- **Deploy folder:** `team-3-d2d` on each member's hosting

## Compile Sass

From the project folder in Terminal:

```
sass --watch scss:styles
```

Edit the `.scss` files only. The `styles/` folder is generated and ignored by Git — never edit it.

## Branches

- `main` — protected, matches the submitted zip. Only updated by pull request from `dev`.
- `dev` — our working main. Branch from it, merge back into it with a pull request.
- Feature branches, named after the task, not the person: `feature/header-nav`, `feature/home-hero`, `feature/property-details`, …

## Workflow

1. `git checkout dev` and `git pull` before you start.
2. `git checkout -b feature/your-task`
3. Commit often with clear messages, e.g. `Add hero heading and gradient`.
4. Push your branch and open a pull request into `dev`.
5. One teammate reviews, then merge.

## Rules (from the Style Guide)

- Mobile first, 320px to 1920px.
- Text is 16px (1rem) minimum.
- Only use colour pairings from the Style Guide (WCAG AAA).
- Every form field has a visible label. Visible focus on every link, button and field.
- Main menu everywhere: About, Listing, Blog, Contact. The footer adds the address.
