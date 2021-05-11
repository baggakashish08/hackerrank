const puppy = require("puppeteer");
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve(ms)
    }, ms)
  })
}

const id = "witaxid734@irahada.com";
const pass = "loremipsum";
let challenge = {
  "challengeName": "gsdfsdf",
  "description": "gsdfdsfsd",
  "problemStatement": "bfsgdsf",
  "inputFormat": "gfasfas",
  "constraints": "gsgafas",
  "outputFormat": "gsdfasa",
  "tags": "hdaf"
};

let moderators = ["nocidi6371", "ralariv999", "sibaje3329", "pamahex943", "kipavof852", "kejavib309", "mijora9576", "bokej31440", "fenemo4073", "yasekin473"];

(async () => {

  const browser = await puppy.launch({ headless: false, defaultViewport: false })
  let pages = await browser.pages();
  tab = pages[0];
  // const tab = await browser.newPage();
  await tab.goto('https://www.hackerrank.com/auth/login');
  await tab.type("#input-1", id);
  await tab.type("#input-2", pass);

  let loginbutton = await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");

  await wait(2000);
  await tab.goto("https://www.hackerrank.com/administration/contests");
  
  for (let i = 0; i < 5; i++) {
    // await tab.waitForNavigation({ waitUntil: "networkidle0" });
    await tab.waitForSelector("a[href='/administration/challenges']", {visible : true});
    await tab.click("a[href='/administration/challenges']");
    
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right" , {visible : true});
    await tab.click(".btn.btn-green.backbone.pull-right");
    
    await wait(2000);
    await tab.type(".block.span12.profile-input input", challenge["challengeName"]);
    await tab.type(".block.span12.profile-input textarea", challenge["description"]);
    await tab.type("#problem_statement-container .CodeMirror textarea", challenge["problemStatement"]);
    await tab.type("#input_format-container .CodeMirror textarea", challenge["inputFormat"]);
    await tab.type("#constraints-container .CodeMirror textarea ", challenge["constraints"]);
    await tab.type("#output_format-container .CodeMirror textarea ", challenge["outputFormat"]);
    await tab.type("#tags_tag", challenge["tags"]);
    await tab.keyboard.press("Enter");
    await tab.click(".save-challenge.btn.btn-green");
    
    await tab.waitForSelector("li[data-tab='moderators']", {visible : true});
    await tab.click("li[data-tab='moderators']");
    
    for (let j = 0; j < moderators.length; j++){
      await tab.waitForSelector("#moderator", { visible: true });
      await tab.type("#moderator", moderators[j]);
      await tab.click(".btn.moderator-save");
    }
    
    await tab.click(".save-challenge.btn.btn-green");
    await tab.goto("https://www.hackerrank.com/administration/contests")
  }
  

  await browser.close();
})()