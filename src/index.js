const puppeteer = require('puppeteer');



(async () => {
  const userName = 'admin'
  const passWord = "Cmcc10086#"
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('http://192.168.1.1/', { waitUntil: 'networkidle2' });

  await new Promise(resolve => setTimeout(resolve, 2000));

  await page.type('#username', userName);

  await new Promise(resolve => setTimeout(resolve, 500));

  await page.type('#password', passWord);

  await new Promise(resolve => setTimeout(resolve, 500));

  await page.click('#loginBtn');

  await new Promise(resolve => setTimeout(resolve, 4000));

  await page.goto('http://192.168.1.1/scdmz.cmd?enable=1&address=192.168.1.134');

  await new Promise(resolve => setTimeout(resolve, 4000));

  await page.screenshot({
    path: new Date().getTime() + ".png", // 指定截图文件保存路径
    fullPage: true, // 是否截取整个页面
  });
  await browser.close();
})();