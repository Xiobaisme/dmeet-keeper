const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://dmeet.org/ifi-bapi-ktq');
  
  console.log('Login manual di browser yang terbuka, lalu tekan Enter di terminal setelah selesai...');
  
  // tunggu input manual
  process.stdin.once('data', async () => {
    await context.storageState({ path: 'session.json' });
    console.log('Session disimpan ke session.json');
    await browser.close();
    process.exit(0);
  });
})();