
let words: string[] =  [
   
    'GATO','CELULAR','ANIMAL','SAPO','TELEFONO','VETERINARIO',
    'ABRIGO','ABRIGAR','CLAVO','ENCLAVAR','MUJER','MUJERCITAS',
    'ADULTO','ADULTEZ','COCHE','COCHERA','NEGRO','ENNEGRECIDO',
    'AGUA','AGUATERO','COMARCA','COMARCAL','NIÑO','NIÑEZ',
    'AIRE','DESAIRE','COMIDA','COMESTIBLE','NUBE','NUBARRON',
    'RAMO','RAMIFICACION','CORTINA','CORTINERO','OCASION','OCASIONAR',
    'ALCALDE','ALCALDIA','CUADERNO','ENCUADERNAR','PAN','PANADERIA',
    'ANCIANO','ANCIANIDAD','CUCHARA','CUCHARÓN','PANTALÓN','PANTALONCITO',
    'ÁRBOL','ARBOLEDA','DULCE','ENDULZAR','PAVIMENTO','PAVIMENTAR',
    'ASFALTO','ASFALTADO','EJERCITO','EJERCITAR','PERRO','PERRUNO',
    'AVIÓN','AVIACION','ELECTRICIDAD','ELÉCTRICO','PEZ','PECECITOS',
    'AZUCAR','AZUCARADO','ESCUELA','ESCOLAR','PIEDRA','APEDREAR',
    'AZUL','AZULADO','ESTANQUE','ESTANCAR','PIERNA','PIERNITA',
    'BALÓN','BALONCESTO','FLOR','FLORERÍA','PINTURA','PINTURERIA',
    'BALSA','BOLSON','FORMA','FORMALIZAR','PISTOLA','PISTOLERO',
    'BARCO','BARCAZA','FRIO','FRIAMENTE','PLACA','PLAQUETA',
    'BARRIO','BARRENDERO','FUEGO','FOGATA','PLANTA','PLANTACION',
    'BLANCO','BLANQUECINO','GATERIO','PLATO','PLATERIA',
    'BOLSA','EMBOLSAR','GOMA','GOMERIA','PUEBLO','PUEBLERINO',
    'BOTE','EMBOTELLADO','GORRA','GORRITA','PUERTA','PORTON',
    'BOTON','BOTONCITO','GUANTE','ENGUANTAR','RADIO','RADIOGRAFIA',
    'CABELLO','CABELLERA','HOMBRE','HOMBRIA','ROPA','ROPERO',
    'CABEZA','ENCABEZAR','JARDIN','JARDINERO','RUTA','RUTERO',
    'CAFE','CAFETERIA','JOVEN','JOVENCITA','SAL','SALERO',
    'CAJA','CAJERO','LAMPARA','LAMPARITA','SARTEN','SARTENCITA',
    'CALOR','CALUROSO','LAPIZ','LAPICES','SILENCIO','SILENCIAR',
    'CAMARA','CAMAROGRAFO','CAPSULA','ENCAPSULAR','SILLA','SILLON',
    'CAMINO','ENCAMINAR','LIBRO','LIBRITO','SIMBOLO','SIMBOLICO',
    'CAMISA','ENCAMISAR','LLAVE','LLAVERO','SOL','INSOLADO',
    'CLARO','ACLARAR','LUZ','LUCECITAS','TELA','TELARAÑA',
    'CASA','CASONA','MANGUERA','MANGUERITA','VIEJO','AVEJENTADO',
    'CEPILLO','CEPILLAR','MANO','MANOPLA','VECINO','VECINDAD',
    'CARRO','CARRUAJE','MANTA','MANTITA','VENTANA','VENTANAL',
    'CIGARRO','CIGARRILLO','MANTEL','MANTELERIA','VERDE','VERDUZCO'

];

export function getRandomWord(){

    const randomIndex = Math.floor( Math.random() * words.length );

    return words [randomIndex];
}
