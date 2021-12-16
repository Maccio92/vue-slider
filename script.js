/* Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.

Bonus:
1- al click su uno dei pallini mostrare l’immagine in posizione corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce*/ 

let app = new Vue({
    el: '#app',
    data: {
      images: [
          'image1.jpg',
          'image2.jpg',
          'image3.jpg',
          'image4.jpg',
      ],
      contatore: 0,
    },
    methods: {
      // Funzione per mandare avanti lo slide
      next: function() {
        this.contatore += 1;
        if (this.contatore > this.images.length - 1)
          {
          this.contatore = 0;
          }
      },
      // Funzione per mandare indietro lo slide
      prev: function() {
        this.contatore -= 1;
        if (this.contatore != 0)
          {
            this.contatore > this.images.length - 1;
          };
      },
      // Funzione per l'autoplay
      timer: function(){
        this.time = setInterval(this.next, 2000);
      },
      // Funzione per bloccare l'autoplay
      stop: function () {
        clearInterval(this.time);
      }
    },
    created(){
      this.timer();
    }
  })

  