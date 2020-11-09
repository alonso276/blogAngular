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
      imagen: './assets/images/n.png',
      fecha: 27,
      categoria:'lengua',
      },

      { titulo:'Cantabria infinita',
      texto:'Cantabria es tierra de mar y montaña de verde y azul y en ambos entornos encontramos parajes únicos, a veces escondidos, que hacen las delicias de nuestros visitantes y amigos. Hoy queremos enseñaros como vivir una experiencia que aúne agua y montaña.',
      autor:'Turismo Cantabria',
      imagen: './assets/images/cantabria.jpg',
      fecha: 27,
      categoria:'viajes',

    },

      {
      titulo:'Sigur Ros',
      texto:'La banda islandesa Sigur Rós ha sorprendido a sus seguidores en redes sociales con el anuncio de lanzamiento de un nuevo álbum orquestal, el cual llevará por titulo “Odin’s Raven Magic”. Acompañando esta noticia, han lanzado un nuevo tema perteneciente al álbum, el cual lleva por título Dvergmál',
      autor:'Islandia mola',
      imagen: './assets/images/sigur.jpg',
      fecha: 27,
      categoria:'música',
      },

  ];

  if (localStorage.getItem('nuevoPost')) {
    this.arrPosts = JSON.parse(localStorage.getItem('nuevoPost'));
  // }  else {
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



