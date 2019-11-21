(function() {
	const countdown = new CountDown({
		end: '11/20/2019 24:00:00',
		sep: ' ',
		abbr: true,
		expired: 'Gifts that connect us.',
	});

	countdown.render();
})();
