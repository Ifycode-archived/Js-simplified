
//====================| Find More Elements |=================================
var body = document.getElementsByTagName('body')[0];
var mainButton = document.getElementsByClassName('main-button')[0];

var courseName = document.getElementsByClassName('courseName')[0];
var cube = document.getElementById('cubeCover');
var contributorArea = document.getElementById('contributorAreaInner');
var author = document.getElementsByClassName('author')[0];
var footer = document.getElementsByClassName('footer')[0];
var mainContentSide = document.getElementsByClassName('main-content-side')[0];
var cursorPointer = document.getElementsByClassName('cursor-pointer')[0];
var cursorPointerCover = document.getElementById('cursorPointerCover');
var clock = document.getElementsByClassName('analogueClock')[0];
var clockInner = document.getElementById('analogueClockInner');
var learn1 = document.getElementsByClassName('learn1')[0];
var learn2 = document.getElementsByClassName('learn2')[0];
var learn3 = document.getElementsByClassName('learn3')[0];
var firstCarousel = document.getElementById('carousel1');
var secondCarousel = document.getElementById('carousel2');
var thirdCarousel = document.getElementById('carousel3');
var animatedCarousel = document.getElementsByClassName('animatedCarousel')[0];
var build = document.getElementsByClassName('build')[0];
var clickBorder = document.getElementsByClassName('click')[0];


var mainButtonContainer = document.getElementsByClassName('main-button-cover')[0];
var learnMore = document.getElementsByClassName('learnMoreArea')[0];
var HeroAreaFooter = document.getElementsByClassName('footer')[0];
var mainFooter = document.getElementsByClassName('main-footer')[0];
var underHeroArea = document.getElementsByClassName('under-hero-area')[0];
var contributorAreaCover = document.getElementsByClassName('contributorArea')[0];
var overviewContent = document.getElementById('popUp-content');
var contentContainers = document.getElementsByClassName('contentContainers');
var card = document.getElementsByClassName('card')[0];
var cardfront = document.getElementsByClassName('card__front')[0];
var cardBack = document.getElementsByClassName('card__back')[0];
var cardScene = document.getElementsByClassName('scene')[0];

var reloadHomeInner = document.getElementById('reloadHomeInner');
var backToTopArrow = document.getElementById('backToTopArrow');
var arrowColor = document.getElementById('arrowColor');

var backToTop = document.getElementsByClassName('back-to-top')[0];

//====================| Button interval and click event |==========================

window.onload =  function() {

    if (cube.className === 'waitingForClick') {
        cube.className = 'showOnClick';
    }

    if (cursorPointerCover.className === 'cursorWaitingForClick') {
        cursorPointerCover.className = 'cursorshowOnClick';
    }

    if (clockInner.className === 'clockWaitingForClick') {
        clockInner.className = 'clockShowOnClick';
    }

    if (reloadHomeInner.className === 'showReloadHome') {
        reloadHomeInner.className = 'hideReloadHome';
    }
    
    if (overviewContent.className === 'hideBeforeButtonClick') {
        overviewContent.className = 'showOnbuttonclick';
    }  
}

cardBack.onclick = function() {
    alert("Menu button says: 'Thanks for stopping by. Site still underconstruction...'");
}


