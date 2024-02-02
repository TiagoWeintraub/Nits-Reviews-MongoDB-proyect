// //COLECCIÓN USUARIO

// for(i=0;i<=380000;i++){

//     nombres = ["Cristian", "Rodrigo", "Micaela", "Josefina", "Martina", "Tomas", "Jose", "Martin", "Lisandro", "Lionel", "Sergio", "Emiliano", "Maria", "Sandra", "Liliana", "Luciana", "Magali", "Santiago","Carlos", "Federica", "Lautaro"]
//     apellidos = ["Montaña", "Zapata", "Martinez", "Hercovich", "Weintraub", "Licciardi", "Messi", "Higuain", "Aguero", "Romero", "Otamendi", "Acuña", "Paredes", "Lo Celso", "Scaloni", "De Paul", "Di Maria", "Tagliafico", "De Bruyne", "Haaland", "Mbappe"]
//     mails = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com"]
//     paises = ["Argentina", "Colombia", "Brasil", "España", "Francia", "Holanda", "USA", "Polonia", "Ecuador", "Mexico", "Finlandia", "Suecia", "Chile", "Bolivia", "Egipto", "Japon", "Costa Rica", "Canada", "Italia", "Rusia", "Ucrania"]
//     redes_sociales = ["https://drive.google.com/file/d/1LbL2DknbxJPlhevdFAeFoHMADWb8qB3a/view?usp=sharing", "https://drive.google.com/file/d/1ipNyXDviR0RJYqUuJyTWNCOHSZ7n-P7s/view?usp=sharing", "https://drive.google.com/file/d/1m2GEa1w-hHq7ev3T9aXI4nLml1I-jzi8/view?usp=sharing"]
//     descrpiciones = ["Me apasionan las reviews desde que tengo uso de razón. Me encanta leer, escribir y la tecnología. Puedo pasar horas y horas debatiendo sobre tecnología sin aburrirme. Mi tiempo libre lo divido entre leer y juntarme con mis seres queridos. También soy fan de la naturaleza y los animales.", "La tecnología siempre ha sido mi pasión. Conocí este mundo mientras disfrutaba de mi flamante Atari 2600. Poco a poco fueron llegando nuevas consolas, teléfonos móviles, tablets... Y claro, si ya me gustaba la tecnología, pues acabé completamente enamorado de ella.  Y por este motivo decidí dedicar mi vida a un sector en claro crecimiento. Escribo desde 2017 sobre todo tipo de smartphones, gadgets y otros productos tecnológicos mientras disfruto probando todos los cachivaches que caen en mis manos.", "Me encantan los videojuegos, el software, los teléfonos móviles y la tecnología en general. Con estudios relacionados con administración de empresas y después de muchos años trabajando de cara al público, empecé a dar mis primeros pasos escribiendo sobre tecnología."]


//     nombre_aleatorio = Math.floor(Math.random()*21)
//     apellido_aleatorio = Math.floor(Math.random()*21)
//     mail_aleatorio = Math.floor(Math.random()*4)
//     pais_aleatorio = Math.floor(Math.random()*21)
//     red_aleatorio = Math.floor(Math.random()*3)
//     descripcion_aleatorio = Math.floor(Math.random()*3)
//     edad = Math.floor(Math.random()*(60-18+1)+18) // Número aleatorio entre 18 y 60
//     db.usuario.insertOne({
//         Referencia: i,
//         Nombre: nombres[nombre_aleatorio],
//         Apellido: apellidos[apellido_aleatorio],
//         Edad: edad,
//         Mail: nombres[nombre_aleatorio].toLowerCase() + "." +apellidos[apellido_aleatorio].toLowerCase().replace(" ", "") + mails[mail_aleatorio],
//         Pais: paises[pais_aleatorio],
//         Red_social: redes_sociales[red_aleatorio],
//         Descripcion: descrpiciones[descripcion_aleatorio],
//         Reviews: []
//     })
// }

// //COLECCIÓN MARCA

// for(i=1;i<10000;i++){ // CAMBIAR LA CANTIDAD
//     nombres_marcas = ["Samsung", "Apple", "Xiaomi"]

