<script src="../wp-content/plugins/knx_cotizador/page/app.js"></script>

<div id="form-datos">
	<h4 class="text-center py-3">Obtenga la cotización para su vehículo</h4>
	<form id="form-cotizador">
		<div class="form-row justify-content-center">
		  <div class="col-4">
			  <div class="form-group">
			    <select class="form-control" id="marca" disabled>
			      <option selected value="-1">Marca</option>
			    </select>
			  </div>
		  </div>
		  <div class="col-4">
			  <div class="form-group">
			    <select class="form-control" id="grupo" disabled>
			      <option selected value="-1">Grupo</option>
			    </select>
			  </div>
		  </div>
	  </div> <!-- end .form-row -->
	  <div class="form-row justify-content-center">
		  <div class="col-4">
			  <div class="form-group">
			    <!-- <label for="exampleFormControlSelect1">Marca</label> -->
			    <select class="form-control" id="anio" disabled>
			      <option selected>Año</option>
			    </select>
			  </div>
		  </div>
		  <div class="col-4">
			  <div class="form-group">
			    <!-- <label for="exampleFormControlSelect1">Grupo</label> -->
			    <select class="form-control" id="modelo" disabled>
			      <option selected>Modelo</option>
			    </select>
			  </div>
		  </div>
	  </div> <!-- end .form-row -->
	  <div class="form-row justify-content-center">
		  <div class="col-4">
			  <div class="form-group">
			    <!-- <label for="exampleFormControlSelect1">Marca</label> -->
			    <select class="form-control" id="provincia" disabled>
			      <option selected>Provincia</option>
			    </select>
			  </div>
		  </div>
		  <div class="col-4">
			  <div class="form-group">
			    <!-- <label for="exampleFormControlSelect1">Grupo</label> -->
			    <select class="form-control" id="localidad" disabled>
			      <option selected>Localidad</option>
			      <option>2</option>
			      <option>3</option>
			      <option>4</option>
			      <option>5</option>
			    </select>
			  </div>
		  </div>
	  </div> <!-- end .form-row -->
	  <div class="form-row justify-content-center">
		  <div class="col-4">
			  <div class="form-group">
			    <!-- <label for="exampleFormControlSelect1">Marca</label> -->
		      <!-- <label for="exampleFormControlInput1">Email address</label> -->
		      <input type="text" class="form-control" id="edad" placeholder="Edad">
			  </div>
		  </div>
		  <div class="col-4">
			  <div class="form-group">
			    <!-- <label for="exampleFormControlSelect1">Grupo</label> -->
			    <select class="form-control" id="genero">
			      <option selected>Género</option>
			      <option value="F">Mujer</option>
			      <option value="M">Hombre</option>
			    </select>
			  </div>
		  </div>
	  </div> <!-- end .form-row -->
	  <div class="form-row justify-content-center">
	  	<div class="col-8">
				<button type="submit" class="btn btn-secondary btn-block">Consultar</button>
	  	</div>
	  </div>
	</form>
</div>

<div id="resultados-ajax"></div>