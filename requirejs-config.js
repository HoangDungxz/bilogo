var config = {
    paths: {
        slick: 'js/slick',
        owlCarousel: 'js/owl.carousel.min'
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        owlCarousel: {
         deps: ['jquery']
     }
 },
 map: {
    '*': {
        qtyInput:               'js/widgets/qty-input',
        customCalendar:         'js/widgets/custom-calendar',
        // 'Magento_Checkout/template/minicart/item/default.html': 'template/minicart/item/default.html',
        'sidebar': 'js/sidebar',
        'Magento_Checkout/js/view/minicart': 'js/view/minicart'
    }
}
};