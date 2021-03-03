const timer = (id, deadline) => {
    //добавляет ноль перед одинарным числом
    const addZero = (num) => {
        if (num <= 9) {
            return num = "0" + num;
        }
        else {
            return num;
        }
    };
    //возвращает объект оставшегося времени
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60) % 24)),
        days = Math.floor(t/(1000*60*60*24));

        return {
            'total' : t,
            'days': days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    };
    //запускает таймер
    const setClock = (selector, endtime) => {
        let timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        //записывает значение времени в нужную секцию
        function updateClock() {

            let t = getTimeRemaining(endtime);
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            //устанвливает 00 когда время истечет
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    };

   setClock(id, deadline);



};

export default timer;