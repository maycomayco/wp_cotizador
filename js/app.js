/* 
	PARAMETROS GENERALES
	se obtiene como parametro un objeto con configuraciones llamado params
*/

// variable de autenticacion
var auth = {"Authorization": "Basic " + btoa('api_user' + ":" + 'pass2017APIREST')};

//  codigo empresa
var codigo_productor = 1;

//	logos aseguradoras
var imageNoImage = 'http://via.placeholder.com/200x70';
var imgMeridionalSeguros = params.plugin_path + 'img/meridional-seguros.png';
var imgSancorSeguros = params.plugin_path + 'img/sancorseguros.png';
var imgMercantilAndina = params.plugin_path + 'img/mercantil-andina.png';
var imgZurich = params.plugin_path + 'img/zurich.png';

// url de API
var urlMarca = 'https://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/marca';
var urlGrupo = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/grupo';	//se debe completar con el parametro
var urlAnios = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/anios';	//se debe completar con los parametros
var urlModelos = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/modelo';	//se debe completar con los parametros
var urlProvincias = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/provincia';
var urlLocalidades = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/localidad';	//lleva parametros

var urlMercantilAndina = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/cotizarMercantilAndina';
var urlSancor = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/cotizarSancor';
var urlZurich = 'http://cotizadorseguros.kinexo.com/cotizadorbk/web/api.php/cotizarZurich';

//  identificadores aseguradoras
var idMeridional = 'resultado-meridional';
var idMercantilAndina = 'resultado-mercantil-andina';
var idSancor = 'resultado-sancor';
var idZurich = 'resultado-zurich';

var nombreMeridional = 'La Meridional';
var nombreMercantilAndina = 'Mercantil Andina';
var nombreSancor = 'Sancor Seguros';
var nombreZurich = 'Zurich';

// // identificadores columnas
// var rc = 'rc'; // Resposabilidad Civil
// var tc = 'tc'; //	Terceros completos
// var tcf = 'tcf'; // Terceros completos Full
// var tcfg = 'tcfg'; //	Terceros completos Full + Granizo
// var tr = 'tr'; //	Todo riesgo
//
// AUX FUNCTIONS
//

/* habilitar campos del form */
function habilitarCampo(id) {
	jQuery(id).attr('disabled', false);
}

/* deshabilitar campos del form */
function deshabilitarCampo(id) {
	jQuery(id).attr('disabled', true);
}

/* seteo de error en select control */
function setErrorSelect(nameControl, error) {
	if (jQuery('#' + nameControl +' option:selected').val()==-1) {
		jQuery('.' + nameControl + '-group').toggleClass('has-error')
		jQuery('.' + nameControl + '-group span.help-block').show();
		return true;
	}
}

/* removemos el error en el select */
function removeErrorSelect(nameControl, error) {
	if (jQuery('#' + nameControl +' option:selected').val()==-1) {
		jQuery('.' + nameControl + '-group').toggleClass('has-error')
		jQuery('.' + nameControl + '-group span.help-block').show();
	}
}

/* seteo de error en input control */
function setErrorInput(nameControl, error) {
	var valor = jQuery('#' + nameControl).val();
	if (!valor) {
		jQuery('.' + nameControl + '-group').toggleClass('has-error');
		jQuery('.' + nameControl + '-group span.help-block').show();
		error = true;
		return error;			
	}
}

/* quitamos el error en input control */
function unsetErrorInput(nameControl, error) {
	// var valor = jQuery('#' + nameControl).val();
	// if (!valor) {
	jQuery('.' + nameControl + '-group').toggleClass('has-error');
	jQuery('.' + nameControl + '-group span.help-block').hide();
	// error = true;
	// return error;			
	// }
}

/* armado de cogido de auto */
function codigoAuto() {
	var marca = jQuery("#marca option:selected").val();
	var modelo = jQuery("#modelo option:selected").val();
	
	// completamos con 0 hasta completar 4 caracteres
	while (jQuery.trim(modelo).length < 4) {
		modelo = '0' + modelo;
	}
	return marca + modelo;
}

