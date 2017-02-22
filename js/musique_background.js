var audioElement = document.createElement('audio'), musique = 0;
audioElement.setAttribute('src', '../Audio/Background.mp3');
audioElement.setAttribute('loop', '-1');
audioElement.volume = 0.1;

function swap_musique() {
	if(musique == 0) {
		var query = document.getElementById('play');
		query.id = "pause";
		audioElement.play();
		musique = 1;
		document.getElementById('texte_musique').innerHTML = 'arrêter la musique';
		query.style.transitionDuration = "0.4s";

	}
	else {
		var query = document.getElementById('pause');
		query.id = "play";
		audioElement.pause();
		musique = 0;
		audioElement.currentTime=0;
		document.getElementById('texte_musique').innerHTML = 'lancer la musique';
		query.style.transitionDuration = "0.4s";
	}
}