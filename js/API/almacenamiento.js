//WEB SQL (SQLLite)

function accesoBD()
{
	var bd = window.openDatabase("Tareas","1.0","Tareas Cenet",200000);
	
	return db;

}


function RegistraTareas(Txt_Tarea,SN_Tarea)
{
	alert();
		accesoBD().transaction(function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Cat_Tarea (id unique,Txt_Tarea,SN_Tarea)');
    tx.executeSql('INSERT INTO Cat_Tarea (Txt_Tarea,SN_Tarea) VALUES ( "'+Txt_Tarea+'","'+SN_Tarea+'")');
		
		
},

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
},



function successCB() {
    navigator.notification.alert("Esperando a conexión para sincronizar",null,"Tarea Guardada","OK!");
})

	
	
};


function LeerTareas()
{
		accesoBD.transaction(function(tx){
		tx.executeSql('Select * from Cat_Tarea',[],function(tx2,res){
			var largo = res.rows.length;
			var tabla = '<table>';
			
			tabla += '<tr><th>Tarea</th></tr>';
			
			for(i=0;i<largo;i++)
			{
				var tarea = res.rows.item(i).Txt_Tarea;
				
				
				
				tabla += '<tr><td>'+tarea+'</td></tr>';

				
			}
			
			tabla += '</table>';
			
			},function (err){
			alert('No se leyo correctamente');
			});
		},

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
},
function successCB() {
    navigator.notification.alert("Esperando a conexión para sincronizar",null,"Datos Consultados","OK!");
})

			

};