/* 
	ELIMINAR
*/
function dataSinEdad() {
	var data = {
		'codigo_empresa' : codigo_productor,
		'codigo_auto' : codigoAuto(),		
		'anio' : jQuery("#anio option:selected").val(),
		'codigo_provincia' : jQuery("#provincia option:selected").val(),
		'codigo_localidad' : jQuery("#localidad option:selected").val(),
	}
	return data;
}

/* 
	ELIMINAR LUEGO DE LA IMPLEMENTACION DEL ARRAY PARA COMPAÑIAS
*/
function dataFull() {
	var data = {
		'codigo_empresa' : codigo_productor,
		'codigo_auto' : codigoAuto(),		
		'anio' : jQuery("#anio option:selected").val(),
		'codigo_provincia' : jQuery("#provincia option:selected").val(),
		'codigo_localidad' : jQuery("#localidad option:selected").val(),
		'edad' : jQuery("#edad").val(),
		'sexo' : jQuery("#genero option:selected").val(),
	}
	return data;
}

function dataEmailGeneral() {
	var data = {
		'nombre' : jQuery('#nombre').val(),
		'apellido' : jQuery('#apellido').val(),
		'email' : jQuery("#email").val(),
		'telefono' : jQuery("#telefono").val(),
		'marca' : jQuery("#marca option:selected").text(),
		'grupo' : jQuery("#grupo option:selected").text(),
		'anio' : jQuery("#anio option:selected").text(),
		'modelo' : jQuery("#modelo option:selected").text(),
		'provincia' : jQuery("#provincia option:selected").text(),
		'localidad' : jQuery("#localidad option:selected").text(),
		'edad' : jQuery("#edad").val(),
		'genero' : jQuery("#genero option:selected").text(),
		'asunto' : 'Interesado => ' + jQuery('#nombre').val() + ' ' + jQuery('#apellido').val(),
		'cc' : 0
	};
	return data;
}

function dataEmailPorCobertura() {
	var wrapper = jQuery('#wrapper-cotizacion');

	var data = {
		// datos interesado
		'nombre' : jQuery('#nombre').val(),
		'apellido' : jQuery('#apellido').val(),
		'email' : jQuery("#email").val(),
		'telefono' : jQuery("#telefono").val(),
		'marca' : jQuery("#marca option:selected").text(),
		// datos vehiculo
		'grupo' : jQuery("#grupo option:selected").text(),
		'anio' : jQuery("#anio option:selected").text(),
		'modelo' : jQuery("#modelo option:selected").text(),
		'provincia' : jQuery("#provincia option:selected").text(),
		'localidad' : jQuery("#localidad option:selected").text(),
		'edad' : jQuery("#edad").val(),
		'genero' : jQuery("#genero option:selected").text(),
		'asunto' : 'Interesado => ' + jQuery('#nombre').val() + ' ' + jQuery('#apellido').val(),
		// datos cobertura
		'compania' : wrapper.find('.compania').val(),
		'cobertura' : wrapper.find('h6#cobertura').text(),
		'costo' : wrapper.find('.costo h3').text(),
		'codigo' : wrapper.find('.codigo').text(),
		'descripcion' : wrapper.find('.descripcion p').text(),
		'periodo' : wrapper.find('.periodo p').text(),
		'cc' : 1

	};
	return data;
}

/* remove select options */
function resetSelect(controlamos, afectamos) {
	// chequeamos el control 
	jQuery(controlamos).on('change', function() {
		// eliminamos items del otro control
		jQuery(afectamos).find('option', this).not(':eq(0)').remove();
	});
}

// 
// 	GET DATOS DESDE LA API
// 

/* obtener marcas de vehiculos */
function getMarcas(){
	jQuery.ajax({
		type: "GET",
		url: urlMarca,
		dataType: 'json',
		async: true,
		headers: auth,
		beforeSend: function () {
			jQuery('.marca-group').toggleClass('no-loading');		
			jQuery('#marca').toggleClass('loading');
		},
		success: function (resp){
			resp.forEach(function(marca) {
				jQuery('#marca').append('<option value="' + marca.codigo_marca + '">' + marca.nombre_marca + '</option>');
			});
			// jQuery('#marca').toggleClass('loading');
		},
		error: function(){
			console.error('Fallo: ' + urlMarca);
		},
		complete: function(){
			habilitarCampo(marca);
			jQuery('#marca').toggleClass('loading');
			jQuery('.marca-group').toggleClass('no-loading');				
			
		}
	});
}

