const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,  // penting: non-headless
    args: [
      '--use-fake-ui-for-media-stream',
      '--use-fake-device-for-media-stream',
      '--disable-blink-features=AutomationControlled'  // sembunyikan flag automation
    ]
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://dmeet.org/ifi-bapi-ktq');

  console.log('Page loaded, checking status...');
  await page.screenshot({ path: 'debug.png' });

  const durationMs = 5.8 * 60 * 60 * 1000;
  await page.waitForTimeout(durationMs);

  await browser.close();
})();