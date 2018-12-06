window.addEventListener('load',cargar, true);

		function cargar(){
			
			if (localStorage.getItem('pass')) {
				notas = document.getElementById('pass');
				notas.innerHTML = localStorage.getItem('pass');
			}
		}

		function volver(){
			window.location.assign('index.html');
		}
		function registrar(){
			window.location.assign('regUser.html');

		}
