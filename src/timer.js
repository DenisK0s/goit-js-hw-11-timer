// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет - магазинах, страницах регистрации событий, во время технического обслуживания и т.д.


class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  startCountdown() {

    const endTime = this.targetDate.getTime();

    this.intervalId = setInterval(() => {

      const currentTime = Date.now();

      const timeDifference = endTime - currentTime;

      timeDifference <= 0 ? this.stopCountdown() : this.updateCountdown(timeDifference);

    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    alert('Time is over!')
  }

  getElementsLinks() {
    const timerRef = document.querySelector(this.selector);
    const daysRef = timerRef.querySelector('span[data-value="days"]');
    const hoursRef = timerRef.querySelector('span[data-value="hours"]');
    const minsRef = timerRef.querySelector('span[data-value="mins"]');
    const secsRef = timerRef.querySelector('span[data-value="secs"]');

    return { daysRef, hoursRef, minsRef, secsRef };
  }

  updateCountdown(time) {

    const { daysRef, hoursRef, minsRef, secsRef } = this.getElementsLinks();

    const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString();

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString();

    const secs = Math.floor((time % (1000 * 60)) / 1000).toString();

    daysRef.textContent = days.padStart(2, '0');
    hoursRef.textContent = hours.padStart(2, '0');
    minsRef.textContent = mins.padStart(2, '0');
    secsRef.textContent = secs.padStart(2, '0');
  }
};

const countdownTimer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

countdownTimer1.startCountdown()