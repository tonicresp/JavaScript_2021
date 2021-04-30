
			/* FunciónModificarBorder */
			function modificarBorder() {
				if (document.getElementById('miTabla').border == "1") {
					/* Paso a una anchura de 5 */
					document.getElementById('miTabla').border = "5";

				} else {
					/* Paso a una anchura de 1 */
					document.getElementById('miTabla').border = "1";
				}
			}

			/* Funci󮠭odificarCellspacing */
			function modificarCellspacing() {
				if (document.getElementById('miTabla').cellSpacing == "1") {
					/* Paso a un cellspacing a 40 */
					document.getElementById('miTabla').cellSpacing = "40";
				} else {
					/* Paso a un cellspacing a 1 */
					document.getElementById('miTabla').cellSpacing = "1";
				}
			}

			/* Funci󮠭odificarCellpadding */
			function modificarCellpadding() {
				if (document.getElementById('miTabla').cellPadding == "1") {
					/* Paso a un cellpadding a 40 */
					document.getElementById('miTabla').cellPadding = "40";

				} else {
					/* Paso a un cellpadding a 1 */
					document.getElementById('miTabla').cellPadding = "1";
				}
			}

			/* Función AgregarCaption */
			function AgregarCaption() {

				/* Inicialización visualización del título de la tabla */
				var miTitulo = document.getElementById('miTabla').createCaption();
				miTitulo.innerHTML = "Coches deportivos";

			}
