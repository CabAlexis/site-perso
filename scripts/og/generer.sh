#!/bin/sh
# Régénère public/og.png à partir de scripts/og/og.html, avec le Chromium de
# l'image Playwright (aucune dépendance ajoutée au projet).
set -e
RACINE=$(cd "$(dirname "$0")/../.." && pwd)
podman run --rm -v "$RACINE":/site:z -w /tmp mcr.microsoft.com/playwright:v1.55.0-noble sh -c '
  npm i --silent --no-audit --no-fund playwright@1.55.0 >/dev/null 2>&1
  node -e "
    const { chromium } = require(\"playwright\");
    (async () => {
      const nav = await chromium.launch();
      const page = await nav.newPage({ viewport: { width: 1200, height: 630 } });
      await page.goto(\"file:///site/scripts/og/og.html\");
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: \"/site/public/og.png\" });
      await nav.close();
    })();
  "'
echo "public/og.png régénéré."
