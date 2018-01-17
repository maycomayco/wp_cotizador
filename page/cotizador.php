<!-- Formulario - primero paso -->
<div class="row" id="formulario">
	<div id="form-datos" class="col-sm-8 col-sm-offset-2">
		<h3 class="text-center py-3">Obtenga la cotización para su vehículo</h3>
		<form id="form-cotizador">
			<div id="primer_paso">
				<!-- marca / grupo -->
				<div class="row centered" id="marca_grupo">
					<div class="col-sm-6">
						<div class="form-group marca-group">
							<select class="form-control" id="marca" disabled>
								<option selected value="-1">Marca</option>
							</select>
							<span class="help-block" style="display:none;">Debe seleccionar una marca</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group grupo-group">
							<select class="form-control" id="grupo" disabled>
								<option selected value="-1">Grupo</option>
							</select>
							<span class="help-block" style="display:none;">Debe seleccionar una grupo</span>
						</div>
					</div>
				</div> 
				<!-- año / modelo -->
				<div class="row centered" id="anio_modelo">
					<div class="col-sm-6">
						<div class="form-group anio-group">
							<select class="form-control" id="anio" disabled>
								<option selected value="-1">Año</option>
							</select>
							<span class="help-block" style="display:none;">Debe seleccionar un año</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group modelo-group">
							<select class="form-control" id="modelo" disabled>
								<option selected value="-1">Modelo</option>
							</select>
							<span class="help-block" style="display:none;">Debe seleccionar una modelo</span>
						</div>
					</div>
				</div> 
				<!-- fake submit -->
				<div class="row centered" id="fake_submit_wrapper">
					<div class="col-sm-12">
						<!-- <button type="submit" id="fake-submit-btn" class="btn btn-secondary btn-block btn-enfasis">Ver cotización</button> -->
						<button id="fake_submit_btn" class="btn btn-secondary btn-block btn-enfasis">Ver cotización</button>
					</div>
				</div>
			</div>
			<div id="segundo_paso" style="display:none;">
				<!-- provincia / localidad -->
				<div class="row centered" id="provincia_localidad">
					<div class="col-sm-6">
						<div class="form-group provincia-group">
							<select class="form-control" id="provincia" disabled>
								<option selected value="-1">Provincia</option>
							</select>
							<span class="help-block" style="display:none;">Debe seleccionar una provincia</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group localidad-group">
							<select class="form-control" id="localidad" disabled>
								<option selected value="-1">Localidad</option>
							</select>
							<span class="help-block" style="display:none;">Debe seleccionar una localidad</span>
						</div>
					</div>
				</div> 
				<!-- edad / genero -->
				<div class="row centered" id="edad_genero">
					<div class="col-sm-6">
						<div class="form-group edad-group">
							<input type="number" class="form-control" id="edad" placeholder="Edad">
							<span class="help-block" style="display:none;">Debe ingresar su edad</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group genero-group">
							<select class="form-control" id="genero">
								<option selected value="-1">Género</option>
								<option value="F">Mujer</option>
								<option value="M">Hombre</option>
							</select>
							<span class="help-block" style="display:none;">Debe seleccionar su genero</span>
						</div>
					</div>
				</div> 
				<!-- nombre / apellido -->
				<div class="row centered" id="nombre_apellido">
					<div class="col-sm-6">
						<div class="form-group nombre-group">
							<input type="text" class="form-control" id="nombre" placeholder="Nombre" pattern="[a-zA-Z]+">
							<span class="help-block" style="display:none;">Debe ingresar su nombre.</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group apellido-group">
							<input type="text" class="form-control" id="apellido" placeholder="Apellido" pattern="[a-zA-Z]+">
							<span class="help-block" style="display:none;">Debe ingresar su apellido.</span>
						</div>
					</div>
				</div>
				<!-- email / telefono -->
				<div class="row centered" id="email_telefono">
					<div class="col-sm-6">
						<div class="form-group email-group">
							<input type="email" class="form-control" id="email" placeholder="Email">
							<span class="help-block" style="display:none;">Debe ingresar su email.</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group telefono-group">
							<input type="text" class="form-control" id="telefono" placeholder="Teléfono" pattern="[0-9]+">
							<span class="help-block" style="display:none;">Debe ingresar su teléfono.</span>
						</div>
					</div>
				</div>
				<!-- cotizacion -->
				<div class="row centered" id="submit_wrapper">
					<div class="col-sm-12">
						<button type="submit" id="btnSubmit" class="btn btn-secondary btn-block btn-enfasis">Ver cotización</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

