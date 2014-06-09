/********************
 * preloadImages
 * by Sílvia Mur Blanch aka PchiwaN
 * https://github.com/pchiwan/preloadImages
 *
 * NOTE: jQuery and a real browser are required (so no IE below 9, please)
 ********************/

(function ($) {

	$.preloadImages = function (images, callback) {
		/// <summary>
		///	Preload a collection of images so that they'll be in the browser's cache when you need them. 
		///	This way you can know EXACTLY when all the images have finished loading.
		///	</summary>
		/// <param name="images" type="Array">Collection of image urls that you want to preload.</param>
		/// <param name="callback" type="function">Optional. Callback function that will executed when all the images have been loaded.</param>
		/// <return>Deferred object that will be resolved when all the images have been loaded. You can add more handlers to it!</return>
		
		var filter = function (array, iterator) {
			/// <summary>Inspired by underscore.js: looks through each value in the list, returning an array of all the values that pass a truth test (predicate)</summary>

			if (window._) 
				return _.filter(array, iterator);

			var results = [];
			for (var i = 0, l = array.length; i < l; i++) {
				if (iterator.call(this, array[i])) {
					results.push(array[i]);
				}
			}
			return results;
		};

		images = filter(images, function (i) { return !!i });

		if (!images.length)
			return;

		var loaded = 0, requested = 0;
		var deferred = $.Deferred();

		if (!!callback) 
			deferred.done(callback);

		var onLoadComplete = function () {
			loaded++;
			if (images.length === loaded) 
				deferred.resolve();
		};

		for (var i = 0, l = images.length; i < l; i++) {
			var img = new Image();
			img.onload = onLoadComplete;
			img.onerror = onLoadComplete;
			img.src = images[i];
			requested++;
		}

		return deferred;
	}

})(jQuery);
