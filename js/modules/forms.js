import checkNumInputs from './checkNumInputs';

// const forms = ()  => {
//     const form = document.querySelectorAll('form'),
//         inputs = document.querySelectorAll('input');

//     checkNumInputs('input[name="user_phone"]');

//     const message = {
//         loading: 'Загрузка...',
//         success: 'Спасибо! Скоро мы с вами свяжемся',
//         failure: 'Что-то пошло не так...'
//     };

//     const postData = (url, data) => {
        
//         let request = new XMLHttpRequest();
       
//         request.upload.onloadstart = function() {
//             document.querySelector('.status').textContent = message.loading;  
//         };

//         request.upload.onload = function() {
//             document.querySelector('.status').textContent = message.success;
//         };

//         request.upload.onerror = function() {
//             document.querySelector('.status').textContent = message.failure;
//         };

//         request.upload.onloadend = function() {
//             clearInputs();
//                     setTimeout(() => {
//                         document.querySelector('.status').remove();
//                     }, 5000);
//         };

//         request.open('POST', url);
//         request.send(data);
//     };

    

//     const clearInputs = () => {
//         inputs.forEach(item => {
//             item.value = '';
//         });
//     };

//     form.forEach(item => {
//         item.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             item.appendChild(statusMessage);

//             const formData = new FormData(item);

//             postData('assets/server.php', formData);
//         });
//     });
// };












const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;