$(document).ready(function() {
	$.getJSON('https://api.github.com/users/gneatgeek/repos?callback=?', function(data) {
		var repos = data.data;

		$.each(repos, function(i, repo) {
			addRepo(repo);
		});
	});

	$.getJSON('https://api.github.com/users/gneatgeek/gists?callback=?', function(data) {
		var gists = data.data;

		$.each(gists, function(i, gist) {
			addGist(gist);
		});
	});

	function addRepo(repo) {
		var $list = $("<li>"),
			$link = $("<a>").attr({
				href : repo.html_url,
				target : "_blank"
			}).appendTo($list);

		$link.append($("<div>").addClass((repo.language || '').toLowerCase()));
		$link.append($("<h2>").text(repo.name));
		$link.append($("<h3>").text(repo.language || 'Undefined Language'));
		$link.append($("<p>").text((repo.description || "No description :\(")));
		$list.appendTo("#git");
	}

	function addGist(gist) {
		var $list = $("<li>"),
			$link = $("<a>").attr({
				href : gist.html_url,
				target : "_blank"
			}).appendTo($list);

		$link.append($("<div>"));
		$link.append($("<p>").text((gist.description || "No description :\(")));
		$list.appendTo("#gist");
	}


	$(".scroll").click(function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop : $($(this).attr("href")).offset().top - 40
		}, 1000);
	});

	$("#menu").stickyMenu();
	/*
	 $(function() {
	 $("<img />").attr("src", "images/gg_96x96.png").load(function() {
	 $("#headerImg").html(this);
	 })
	 });*/
});