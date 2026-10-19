import {load, setText} from "DOM";
import dayjs from 'dayjs';

const displayClock = () => {
    const time = dayjs().format('h:mm:ss A');
    const date = dayjs().format('ddd MMMM D, YYYY')
    setText("#time", time);
    setText("#date", date);
};

load(() => {
    displayClock();
    setInterval(displayClock, 1000);   
});