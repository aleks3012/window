const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    // variable
    let header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

        hideTabContent();
        showTabContent();

    function hideTabContent() {
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabContent(i = 0) {
       tab[i].classList.add(activeClass);
       console.log(content);
       content[i].style.display = display;
    }

    header.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            console.log(target.parentNode);
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    console.log(item);
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default tabs;