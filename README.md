Social Media URL Parser
===================
(supports Twitter, LinkedIn and Facebook - raise a GitHub issue if you want more)
Get all the data you need to process social media link data
----------

**THE PROBLEM**
You want users to input their Twitter handle or URL, but don't want to confuse them with specifying a format i.e. full url, twitter handle, user id, linkedin extension etc. 

**THE SOLUTION**
Simply dump your URL or userId in `socialMediaURL.parse` to get all the data you need. 
**From id**

``` socialMediaURL.parse("Lolem1psum", "TWITTER"); ```
Which returns

```javascript
{
hostname: "twitter.com", 
href: "https://www.twitter.com/Lolem1psum", 
pathname: "/Lolem1psum", 
service: "TWITTER", 
twitterHandle: "@Lolem1psum", 
type: "ID", 
userId: "Lolem1psum"
}`
```
Whereas: 
```javascript
socialMediaURL.parse("https://www.facebook.com/lolem1psum");
```

returns 
```javascript
{
hostname: "www.facebook.com",
href: "https://www.facebook.com/lolem1psum",
pathname: "/lolem1psum",
service: "FACEBOOK",
type: "URL",
userId: "lolem1psum"
}
```