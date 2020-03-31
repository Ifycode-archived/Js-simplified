
var popUpContent = document.getElementById('popUp-content');
var menuButton = document.getElementById('menu-button');
var courseOutLineInner = document.getElementsByClassName('course-outline-inner')[0];
var bodyInner = document.getElementsByClassName('body-inner')[0];
var courseOutLine = document.getElementsByClassName('course-outline')[0];
var mainContentSideInner = document.getElementsByClassName('main-content-side-inner')[0];
var underHeroArea = document.getElementsByClassName('under-hero-area')[0];

var toggleButton;
var progress;

var deviceSizes = [
    window.matchMedia( "(min-width: 790px)" )
]


function animateContentOnLoad() {
    if (popUpContent.className === 'hideBeforeButtonClick') {
        popUpContent.className = 'showBeforeButtonClick';
    }
}

window.onload = function () {
    animateContentOnLoad();
    function respondToQuery() {
        if (deviceSizes[0].matches) {
            progress = 100;   
            for (; progress <= 100;) { 
                shrinkDiv(progress);
                progress++;
            }

            function shrinkDiv(progress) {
                courseOutLine.style.width  = `${progress}px`;
                bodyInner.style.gridTemplateColumns =`${progress}px 1fr`;
            }

            function changeStyleOnLoadLargerDevice() {
                //============ specify these ==========
                bodyInner.style.gridTemplateRows ='1fr';
                courseOutLine.style.height  = '100vh';
                //=====================================
                courseOutLineInner.style.overflow = 'hidden';
                
            }
            changeStyleOnLoadLargerDevice();
        }

        if (!deviceSizes[0].matches) {
            progress = 50;   
            for (; progress <= 50;) { 
                shrinkDiv(progress);
                progress++;
            }

            function shrinkDiv(progress) {
                courseOutLine.style.height  = `${progress}px`;
            }

            function changeStyleOnLoad() {
                bodyInner.style.gridTemplateRows ='0fr 1fr';
                //============ specify these ==============
                bodyInner.style.gridTemplateColumns ='1fr';
                courseOutLine.style.width  = '100%';
                //=========================================
                courseOutLineInner.style.overflow = 'hidden';
               
            }
            changeStyleOnLoad();
        }
    }

    for (var i=0; i<deviceSizes.length; i++) {
        respondToQuery(deviceSizes[i]);
        deviceSizes[i].addListener(respondToQuery);
    }
}



   /*====================
     menuButton toggle
   ======================*/

toggleButton = 0;

