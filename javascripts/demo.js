
var Demo = function () {

    var self = this;

    var DDBB = [
    'http://userserve-ak.last.fm/serve/126s/93847939.png',
    'http://userserve-ak.last.fm/serve/126s/94368737.jpg',
    'http://userserve-ak.last.fm/serve/126s/70911666.png',
    'http://userserve-ak.last.fm/serve/126s/53152449.jpg',
    'http://userserve-ak.last.fm/serve/126s/2744701.jpg',
    'http://userserve-ak.last.fm/serve/126s/49700851.jpg',
    'http://userserve-ak.last.fm/serve/126s/94368727.jpg',
    'http://userserve-ak.last.fm/serve/126s/21282425.jpg',
    'http://userserve-ak.last.fm/serve/126s/160683.jpg',
    'http://userserve-ak.last.fm/serve/126s/49716237.jpg',
    'http://userserve-ak.last.fm/serve/126s/48959827.jpg',
    'http://userserve-ak.last.fm/serve/126s/5616407.jpg',
    'http://userserve-ak.last.fm/serve/126s/5530940.jpg',
    'http://userserve-ak.last.fm/serve/126s/5530873.jpg',
    'http://userserve-ak.last.fm/serve/126s/94443171.png',
    'http://userserve-ak.last.fm/serve/126s/58609279.jpg',
    'http://userserve-ak.last.fm/serve/126s/12732599.jpg',
    'http://userserve-ak.last.fm/serve/126s/58249483.png',
    'http://userserve-ak.last.fm/serve/126s/3604118.jpg',
    'http://userserve-ak.last.fm/serve/126s/67104150.png',
    'http://userserve-ak.last.fm/serve/126s/95747541.jpg',
    'http://userserve-ak.last.fm/serve/126s/94443151.png',
    'http://userserve-ak.last.fm/serve/126s/47442971.jpg',
    'http://userserve-ak.last.fm/serve/126s/5616345.jpg',
    'http://userserve-ak.last.fm/serve/126s/48985161.jpg',
    'http://userserve-ak.last.fm/serve/126s/26586523.jpg',
    'http://userserve-ak.last.fm/serve/126s/26587107.jpg',
    'http://userserve-ak.last.fm/serve/126s/93474467.png',
    'http://userserve-ak.last.fm/serve/126s/94112349.png',
    'http://userserve-ak.last.fm/serve/126s/58249515.png',
    'http://userserve-ak.last.fm/serve/126s/67104192.png',
    'http://userserve-ak.last.fm/serve/126s/94274039.jpg',
    'http://userserve-ak.last.fm/serve/126s/94131099.png',
    'http://userserve-ak.last.fm/serve/126s/58621007.png',
    'http://userserve-ak.last.fm/serve/126s/94125771.png',
    'http://userserve-ak.last.fm/serve/126s/94183901.png',
    'http://userserve-ak.last.fm/serve/126s/48959751.jpg',
    'http://userserve-ak.last.fm/serve/126s/54245715.jpg',
    'http://userserve-ak.last.fm/serve/126s/35412125.jpg',
    'http://userserve-ak.last.fm/serve/126s/35367719.jpg',
    'http://userserve-ak.last.fm/serve/126s/94273505.png',
    'http://userserve-ak.last.fm/serve/126s/49987547.jpg',
    'http://userserve-ak.last.fm/serve/126s/47442745.jpg',
    'http://userserve-ak.last.fm/serve/126s/53152593.png',
    'http://userserve-ak.last.fm/serve/126s/50059409.jpg',
    'http://userserve-ak.last.fm/serve/126s/49656065.jpg',
    'http://userserve-ak.last.fm/serve/126s/90395857.png',
    'http://userserve-ak.last.fm/serve/126s/42819851.jpg',
    'http://userserve-ak.last.fm/serve/126s/49771195.jpg',
    'http://userserve-ak.last.fm/serve/126s/41976055.jpg',
    'http://userserve-ak.last.fm/serve/126s/29126855.jpg',
    'http://userserve-ak.last.fm/serve/126s/94959591.png',
    'http://userserve-ak.last.fm/serve/126s/60813009.jpg',
    'http://userserve-ak.last.fm/serve/126s/49771155.jpg',
    'http://userserve-ak.last.fm/serve/126s/35367787.jpg',
    'http://userserve-ak.last.fm/serve/126s/26001325.jpg',
    'http://userserve-ak.last.fm/serve/126s/58684383.jpg',
    'http://userserve-ak.last.fm/serve/126s/70158690.jpg',
    'http://userserve-ak.last.fm/serve/126s/3410046.jpg',
    'http://userserve-ak.last.fm/serve/126s/90395933.png',
    'http://userserve-ak.last.fm/serve/126s/54391859.png',
    'http://userserve-ak.last.fm/serve/126s/52132179.jpg',
    'http://userserve-ak.last.fm/serve/126s/67104116.png',
    'http://userserve-ak.last.fm/serve/126s/63248565.jpg',
    'http://userserve-ak.last.fm/serve/126s/56781629.jpg',
    'http://userserve-ak.last.fm/serve/126s/40996119.jpg',
    'http://userserve-ak.last.fm/serve/126s/39718529.jpg',
    'http://userserve-ak.last.fm/serve/126s/36224997.jpg',
    'http://userserve-ak.last.fm/serve/126s/70920690.png',
    'http://userserve-ak.last.fm/serve/126s/69450738.jpg',
    'http://userserve-ak.last.fm/serve/126s/57546657.jpg',
    'http://userserve-ak.last.fm/serve/126s/55856065.png',
    'http://userserve-ak.last.fm/serve/126s/51917197.jpg',
    'http://userserve-ak.last.fm/serve/126s/49171395.jpg',
    'http://userserve-ak.last.fm/serve/126s/47442313.jpg',
    'http://userserve-ak.last.fm/serve/126s/39720307.jpg',
    'http://userserve-ak.last.fm/serve/126s/94433423.jpg',
    'http://userserve-ak.last.fm/serve/126s/55856115.png',
    'http://userserve-ak.last.fm/serve/126s/55856109.png',
    'http://userserve-ak.last.fm/serve/126s/49660079.jpg',
    'http://userserve-ak.last.fm/serve/126s/47442903.jpg',
    'http://userserve-ak.last.fm/serve/126s/47442793.jpg',
    'http://userserve-ak.last.fm/serve/126s/47022975.jpg',
    'http://userserve-ak.last.fm/serve/126s/21282831.jpg',
    'http://userserve-ak.last.fm/serve/126s/11048413.jpg',
    'http://userserve-ak.last.fm/serve/126s/94643837.jpg',
    'http://userserve-ak.last.fm/serve/126s/63248767.jpg',
    'http://userserve-ak.last.fm/serve/126s/94034097.jpg',
    'http://userserve-ak.last.fm/serve/126s/77605368.jpg',
    'http://userserve-ak.last.fm/serve/126s/76008774.png',
    'http://userserve-ak.last.fm/serve/126s/52089127.jpg',
    'http://userserve-ak.last.fm/serve/126s/94289499.jpg',
    'http://userserve-ak.last.fm/serve/126s/93803111.png',
    'http://userserve-ak.last.fm/serve/126s/74127742.jpg',
    'http://userserve-ak.last.fm/serve/126s/52132655.jpg',
    'http://userserve-ak.last.fm/serve/126s/47442489.jpg',
    'http://userserve-ak.last.fm/serve/126s/47442389.jpg',
    'http://userserve-ak.last.fm/serve/126s/35412063.jpg',
    'http://userserve-ak.last.fm/serve/126s/28477429.jpg',
    'http://userserve-ak.last.fm/serve/126s/5616433.jpg',
    'http://userserve-ak.last.fm/serve/126s/94304201.jpg',
    'http://userserve-ak.last.fm/serve/126s/75546906.jpg',
    'http://userserve-ak.last.fm/serve/126s/66779716.jpg',
    'http://userserve-ak.last.fm/serve/126s/51392439.jpg',
    'http://userserve-ak.last.fm/serve/126s/50243151.jpg',
    'http://userserve-ak.last.fm/serve/126s/94701989.jpg',
    'http://userserve-ak.last.fm/serve/126s/94289569.jpg',
    'http://userserve-ak.last.fm/serve/126s/77605502.jpg'];

    //change this value to load more images in every batch
    var batch = 10;
    
    this.images = ko.observableArray([]);
    this.imagesLoaded = ko.computed(function () {
        return self.images().length > 0;
    });
    this.loading = ko.observable(false);

    this.loadImages = function () {
        if (!DDBB.length) return;

        self.loading(true);
        var imageUrls = DDBB.splice(0, batch);

        $.preloadImages(imageUrls, function () {
            var arr = self.images();
            arr.unshift.apply(arr, imageUrls);
            self.images(arr);
            self.loading(false);
        });
    };

    this.clear = function () {
        self.images([]);
    };
};

$(document).ready(function () {

	var demo = new Demo();

	//initialize ko
    ko.applyBindings(demo, $('.demo')[0]);
});