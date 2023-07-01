import React from "react";

const TimerBlock = () => {

    const [time, setTime] = React.useState(null)

    function countdown(targetDate) {
        const currentDate = new Date();

        const timeDiff = targetDate.getTime() - currentDate.getTime();

        if (timeDiff <= 0) {
            return 'Отсчет завершен';
        }

        const seconds = Math.floor(timeDiff / 1000) % 60;
        const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Формируем строку обратного отсчета
        let countdownString = '';

        if (days > 0) {
            countdownString += days + ' дней :';
        }
        if (hours > 0) {
            countdownString += hours + ' часов : ';
        }
        if (minutes > 0) {
            countdownString += minutes + ' м ';
        }
        if (seconds > 0) {
            countdownString += seconds + ' с ';
        }

        setTime(countdownString.trim())

        return countdownString.trim();

    }

    const targetDate = new Date(2023, 6, 20, 12, 16, 0);


    React.useEffect(() => {
        const timerID = setInterval(() => countdown(targetDate), 1000);
        return () => {
            return clearInterval(timerID)
        };
    }, []);


    return (
        <div>
            {time}
        </div>
    );
}

export default TimerBlock;