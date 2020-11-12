import { Injectable } from '@angular/core';
import { Post } from '../postinterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private arrPosts: Post[];

  constructor() { 


  this.arrPosts=[

    { titulo:'El origen de la ñ',
      texto:'Esta letra nació de la necesidad de representar un nuevo sonido, inexistente en latín. El castellano medieval escogió el dígrafo nn, que se solía representar abreviadamente mediante una sola n con una rayita más o menos ondulada encima; así surgió la ñ',
      autor:'Aula Hispánica',
      imagen: './assets/images/n.jpg',
      fecha: '09 marzo 2020',
      categoria:'lengua',
      },

      { titulo:'Cantabria infinita',
      texto:'Cantabria es tierra de mar y montaña de verde y azul y en ambos entornos encontramos parajes únicos, a veces escondidos, que hacen las delicias de nuestros visitantes y amigos. Hoy queremos enseñaros como vivir una experiencia que aúne agua y montaña.',
      autor:'Turismo Cantabria',
      imagen: './assets/images/cantabria.jpg',
      fecha: '3 abril 2020',
      categoria:'viajes',

    },

      {
      titulo:'Sigur Ros',
      texto:'La banda islandesa Sigur Rós ha sorprendido a sus seguidores en redes sociales con el anuncio de lanzamiento de un nuevo álbum orquestal, el cual llevará por titulo “Odin’s Raven Magic”. Acompañando esta noticia, han lanzado un nuevo tema perteneciente al álbum, el cual lleva por título Dvergmál',
      autor:'Islandia mola',
      imagen: './assets/images/sigur.jpg',
      fecha: '19 mayo 2020',
      categoria:'música',
      },

      {
        titulo:'Dublín y la fábrica de Guinness',
        texto: 'El almacén de Guinness (Guinness Storehouse) fue construido en 1904 para ser utilizado como lugar de fermentación de la cerveza Guinness. El edificio cumplió con su cometido hasta 1988 y en el año 2000 abrió sus puertas al público para mostrar sus exposiciones.En Dublín tendréis la posibilidad de realizar un recorrido por el enigmático mundo que la rodea y conocer todos los detalles sobre su fabricación',
        autor:'just a Dubliner',
        imagen: './assets/images/dublin.jpg',
        fecha: '27 de junio 2020',
        categoria:'viajes',
      },
      {
        titulo:'Nils Frahm ',
        texto:'Nils Frahm, the well-established ambient and film composer, marks this year’s Piano Day with an album of eight soft, piano lullabies titled Empty.True to form, the eight tracks do not so much erupt with lush melodies, but rather simmer and smolder with an airy and dreamy ambience, thanks to the delicate and wistful piano riffs. The leisurely pace of the music lulls the listener into a dream-like state and induces feelings that span the breadth between pure joy and deep sorrow.',
        autor:'Eimear Fee',
        imagen: './assets/images/nils.jpg',
        fecha: '23 de septiembre 2020',
        categoria:'música'
      },
      {
        titulo:'Ti nunca lleva tilde',
        texto:'Hoy venimos a recordar algo que parece que mucha gente desconoce y es que ti es monosílabo y, por tanto, se escribe sin tilde. Debe evitarse el error frecuente de acentuarlo gráficamente (tí), por analogía con los pronombres de primera y tercera personas mí y sí, que, aunque son también monosílabos, requieren la presencia de tilde diacrítica ',
        autor:'Corrector justiciero',
        imagen: './assets/images/ti.jpg',
        fecha: '4 mayo 2020',
        categoria:'lengua'
      }
  ];

  if (localStorage.getItem('nuevoPost')) {
    this.arrPosts = JSON.parse(localStorage.getItem('nuevoPost'));
  //  }  else {
  //   this.arrPosts = []; 

}

  }


  getAllPosts():Promise<Post[]>{
    return new Promise ((resolve,reject)=>{
      resolve(this.arrPosts);
    })
  }


  agregarPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pPost);

      localStorage.setItem('nuevoPost', JSON.stringify(this.arrPosts))
      resolve(this.arrPosts);
    });
  }
   
    getPostbyCategoria(pCategoria):Promise<Post[]>{

      return new Promise ((resolve, reject)=>{
        const arrFiltrado= this.arrPosts.filter(post=>{
          return post.categoria===pCategoria;

      });
       resolve(arrFiltrado);

    })
}
}



