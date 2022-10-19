const { resolve } = require("path");
const puppeteer = require("puppeteer");
const { start } = require("repl");

const codeObj = require("./code");

const loginLink = "https://www.hackerrank.com/auth/login";
const email = "gemawo4093@dicopto.com";
const password = "Kartikey963";

let browserOpen = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
});

let page;

browserOpen
  .then(function (browserObj) {
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
  })
  .then(function (newTab) {
    page = newTab;
    let facebookOpenPromise = newTab.goto(loginLink);
    return facebookOpenPromise;
  })
  .then(function () {
    let emailIsEntered = page.type("input[id='input-1']", email, { delay: 50 });
    return emailIsEntered;
  })
  .then(function () {
    let passwordIsEntered = page.type("input[type='password']", password, {
      delay: 50,
    });
    return passwordIsEntered;
  })
  .then(function () {
    let loginButtonClicked = page.click(
      'button[data-analytics="LoginPassword"]',
      { delay: 50 }
    );

    return loginButtonClicked;
  })
  .then(function () {
    let ClickOnAlgoPromise = waitAndClick(
      '.topic-card a[data-attr1="algorithms"]',
      page
    );
    return ClickOnAlgoPromise;
  })
  .then(function () {
    let ClickOnWarmup = waitAndClick('input[value="warmup"]', page);
    return ClickOnWarmup;
  })
  // .then(function () {
  //   let waitForThreeSeconds = page.waitFor(3000);
  //   return waitForThreeSeconds;
  // })
  .then(function () {
    let allChallengesPromise = page.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",
      { delay: 50 }
    );
    return allChallengesPromise;
  })
  .then(function (questionArr) {
    console.log("number of questions", questionArr.length);
    let quesWillBeSolved = questionSolver(
      page,
      questionArr[0],
      codeObj.answer[0]
    );
    return quesWillBeSolved;
  });

function waitAndClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModelPRomise = cPage.waitForSelector(selector);
    waitForModelPRomise
      .then(function () {
        let clickModel = cPage.click(selector);
        return clickModel;
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        reject();
      });
  });
}

function questionSolver(page, question, answer) {
  return new Promise(function (resolve, reject) {
    let quesWillBeClicked = question.click();
    quesWillBeClicked
      .then(function () {
        let editorInFocusPromise = waitAndClick(
          ".monaco-editor.no-user-select.vs",
          page
        );
        return editorInFocusPromise;
      })
      .then(function () {
        return waitAndClick(".checkbox-input", page);
      })
      .then(function () {
        return page.waitForSelector("textarea.custominput", page);
      })
      .then(function () {
        return page.type("textarea.custominput", answer, { delay: 10 });
      });
  });
}