/* obtener grupos de vehiculos */
function getGrupos(marca){
	resetSelect('#marca','#grupo');
	jQuery.ajax({
		type: "GET",
		url: urlGrupo + '/' + marca,
		dataType: 'json',
		async: true,
		headers: auth,
		beforeSend: function () {
			jQuery('.grupo-group').toggleClass('no-loading');		
			jQuery('#grupo').toggleClass('loading');
		},
		success: function (resp){
			resp.forEach(function(grupo) {
				jQuery('#grupo').append('<option value="' + grupo.codigo_grupo + '">' + grupo.nombre_grupo + '</option>');
			});
		},
		error: function(){
			console.error('Fallo: ' + urlGrupo);
		},
		complete: function(){
			habilitarCampo('#grupo');
			jQuery('.grupo-group').toggleClass('no-loading');		
			jQuery('#grupo').toggleClass('loading');
		}
	});
}

/* obtener anios de vehiculos */
function getAnios(marca, grupo){
	resetSelect('#grupo','#anio');
	jQuery.ajax({
		type: "GET",
		url: urlAnios + '/' + marca + '/' + grupo,
		dataType: 'json',
		async: true,
		headers: auth,
		beforeSend: function () {
			jQuery('.anio-group').toggleClass('no-loading');		
			jQuery('#anio').toggleClass('loading');
		},
		success: function (resp){
			jQuery.each(resp, function(i, val) {
				jQuery('#anio').append('<option value="' + i + '">' + val + '</option>');
			});
		},
		error: function(){
			console.error('Fallo: ' + urlGrupo);
		},
		complete: function(){
			habilitarCampo('#anio');
			jQuery('.anio-group').toggleClass('no-loading');		
			jQuery('#anio').toggleClass('loading');
		}
	});
}

/* obtener modelos de vehiculos */
function getModelos(marca, grupo, anio){
	resetSelect('#anio','#modelo');
	jQuery.ajax({
		type: "GET",
		url: urlModelos + '/' + marca + '/' + grupo + '/' + anio,
		dataType: 'json',
		async: true,
		headers: auth,
		beforeSend: function () {
			jQuery('.modelo-group').toggleClass('no-loading');		
			jQuery('#modelo').toggleClass('loading');
		},
		success: function (resp){
			resp.forEach(function(modelo) {
				jQuery('#modelo').append('<option value="' + modelo.codigo_modelo + '">' + modelo.nombre_modelo + '</option>');
			});
		},
		error: function(){
			console.error('Fallo: ' + urlGrupo);
		},
		complete: function(){
			habilitarCampo('#modelo');
			jQuery('.modelo-group').toggleClass('no-loading');		
			jQuery('#modelo').toggleClass('loading');
		}
	});
}

/* obtener provincias */
function getProvincias(){
	jQuery.ajax({
		type: "GET",
		url: urlProvincias,
		dataType: 'json',
		async: true,
		headers: auth,
		beforeSend: function () {
			jQuery('.provincia-group').toggleClass('no-loading');		
			jQuery('#provincia').toggleClass('loading');
		},
		success: function (resp){
			resp.forEach(function(prov) {
				jQuery('#provincia').append('<option value="' + prov.id + '">' + prov.name + '</option>');
			});
		},
		error: function(){
			console.error('Fallo: ' + urlProvincias);
		},
		complete: function(){
			habilitarCampo(provincia);
			jQuery('.provincia-group').toggleClass('no-loading');		
			jQuery('#provincia').toggleClass('loading');
		}
	});
}

