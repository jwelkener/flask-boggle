class BoggleGame {
	/* make a new game at this DOM id */

	constructor(boardId, secs = 60) {
		this.secs = secs; // game length
		this.showTimer();

		this.score = 0;
		this.words = new Set();
		this.board = $("#" + boardId);

		// every 1000 msec, "tick"
		this.timer = setInterval(this.tick.bind(this), 1000);

		$(".add-word", this.board).on("submit", this.handleSubmit.bind(this));
	}

	/* show word in list of words */

	showWord(word) {
		$(".words", this.board).append($("<li>", { text: word}))
	}

	/* show score in html */

	showScore() {
		$(".score", this.board).text(this.score);
	}

	/* show a status message */

	showMessage(msg, cls) {
		$(".msg", this.board)
			.text(msg)
			.removeClass()
			.addClass(`msg ${cls}`);
	}
}

/* handle submission of word: if unique and valid, score & show */