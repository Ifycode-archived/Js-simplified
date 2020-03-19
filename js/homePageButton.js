

//===============| Find More Elements |====================
var mainButtonContainer = document.getElementsByClassName('main-button-cover')[0];
var reloadHome = document.getElementById('reloadHome');

//===========| Button interval and click event |===========
var hmm = 0;
var buttonInterval = setInterval(forButton, 500);
function forButton() {
    hmm += 0.5;

    if(hmm >= 9.5) {
       
        clearInterval(buttonInterval);
        mainButton.innerHTML = '';
        mainButtonContainer.style.width = '85px';
    
        mainButton.style.justifyContent = 'center';
        mainButton.style.padding = '10px 15px';

        if (reloadHome.className === 'hideReloadHome') {
            reloadHome.className = 'showReloadHome';
        }
       
        var createLinkTag = document.createElement('a');
        mainButton.appendChild(createLinkTag);
        var linkTagA = document.getElementsByTagName('a')[1];
        linkTagA.innerHTML = '<code>Overview</code>';
        linkTagA.href = "overview/overview.html";

       
    }
    
}
   

