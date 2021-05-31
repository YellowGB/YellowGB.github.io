var initDot = document.getElementById("loading");
	var loading = setInterval(function(){
		if(initDot.innerHTML.length == 5) {
			initDot.innerHTML = "";
		} else {
			initDot.innerHTML += ".";
		}
	}, 350); // Dot Speed

var loadingMessage = document.getElementById('loadingH1');
setTimeout(function(){
		clearInterval(loading);
		loadingMessage.style.display = 'none';
    }, 1500);

var initProgram = setTimeout(function(){
	var greeting = "NOUVEL ARRIVANT DETECTE";
	var message = "LANCEMENT PROTOCOLE CURICULUM VITAE POUR @YELLAWGB";
	var identityDiv = document.getElementById('identity-results');
	var name = "NOM : GUILLAUME BROSSARD";
	var alias = "ALIAS : YELLAWGB";
	var occupation = "METIER : DEVELOPPEUR INFORMATIQUE";

	var i = 0;
	loading = setInterval(function(){
		if(document.getElementById("greeting").innerHTML.length < greeting.length) {
			document.getElementById("greeting").innerHTML = greeting.substring(0,i) + "_";
			i++;
		} else {
			document.getElementById("greeting").innerHTML = greeting;

			i = 0;
			loading = setInterval(function(){
				document.getElementById("iMessage").className = "fas fa-angle-right";
				if(document.getElementById("message").innerHTML.length < message.length) {
					document.getElementById("message").innerHTML = message.substring(0,i) + "_";
					i++;
				} else {
					document.getElementById("message").innerHTML = message;
				}
			}, 50);
		}
	}, 50);

	/* CHARGEMENT CV..... */
	var timeoutTimer = 50*greeting.length + 50*message.length + 500;

	loadingMessage = document.getElementById('loadingMessage2');
	setTimeout(function(){
			clearInterval(loading);
			loadingMessage.style.visibility = "visible";
		}, timeoutTimer);

	initDot = document.getElementById("alpha-loading");
		loading = setInterval(function(){
			if(initDot.innerHTML.length == 6) {
				initDot.innerHTML = "";
			} else {
				initDot.innerHTML += ".";
			}
		}, 350);

	timeoutTimer += 350*7;
	setTimeout(function(){
			clearInterval(loading);
			loadingMessage.style.display = 'none';

			/* Nom */
			var j = 0;
			loading = setInterval(function(){
				document.getElementById("iName").className = "fas fa-angle-right";
				if(document.getElementById("name").innerHTML.length < name.length) {
					document.getElementById("name").innerHTML = name.substring(0,j) + "_";
					j++;
				} else {
					document.getElementById("name").innerHTML = name;
					setTimeout(function(){
						/* Alias */
						var j = 0;
						loading = setInterval(function(){
							document.getElementById("iAlias").className = "fas fa-angle-right";
							if(document.getElementById("alias").innerHTML.length < alias.length) {
								document.getElementById("alias").innerHTML = alias.substring(0,j) + "_";
								j++;
							} else {
								document.getElementById("alias").innerHTML = alias;
							}
						}, 50);
					}, 2000);
					}
				}, 50);
				/* Métier */
				setTimeout(function(){
					j = 0;
					loading = setInterval(function(){
						document.getElementById("iOcccupation").className = "fas fa-angle-right";
						if(document.getElementById("occupation").innerHTML.length < occupation.length) {
							document.getElementById("occupation").innerHTML = occupation.substring(0,j) + "_";
							j++;
						} else {
							document.getElementById("occupation").innerHTML = occupation;
						}
					}, 50);
				}, 50*name.length + 50*alias.length + 2*2000);
		}, timeoutTimer);

	timeoutTimer += 50*name.length + 50*alias.length + 3*2000;
	setTimeout(function(){
			clearInterval(loading);
			document.getElementById("identity-results").style.display = 'none';
		}, timeoutTimer);

	setTimeout(function(){
		document.getElementById("barHighId").style.display = 'inline';
	}, timeoutTimer + 500);

	setTimeout(function(){
		document.getElementById("cv").style.display = 'block';
	}, timeoutTimer + 1000);
}, 1500);

initProgram();