/* obtener localidades */
function getLodalidades(prov){
	resetSelect('#provincia','#localidad');
	jQuery.ajax({
		type: "GET",
		url: urlLocalidades + '/' + prov,
		dataType: 'json',
		async: true,
		headers: auth,
		beforeSend: function () {
			jQuery('.localidad-group').toggleClass('no-loading');		
			jQuery('#localidad').toggleClass('loading');
		},
		success: function (resp){
			resp.forEach(function(loca) {
				jQuery('#localidad').append('<option value="' + loca.id + '">' + loca.name + '</option>');
			});
		},
		error: function(){
			console.error('Fallo: ' + urlLocalidades);
		},
		complete: function(){
			habilitarCampo('#localidad');
			jQuery('.localidad-group').toggleClass('no-loading');		
			jQuery('#localidad').toggleClass('loading');
		}
	});
}

// cotizar Meridional
function getCotizaciones(url, authentication, data, id, image, nombre) {
	var i = 1;	//	variable de control, omito la primera columna que es la img	
	// enviamos la consulta
	jQuery.ajax(url, {  
		type: 'POST',
		dataType: 'json',
		async: true,
		headers: authentication,
		data: data,
		beforeSend: function(){
			jQuery('#resultados-ajax').fadeIn('fast');		
			// previo al envio colocamos la fila de la compañia
			jQuery('#resultados-ajax table tbody').append('<tr id="' + id + '"><td><img src="' + image + '" alt="logo"></td><td><span><i class="fa fa-refresh fa-spin fa-fw"></i><span class="sr-only">Loading...</span></span></td><td><i class="fa fa-refresh fa-spin fa-fw"></i><span class="sr-only">Loading...</span></td><td><i class="fa fa-refresh fa-spin fa-fw"></i><span class="sr-only">Loading...</span></td><td><i class="fa fa-refresh fa-spin fa-fw"></i><span class="sr-only">Loading...</span></td><td><i class="fa fa-refresh fa-spin fa-fw"></i><span class="sr-only">Loading...</span></td>');
		}
	})
	.done(function (respuesta) {
		if (respuesta.exito) {
			var nombreCobertura = '';
			respuesta.coberturas.forEach(function(cobertura) {
				if (cobertura.codigoCobertura == "") {
					jQuery('#'+id).find('td').eq(i).empty();
					jQuery('#'+id).find('td').eq(i).append('<i class="fa fa-times fa-2x" aria-hidden="true"></i>');
					i = i + 1; 
				} else {
					nombreCobertura = jQuery('#resultados-ajax thead').find('th').eq(i).html();
					jQuery('#'+id).find('td').eq(i).empty();
					// link de cada cotizacion
					jQuery('#'+id).find('td').eq(i).append('<div class="vcenter"><a href="#" onclick="verCotizacion(this)" id="ver-cotizacion" class="cotizacion-link" data-costo="' + cobertura.costo + '" data-descripcion="' + cobertura.descripcion + '" data-periodo="' + cobertura.periodo + '" data-codigo="' + cobertura.codigoCobertura + '" data-compania="' + nombre + '" data-cobertura="' + nombreCobertura + '" data-imagen="' + image + '">$' + cobertura.costo + '</a></div>');
					i = i + 1; 
				}
			});
		} else {
			for (i; i<6; i++) {
				jQuery('#'+id).find('td').eq(i).empty();
				jQuery('#'+id).find('td').eq(i).append('<i class="fa fa-times fa-2x" aria-hidden="true"></i>');
			}		
		}
	})
	.fail(function() {
		console.error('Fallo conexion => ' + url)
		for (i; i<6; i++) {
			jQuery('#'+id).find('td').eq(i).empty();
			jQuery('#'+id).find('td').eq(i).append('<i class="fa fa-times fa-2x" aria-hidden="true"></i>');
		}		
	})
	.complete(function () {
		jQuery('#resultados-ajax table tbody').append('</tr>');				
	});
}

