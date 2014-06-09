imagePreloader
==============

Make sure your images will be there when you need them.

# What does it do?
Simply put: it fetches images and downloads them to your browser.


# Why?
I was playing around with [Masonry](http://masonry.desandro.com/) one day, testing cool CSS3 effects while dinamically loading pictures using infinite scroll... you know, having fun with JavaScript. I had been using the small plugin [imagesLoaded](http://desandro.github.io/imagesloaded/) -also by [desandro](https://github.com/desandro)- but, for some reason, it didn't work for me. Whenever I loaded new batches of images the Masonry was lost. At first I did what any curious developer would do: I went through the code, trying to find out what was going on. But I gave up soon because I decided to implement my own solution, with a different approach. Instead of asking 'You images done yet or what?', I will fetch them -preload them- so they'll be cached in the browser, thus making sure they'll already be downloadedwhen I need them.


# How does it work?
I've implemented this simple utility as a jQuery extension. So you use it like this:

```javascript
var imageUrls = [
	//a bunch of image URLs
];

$.preloadImages(imageUrls);
            
```

This method returns a jQuery Deferred object that will be resolved when all the images have been loaded, so you can add more handlers to it if you wish. 

```javacript
var deferred = $.preloadImages(imageUrls);

deferred.always(function () {
	//TODO
});

deferred.fail(function () {
	//TODO
});
```

You can also provide a callback function which will be executed when all the images have been loaded. Like this:

```javascript
$.preloadImages(imageUrls, function () {
    alert('All images have been loaded!');
});
```

And there is nothing more to it! 

# Demo
You can play with my example jsfiddle [here](http://jsfiddle.net/z2QuA/).