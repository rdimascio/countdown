'use strict';

import moment from 'moment-timezone';

export default function CountDown(params) {
	const defaultState = {
		target: 'countDown',
		end: '2/28/2040',
		sep: ':',
		abbr: false,
		expired: 'EXPIRED!',
		timezone: 'America/Los_Angeles',
	};

	const appState = {...defaultState, ...params};

	let timer = null;

	let END_DATE = moment(appState.end);
	END_DATE = END_DATE.tz(appState.timezone);

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
		},
	};

	const start = () => {
		const TARGET = document.getElementById(appState.target);
		const NOW = moment.tz(appState.timezone);
		const TIME_LEFT = END_DATE - NOW;

		if (TIME_LEFT < 0) {
			clearInterval(timer);
			TARGET.innerHTML = appState.expired;
			return;
		}

		const DAYS_LEFT = Math.floor(TIME_LEFT / TIME.day);
		const HOURS_LEFT = Math.floor((TIME_LEFT % TIME.day) / TIME.hour);
		const MINUTES_LEFT = Math.floor((TIME_LEFT % TIME.hour) / TIME.minute);
		const SECONDS_LEFT = Math.floor(
			(TIME_LEFT % TIME.minute) / TIME.second
		);

		TARGET.innerHTML = `${DAYS_LEFT} days ${appState.sep} `;
		TARGET.innerHTML += `${HOURS_LEFT} ${appState.abbr ? 'hrs' : 'hours'} ${
			appState.sep
		} `;
		TARGET.innerHTML += `${MINUTES_LEFT} ${
			appState.abbr ? 'mins' : 'minutes'
		} ${appState.sep} `;
		TARGET.innerHTML += `${SECONDS_LEFT} ${
			appState.abbr ? 'secs' : 'seconds'
		}`;

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
		clear: _clear,
	};
}
