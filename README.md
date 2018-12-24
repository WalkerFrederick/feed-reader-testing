# feed-reader-testing
Testing was done in Jasmine


## Download and open index.html to run...<br>
or checkout my code below


```javascript
            //checks to make sure every feed's URL is both defined and not empty
            it('URL defined', function() {
                for (urls in allFeeds) {
                    expect(allFeeds[urls].url).toBeDefined();
                    expect(allFeeds[urls].url.length).not.toBe(0);
                }
            });
```
```javascript
            //checks to make sure every feed's name is both defined and not empty
            it('name defined', function() {
                for (names in allFeeds) {
                    expect(allFeeds[names].name).toBeDefined();
                    expect(allFeeds[names].name.length).not.toBe(0);
                }
            });
        });
```

```javascript
        //checks to make sure every feed's name is both defined and not empty
         describe("The Menu", function() {

             //checks to make sure the body tag has the 'menu-hidden' on load
             it('is hidden on default', function () {
                 expect($('body')[0]).toHaveClass('menu-hidden')

             })
```
```javascript
             //checks to make sure body's classes are empty after the first click
             //(the only class it will ever have is menu-hidden)
             //after that it will check to make sure that the menu-hidden class gets added back
             it('toggles on click', function () {
                 $('.menu-icon-link').click();
                 console.log($('body').attr('class'));
                 expect($('body').attr('class')).toBe('');
                 $('.menu-icon-link').click();
                 console.log($('body').attr('class'))
                 expect($('body').attr('class')).toBe('menu-hidden');
             })

         })
```
```javascript
        describe("Initial Entries", function () {

            beforeEach(function(done) {
                loadFeed(0, done);
            });
            //checks for at least one entry in the .feed container
            it('has a minimum of one entry within the .feed container', function(done) {
                let entry = $('.entry');
                expect(entry.length).not.toBe(0)
                done();
            });

        });
```

```javascript
        describe('New feed selection', function() {
            let urlOne;
            let urlTwo;

            beforeEach(function(done) {
                urlTwo = $('.entry-link').attr('href');
                loadFeed(1, done);
            });
            //checks to make sure the new url doesn't equal the last one
            it('When a new feed is loaded by the loadFeed function the content changes', function(done) {
                urlOne = $('.entry-link').attr('href');
                expect(urlOne).not.toEqual(urlTwo);
                done();
            });
        });
 ```
