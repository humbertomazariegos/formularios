const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

let ventana;

function createWindow(){
    ventana = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js'),
            // nodeIntegration:true,
            // contextIsolation:false
        }
    });
    ventana.loadFile('index.html');
}

let ventana2;

function createWindow2(){
    ventana2 = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js'),
            // nodeIntegration:true,
            // contextIsolation:false
        }
    });
    ventana2.loadFile('segundo.html');
}

ipcMain.on('registroValido', function(event, args){
    console.log(args);
    var registrados = ['asistente1', 'catedratico1', 'estudiante1'];

    if(args[0] == 0){
        const found = registrados.find(element => element == args[1]);
        if(found != undefined){
            ventana.alert("El usuario ya esta registrado");
        }else{
            createWindow2();
            ventana2.webContents.on('did-finish-load', function(){
                ventana2.webContents.send('inicioCorrecto', 'Bienvenido' + args[1]);
            })
        }
        //console.log(found);
    }

    
});

app.whenReady().then(createWindow);