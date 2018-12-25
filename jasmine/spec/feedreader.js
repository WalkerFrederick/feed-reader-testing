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
                 expect($('body')[0]).not.toHaveClass('menu-hidden')
                 $('.menu-icon-link').click();
                 console.log($('body').attr('class'))
                 expect($('body')[0]).toHaveClass('menu-hidden')
             })

         })

        describe("Initial Entries", function () {

            beforeEach(function(done) {
                loadFeed(0, done);
            });
            //checks for at least one entry in the .feed container
            it('has a minimum of one entry within the .feed container', function(done) {
                expect($('.feed .entry').length).not.toBe(0);
                done();
            });

        });

        describe('New feed selection', function() {

            let firstLoadFeed;
            let secondLoadFeed;

            beforeEach(function(done){
                loadFeed(0, function () {
                    firstLoadFeed = $('.feed').html();
                    loadFeed(1, function () {
                        secondLoadFeed = $('.feed').html();
                        done();
                    })
                })
            })
            //checks to make sure the content is actually changing
            it('When a new feed is loaded by the loadFeed function the content changes', function(done) {
                console.log(firstLoadFeed)
                console.log(secondLoadFeed)
                expect(firstLoadFeed).not.toEqual(secondLoadFeed);
                done();
            });
        });
}());
