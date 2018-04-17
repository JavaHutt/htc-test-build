console.log(100);
window.onload = function() {
    document.querySelector('.tab').addEventListener('click', fTabs);

    function fTabs(event) {
        console.log(event);
        if (event.target.className == 'tab__header') {
            //dataTab - number of tab to show
            var dataTab = event.target.getAttribute('data-tab');
            var tabH = document.getElementsByClassName('tab__header');
            for (var i = 0; i < tabH.length; i++) {
                tabH[i].classList.remove('active');
            }
            event.target.classList.add('active');
            var tabBody = document.getElementsByClassName('tab__body');
            for (i = 0; i < tabBody.length; i++){
                if (dataTab == i) {
                    tabBody[i].style.display = 'flex';
                }
                else {
                    tabBody[i].style.display = 'none';
                }
            }
        }
    } 
}