//     logos = ["https://drive.google.com/file/d/1MbKhzmJlNVeuOeFbqSm3R7Z9RiXxmyFX/view?usp=sharing", "https://drive.google.com/file/d/17TcvGYDYZZ2TgiL3YD2Gul0CadrlfC4k/view?usp=share_link", "https://drive.google.com/file/d/1AR1E8TMP5MHYQC8ZhNVtoqCWaLoX5Xaj/view?usp=sharing"]

//     productos = ["Celular", "Tablet", "Auricular"]

//     celulares_samsung = ["S21 Ultra","Note 20","S22", "S22 Plus"]
//     celulares_apple = ["Iphone 12 Mini", "Iphone 13 Pro max", "Iphone 13", "Iphone 14"]
//     celulares_xiaomi = ["Redmi Note 11", "Mi 10t Pro", "Pocophone Poco X3", "Mi 11 Lite"]

//     tablets_samsung = ["Galaxy Tab S7", "Galaxy Tab S6 Lite"]
//     tablets_apple = ["iPad 9th Generation", "iPad Pro"]
//     tablets_xiaomi = ["Mi Pad 5 Pro", "Mi Pad 4"]

//     auriculares_samsung = ["Galaxy Buds 2"," Galaxy Buds Live"]
//     auriculares_apple = ["AirPods Max","EarPods"]
//     auriculares_xiaomi = ["Mi EarBuds Basic","Redmi AirDots 3"]
//     marca_aleatoria = Math.floor(Math.random()*3)
//     producto_aleatorio = Math.floor(Math.random()*3)
//     if (marca_aleatoria == 0){
//         logo = logos[0]
//         if (producto_aleatorio == 0){
//             celu_samsung_aleatorio = Math.floor(Math.random()*4)
//             modelo = celulares_samsung[celu_samsung_aleatorio]
//         }
//         else if (producto_aleatorio == 1){
//             tablet_samsung_aleatorio = Math.floor(Math.random()*2)
//             modelo = tablets_samsung[tablet_samsung_aleatorio]
//         }
//         else{
//             auricular_samsung_aleatorio = Math.floor(Math.random()*2)
//             modelo = auriculares_samsung[auricular_samsung_aleatorio]
//         }
//     }
//     else if (marca_aleatoria == 1){
//         logo = logos[1]
//         if (producto_aleatorio == 0){
//             celu_apple_aleatorio = Math.floor(Math.random()*4)
//             modelo = celulares_apple[celu_apple_aleatorio]
//         }
//         else if (producto_aleatorio == 1){
//             tablet_apple_aleatorio = Math.floor(Math.random()*2)
//             modelo = tablets_apple[tablet_apple_aleatorio]
//         }
//         else{
//             auricular_apple_aleatorio = Math.floor(Math.random()*2)
//             modelo = auriculares_apple[auricular_apple_aleatorio]
//         }
//     }
        
//     else{
//         logo = logos[2]
//         if (producto_aleatorio == 0){
//             celu_xiaomi_aleatorio = Math.floor(Math.random()*4)
//             modelo = celulares_xiaomi[celu_xiaomi_aleatorio]
//         }
//         else if (producto_aleatorio == 1){
//             tablet_xiaomi_aleatorio = Math.floor(Math.random()*2)
//             modelo = tablets_xiaomi[tablet_xiaomi_aleatorio]
//         }
//         else{
//             auricular_xiaomi_aleatorio = Math.floor(Math.random()*2)
//             modelo = auriculares_xiaomi[auricular_xiaomi_aleatorio]
//         }
//     }
//     db.marca.insertOne({
//         Referencia: i,
//         Logo: logo,
//         Nombre: nombres_marcas[marca_aleatoria],
//         Producto: productos[producto_aleatorio],
//         Modelo: modelo,
//     })
// }

// COLECCIÓN REVIEW

