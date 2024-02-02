from pymongo import MongoClient
from random import randint


MONGO_URI = 'mongodb://localhost'

client = MongoClient(MONGO_URI)

db = client["nitsreviews"]

# ---------------------------------------------------------------------------------------------------------------------------------------------

usuarios = db["usuarios"]
nombres = ["Cristian", "Rodrigo", "Micaela", "Josefina", "Martina", "Tomas", "Jose", "Martin", "Lisandro", "Lionel", "Sergio", "Emiliano", "Maria", "Sandra", "Liliana", "Luciana", "Magali", "Santiago","Carlos", "Federica", "Lautaro"]
apellidos = ["Montaña", "Zapata", "Martinez", "Hercovich", "Weintraub", "Licciardi", "Messi", "Higuain", "Aguero", "Romero", "Otamendi", "Acuña", "Paredes", "Lo Celso", "Scaloni", "De Paul", "Di Maria", "Tagliafico", "De Bruyne", "Haaland", "Mbappe"]
mails = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com"]
paises = ["Argentina", "Colombia", "Brasil", "España", "Francia", "Holanda", "USA", "Polonia", "Ecuador", "Mexico", "Finlandia", "Suecia", "Chile", "Bolivia", "Egipto", "Japon", "Costa Rica", "Canada", "Italia", "Rusia", "Ucrania"]
redes_sociales = ["https://drive.google.com/file/d/1LbL2DknbxJPlhevdFAeFoHMADWb8qB3a/view?usp=sharing", "https://drive.google.com/file/d/1ipNyXDviR0RJYqUuJyTWNCOHSZ7n-P7s/view?usp=sharing", "https://drive.google.com/file/d/1m2GEa1w-hHq7ev3T9aXI4nLml1I-jzi8/view?usp=sharing"]
descrpiciones = ["Me apasionan las reviews desde que tengo uso de razón. Me encanta leer, escribir y la tecnología. Puedo pasar horas y horas debatiendo sobre tecnología sin aburrirme. Mi tiempo libre lo divido entre leer y juntarme con mis seres queridos. También soy fan de la naturaleza y los animales.", "La tecnología siempre ha sido mi pasión. Conocí este mundo mientras disfrutaba de mi flamante Atari 2600. Poco a poco fueron llegando nuevas consolas, teléfonos móviles, tablets... Y claro, si ya me gustaba la tecnología, pues acabé completamente enamorado de ella.  Y por este motivo decidí dedicar mi vida a un sector en claro crecimiento. Escribo desde 2017 sobre todo tipo de smartphones, gadgets y otros productos tecnológicos mientras disfruto probando todos los cachivaches que caen en mis manos.", "Me encantan los videojuegos, el software, los teléfonos móviles y la tecnología en general. Con estudios relacionados con administración de empresas y después de muchos años trabajando de cara al público, empecé a dar mis primeros pasos escribiendo sobre tecnología."]

lista_usuarios = []

for i in range(1,150000):
# for(i=0;i<=10000;i++){
    nombre_aleatorio = randint(0,20)
    apellido_aleatorio = randint(0,20)
    mail_aleatorio = randint(0,3)
    pais_aleatorio = randint(0,20)
    red_aleatorio = randint(0,2)
    descripcion_aleatorio = randint(0,2)
    edad = randint(18,60)
    persona = {"_id": i,
    "nombre": nombres[nombre_aleatorio],
    "apellido": apellidos[apellido_aleatorio],
    "edad": edad,
    "mail": nombres[nombre_aleatorio].lower() + "." +apellidos[apellido_aleatorio].lower().replace(" ", "") + mails[mail_aleatorio],
    "pais": paises[pais_aleatorio],
    "red_social": redes_sociales[red_aleatorio],
    "descripcion": descrpiciones[descripcion_aleatorio]
    }
#     lista_usuarios.append(persona)

# usuarios.insert_many(lista_usuarios)

# usuarios.delete_many({})

# resultado = usuarios.find_one({"name": "Tomas", "apellido": "Weintraub"})
# print(resultado)

# ----------------------------------------------------------------------------------------------------------------------------
marcas = db["marcas"]

nombres_marcas = ["Samsung", "Apple", "Xiaomi"]

logos = ["https://drive.google.com/file/d/1MbKhzmJlNVeuOeFbqSm3R7Z9RiXxmyFX/view?usp=sharing", "https://drive.google.com/file/d/17TcvGYDYZZ2TgiL3YD2Gul0CadrlfC4k/view?usp=share_link", "https://drive.google.com/file/d/1AR1E8TMP5MHYQC8ZhNVtoqCWaLoX5Xaj/view?usp=sharing"]

productos = ["Celulares", "Tablets", "Auriculares"]

celulares_samsung = ["S21 Ultra","Note 20","S22", "S22 Plus"]
celulares_apple = ["Iphone 12 Mini", "Iphone 13 Pro max", "Iphone 13", "Iphone 14"]
celulares_xiaomi = ["Redmi Note 11", "Mi 10t Pro", "Pocophone Poco X3", "Mi 11 Lite"]

tablets_samsung = ["Galaxy Tab S7", "Galaxy Tab S6 Lite"]
tablets_apple = ["iPad 9th Generation", "iPad Pro"]
tablets_xiaomi = ["Mi Pad 5 Pro", "Mi Pad 4"]

auriculares_samsung = ["Galaxy Buds 2"," Galaxy Buds Live"]
auriculares_apple = ["AirPods Max","EarPods"]
auriculares_xiaomi = ["Mi EarBuds Basic","Redmi AirDots 3"]

lista_marcas = []

