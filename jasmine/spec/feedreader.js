/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
        describe('RSS Feeds', function() {
            /* This is our first test - it tests to make sure that the
             * allFeeds variable has been defined and that it is not
             * empty. Experiment with this before you get started on
             * the rest of this project. What happens when you change
             * allFeeds in app.js to be an empty array and refresh the
             * page?
             */
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });

            //checks to make sure every feed's URL is both defined and not empty
            it('URL defined', function() {
                for (urls in allFeeds) {
                    expect(allFeeds[urls].url).toBeDefined();
                    expect(allFeeds[urls].url.length).not.toBe(0);
                }
            });

            //checks to make sure every feed's name is both defined and not empty
            it('name defined', function() {
                for (names in allFeeds) {
                    expect(allFeeds[names].name).toBeDefined();
                    expect(allFeeds[names].name.length).not.toBe(0);
                }
            });
        });

        //checks to make sure every feed's name is both defined and not empty
         describe("The Menu", function() {

             //checks to make sure the body tag has the 'menu-hidden' on load
             it('is hidden on default', function () {
                 expect($('body')[0]).toHaveClass('menu-hidden')

             })

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
}());
