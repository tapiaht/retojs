/*Reto 90
En este ejercicio, el objetivo es implementar una playlist de un servicio de música utilizando un stack.

Deberás implementar la lógica de la clase Playlist la cual deberá tener las siguientes 3 propiedades top, bottom y length para poder desarrollar el stack.

addSong(song): este método debe permitir agregar una canción al stack.

playSong(): este método debe permitir reproducir la canción que está en el tope del stack y luego eliminarla. Si el stack está vacío, deberá lanzar un error con el mensaje "No hay canciones en la lista".

getPlaylist() transforma el stack a un array con todas las canciones que están en el, en orden de reproducción (de la última agregada a la primera).

Ejemplo 1:

Input:*/
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


export class Playlist {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    const newSong = new Node(song);
    if (this.length === 0) {
      this.top = newSong;
      this.bottom = newSong;
    } else {
      newSong.next = this.top;
      this.top = newSong;
    }

    this.length++;
  }

  playSong() {
    if (this.length === 0) {
      throw new Error("No hay canciones en la playlist");
    }

    const actualSong = this.top.value;
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;

    this.length--;
    return actualSong;
  }

  getPlaylist() {
    const songs = [];
    let current = this.top;

    while (current) {
      songs.push(current.value);
      current = current.next;
    }

    return songs;
  }

}

const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.playSong();
//Output: "Hotel California"
playlist.playSong();
//Output: "Stairway to Heaven"
playlist.playSong();
//Output: "Bohemian Rhapsody"
playlist.playSong();
/*Output: Error: No hay canciones en la lista
Ejemplo 2:
Input:*/
//const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.getPlaylist();

/*Output: ["Hotel California", "Stairway to He*/