for i in range(1,600000):
    marca_aleatoria = randint(0,2)
    producto_aleatorio = randint(0,2)
    if marca_aleatoria == 0:
        logo = logos[0]
        if producto_aleatorio == 0:
            celu_samsung_aleatorio = randint(0,3)
            modelo = celulares_samsung[celu_samsung_aleatorio]
        elif producto_aleatorio == 1:
            tablet_samsung_aleatorio = randint(0,1)
            modelo = tablets_samsung[tablet_samsung_aleatorio]
        else:
            auricular_samsung_aleatorio = randint(0,1)
            modelo = auriculares_samsung[auricular_samsung_aleatorio]
    elif marca_aleatoria == 1:
        logo = logos[1]
        if producto_aleatorio == 0:
            celu_apple_aleatorio = randint(0,3)
            modelo = celulares_apple[celu_apple_aleatorio]
        elif producto_aleatorio == 1:
            tablet_apple_aleatorio = randint(0,1)
            modelo = tablets_apple[tablet_apple_aleatorio]
        else:
            auricular_apple_aleatorio = randint(0,1)
            modelo = auriculares_apple[auricular_apple_aleatorio]
    else:
        logo = logos[2]
        if producto_aleatorio == 0:
            celu_xiaomi_aleatorio = randint(0,3)
            modelo = celulares_xiaomi[celu_xiaomi_aleatorio]
        elif producto_aleatorio == 1:
            tablet_xiaomi_aleatorio = randint(0,1)
            modelo = tablets_xiaomi[tablet_xiaomi_aleatorio]
        else:
            auricular_xiaomi_aleatorio = randint(0,1)
            modelo = auriculares_xiaomi[auricular_xiaomi_aleatorio]
    marca = {
        "_id": i,
        "logo": logo,
        "nombre": nombres_marcas[marca_aleatoria],
        "producto": productos[producto_aleatorio],
        "modelo": modelo
    }

#     lista_marcas.append(marca)

# marcas.insert_many(lista_marcas)

# marcas.delete_many({})

#------------------------------------------------------------------------------------------------------------------------------------

reviews = db["reviews"]
titulo = [""]
opiniones = ["Me encanta", "Lo recomiendo", "Está bien","Deja que desear", "No me gustó para nada"]
descripcion = ["Lo he estado utilizando por un buen período de tiempo y ha conseguido enamorarme por completo. Supero todas mis expectativas","Se lo regalé a un familiar y quedó fascinado con el fácil manejo del producto", "Relación calidad-precio es de lo mejor que he visto, sin dudas lo tienen que probar", "Exactamente lo que necesitaba para mi vida diaria, un lujo de producto","Cumple con lo que ofrece, buen precio y buena utilidad se le puede dar", "Lo compré sin esperar mucho la verdad, pero me me quede conforme con el producto","Al principio iba todo excelente, luego comencé a notar fallas tanto en la batería como en el audio", "Decía que era resistente al agua, cuando lo sumergí se me averió y dejo de funcionar", "Desde el comienzo ya notaba fallos simples, al poco tiempo se apagó y dejo de funcionar", "Un muy alto precio para lo que se merece, me gustaría un reembolso"]
comentarios = ["Estoy en desacuerdo", "Me gusta esta review!", "Estoy de acuerdo", "Comparto tu idea", "Opino igual", "A mi me funciono genial", "No comparto tu analisis"]


lista_reviews = []

for i in range(1,1300000):
    lista_comentarios = []
    anio_aleatorio = randint(2020,2022)
    mes_aleatorio = randint(1,12)
    if mes_aleatorio == 2:
        dia_aleatorio = randint(1,28)
    elif mes_aleatorio == 4 or 6 or 9 or 11:
        dia_aleatorio = randint(1,30)
    else:
        dia_aleatorio = randint(1,31)
    fecha = str(f"{dia_aleatorio}/{mes_aleatorio}/{anio_aleatorio}")
    opinion_aleatoria = randint(0,4)
    if opinion_aleatoria == 0:
        descrip_aleatorio = randint(0,1)
        desc_review = descripcion[descrip_aleatorio]
    elif opinion_aleatoria == 1:
        descrip_aleatorio = randint(2,3)
        desc_review = descripcion[descrip_aleatorio]
    elif opinion_aleatoria == 2:
        descrip_aleatorio = randint(4,5)
        desc_review = descripcion[descrip_aleatorio]
    elif opinion_aleatoria == 3:
        descrip_aleatorio = randint(6,7)
        desc_review = descripcion[descrip_aleatorio]
    else:
        descrip_aleatorio = randint(8,9)
        desc_review = descripcion[descrip_aleatorio]
    cant_comentarios = randint(1,10)
    autor = randint(1,150000)
    producto = randint(1,600000)
    for j in range(cant_comentarios):
        comentario_aleatorio = randint(0,6)
        resultado_comentario = comentarios[comentario_aleatorio]
        lista_comentarios.append(resultado_comentario)
    review = {
        "_id": i,
        "opinion": opiniones[opinion_aleatoria],
        "descripcion": desc_review,
        "fecha_review": fecha,
        "cantidad_comentarios": cant_comentarios,
        "comentarios": lista_comentarios,
        "autor": autor,
        "producto": producto
    }

#     lista_reviews.append(review)

# reviews.insert_many(lista_reviews)

# reviews.delete_many({})


pipeline = [
        {'$lookup':
        {
            'from': 'reviews',
            'localField': '_id',
            'foreignField': 'autor',
            'as': 'reviews'
        }}]

resultados = usuarios.aggregate(pipeline)

usuarios.insert_many(resultados)

contador = 1
for r in resultados:
    usuarios.update_one({'_id': contador},{'$set': {'reviews': r["reviews"]}})
    contador += 1

