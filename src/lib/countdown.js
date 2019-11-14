export default function CountDown(params) {
	const defaultParams = {
		id: 'countdown',
		end: '2/28/2040',
		separator: ':',
		expiredText: 'EXPIRED!'
	}

	const params = {...defaultParams, ...params};

	const END_DATE = new Date(params.end);
	const TIME = {
		second: 1000,
		get minute() {
			return this.second * 60
		},
		get hour() {
			return this.minute * 60
		},
		get day() {
			this.hour * 24
		}
	}

	let timer;

	const showRemaining = () => {
		const TARGET = document.getElementById(params.id);
		const NOW = new Date();
		const TIME_LEFT = END_DATE - NOW;

		if (TIME_LEFT < 0) {
			clearInterval(timer);
			TARGET.innerHTML = params.expiredText;
			return;
		}

		const DAYS_LEFT = Math.floor(TIME_LEFT / TIME.day);
		const HOURS_LEFT = Math.floor((TIME_LEFT % TIME.day) / TIME.hour);
		const MINUTES_LEFT = Math.floor((TIME_LEFT % TIME.hour) / TIME.minute);
		const SECONDS_LEFT = Math.floor((TIME_LEFT % TIME.minute) / TIME.second);

		TARGET.innerHTML = DAYS_LEFT + ` days ${params.separator} `;
		TARGET.innerHTML += HOURS_LEFT + ` hrs ${params.separator} `;
		TARGET.innerHTML += MINUTES_LEFT + ` mins ${params.separator} `;
		TARGET.innerHTML += SECONDS_LEFT + ' secs';
	}

	timer = setInterval(showRemaining, 1000);
}
