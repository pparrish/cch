const cards = [
  ["Una maldición gitana"],
  ["Un minuto de silencio."],
  ["Un policía honesto sin nada que perder."],
  ["Hambruna"],
  ["Bacteria carnívora."],
  ["Víboras voladoras sexuales."],
  ["Que te valgan madres los paises africanos."],
  ["Mandar mensajitos cachondos"],
  ["Cambia-formas"],
  ["Estrellas porno."],
  ["Violar y saquear"],
  ["72 virgenes."],
  ["Un comando armado disparando a un domicilio"],
  ["Una paradoja del tiempo"],
  ["Antojitos mexicanos"],
  ["Bling bling."],
  ["Consultores"],
  ["Deuda aplastante"],
  ["Traumas con el papá."],
  ["Aprobado por Carlos Slim"],
  ["Tirar un candelabro sobre tus enemigos mientras subes agarrado de la cuerda"],
  ["Vicente Fox"],
  ["Desnudez frontal"],
  ["Inyecciones de hormonas"],
  ["Poner un huevo"],
  ["Encuerarte y ver Nikelodeon"],
  ["Pretender que te importa Ridículo en público"],
  ["Compartir jeringas"],
  ["Mocos"],
  ["La inevitable muerte del universo"],
  ["El milagro de dar a luz"],
  ["El Rapto"],
  ["Sacártela"],
  ["El privilegio de los blancos"],
  ["Deberes matrimoniales"],
  ["El ladrón de Hamburguesas"],
  ["Desodorante AXE"],
  ["La sangre de Cristo"],
  ["Horrorosos accidentes de depilación láser"],
  ["¡¡¡BATMAN!!!"],
  ["Agricultura"],
  ["Un mongolito robusto"],
  ["Selección natural"],
  ["Abortos con un gancho de ropa"],
  ["Comerte la torta antes del recreo"],
  ["La papada de López-Doriga"],
  ["World of warcraft"],
  ["Hacer mal tercio"],
  ["Obesidad"],
  ["Un equipo de volleybol homoerótico"],
  ["Tetanos"],
  ["Un despliegue copulatorio"],
  ["Torcedura testicular"],
  ["Buffet de pizza por $50"],
  ["Pizza de oreo"],
  ["Kalimba"],
  ["Ataques de velociraptor"],
  ["Quitarte la camiseta"],
  ["Esmegma"],
  ["Alcoholismo"],
  ["Un hombre de mediana edad en patines"],
  ["El ataque de los Ositos Cariñositos"],
  ["Atragantarse y vomitar"],
  ["Paletotas gigantes"],
  ["Odiarse a si mismo"],
  ["Niños con correas"],
  ["Un faje sin ganas"],
  ["La Santa Biblia"],
  ["Porno alemán de fetiches"],
  ["Estar en llamas"],
  ["Embarazo adolescente"],
  ["Gandhi"],
  ["Dejar un mensaje de voz incómodo"],
  ["Ganchos a la mandíbula"],
  ["Representantes de atención al cliente"],
  ["Una erección que dura más de 4 horas"],
  ["Mis genitales"],
  ["ligar en la clínica de abortos"],
  ["Ciencia"],
  ["Sexo oral no recíproco"],
  ["Aves que no vuelan"],
  ["Una buena esnifada"],
  ["Tehuacanazo"],
  ["Un desayuno balanceado"],
  ["Universidad del Valle de Mexico"],
  ["Robarle un dulce a un bebe"],
  ["El teletón"],
  ["Rascarte el trasero a escondidas"],
  ["Post-its pasivo-agresivos"],
  ["El equipo chino de gimnasia"],
  ["Cambiarse a axtel"],
  ["Hacerse tantita pipí"],
  ["El video del fua"],
  ["Emisiones nocturnas"],
  ["Los judíos"],
  ["Mis caderas"],
  ["Muslos de acero"],
  ["Guiñarle a los viejitos"],
  ["Maestro limpio, justo detrás de ti"],
  ["Una caricia gentil en la entrepierna"],
  ["Tensión sexual"],
  ["La fruta prohibida"],
  ["Skeletor"],
  ["Whiskas"],
  ["Ser rico"],
  ["Dulce, dulce venganza"],
  ["Priistas"],
  ["Un venado gaseoso"],
  ["Tatalie Portman"],
  ["Una sobadita"],
  ["Pilotos kamikaze"],
  ["Sean Connery"],
  ["Propaganda homosexual"],
  ["Los Mexicanos chambeadores"],
  ["Un halcón con gorrita"],
  ["Monaguillos"],
  ["El hombre kool-Aid"],
  ["Enojarse tanto que se te para"],
  ["Muestras gratis"],
  ["Tanto rollo para nada"],
  ["Hacer lo correcto"],
  ["LA venta de Texas a Estados Unidos"],
  ["Lactancia"],
  ["Paz mundial"],
  ["Robocop"],
  ["Pasado de lanza"],
  ["Justin Bieber"],
  ["Oompa-Loompas"],
  ["Grito de mariachi inapropiado"],
  ["Pubertad"],
  ["Fantasmas"],
  ["Unas tetas operadas asimétricas"],
  ["Decir adiós con las manos"],
  ["Dedear"],
  ["Carlos Salinas pescandose un huevo en un gancho de la cortina"],
  ["Atole con el dedo"],
  ["Brutalidad policiaca"],
  ["Mario Aburto Martinez"],
  ["Pre-adolecentes"],
  ["Revendedores"],
  ["Te aguantas la risa cuando dicen papanicolau"],
  ["Tuitear"],
  ["Darth Vader"],
  ["Que te la jalen sin ganas"],
  ["Exactamente lo que esperabas"],
  ["Querer eructar y terminar vomitando en el suelo"],
  ["Focusín"],
  ["Células madre embrionarias"],
  ["Un escote con clase"],
  ["Sexo Panda"],
  ["Lobotomía con picahielo"],
  ["Tom Cruise"],
  ["Herpes bucal"],
  ["Cachalote"],
  ["Gente sin casa"],
  ["Tercera base"],
  ["Insesto"],
  ["Pacman tragando semen sin control"],
  ["Un mimo teniendo un ataque al corazón"],
  ["Hulk Hogan"],
  ["Dios"],
  ["Tallarse bajo los pliegues de carne"],
  ["Lluvia dorada"],
  ["Emociones"],
  ["Lamer cosas para decir que son tuyas"],
  ["Cerveza Indio"],
  ["La placenta"],
  ["Combustion humana espontánea"],
  ["Amigos con beneficios"],
  ["Pintar con los dedos"],
  ["El olor de los viejitos"],
  ["Morirse de disentería"],
  ["Mis demonios interiores"],
  ["Una pistola de agua llena de pipi de gato"],
  ["Victoriano Huerta"],
  ["Acurrucarse con tu pareja"],
  ["¿Donde jugarán las niñas?"],
  ["Peleas de gallo"],
  ["Fuego amigo"],
  ["Ernesto Zedillo"],
  ["Una fiesta de cumpleaños decepcionante"],
  ["Una negra descarada"],
  ["Atletas matemáticos"],
  ["Un caballo pequeño"],
  ["BLue demon"],
  ["Cabalgata hacia el atardecer"],
  ["Un giro de trama escrito por M. Night Shyamalan"],
  ["Afros"],
  ["Destrucción mutuamente asegurada"],
  ["Pedófilos"],
  ["Levadura"],
  ["Robar tumbas"],
  ["Comerse el último bisonte que existe"],
  ["Catapultas"],
  ["Gente pobre"],
  ["Olvidar la batalla de puebla"],
  ["Bailar country"],
  ["La fuerza"],
  ["Limpiarse el trasero"],
  ["Diseño inteligente"],
  ["Bocafloja"],
  ["Sida"],
  ["Fotos de tetas"],
  ["Super Hombres"],
  ["Marta Sahagún de Fox"],
  ["Gladiadores Americanos"],
  ["Ponerte bien pacheco"],
  ["Cienciología"],
  ["Envidia del pene"],
  ["Quitarte lo gay rezando"],
  ["Retozando"],
  ["Dos enanos cagando en una tina"],
  ["El Ku Klux Klan"],
  ["Genghis Khan"],
  ["Metanfetaminas"],
  ["Servidumbre"],
  ["Cuidarse de los extraños"],
  ["Una matraca"],
  ["La carrera de actuación de Cuautémoc Blanco"],
  ["Hacer cabriolas"],
  ["Justicia por tu propia mano"],
  ["Sobrecompensar"],
  ["Bukkake pixelado"],
  ["Una vida de tristeza"],
  ["Racismo"],
  ["Lanzamiento de eneanos"],
  ["Arcoiris y brillo del sol"],
  ["Un chango fumando"],
  ["Inundaciones repentinas"],
  ["El testículo perdido de Lance Armstrong"],
  ["Arcadas"],
  ["Los terroristas"],
  ["Britney Spears a los 55 años"],
  ["Actitud"],
  ["Empezar a cantar y bailar"],
  ["Lepra"],
  ["Hoyo glorioso"],
  ["Traer las luces altas"],
  ["El corazón de un niño"],
  ["¡Cachorritos!"],
  ["Despertar medio desnudo en un estacionamiento"],
  ["Condones"],
  ["La vagina de Elba Esther"],
  ["El perineo"],
  ["Escuchar activamente"],
  ["Limpieza étnica"],
  ["La Maquinita de si Pudo"],
  ["La mano pachona"],
  ["Esperarse hasta el matrimonio"],
  ["Estupideces incuantificables"],
  ["Perfume Euphoria de Calvin Klein"],
  ["Regalar algo que te regalaron"],
  ["Autocanibalismo"],
  ["Disfunción erectil"],
  ["Mi colección de juguetes sexuales de alta tecnología"],
  ["El papa"],
  ["Gente blanca"],
  ["Porno de tentáculos"],
  ["Paty Chapoy vomitando a la vez que un grupo de arañas eclosiona en su cerebro y salen por sus ductos lagrimales"],
  ["Demasiado gel de pelo"],
  ["Seppuku"],
  ["Gays bailando quebradita"],
  ["Hacer trampa en las Olimpiadas Especiales"],
  ["Carisma"],
  ["Keanu Reeves"],
  ["Pedro Infante"],
  ["Moderato"],
  ["Una miradita"],
  ["Cagar para adentro"],
  ["Menstruación"],
  ["Niños con cáncer en el trasero"],
  ["Una sorpresa salada"],
  ["El sur"],
  ["La violación de nuestros derechos más básicos"],
  ["Es que no me tienes paciencia"],
  ["Violar en una cita"],
  ["Ser fabuloso"],
  ["Necrofilia"],
  ["Centauros"],
  ["El Tesoro del Saber"],
  ["Los negros"],
  ["Caballerosidad"],
  ["Sopa Maruchan"],
  ["Perras"],
  ["Los que están muy dicapacitados"],
  ["Huérfanos hermosos"],
  ["Robot Hitler"],
  ["Cagar enchilado"],
  ["Otra maldita película de vampiros"],
  ["Slinkies enredados"],
  ["El verdadero significado de la navidad"],
  ["Estrógeno"],
  ["Unos taquitos al vapor"],
  ["La cosa que te electrocuta los abdominales"],
  ["Orinar una piedra del riñon"],
  ["Un ano blanqueado"],
  ["Michael Jackson"],
  ["Mejoras cibernéticas"],
  ["Chavos que no te hablan después de la primera cita"],
  ["Calzones con rajita de canela"],
  ["Masturbación"],
  ["Hablar como fresa"],
  ["Pedos vaginales"],
  ["Esconder una erección"],
  ["Calzones comestibles"],
  ["Viagra"],
  ["Sopa muy caliente"],
  ["Muhammad (Alabado Sea)"],
  ["¡Sexo Sorpresa!"],
  ["Una orden de tacos"],
  ["Tomar solo"],
  ["Dedos de pito"],
  ["Múltiples heridas con navaja"],
  ["Hacerte popo"],
  ["Abuso infantil"],
  ["Perlas anales"],
  ["Muertes civiles"],
  ["Sacarla"],
  ["Robert Downey, Jr"],
  ["Carne de caballo"],
  ["Un sombrero muy chido"],
  ["Kim Jong-il"],
  ["Un vello público fuera de lugar"],
  ["Pandilleros fresas"],
  ["Los cholos"],
  ["Metérsela por detrás"],
  ["Alimentar el Botija"],
  ["Enseñarle a un robot a amar"],
  ["Unos chingadazos"],
  ["Un molino lleno de cadáveres"],
  ["Conde Patula"],
  ["Usar los calzones al revés para no lavarlos"],
  ["El rayo de la muerte"],
  ["Techo de espejo"],
  ["Una hielera llena de órganos"],
  ["El sueño americano"],
  ["Tomarse una caguama de jilo"],
  ["Cuando te echas un pedo y te cagas un poquito"],
  ["Arrepentirse"],
  ["Bebés muertos"],
  ["Prepucio"],
  ["Solos de saxofón"],
  ["Italianos"],
  ["Un feto"],
  ["Disparar un rifle al aire mientras se la metes hasta adentro a un cerdo que está chille y chille"],
  ["Andrés Manuel Lopez Obrador"],
  ["Amputados"],
  ["Eugenesia"],
  ["Mi estado de relación"],
  ["Christopher Walken"],
  ["¿Abejas?"],
  ["Novelas eróticas de Harry Potter"],
  ["Universidad"],
  ["Emborracharte con enjuague bucal"],
  ["Nazis"],
  ["200 gramos de heroína"],
  ["Stephen Hawking hablando sucio"],
  ["Padres muertos"],
  ["Permanencia del objeto"],
  ["Pulgares opuestos"],
  ["Examenes de Admisión"],
  ["Parloteo"],
  ["Manos de sierra eléctrica"],
  ["Nicolas Cage"],
  ["Concurso de belleza infantil"],
  ["Explosiones"],
  ["Esnifar pegamento"],
  ["Peña nieto en el desierto con buitres dándole vueltas"],
  ["Represión"],
  ["Rufies"],
  ["Mi vagina"],
  ["Pantalones con un agujero en el trasero"],
  ["Un homicidio muy sucio"],
  ["Dar el 110%"],
  ["Su Majestad, la Reina Elizabeth II "],
  ["La noche triste"],
  ["Ser marginalizado"],
  ["Duendes"],
  ["Esperanza"],
  ["El Rev. Dr. Martin Luther King, Jr"],
  ["Un micropene"],
  ["Mi alma"],
  ["Una confusión caliente"],
  ["Vikingos"],
  ["Gente ardiente"],
  ["Seducción"],
  ["Complejo de Edipo"],
  ["Gansos"],
  ["Calentamiento global"],
  ["Música New Age"],
  ["Burritos"],
  ["Hacer pucheros"],
  ["Atropellar a alguien"],
  ["Sufragio femenino"],
  ["Un condón defectuoso"],
  ["Laura de America"],
  ["Niños africanos"],
  ["El incendio de la guardería ABC"],
  ["Barack Obama"],
  ["Asiáticos que no son buenos para las matemáticas"],
  ["Hombres japoneses viejitos"],
  ["Intercambiar cordialidades"],
  ["Heteronormatividad"],
  ["Partir el mar rojo"],
  ["Arnorld Schwarzenegger"],
  ["Que te la chupen cuando manejas"],
  ["Abdominales espectaculares"],
  ["Pudín de higos"],
  ["Un león de zoológico tristón"],
  ["Una bolsa de frijoles mágicos"],
  ["Malas decisiones de la vida"],
  ["Mi vida sexual"],
  ["Auschwitz"],
  ["Una tortuga mordiendote la puntita del pene"],
  ["Una detonación termonuclear"],
  ["El clítoris"],
  ["El Big Bang"],
  ["Minas terrestres"],
  ["Amigos que se comen toda la botana"],
  ["Cabras comiendo latas"],
  ["La danza del HAda de Azúcar"],
  ["Jalartela en una alberca llena de lágrimas de niños"],
  ["Carne de hombre"],
  ["Tiempo para mi mismo"],
  ["El metro subterráneo"],
  ["Decir chistes del Holocausto en un mal momento"],
  ["Un mar de problemas"],
  ["Sueños guajiros"],
  ["La voz de Morgan Freeman"],
  ["Mujeres en comerciales de yogurt"],
  ["Aumento de tamaño natural para el caballero"],
  ["Ser un hechicero de puta madre"],
  ["Piercings genitales"],
  ["Travestis pasables"],
  ["Peleas sexy con almohadas"],
  ["Pelotas"],
  ["La abuela"],
  ["Fricción"],
  ["Aguafiestas"],
  ["Pedorrearte e irte"],
  ["Ser pedante con los niños"],
  ["Poner trampas en la casa para detener a los ladrones"],
  ["Una cama de agua"],
  ["Morirse"],
  ["Huracán Latrina"],
  ["Los gays"],
  ["La insensatez del hombre"],
  ["Hombres"],
  ["Los Menonitas"],
  ["Huevos de pterodáctilo"],
  ["Ejercicios para fomentar la sinergia del Equipo"],
  ["Tumor cerebral"],
  ["Cartas contra la Humanidad"],
  ["El miedo mismo"],
  ["Lady Gaga"],
  ["El lechero"],
  ["Una boca sucia"],
]

export default cards