<!-- Resultados de cotizaciones -->
<div id="resultados-ajax" style="display:none;">
	<div class="row">
		<div class="col-sm-12 knx-header accentcolor-bg">
			<h3 class="text-white">Resultados de su cotización</h3>
		</div>
		<div class="col-sm-12 knx-subheader">
			<div class="automotor"></div>
			<div class="persona"></div>
		</div>
	</div>
	
	<!-- Tabla de resultados -->
	<div class="panel panel-default">
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-striped text-center" id="table-resultados">
					<thead>
						<tr>
							<th class="col-sm-2 text-center"></th>
							<th class="col-sm-2 text-center">Responsabilidad civil</th>
							<th class="col-sm-2 text-center">Terceros Completos</th>
							<th class="col-sm-2 text-center">Terceros Completos Full</th>
							<th class="col-sm-2 text-center">Terceros Completos Full + Granizo</th>
							<th class="col-sm-2 text-center">Todo Riesgo</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div> <!-- end panel-body -->
	</div>
	<a id="cotizar-nuevamente" class="btn btn-secondary btn-block btn-enfasis my-3">Cotizar otro modelo</a>
</div>

<!-- Ver cotizacion -->
<div id="wrapper-cotizacion" style="display:none;">
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2 knx-header accentcolor-bg">
			<h3 class="text-white">Detalle de cotizacion</h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-sm-8 col-sm-offset-2 knx-subheader">
			<div class="col-sm-8">
				<h6 id="cobertura"></h6>			
			</div>
			<div class="col-sm-4">
				<img id="logo-empresa" src="http://via.placeholder.com/200x70" alt="logo-companias" class="pull-right">
			</div>
			<div class="col-sm-12 pt-2">
				<div class="automotor"></div>
				<div class="persona"></div>
			</div>
		</div>
	</div>
	<div class="col-sm-8 col-sm-offset-2">
		<div class="costo text-center"><h3></h3></div>
		<div class="clearfix"></div>
		<div class="codigo" hidden></div>
		<div class="descripcion"><p></p></div>
		<div class="clearfix"></div>
		<div class="periodo"><p></p></div>
		<div class="compania" hidden><p></p></div>
	</div>
	<div class="col-sm-8 col-sm-offset-2 knx-subheader">
		<button type="button" class="btn btn-primary btn-volver">Volver</button>
		<button type="button" class="btn btn-primary btn-contratar btn-enfasis">Contratar</button>
	</div>
</div>

<!-- Enviando email -->
<div id="wrapper-enviando-email" style="display:none;">
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2 knx-header accentcolor-bg">
			<h3 class="text-white">Enviando email</h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-sm-8 col-sm-offset-2 knx-subheader py-5 text-center">
			<i class="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
			<p>Atención estamos realizando los ajustes finales...</p>
		</div>
	</div>
</div>

<!-- Envio de email correcto -->
<div id="wrapper-proceso-completado" style="display:none;">
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2 knx-header accentcolor-bg">
			<h3 class="text-white">Información enviada</h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-sm-8 col-sm-offset-2 knx-subheader py-5 text-center">
			<i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
			<p>Un asesor se contactará con usted a la brevedad</p>
			<p>Además se le ha enviado una copia del email a su casilla de correo.</p>
		</div>
	</div>
</div>