// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test, dest) {
    if(Meteor.isClient)
        console.log(this);
  test.equal(true, true);
  
});
