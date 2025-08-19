 // this file is to test tags functionality in Playwright
// tags are used to categorize tests, e.g. @Sanity, @regression,    
// @smoke, etc.
// tags can be used to run specific tests based on their tags
// to run tests with specific tags, use the --grep option in the command line   

// e.g. npx playwright test --grep "@Sanity"
// or npx playwright test --grep "@regression  
// or npx playwright test --grep "@Sanity|@regression"
//or npx playwright test --grep-invert"@Sanity" // to run tests without @Sanity tag




 import {test ,expect} from '@playwright/test';

test ('test1@Sanity', async ({ page }) => {
  console.log('This is my test1' );
});

test ('test2@Sanity', async ({ page }) => {
  console.log('This is my test2' );
});

test ('test3@Sanity', async ({ page }) => {
  console.log('This is my test3' );
});

test ('test4@regretion', async ({ page }) => {
  console.log('This is my test4' );
});

test ('test5@regretion', async ({ page }) => {
  console.log('This is my test5' );
});

test ('test5@regretion@Sanity', async ({ page }) => {
  console.log('This is my test5' );

});
