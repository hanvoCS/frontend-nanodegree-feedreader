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
        
        
//   feed = new google.feeds.Feed(feedUrl);
//    var feedUrl = allFeeds[id].url,

        
        
// Ensure that the URL has been defined and not empty.
   it("URL is defined and not empty", function() {
          // loops through each feed
            allFeeds.forEach(function(feed) {
                URLfeed = feed.url;
                expect( URLfeed).toBeDefined();
                expect( URLfeed.length).not.toBe(0); // if the URLfeed.length is equal to 0, that's mean its empty!
            });
   });
     


// Ensure that the feed  has a name defined and the name is not empty.
         
            it("Name is defined and not empty ", function() {
            // loops through each feed
        allFeeds.forEach(function(feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0); // if the feedName.length is equal to 0, that's mean its empty! 
            });
        });
    });


    /* New test suite named "The menu" */
    describe("The menu", function() {
        var body;
     beforeEach(function(){
         body = $('body');
    });
// Ensure that the menu element is hidden by default. 
        it("Menu element is hidden by default", function() {
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
       
        
// Ensure that the menu changes visibility when the menu icon is clicked.
        it("Changes visibility", function() {
         //Menu display when clicked, by using trigger on menu icon link
            $('.menu-icon-link').trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();
        //Menu  hide when clicked, by using trigger on menu icon link
            $('.menu-icon-link').trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();

        });
    });
       
    
    
    /*new test suite named "Initial Entries" */

    describe("Initial Entries", function() {

       // Ensure that the loadFeed function is called and completed. 
        beforeEach(function(done) {
            loadFeed(0, done);
        });

       // Ensure there is at least a single .entry element within the .feed container.
        it("Has an entry within the feed container", function(done) {
         
            expect($('.feed').children().length).toBeGreaterThan(0);
            done();
        });
    });


    /* "Test suite named "New Feed Selection" */

    
    describe("New Feed Selection", function(){
var Oldfeed;
var Newfeed;

       //To ensure the loadFeed function is called and completed
        beforeEach(function(done) {
            //Load a feed and save it to the varible
            loadFeed(0 ,function() {
             Oldfeed = $('.feed').html();
              //Load new feed and save it to the varible 
              loadFeed(1, function() {
                Newfeed = $('.feed').html();
                done();
              });
            });
        });

        // Ensure that the contents of feed is diffrent. 
        it( "Contents are diffrent ", function(done) {
            expect(Oldfeed).not.toBe(Newfeed); 
            done();
        });
    });


}());
