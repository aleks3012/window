const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        // variable
        let callEngineerBtn = document.querySelectorAll(triggerSelector),
            modalEngineer = document.querySelector(modalSelector),
            cross = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();
        
        //Показать окно
        callEngineerBtn.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                windows.forEach(item => {
                   item.style.display = 'none';
                });
                modalEngineer.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
        });

        });
         // скрыть окно крестиком
        cross.addEventListener('click', ()=> {
            windows.forEach(item => {
                item.style.display = 'none';
             });
            modalEngineer.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
        // скрыть окно нажатием на подложку
        modalEngineer.addEventListener ('click', (e) => {
            if (e.target === modalEngineer && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                 });

                modalEngineer.style.display = 'none';
                document.body.style.overflow = '';
            }
        
        });

        
    }

    function showModalByTime(selector, time) {
    // модальное окно появляется через time c. после открытия страницы
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }


    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};
export default modal;

