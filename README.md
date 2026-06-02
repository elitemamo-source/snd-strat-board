# SnD Strat Board

Interactive Search & Destroy strat board for MW3 6v6. All 9 maps built in
(Karachi, Skidrow, Sub Base, Highrise, Invasion, Shoot House, Mercado Las Almas, Rio, Farm 18).
Place named players, set their view cones (facing + width + range), tag Up/Down levels,
sketch arrows/notes, and it auto-saves on your device. Mobile / touch friendly.

## Run locally
```
npm start
```
Then open http://localhost:3000

(There are no dependencies — `server.js` is plain Node.)

## Deploy on Railway
1. Push this folder to a new GitHub repository.
2. In Railway: **New Project → Deploy from GitHub repo** → pick this repo.
3. Railway auto-detects Node, runs `npm start`, and serves the app.
4. Open **Settings → Networking → Generate Domain** to get a public URL.
5. Open that URL on your phone — done.

## Files
- `index.html` — the app
- `map_images.js` — the 9 baked-in maps (base64)
- `server.js` — tiny static server (reads `PORT` from Railway)
- `package.json`, `railway.json`, `Procfile` — deploy config