// funcion que oculta los resultados y muestra la cotizacion especifica o viceversa
function verCotizacion(d){

	var resultados = jQuery('#resultados-ajax');
	resultados.fadeOut('fast');

	var descripcion = d.getAttribute('data-descripcion'); // Extract info from data-* attributes
	var costo = d.getAttribute('data-costo') ;
	var periodo = d.getAttribute('data-periodo'); 
	var codigo = d.getAttribute('data-codigo');
	var compania = d.getAttribute('data-compania');
	var cobertura = d.getAttribute('data-cobertura');
	var imagen = d.getAttribute('data-imagen');
	var wrapper = jQuery('#wrapper-cotizacion');

	// limpio elementos por si hubo una consulta anterior
	wrapper.find('.costo h3').empty();
	wrapper.find('.codigo').empty();
	wrapper.find('.descripcion p').empty();
	wrapper.find('.periodo p').empty();
	wrapper.find('.compania').empty();
	wrapper.find('#cobertura').empty();
	// wrapper.find('#logo-empresa').empty();
	
	// relleno campos de modal con info solicitada
	wrapper.find('.costo h3').append('$ ' + costo);
	wrapper.find('.codigo').append(codigo);
	wrapper.find('.descripcion p').append(descripcion);
	wrapper.find('.periodo p').append('Periodo: ' + periodo);
	wrapper.find('.compania').append(compania);
	wrapper.find('h6#cobertura').append(cobertura);
	// $("#my_image").attr("src","second.jpg");
	wrapper.find('#logo-empresa').attr('src',imagen);

	jQuery('#wrapper-cotizacion').fadeIn('fast');
}

function reloadPage(d) {
  location.reload();
}