var toggleButton = 1;
var buttonTimer = 0;

        mainButton.onclick = function() { 
           card.classList.toggle('flipcard-on-button-click');
           cardScene.style.transition = 'margin-left 1s 0.05s';
           cardScene.style.webkitTransition = 'margin-left 1s 0.05s';

            switch(toggleButton) {
                case 2:
                    learnMore.style.display = 'none';
                    HeroAreaFooter.style.display = 'none';
                    document.documentElement.style.background = 'white'; 
                    
                    mainButton.innerHTML = '<code> Home </code>';
                    mainButtonContainer.style.width = '30px';
                    mainButtonContainer.style.marginRight = '50px';
                    mainButton.style.padding = '10px 20px';

                    underHeroArea.style.background = 'white';
                    contentContainers[0].style.display = 'block';
                    contentContainers[1].style.display = 'block';
                    contentContainers[2].style.display = 'block';
                    mainFooter.style.display = 'flex';

                    cardfront.style.filter = 'blur(5px)';
                    cardfront.style.webkitFilter = 'blur(5px)';

                    cardfront.style.transition = 'all 0.5s 0.05s';
                    cardfront.style.webkitTransition = 'all 0.5s 0.05s';

                    cardScene.style.marginLeft = '30px';
                   
                    if (reloadHomeInner.className === 'showReloadHome') {
                        reloadHomeInner.className = 'hideReloadHome';
                    }
                    
                    if (overviewContent.className === 'hideBeforeButtonClick') {
                        overviewContent.className = 'showOnbuttonclick';
                    }

                    //===================================
                     backToTop.style.display = "block";
                    //===================================

                    if (backToTopArrow.className === 'arrowCover-home') {
                        backToTopArrow.className = 'arrowCover-overview';
                    }

                    if (arrowColor.className === 'arrow-home') {
                        arrowColor.className = 'arrow-overview';
                    }



                    break;

                default:
                    learnMore.style.display = 'flex';
                    HeroAreaFooter.style.display = 'flex';
                    document.documentElement.style.background = '#158';

                    mainButton.innerHTML = '<code>Overview</code>';
                    mainButton.style.padding = '10px 15px';
                    mainButtonContainer.style.width = '85px';
                    mainButtonContainer.style.marginRight = '40px';
                    
                    contentContainers[0].style.display = 'none';
                    contentContainers[1].style.display = 'none';
                    contentContainers[2].style.display = 'none';
                    mainFooter.style.display = 'none';

                    cardfront.style.filter = 'none';
                    cardfront.style.webkitFilter = 'none';

                    cardScene.style.marginLeft = '0';

                    
                    if (reloadHomeInner.className === 'hideReloadHome') {
                        reloadHomeInner.className = 'showReloadHome';
                    }
                    
                    if (overviewContent.className === 'showOnbuttonclick') {
                        overviewContent.className = 'hideBeforeButtonClick';
                    }

                    /*======================================================
                    commenting this out for home section in overview page to 
                    rhyme with original homepage (homepage does not have back 
                    to top button due to unresolved overflow hidden issue)
                    =======================================================*/

                   /* if (backToTopArrow.className === 'arrowCover-overview') {
                        backToTopArrow.className = 'arrowCover-home';
                    }

                    if (arrowColor.className === 'arrow-overview') {
                        arrowColor.className = 'arrow-home';
                    }*/

                   // adding this instead:
                   backToTop.style.display = "none";
            }



            if (toggleButton == 1) {

                cube.className = 'hideOnHomeButtonClick';
                cursorPointerCover.className = 'hideCursorOnHomeButtonClick';
                clockInner.className = 'hideClockOnHomeButtonClick';

                    var buttonInterval = setInterval(showOnClick, 200);
                    function showOnClick() {
                        
                         buttonTimer+=0.2;
                         if (buttonTimer == 0.2) {

                            if (cube.className === 'hideOnHomeButtonClick') {
                                cube.className = 'showOnClick';
                            }                        

                             if (cursorPointerCover.className === 'hideCursorOnHomeButtonClick') {
                                cursorPointerCover.className = 'cursorshowOnClick';
                            }

                            if (clockInner.className === 'hideClockOnHomeButtonClick') {
                                clockInner.className = 'clockShowOnClick';
                            }

                             buttonTimer = 0;
                             clearInterval(buttonInterval);
                         }
                    }

                 /*=============================================
                Getting media query not easy with only switch 
                statement.
                ===============================================*/

                var deviceSizes = [
                    window.matchMedia( "(min-width: 768px)" ),
                    window.matchMedia( "(min-width: 790px)" )
                ]

                function respondToQuery() {
                    if (deviceSizes[0].matches) {
                        mainContentSide.style.gridTemplateRows = '1fr 0fr';
                        learnMore.style.marginTop = '4px';
                    }

                    if (deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '1fr 0fr';
                        learnMore.style.marginTop = '130px';
                    }

                    if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '1fr 0fr';
                        learnMore.style.marginTop = '4px';
                    }
                }

                for (var i=0; i<deviceSizes.length; i++) {
                    respondToQuery(deviceSizes[i]);
                    deviceSizes[i].addListener(respondToQuery);
                }

            }

            if (toggleButton == 2) {
                toggleButton = 1;
                toggleButton--;

                cube.className = 'waitingForClick';
                cursorPointerCover.className = 'cursorWaitingForClick';
                clockInner.className = 'clockWaitingForClick';

                var buttonInterval = setInterval(showOnClick, 200);
                function showOnClick() {
                     buttonTimer+=0.2;
                     if (buttonTimer == 0.2) {

                        if (cube.className === 'waitingForClick') {
                            cube.className = 'showOnClick';
                        }                        

                         if (cursorPointerCover.className === 'cursorWaitingForClick') {
                            cursorPointerCover.className = 'cursorshowOnClick';
                        }

                        if (clockInner.className === 'clockWaitingForClick') {
                            clockInner.className = 'clockShowOnClick';
                        }

                         buttonTimer = 0;
                         clearInterval(buttonInterval);
                     }
                }

                /*if (cube.className === 'waitingForBorder') {
                    cube.className = 'showCubeAfterBorder';
                }*/

                 /*=============================================
                Getting media query not easy with only switch 
                statement.
                ===============================================*/

                var deviceSizes = [
                    window.matchMedia( "(min-width: 768px)" ),
                    window.matchMedia( "(min-width: 790px)" )
                ]

                function respondToQuery() {
                    if (deviceSizes[0].matches) {
                        mainContentSide.style.gridTemplateRows = '420px 1fr';
                    }

                    if (deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '420px 1fr';
                    }

                    if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '370px 1fr';
                    }
                }

                for (var i=0; i<deviceSizes.length; i++) {
                    respondToQuery(deviceSizes[i]);
                    deviceSizes[i].addListener(respondToQuery);    
                }
            }
        
           toggleButton++;
        }
 

