<script>
	// ここに処理を追加
	$("#pull").on("click", function () {
		const min = 1;
		const max = 100;
		const omikuzinumber = Math.floor(Math.random() * (max - min + 1));
		console.log(omikuzinumber);

		if (omikuzinumber <= 5) {
			$("#result").html("HIIT");
		} else if (omikuzinumber > 5 && omikuzinumber <= 20) {
			$("#result").html("スクワット");
		} else if (omikuzinumber > 20 && omikuzinumber <= 45) {
			$("#result").html("腕立て伏せ");
		} else {
			$("#result").html("腹筋");
		}

		if (omikuzinumber <= 5) {
  $("#result-img").html('<img src="https://example.com/images/hiit.jpg" alt="HIIT">');
} else if (omikuzinumber > 5 && omikuzinumber <= 20) {
  $("#result-img").html('<img src="https://example.com/images/squat.jpg" alt="スクワット">');
} else if (omikuzinumber > 20 && omikuzinumber <= 45) {
  $("#result-img").html('<img src="https://example.com/images/pushup.jpg" alt="腕立て伏せ">');
} else {
  $("#result-img").html('<img src="https://example.com/images/situp.jpg" alt="腹筋">');
}


		if (omikuzinumber <= 5) {
			$("#result-movie").html('<a href="https://www.youtube.com/watch?v=cQsupVhKcDg">MOVIE</a>');
		} else if (omikuzinumber > 5 && omikuzinumber <= 20) {
			$("#result-movie").html('<a href="https://www.youtube.com/watch?v=cQsupVhKcDg">MOVIE</a>');
		} else if (omikuzinumber > 20 && omikuzinumber <= 45) {
			$("#result-movie").html('<a href="https://www.youtube.com/watch?v=cQsupVhKcDg">MOVIE</a>');
		} else {
			$("#result-movie").html('<a href="https://www.youtube.com/watch?v=cQsupVhKcDg">MOVIE</a>');
		}
	});

</script>
