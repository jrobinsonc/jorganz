(function($) {
    'use strict';

    $.fn.jOrganz = function(userOptions) {

        var options = $.extend({
            selector: 'div'
        }, userOptions);

        var $container = $(this);
        var $items = $container.children(options.selector);
        var rowMaxItems = 0;

        $container.css('position', 'relative');
        $items.css('position', 'absolute');

        function orderItems() {
            var posTop = [];
            var rowNum = 0;

            var itemsWidth = $items.eq(0).width();
            var lastRowMaxItems = rowMaxItems;
            var itemsMargin = [0, 0];

            // Horizontal margin
            itemsMargin[0] += parseInt($items.eq(0).css('margin-left'), 10);
            itemsMargin[0] += parseInt($items.eq(0).css('margin-right'), 10);

            // Vertical margin
            itemsMargin[1] += parseInt($items.eq(0).css('margin-top'), 10);
            itemsMargin[1] += parseInt($items.eq(0).css('margin-bottom'), 10);

            if (itemsWidth === 0) {
                alert('jOrganz error: You must set the items width.');
                return;
            }

            rowMaxItems = Math.floor($container.width() / (itemsWidth + itemsMargin[0]));

            if (rowMaxItems === lastRowMaxItems) { return; }

            $.each($items, function() {

                var $item = $(this);

                rowNum += 1;

                if (rowNum > rowMaxItems) {
                    rowNum = 1;
                }

                if (posTop[rowNum - 1] === undefined) {
                    posTop[rowNum - 1] = 0;
                }

                $item.css({
                    top: posTop[rowNum - 1],
                    left: (itemsWidth + itemsMargin[0]) * (rowNum - 1)
                });

                posTop[rowNum - 1] += ($item.height() + itemsMargin[1]);

                if (posTop[rowNum - 1] > $container.height()) {
                    $container.height(posTop[rowNum - 1]);
                }
            });
        }

        orderItems();

        var $imagesList = $('img', $container);
        var loadedImages = 0;
        var numImages = $imagesList.length;

        $imagesList.load(function() {
            ++loadedImages;

            if (loadedImages === numImages) {
                orderItems();
            }
        });

        $(window).resize(function() {
            orderItems();
        });

    };

}(jQuery));