// for(i=113608;i<1000000;i++){
//     k= Math.floor(Math.random()*(380000)); //Número aleatorio que representa al usuario que hizo la reseña (Hay 1 millon de usuarios)
//     h= Math.floor(Math.random()*10000); //Número aleatorio que representa al usuario que hizo la reseña (Hay 1 millon de usuarios)
//     opiniones = ["Me encanta", "Lo recomiendo", "Está bien","Deja que desear", "No me gustó para nada"]
//     descripcion = ["Lo he estado utilizando por un buen período de tiempo y ha conseguido enamorarme por completo. Supero todas mis expectativas","Se lo regalé a un familiar y quedó fascinado con el fácil manejo del producto", "Relación calidad-precio es de lo mejor que he visto, sin dudas lo tienen que probar", "Exactamente lo que necesitaba para mi vida diaria, un lujo de producto","Cumple con lo que ofrece, buen precio y buena utilidad se le puede dar", "Lo compré sin esperar mucho la verdad, pero me me quede conforme con el producto","Al principio iba todo excelente, luego comencé a notar fallas tanto en la batería como en el audio", "Decía que era resistente al agua, cuando lo sumergí se me averió y dejo de funcionar", "Desde el comienzo ya notaba fallos simples, al poco tiempo se apagó y dejo de funcionar", "Un muy alto precio para lo que se merece, me gustaría un reembolso"]
//     anio_aleatorio = Math.floor(Math.random(2022-2020+1)+2020) //Numero maximo - numero minimo +1 todo eso + numero minimo
//     mes_aleatorio = Math.floor(Math.random(12-1+1)+1)
//     if (mes_aleatorio == 2){
//         dia_aleatorio = Math.floor(Math.random(28-1+1)+28)
//     }
//     else if (mes_aleatorio == 4 || 6 || 9 || 11){
//         dia_aleatorio = Math.floor(Math.random(30-1+1)+1)
//     } 
//     else{
//         dia_aleatorio = Math.floor(Math.random(31-1+1)+1)
//     }
//     fecha = new Date(`${dia_aleatorio}/${mes_aleatorio}/${anio_aleatorio}`)
//     opinion_aleatoria = Math.floor(Math.random()*5)
//     if (opinion_aleatoria == 0){
//         descrip_aleatorio = Math.floor(Math.random()*2)
//         desc_index = descripcion[descrip_aleatorio]
//     }
//     else if (opinion_aleatoria == 1){
//         descrip_aleatorio = Math.floor(Math.random(3-2+1)+2)
//         desc_index = descripcion[descrip_aleatorio]
//     }
//     else if (opinion_aleatoria == 2){
//         descrip_aleatorio = Math.floor(Math.random(5-4+1)+4)
//         desc_index = descripcion[descrip_aleatorio]
//     }
//     else if (opinion_aleatoria == 3){
//         descrip_aleatorio = Math.floor(Math.random(7-6+1)+6)
//         desc_index = descripcion[descrip_aleatorio]
//     }
//     else{
//         descrip_aleatorio = Math.floor(Math.random(9-8+1)+8)
//         desc_index = descripcion[descrip_aleatorio]
//     }
//     cantidad_comentarios = Math.floor(Math.random()*11)
//     tags = []
        // if(cantidad_comentarios == 0){
        //     tags = 'No hay ningun comentario en la review'}
        // for (j=1; j<=cantidad_comentarios; j++){
        // comentarios = ["Estoy en desacuerdo", "Me gusta esta review!", "Estoy de acuerdo", "Comparto tu idea", "Opino igual", "A mi me funciono genial", "No comparto tu analisis"]
        // comentario_index = Math.floor(Math.random()*7)
        // tags.push(comentarios[comentario_index])}  

        // for (i= 85000; i<=121308; i++ ){
        //     cantidad_comentarios = Math.floor(Math.random()*11)
        //     tags = []
        //     if(cantidad_comentarios == 0){
        //         tags = 'No hay ningun comentario en la review'}
        //     for (j=1; j<=cantidad_comentarios; j++){
        //         comentarios = ["Estoy en desacuerdo", "Me gusta esta review!", "Estoy de acuerdo", "Comparto tu idea", "Opino igual", "A mi me funciono genial", "No comparto tu analisis"]
        //         comentario_index = Math.floor(Math.random()*7)
        //         tags.push(comentarios[comentario_index])}  
        //     db.review.updateOne({Referencia: i}, {$set: {'Cantidad_comentarios': cantidad_comentarios, 'Comentarios': tags}})}

