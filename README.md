# JSLingo

JSLingo is a Persian-first, interactive JavaScript learning lab built as a small static web app. It turns a long learning plan into a guided path with short lessons, quizzes, code exercises, networking fundamentals, hands-on project notes, and security-focused practice.

## What is included

- A progressive JavaScript lesson path with local progress, XP, and streak stats.
- Network and web-security tracks for developer and authorized security learning.
- Algorithm challenges and a guided REST API project track.
- A responsive dark interface with no frontend framework or runtime dependency.
- A local playground that executes snippets in a short-lived Web Worker and stops runaway code.
- A minimal Nginx/Docker setup for reproducible local hosting.

## Run locally

Because the browser loads several JavaScript data files, serve the directory over HTTP instead of opening `index.html` directly:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Run with Docker

```bash
docker compose up --build
```

Then open [http://localhost:4200](http://localhost:4200). To stop it:

```bash
docker compose down
```

## Project layout

| File | Purpose |
| --- | --- |
| `index.html` | App shell and accessible navigation |
| `style.css` | Responsive visual system |
| `app.js` | State, navigation, progress, lessons, and playground |
| `lessons-data.js` | JavaScript and security lesson content |
| `network-data.js` | Networking lesson content |
| `challenges-data.js` | General coding challenges |
| `bugbounty-challenges.js` | Authorized security practice challenges |
| `project-data.js` | Guided REST API project notes |
| `Dockerfile` / `nginx.conf` | Static production-style container |

## Content and safety note

The security sections are educational examples intended for systems you own or are explicitly authorized to test. Domains, credentials, tokens, and payloads in the lesson material are synthetic examples; do not reuse them against real targets without permission. The app itself has no backend and stores learning progress only in the browser's `localStorage`.

## Verification

The project is dependency-free. A basic JavaScript syntax check can be run with:

```bash
for file in *.js; do node --check "$file"; done
```

## License

Released under the MIT License. See `LICENSE`.