menuButton.onclick = function () {
    toggleButton++;

    /*===========================================
      transition added to height (smaller devices)
       and width (larger devices) on button click.
    ============================================*/
    courseOutLine.style.transition = 'height 0.4s cubic-bezier(0.19, 1, 0.22, 1), width 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
    

    if (toggleButton == 1) {
       
        function respondToQuery() {
            if (deviceSizes[0].matches) {
                progress = 320;
                for (; progress >= 320;) { 
                    growDiv(progress);
                    progress--;  
                }
        
                function growDiv(progress) {
                    courseOutLine.style.width  = `${progress}px`;
                    bodyInner.style.gridTemplateColumns =`${progress}px 1fr`;
                }

                function previousStyleLargerDevice() {
                    courseOutLineInner.style.overflow = 'auto';
                   
                    //============= change style =================
                    mainContentSideInner.style.overflow = 'hidden';
                    //============================================
                    
                    /*====================================================================
                    use or operator since popContent's classname is 'showBeforeButtonClick'
                    on load, 'hideAndShow' when toggleButton is 1 and 'showAndHide' when
                    toggleButton is 2 etc.
                    =====================================================================*/
                    if ( (popUpContent.className === 'showBeforeButtonClick') 
                        || (popUpContent.className === 'hideBeforeButtonClick')
                        || (popUpContent.className === 'hideAndShow') 
                        || ( popUpContent.className === 'showAndHide') ) {
                        popUpContent.className = 'hideAndShow';
                    }
                }
                previousStyleLargerDevice();
                
            }

            if (!deviceSizes[0].matches) {
                progress = 100;
                for (; progress >= 100;) { 
                    growDiv(progress);
                    progress--;  
                }
        
                function growDiv(progress) {
                    courseOutLine.style.height  = `${progress}vh`;
                }

                function previousStyle() {
                    bodyInner.style.gridTemplateRows ='1fr 0fr';
                    courseOutLineInner.style.overflow = 'auto';
                    mainContentSideInner.style.overflow = 'auto';
                    if ( (popUpContent.className === 'showBeforeButtonClick') 
                    || (popUpContent.className === 'hideAndShow')
                    || (popUpContent.className === 'showAndHide')//added this
                    ){
                        popUpContent.className = 'hideBeforeButtonClick';
                    }
                }
                previousStyle();
               
            }
        }

        for (var i=0; i<deviceSizes.length; i++) {
            respondToQuery(deviceSizes[i]);
            deviceSizes[i].addListener(respondToQuery);
        }

        window.onresize = function() {
            courseOutLine.style.transition = 'none';
            
            if (deviceSizes[0].matches) { 
                popUpContent.className = 'hideAndShow';
            }
            if (!deviceSizes[0].matches) {
                popUpContent.className = 'hideBeforeButtonClick';
            }

            for (var i=0; i<deviceSizes.length; i++) {
                respondToQuery(deviceSizes[i]);
                deviceSizes[i].addListener(respondToQuery);
            }
        }

    }

    if (toggleButton == 2) {
        toggleButton = 1;
        toggleButton--;
        
       function respondToQuery() {
            if (deviceSizes[0].matches) {
                progress = 100;   
                for (; progress <= 100;) { 
                    shrinkDiv(progress);
                    progress++;
                }

                function shrinkDiv(progress) {
                    courseOutLine.style.width  = `${progress}px`;
                    bodyInner.style.gridTemplateColumns =`${progress}px 1fr`;
                }

                function changeStyleLargerDevice() {
                    //============ specify these ==========
                    bodyInner.style.gridTemplateRows ='1fr';
                    courseOutLine.style.height  = '100vh';
                    mainContentSideInner.style.overflow = 'auto';
                    //=====================================

                    courseOutLineInner.style.overflow = 'hidden';
                    if (popUpContent.className === 'hideAndShow') {
                        popUpContent.className = 'showAndHide';//
                    }
                }
                changeStyleLargerDevice();

            }

            if (!deviceSizes[0].matches) {
                progress = 50;   
                for (; progress <= 50;) { 
                    shrinkDiv(progress);
                    progress++;
                }

                function shrinkDiv(progress) {
                    courseOutLine.style.height  = `${progress}px`;
                }

                function changeStyle() {
                    bodyInner.style.gridTemplateRows ='0fr 1fr';
                    //============ specify these ==============
                    bodyInner.style.gridTemplateColumns ='1fr';
                    courseOutLine.style.width  = '100%';
                    mainContentSideInner.style.overflow = 'auto';
                    //=========================================
                    courseOutLineInner.style.overflow = 'hidden';
                    if ( (popUpContent.className === 'hideBeforeButtonClick') 
                    || (popUpContent.className === 'hideAndShow')
                    //|| (popUpContent.className === 'showAndHide')
                    ){
                        popUpContent.className = 'showBeforeButtonClick';
                    }
                }
                changeStyle();
            }
        }

        for (var i=0; i<deviceSizes.length; i++) {
            respondToQuery(deviceSizes[i]);
            deviceSizes[i].addListener(respondToQuery);
        }  

        
        window.onresize = function() {
            courseOutLine.style.transition = 'none';
            popUpContent.className = 'showBeforeButtonClick';
        }
    }
}


    /*=================================
      courseOutline visibility when main 
      content side inner is scrolled
    ==================================*/


function whenMainContentSideInnerScrolls() {
    /*=====================================
      transition added to height on scroll 
      Affects smaller devices.
    =====================================*/
    courseOutLine.style.transition = 'height 0.4s cubic-bezier(0.19, 1, 0.22, 1)';
    

    if (mainContentSideInner.scrollTop > 50) {
        courseOutLine.style.height  = '0px';
    }

    else {
        courseOutLine.style.height  = '50px';
    }
}

function whenMainContentSideInnerScrollsLarger() {
    if (mainContentSideInner.scrollTop > 50) {
        courseOutLine.style.height  = '100vh';
    }
}

function respondToQuery() {
    if (deviceSizes[0].matches) {
        mainContentSideInner.onscroll = function() {
            whenMainContentSideInnerScrollsLarger();
        }

        /*
        if ( (popUpContent.className === 'showBeforeButtonClick')
        || (popUpContent.className = 'showAndHideSmallerDevices')
         ) {
            popUpContent.className = 'showAndHide';
        }
        */
       
    }

    if (!deviceSizes[0].matches) {
        mainContentSideInner.onscroll = function() {
            whenMainContentSideInnerScrolls();
        }
        /*
        if ( (popUpContent.className === 'showBeforeButtonClick')
        || (popUpContent.className === 'showAndHide')
         ) {
            popUpContent.className = 'showAndHideSmallerDevices';
        }
        */
    }
}

for (var i=0; i<deviceSizes.length; i++) {
    respondToQuery(deviceSizes[i]);
    deviceSizes[i].addListener(respondToQuery);
}


   /*=======================================
    transition removed from height on resize
    Affects smaller devices.
   =======================================*/
   
   window.onresize = function () {
    courseOutLine.style.transition = 'none';
}
