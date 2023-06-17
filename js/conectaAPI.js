async function listaVideos(){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json",
        "Permissions-Policy": "geolocation=(self `http://localhost:3001/videos`)"
        }
    });
    
    const conexionConvertida=await conexion.json();
    //res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
    console.log(conexion);
    console.log(conexionConvertida);
    return conexionConvertida;
}

async function crearVideo(titulo,descripcion,url,imagen){
    const conexion= await fetch("http://localhost:3001/videos",{
    method:"POST",
    headers:{
        "Content-type":"'application/json; charset=utf-8'"
    },
    body:JSON.stringify({
        titulo:titulo,
        descripcion:`${descripcion} mil visualizaciones`,
        url:url,
        imagen:imagen
    })
    })

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listaVideos,crearVideo
}
