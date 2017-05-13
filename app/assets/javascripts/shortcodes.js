jQuery(document).ready(function () {
    jQuery('div.sc_accordion').tabs('div.item > div.content', {
        tabs: 'h5.title > a',
        effect: 'slide',
        currentClose: true,
        initialIndex: 0
    });
});

var doughnutData = [{
    value: 20,
    color: "#23cbdb"
}, {
    value: 55,
    color: "#43dfee"
}, {
    value: 95,
    color: "#87edf7"
}, {
    value: 77,
    color: "#01b6c7"
}, {
    value: 17,
    color: "#01b6c7"
}, ];
jQuery(document).ready(function () {
    chart_anim("wcoxdtztyvkk", doughnutData);
});

jQuery(document).ready(function () {
    jQuery('div.sc_toggles').tabs('div.item > div.content', {
        tabs: 'h5.title > a',
        effect: 'slide',
        currentClose: true,
        anotherClose: false,
        initialIndex: 0
    });
});
jQuery(document).ready(function () {
    jQuery('div.sc_tabs').tabs('div.content', {
        tabs: 'li.tab_name > a',
        initialIndex: 0
    });
});