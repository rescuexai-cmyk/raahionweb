const { run } = require('react-snap');
const fs = require('fs');
const url = require('url');
const pkg = require('../package.json');

const publicUrl = process.env.PUBLIC_URL || pkg.homepage;

function getPuppeteerExecutablePath() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  if (process.platform === 'darwin') {
    const macChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    if (fs.existsSync(macChrome)) {
      return macChrome;
    }
  }

  try {
    const puppeteer = require('puppeteer');
    return puppeteer.executablePath();
  } catch {
    return undefined;
  }
}

const reactSnap = pkg.reactSnap || {};

run({
  publicPath: publicUrl ? url.parse(publicUrl).pathname : '/',
  fixWebpackChunksIssue: false,
  ...reactSnap,
  puppeteerExecutablePath: getPuppeteerExecutablePath(),
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