//     cursor = db.usuario.find({Referencia: k},{_id:1}) //busco ObjectID del usuario que hace la reseña
//     message = cursor.hasNext() ? cursor.next() : null
//     if (message){
//         var id_autor = message._id
//     }
//     cursor2 = db.marca.find({Referencia: h},{_id:1}) //busco ObjectID del usuario que hace la reseña
//     message2 = cursor2.hasNext() ? cursor2.next() : null
//     if (message2){
//         var id_producto = message2._id
//     }


//     db.review.insertOne({
//         Referencia: i, 
//         Opinion: opiniones[opinion_aleatoria],
//         Descripcion: desc_index,
//         Fecha_review: fecha,
//         Cantidad_comentarios: cantidad_comentarios,
//         Comentarios: tags,
//         Autor: id_autor,
//         Producto: id_producto
//     })

//     cursor3 = db.review.find({Referencia: i},{_id: 1}) //busco el ObjectID de la reseña hecha recientemente
//     message3 = cursor3.hasNext() ? cursor3.next() : null
//     if (message3){
//         var id3 = message3._id
//     }

//     db.usuario.updateOne(
//     {
//         _id : id_autor
//     },
//     {
//         $push:{Reviews : id3} //cargo el Array de Reviews del usuario con el ObjectID de la reseña hecha
//     }
//     )
// }


// ((((((((((((((((((((     CONSULTAS       ))))))))))))))))))))

// $lookup: {
//     from: 'Colección a unir',
//     localField: 'Campo del documento de input (entrada)',
//     foreignField: 'Campo del documento de la colección de from',
//     as: 'Campo de salida (array)'
// }

//Busca cada review en la que los comentarios hayan sido positivos y que la review tenga entre 3 y 7 comentarios
//db.review.find({Comentarios: {$nin: ["Estoy en desacuerdo", "A mi me funciono genial", "No comparto tu analisis"]}, Cantidad_comentarios:{$gte: 3, $lte: 7}}).pretty()

// Busco todos los usuarios que sean mayores de 18 y menores de 30 que hayan tengan mas de 3 reviews realizadas


// db.usuario.find({Referencia: 120000}).explain("executionStats").executionStats.executionTimeMillis

// db.review.aggregate(
//     [{
//         $lookup: {
//             from: 'usuario',
//             localField: 'Autor',
//             foreignField: '_id',
//             as: 'Usuario'
//         }
//     },
//     {
//         $match: {Comentarios: 'Me gusta esta review!'} // Acá se pone un dato de la colección que estamos usando el aggregate
//     }])

// SUMA TODAS TODOS LOS COMENTARIOS QUE TIENEN TODAS LAS REVIEWS DE UNA PERSONA ESPECÍFICA

// db.review.aggregate([{
//     $match: {
//         Autor: ObjectId('636d5beff451062283df4897')
//     }},{
//     $unwind: {
//         path: '$Cantidad_comentarios'
//     }},{
//     $group: {
//         _id: {Autor: '$Autor'}
//         ,
//         cantidad_comentarios_totales: {
//             $sum: '$Cantidad_comentarios'}}
//         }
// ])

//////Esta no puede

// BUSCA TODOS LOS USUARIOS ARGENTINOS QUE NO HAYAN PUBLICADO NINGUNA REVIEW

// db.review.find({Pais:'Argentina', Reviews: {$size: 0} })

/////// Busca todas las reviews de un autor en específico

// db.usuario.aggregate([
//     {$match: {
//         _id: ObjectId('636d5bf1f451062283df4d45')
//     }},
//     {
//         $lookup: {
//             from: 'review',
//             localField: '_id',
//             foreignField: 'Autor',
//             as: 'Reviews_simple' 
//         }},
//     {$project: {
//         _id: 0,
//         Nombre: 1,
//         Apellido: 1,
//         Reviews_simple: {
//             _id: 1,
//             Fecha_review: 1,
//             Cantidad_comentarios: 1,
//             Producto_review: 1
//         }
//     }},
//     {$unwind: {
//         path: '$Reviews_simple'
//     }}
// ])