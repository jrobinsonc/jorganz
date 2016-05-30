(function ($) {
    "use strict";

    $.fn.jOrganz = function (user_options) {

        var options = $.extend({
            selector: "div"
        }, user_options);

        var $container = $(this),
            $items = $container.children(options.selector),
            row_max_items = 0;

        $container.css('position', 'relative');
        $items.css('position', 'absolute');

        function order_items() {
            var pos_top = [],
                row_num = 0,
                items_width = $items.eq(0).width(),
                items_margin = [parseInt($items.eq(0).css('margin-left'), 10) + parseInt($items.eq(0).css('margin-right'), 10), parseInt($items.eq(0).css('margin-top'), 10) + parseInt($items.eq(0).css('margin-bottom'), 10)],
                last_row_max_items = row_max_items;

            if (items_width === 0) {
                alert('jOrganz error: You must set the items width.');
                return;
            }

            row_max_items = Math.floor($container.width() / (items_width + items_margin[0]));

            if (row_max_items === last_row_max_items) { return; }

            $.each($items, function () {

                var $item = $(this);

                row_num += 1;

                if (row_num > row_max_items) {
                    row_num = 1;
                }

                if (pos_top[row_num - 1] === undefined) {
                    pos_top[row_num - 1] = 0;
                }

                $item.css({
                    top: pos_top[row_num - 1],
                    left: (items_width + items_margin[0]) * (row_num - 1)
                });

                pos_top[row_num - 1] += ($item.height() + items_margin[1]);

                if (pos_top[row_num - 1] > $container.height()) {
                    $container.height(pos_top[row_num - 1]);
                }
            });
        }

        order_items();



        var $images = $("img", $container),
            loaded_images = 0,
            num_images = $images.length;

        $images.load(function() {
            ++loaded_images;

            if (loaded_images === num_images) {
                order_items();
            }
        });



        $(window).resize(function () {
            order_items();
        });

    };

}(jQuery));