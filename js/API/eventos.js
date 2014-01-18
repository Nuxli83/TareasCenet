$(function()
{
		document.addEventListener("deviceready",function(){
			$('#regTarEnv').tap(function(){
				var Tarea = $('#regTarea').val();
				var sn_tarea = 1;
				
				if(Tarea != '')
				{
					RegistraTareas(Tarea,sn_tarea)	
				}
				else
				{
					navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
				}

				
				}
			);
			$('#consul').tap(function(){
				LeerTareas()
			});
			
			},false);
	
	
});
