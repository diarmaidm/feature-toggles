# Feature toggles.

## Application setup and run.
In terminal:
* `git clone https://github.com/diarmaidm/feature-toggles.git`
* `npm install`
* `npm start` (on Linux you may have to run `sudo npm start`)

In chrome navigate to http://localhost:3000

You are presented with the default Express page provided by the generator.

## Toggle on and off features
The feature toggles are hard coded in `routes/index.js`

To turn on/off feature - change feature1/feature2 variable to `true` in `routes/index.js`
```
  let feature1 = false;
  let feature2 = false;
```

The app will restart automatically. Refresh the browser.

## References
Feature Toggles, Pete Hodgson https://martinfowler.com/articles/feature-toggles.html

Feature Toggles, Martin Fowler https://martinfowler.com/bliki/FeatureToggle.html

Feature Toggles are one of the Worst Kinds of Technical Debt, Jim Bird https://dzone.com/articles/feature-toggles-are-one-worst

http://featureflags.io/feature-flags-getting-started/ - it has links to readymade frameworks available

http://www.ff4j.org/ - it appears to be complete solution with external repository to manage toggles.

https://www.split.io/languages/javascript - this is similar library to ff4j

https://www.npmjs.com/package/react-feature-toggles

https://www.npmjs.com/package/feature-toggles