// wait for DOM
jQuery(document).ready(function(){

	// captura el click del btn consultar por cobertura
	// jQuery(function(){
	// 	jQuery('#btn-consultar-cobertura').click(function() {
	// 		consultarCobertura();
	// 	});
	// });
	
	// get marcas
	getMarcas();
	
	// onChange marcas
	jQuery("#marca").change(function(){
		var marca = jQuery("#marca option:selected").val();
		if (marca > 0) {
			// resetSelect('#marca');
			// resetSelect('#grupo');
			// resetSelect('#anio');
			// resetSelect('#modelo');
			getGrupos(marca);
		}
	});
	
	//onChange Grupos
	jQuery("#grupo").change(function(){
		var grupo = jQuery("#grupo option:selected").val();
		var marca = jQuery("#marca option:selected").val();
		if (grupo > 0) {
			getAnios(marca,grupo);
		}
	});
	
	//onChange Anios
	jQuery("#anio").change(function(){
		var grupo = jQuery("#grupo option:selected").val();
		var marca = jQuery("#marca option:selected").val();
		var anio  = jQuery("#anio option:selected").val();
		if (anio > 0) {
			getModelos(marca,grupo,anio);
		}
	});
	
	// onChange marcas
	jQuery("#modelo").change(function(){
		var modelo = jQuery("#modelo option:selected").val();
		if (modelo > 0) {
			getProvincias();
		}
	});
	
	// onChange provincia
	jQuery("#provincia").change(function(){
		var prov = jQuery("#provincia option:selected").val();
		if (prov > 0) {
			getLodalidades(prov);
		}
	});
	
	// CONFIRMACION DEL FORM
	// obtener cotizaciones luego de completar form principal y enviar mail avisando al productor
	jQuery('#form-datos #segundo_paso').on('submit', function (evt) {
		// flag de errores
		var hasError = false;
		evt.preventDefault();	// prevenimos el funcionamiento normal
		// controlamos la existencia de errores
		// hasError = setErrorSelect('marca', hasError);
		// hasError = setErrorSelect('grupo', hasError);
		// hasError = setErrorSelect('anio', hasError);
		// hasError = setErrorSelect('modelo', hasError);
		console.log('OK');
		hasError = setErrorSelect('provincia', hasError);
		hasError = setErrorSelect('localidad', hasError);
		hasError = setErrorSelect('genero', hasError);
		hasError = setErrorInput('edad', hasError);
		hasError = setErrorInput('nombre', hasError);
		hasError = setErrorInput('apellido', hasError);
		hasError = setErrorInput('email', hasError);
		hasError = setErrorInput('telefono', hasError);
		
		if (!hasError) {
			/*	Disparar mail de consulta de cotizaciones */
			// enviar email solicitando la cobertura
			jQuery.ajax({
				type: "POST",
				url: "../wp-content/plugins/knx_cotizador/mail.php",
				data: dataEmailGeneral(),
				beforeSend: function () {
					// mostrar loading...
				}
			})
			.done(function(response){
				// console.info('Envio basico! => ' + response)
				// console.info('Envio! basico ');
			})
			.fail(function(response) {
				console.error('Fallo por: ' + response);
			})
			.complete(function() {
			});

			/* 
				Arreglo con compañias a consultar
				siempre se debe consultar a este arreglo para la llamada a la API
			*/
			var companias = [
				{
					url: urlMercantilAndina, 
					auth: auth, 
					data: dataSinEdad(), 
					id: idMercantilAndina, 
					img: imgMercantilAndina,
					nombre: nombreMercantilAndina
				},
				{
					url: urlSancor, 
					auth: auth, 
					data: dataFull(), 
					id: idSancor, 
					img: imgSancorSeguros,
					nombre: nombreSancor
				},
				{
					url: urlZurich, 
					auth: auth, 
					data: dataFull(), 
					id: idZurich, 
					img: imgZurich,
					nombre: nombreZurich
				}
			];

			// populamos contenido del cliente y automotor
			var datos = dataEmailGeneral();
			var automotor = '<strong>' + datos.marca + '<strong> - ' + datos.modelo + ' - ' + datos.anio;
			var persona = '<strong>' + datos.nombre + ' ' + datos.apellido + '</strong> - ' + datos.email + ' - ' + datos.localidad + ' - ' + datos.provincia

			jQuery('.knx-subheader .automotor').append('<p>' + automotor + '</p>')
			jQuery('.knx-subheader .persona').append('<p>' + persona + '</p>')
			// ocultamos form
			jQuery('#form-datos').hide();
			companias.forEach(function(compania) {
				getCotizaciones(compania.url, compania.auth, compania.data, compania.id, compania.img, compania.nombre);
			});
		}
	});
	
	// Cuando el posible cliente desea contratar la cobertura
	jQuery('#wrapper-cotizacion .btn-contratar').click(function() {
		jQuery.ajax({
			type: "POST",
			url: "../wp-content/plugins/knx_cotizador/mail.php",
			data: dataEmailPorCobertura(),
			beforeSend: function () {
				jQuery('#wrapper-cotizacion').fadeOut('fast');
				jQuery('#wrapper-enviando-email').fadeIn('fast');
			}
		})
		.done(function(response){
			jQuery('#wrapper-enviando-email').fadeOut('fast');
			jQuery('#wrapper-proceso-completado').fadeIn('fast');
			// console.info('Envio Full => ' + response);
		})
		.fail(function(response) {
			console.error(response);
		})
		.complete(function() {
		});

		// } // if (!hasError) {
	});	// jQuery('#btn-submit-form-solicitar').click(function() {

	// captura del evento click de una cotizacion especifica
	// jQuery('#ver-cotizacion').click(function() {
	// jQuery('#ver-cotizacion').on('click',function() {
		// console.log('clickkkkkk');
		// jQuery('#resultados-ajax').fadeOut('fast');
		// jQuery('#wrapper-cotizacion').fadeIn('fast');
	// });


	jQuery('#wrapper-cotizacion .btn-volver').click(function() {
		jQuery('#resultados-ajax').fadeIn('fast');
		jQuery('#wrapper-cotizacion').fadeOut('fast');
	});

	jQuery('#cotizar-nuevamente').click(function() {
		reloadPage();
	});

	jQuery('#primer_paso #fake_submit_btn').click(function(evt) { 
		evt.preventDefault();	// prevenimos el funcionamiento normal
		// controlamos errores en primer paso
		var hasError = false;
		hasError = setErrorSelect('marca', hasError);
		hasError = setErrorSelect('grupo', hasError);
		hasError = setErrorSelect('anio', hasError);
		hasError = setErrorSelect('modelo', hasError);
		if (!hasError) {
			jQuery('#primer_paso').hide();
			jQuery('#segundo_paso').fadeIn('600');
		}
	});

}); /*end document ready*/