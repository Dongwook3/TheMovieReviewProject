(function() {
	var ext,
		audioSource,
		targetSrc,
		myPlayer = document.querySelector("#myVideoPlayer"),
		genreTitle = document.querySelector("#genreTitle"),
		movieTitle = document.querySelector("#trailers_title"),
		description = document.querySelector("#trailers_desc"),
		director = document.querySelector("#trailers_director"),
		stars = document.querySelector("#trailers_stars"),
		arrayIndex = 0,
		arrayName = null,
		timeCounter = document.querySelector('#trackTime'),
		pBar = document.querySelector('#prog'),
		togglePlay = document.querySelector("#playButton"),
		muteTrack = document.querySelector("#muteButton"),
		shuffleBut = document.querySelector("#shuffle"),
		volSlider = document.querySelector("#volumeSlider"),
		volControlRemoved = false,
		genreButtons = document.querySelectorAll('#buttonHolder img'),
		dropTarget = document.querySelector('#theTarget'),
		nextTrack = null;

	// initial setup => some default values
	volSlider.value = 100;

	// get the current audio source
	setTimeout(function() {
		videoCurrentSource = myPlayer.currentSrc.toString();
		ext = videoCurrentSource.substr(videoCurrentSource.lastIndexOf("."));
	}, 500);

	// methods
	function controlVol() {
		myPlayer.volume = (volSlider.value / 100);
	}

	function shuffleMode() {
		shuffleBut.classList.toggle("shuffleMode");
	}

	function playToggle() {
		togglePlay.classList.toggle('pauseMode');

		if (myPlayer.paused) {
			myPlayer.play();
		} else {
			myPlayer.pause();
		}
	}

	function audioMute() {
		if (volControlRemoved) {
			// tween volume back up
			console.log("tween vol up");
			this.classList.toggle("muteMode");
			TweenMax.to(myPlayer, 0.7, {volume:(volSlider.value / 100), onComplete:checkVol});
			volControlRemoved = false;
		} else {
			TweenMax.to(myPlayer, 0.7, {volume:0});
			myPlayer.removeEventListener("timeupdate", controlVol, false);
			this.classList.toggle("muteMode");
			volControlRemoved = true;
		}
	}

	function checkVol() {
		myPlayer.addEventListener("timeupdate", controlVol, false);
	}

	function toggleMuteClass() {
		muteTrack.classList.toggle("muteMode");
		myPlayer.removeEventListener("volumechange", toggleMuteClass, false);
	}
		

	function updateBar() {
		//console.log("updateBar fired");
		var percent = Math.floor((100 / myPlayer.duration) * myPlayer.currentTime);

		// try to run what's in the brackets; if there's an error, catch / handle that without breaking the application
		try {
			pBar.value = percent;
		} catch(e) {
			console.log('caught a momentary non-critical error: ', e);
		}
		
	}

	// can listen for the "end" of an audio or video file, which fires an event -> can do something with that (in this case load the next track, and then figure out what the one after that will be)
	function logEnded() {
		// next track set on click
		if (nextTrack) {
			playTrack(nextTrack);

			getNextTrack(null); // go find the next track in the list, or start over at the beginning
		}
	}

	function drag(e) {
		var theData = e.dataTransfer.setData('storedId', e.target.id);

		targetSrc = e.target.src;
	}

	function allowDrop(e){ e.preventDefault(); }

	// do an ajax call on the drop and build stuff in a .done function
	function drop(e) {
		e.preventDefault();
		//debugger;

		var draggedData = e.dataTransfer.getData('storedId');

		e.target.src = targetSrc;

		$.ajax({
			url: 'includes/ajaxQuery.php',
			types: 'GET',
			data: { trailers_genre: draggedData }
		})
	
		.done(function(data) {
			//console.log(data);

			if (data && data !=="null") {
				data = JSON.parse(data),

				buildMovieList(data);
			} else {
				console.log('something went wrong with your query');
			}
		})

		.fail(function(ajaxCall, error, status){
			console.log('error');
			console.dir(ajaxCall);
		})
	}
	// ajax call should build this
	function buildMovieList(movielist) {
		genreTitle.innerHTML = movielist[0].trailers_genre;
		var loadedTracks = document.querySelector(".trackHolder");
		var movieInfo = document.querySelector(".movieInfo");

		loadedTracks.innerHTML = '';

		[].forEach.call(movielist, function(track, index) {
			var newTrack = document.createElement('li'),
				trackLabel = document.createElement('h3'),
				movieDesc = document.createElement('p'),
				director = document.createElement('p'),
				stars = document.createElement('p');

			stars.classList.add('starName');
			director.classList.add('direcName');	
			movieDesc.classList.add('movieDesc');
			trackLabel.classList.add('trackNameStyle');
			newTrack.dataset.video = track.trailers_video;
			trackLabel.dataset.maintitle = track.trailers_title;
			movieDesc.dataset.desc = track.trailers_desc;
			director.dataset.direc = track.trailers_director;
			stars.dataset.star = track.trailers_stars;
			trackLabel.innerHTML = track.trailers_title;
			movieDesc.innerHTML = track.trailers_desc;
			director.innerHTML = "Director: " + track.trailers_director;
			stars.innerHTML = "Stars: " + track.trailers_stars;
			// add the pieces to the containing list element
			newTrack.appendChild(trackLabel);
			newTrack.appendChild(movieDesc);
			newTrack.appendChild(director);
			newTrack.appendChild(stars);
			loadedTracks.appendChild(newTrack);
		});

		// add event handling to new track elements
		$('.trackHolder li').on('click', function() {
			var newTrack = this.dataset.video;
			playTrack(newTrack);

			if (this.nextElementSibling) {
				nextTrack = this.nextElementSibling.dataset.track;
			} else nextTrack = movielist[0].track_name;
		});
		
		//mock a click
		$('.trackHolder li').first().trigger('click');
	}

	/*function renderMovieInfo(movie) {
		movieTitle.innerHTML = movie[0].trailers_video;
		console.log(movieTitle.innerHTML);
		//var currentThumb = $('#' + movie.model);

		var animIndex = parseInt(currentThumb.data('roundaboutindex'), 8);
		$('#cars').roundabout('animateToChild', animIndex);

		$('.trackHolder li').addClass('nonActive'); // for collections, use jQuery (more than oneelement)
		$( movie.trailers_video).removeClass('nonActive');

		//$('.subhead span').text(" mini Cooper " + movie.model);
		$('.trailers_title').text(movie.trailers_title);
		console.log (movie);
		$('.trailers_desc').text(movie.trailers_desc);
		$('.trailers_director').text(movie.trailers_director);
		$('.trailers_director').text(movie.trailers_director);
	}*/


	function getNextTrack(element) {
		if (!element) {
			element = document.querySelector('[data-track="' + nextTrack + '"]');

			if (element.nextElementSibling) {
				nextTrack = element.nextElementSibling.dataset.track;
			} else {
				nextTrack = $('.trackHolder li').first().data('track');
			}
		}
	}

	function playTrack(whichTrack) {
		// update a media source and then load and play it (don't forget the last 2 steps)
		myPlayer.src = "video/" + whichTrack + ext;

		myPlayer.load();
		myPlayer.play();
		
	}

	// parses the total time of the audio (or video) file, shows the elapsed / current playhead time
	function displayTime() {
		var minutes = Math.floor(myPlayer.currentTime / 60);
		var seconds = Math.round(myPlayer.currentTime % 60);
		
		var durMinutes = Math.floor(myPlayer.duration / 60);
		var durSeconds = Math.round(myPlayer.duration % 60);
		
		if (durSeconds < 10) {
			durSeconds = "0" + durSeconds;
		}
		
		if (seconds < 10) {
			seconds = "0" + seconds;
		} else if (seconds == 60) {
			seconds = "00";
		}

		// show the calculated time in the control bar
		timeCounter.innerHTML = minutes + ":" + seconds + " / " + durMinutes + ":" + durSeconds;
	}

	// event handling
	myPlayer.addEventListener("ended", logEnded, false);
	myPlayer.addEventListener("timeupdate", displayTime, false);
	myPlayer.addEventListener("timeupdate", updateBar, false);
	myPlayer.addEventListener("timeupdate", controlVol, false);

	theTarget.addEventListener('drop', drop, false);
	theTarget.addEventListener('dragover', allowDrop, false);
	
	togglePlay.addEventListener("click", playToggle, false);
	muteTrack.addEventListener("click", audioMute, false);
	shuffleBut.addEventListener("click", shuffleMode, false);
	
	volSlider.addEventListener("change", controlVol, false);

	[].forEach.call(genreButtons, function(button) {
		button.addEventListener('dragstart', drag, false);
	});
})();		