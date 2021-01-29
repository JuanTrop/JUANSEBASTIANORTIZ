/* variables locales de T_INTRDPKUHRFZJ_261*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.formestadocivil;
    

    //"TaskId": "T_INTRDPKUHRFZJ_261"


    	

//Entity: EstadoCivil
//EstadoCivil. (Button) View: FormEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONXGOJHUL_730399 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    executeCommandEventArgs.commons.api.viewState.hide('G_ESTADOCIII_840399');
    
    entities.Ciudadano.estadoCivil = "";
    
    entities.Ciudadano.actividadActual = "";

};

	
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormEstadoCivil
task.initData.VC_ESTADOCILI_306261 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    initDataEventArgs.commons.api.viewState.hide('G_ESTADOCIII_840399');
    
};



}));
