# Testcafe npm linked async super bug repro

## Prerequisites

    npm i -g testcafe

## Run

Running the test with `dep1` (which is linked) fails:

    $ testcafe chrome test.js
    ERROR Cannot prepare tests due to an error.

    .../dep1/index.js:9
          super.do();})();
          ^^^^^

    SyntaxError: 'super' keyword unexpected here
        at Object.<anonymous> (.../project/test.js:1:15)


But editing `project/test.js` to use `dep2` instead of `dep1` (which is
identical but not linked) makes it work.

    $ testcafe chrome project/test.js                                                                                                                                             1.83s
     Running tests in:
     - Chrome 63.0.3239 / Mac OS X 10.11.6
    
     Link test
    Yep
     ✓ Hey
    
    
     1 passed (0s)

Also removing `async` makes it work.

And both work fine, untranspiled, in Node 8

    $ node -e "const Thing = require('dep1'); const t = new Thing; t.do()"                                                                                                        0.00s
    Yep
