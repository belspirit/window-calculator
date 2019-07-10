
(function outerTabs(){
    /**
     * Outer Tabs by pure JavaScript
     *
     */

    var tabNav = document.querySelectorAll('.outer-tabs-item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName = '';

    tabNav.forEach( item => {
            item.addEventListener('click', selectTabNav)
        }

    );

    function selectTabNav(){
        tabNav.forEach( item => {
            item.classList.remove('tab-active');
        });
        this.classList.add('tab-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    };

    function selectTabContent(tabName){

        tabContent.forEach( item => {
            if (item.classList.contains(tabName)){
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
})()


// Inner calculator tabs (radio inputs)
$(document).ready(function() {

    (function windowCalculator() {

        var navTabInput = $('.nav-tab-label input'),
            navTabLabel = navTabInput.closest('label'),
            secRadioInput = $('.radio-label-sec input');

        //set active class to secondary labels and change image
        secRadioInput.change(activateSecLabel);

        //toggle socondary lables with type of window opening
        navTabInput.change(showSecondaryContent);


        function activateSecLabel() {
            var currentLabel = $(this).closest('label'),
                labelSiblings = currentLabel.siblings('label'),
                currentOknoType = currentLabel.attr('okno-otkr');

            labelSiblings.each(function() {
                $(this).removeClass('activated');
            });

            currentLabel.addClass('activated');

            //set new src of image
            setImage(currentOknoType);

        };


        //set active class to primary labels. function works as tab toggler
        function showSecondaryContent() {

            var currentOknoType = $(this).attr('okno-type'),
                tabSecondaryContent = $('.active .tab-secondary-content'),
                tabContentToOpen = 'okno-tab-content' + currentOknoType;

            tabSecondaryContent.each(function() {
                if($(this).hasClass(tabContentToOpen)) {
                    $(this).addClass('is-active');
                }
                else {
                    $(this).removeClass('is-active');
                }
            });

            navTabLabel.each(function() {
                var currentInput = $(this).find('input');
                if (currentInput.prop('checked')) {
                    $(this).addClass('activated');
                } else {
                    $(this).removeClass('activated');
                }
            });

            var showedSecContent = $('.tab-secondary-content.is-active'),
                activeSecInput = showedSecContent.find('.activated');

            //modelize click to input to get him class 'activated'
            activeSecInput.trigger('click');

        }

        //change image src on click through array methods
        function setImage(value){

            /** get string value of image src './img/balcony-entrance_big_1-1_.png'
             * then split it by '_'  and get array ['./img/balcony-entrance','big', '1-1', '.png']
             * then change element with index -1 -> '1-1' (number of image)
             * then join it to string by '_'
             */

            var windowImage = $('.active ').find('.window-image'),
            windowImageSrcArr = windowImage.attr('src').split('_');

            windowImageSrcArr.splice(-2,1,value);

            windowImage.attr('src', windowImageSrcArr.join('_'));
        }


        // Show/hide addition inputs
        var additionalToggler = $('.add-info-toggler');

        additionalToggler.click(function() {
            $(this).next('.add-info-content').slideToggle();

        })

    })();




});
