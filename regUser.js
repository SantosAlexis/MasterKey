window.addEventListener('load',cargar, true);

		function cargar(){
			
			if (localStorage.getItem('pass')) {
				b = localStorage.getItem('pass');
				//confirm(b);
				/*notas = document.getElementById('pin');
				notas.innerHTML = localStorage.getItem('pass');*/
			}
			if(localStorage.getItem('notaSave')){
				//alert('hay algo');
				b = localStorage.getItem('notaSave');
				elemento.innerHTML = b;
//				confirm(b);
				
				window.addEventListener('load',nuevaNota,true);
			}
			if(localStorage.getItem('naC')=="null"){

			}else{
				nuevaNota();
			
			}
			
			/*boton = document.getElementById('sav');
			boton.addEventListener('click',agregar,true);
			*//*bo = document.getElementById('regresar');
			bo.addEventListener('click',volver,true);*/
		}

		
		function guardar(){
			 var name= document.getElementById('nombre').value;
			var user = document.getElementById('correo').value;
			var contrasena = document.getElementById('pin').value;
			contraGuar= localStorage.getItem('pass', contrasena);
			localStorage.setItem('pass', contrasena); //Paso temporal**Solucionar error
			if(contrasena == contraGuar){
				alert("datos actualizados correctamente");
				localStorage.setItem('nam', name);
			    localStorage.setItem('tel', user);
			    localStorage.setItem('pass', contrasena);
			}else{
				confirm("La contraseña es incorrecta");
			}
			
		}
		function volver(){
			window.location.assign('index.html');
		}
		function login(){
			//alert("login");
			n = document.getElementById('clave').value;
			//confirm(n);
			g= localStorage.getItem('pass');
			if(g==n){
				n = document.getElementById('clave').value="";
				window.location.assign('home.html');
			}else{
				confirm("Pin Incorrecto");
			}
		}
		function agregar(){
			window.location.assign('reg.html');
			//nuevaNota();
						

		}
		function consultar(){
			window.location.assign('cons.html');
			/*y = document.getElementById('defCuent').value;
			alert(y);
			document.getElementById('def').value="No se el nombre de la cuenta";*/
		}
		function cancelCuen(){
			window.location.assign('home.html');
			b = localStorage.getItem('notaSave');
				elemento.innerHTML = b;
			localStorage.setItem('notaSave', elemento.innerHTML);
		}
		function guarCuen(){
			nc = document.getElementById('nameCuen').value;
			uc = document.getElementById('userCuen').value;
			pc =document.getElementById('passCuen').value;
			lc =document.getElementById('linkCuen').value;
			localStorage.setItem('naC', nc);
			localStorage.setItem('usC', uc);
			localStorage.setItem('paC', pc);
			localStorage.setItem('liC', lc);
			//nuevaNota();
			
			window.location.assign('home.html');
			
			//window.addEventListener('load',nuevaNota,true);

	   }
	   function nuevaNota(){
	   //	confirm('ejecutado');
			//si lleva VAR, solamente lo conoce esta funcion
			//Cuando es global, sin VAR, la conocen las demas funciones
					
			if(localStorage.getItem('notaSave')==null){
			//alert("confirm");
			elemento.innerHTML += "<br>";
			localStorage.setItem('notaSave', elemento.innerHTML);
			}else{
			//	alert("else");
			namState = localStorage.getItem('naC');
			namPass=localStorage.getItem('paC');
			namUser=localStorage.getItem('usC');
			namLink=localStorage.getItem('liC');
			elemento = document.getElementById('elemento');
			ntc = document.getElementById('defCuent');
			//confirm(ntc);
			elemento.innerHTML += "<div id="+"elemento"+"><div class="+"elemento-datos"+"><h1 id="+"defCuent"+">"+namState+"</h1></div><div class="+"elemento-boton"+"><h3 id="+"defPass"+">"+namUser+"</h3><h3 id="+"defUser"+">"+namPass+"Usuario</h3><h3 id="+"defUrl"+">"+namLink+"</h3></div></div>";
			localStorage.setItem('notaSave', elemento.innerHTML);
			localStorage.setItem('frstName', namState);
			localStorage.setItem('naC', null);
			}
	}
