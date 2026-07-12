# Samuel Ofori-Okyere — Portfolio

A clean, responsive, single-page portfolio site ready to host on GitHub Pages.

## Project Structure

- `index.html` - The main page structure and content.
- `style.css` - Custom styling, layout grid, typography, and responsive aesthetics.
- `script.js` - Dynamic animations (e.g. metrics counting) and ledger interaction.
- `Samuel_Ofori-Okyere_CV.pdf` - The downloadable résumé PDF.

## Deploy in 3 steps

1. Create a new GitHub repo (e.g., `samuel-portfolio` or `SammyToro.github.io`).
2. Push the files (`index.html`, `style.css`, `script.js`, `Samuel_Ofori-Okyere_CV.pdf`) to the repo root.
3. In the repo, go to **Settings → Pages → Build and deployment → Source**, select **Deploy from a branch**, pick `main` (or default branch) and `/ (root)`, and click save.
   - If your repo is named `SammyToro.github.io`, it will be live at `https://SammyToro.github.io/`
   - Otherwise, it will be live at `https://SammyToro.github.io/<repo-name>/`

## Customization

- **Resume File**: Swap `Samuel_Ofori-Okyere_CV.pdf` for an updated resume anytime — the "Download résumé" button links to it by filename, so just keep the filename the same or update the `href` in `index.html`.
- **Text & Experience**: Edit the text in `index.html` directly as your experience and skill set grow.

## Design Highlights

- **Lightweight**: No build tools, framework bloat, or external UI library dependencies.
- **Micro-Animations**: Features smooth accordion expand/collapse transitions on the experience ledger and dynamic count-up statistics.
- **Accessibility**: Built with semantic HTML, accessibility tags, and respects `prefers-reduced-motion`.
