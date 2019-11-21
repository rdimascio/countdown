import moment from 'moment-timezone';

function CountDown(params) {
  const defaultState = {
    target: 'countDown',
    end: '2/28/2040',
    separator: ':',
    expiredText: 'EXPIRED!'
  };
  const appState = { ...defaultState,
    ...params
  };
  let timer = null;
  let END_DATE = moment(appState.end);
  END_DATE = END_DATE.tz('America/Los_Angeles');
  const TIME = {
    second: 1000,

    get minute() {
      return this.second * 60;
    },

    get hour() {
      return this.minute * 60;
    },

    get day() {
      return this.hour * 24;
    }

  };

  const start = () => {
    const TARGET = document.getElementById(appState.target);
    const NOW = moment.tz('America/Los_Angeles');
    const TIME_LEFT = END_DATE - NOW;

    if (TIME_LEFT < 0) {
      clearInterval(timer);
      TARGET.innerHTML = appState.expiredText;
      return;
    }

    const DAYS_LEFT = Math.floor(TIME_LEFT / TIME.day);
    const HOURS_LEFT = Math.floor(TIME_LEFT % TIME.day / TIME.hour);
    const MINUTES_LEFT = Math.floor(TIME_LEFT % TIME.hour / TIME.minute);
    const SECONDS_LEFT = Math.floor(TIME_LEFT % TIME.minute / TIME.second);
    TARGET.innerHTML = DAYS_LEFT + ' days ' + appState.separator + ' ';
    TARGET.innerHTML += HOURS_LEFT + ' hours ' + appState.separator + ' ';
    TARGET.innerHTML += MINUTES_LEFT + ' minutes ' + appState.separator + ' ';
    TARGET.innerHTML += SECONDS_LEFT + ' seconds';
    return;
  };

  const _render = () => {
    timer = setInterval(start, 1000);
  };

  const _clear = () => {
    clearInterval(timer);
    document.getElementById(appState.target).innerHTML = '';
    return;
  };

  return {
    render: _render,
    clear: _clear
  };
}

export default CountDown;
