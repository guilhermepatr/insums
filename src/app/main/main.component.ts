import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  images = [
    { src: 'https://res.cloudinary.com/ddbfgigsu/image/upload/v1735581825/project-insums/carrousel/erva-mate_rotiim.png', alt: 'Erva-Mate' },
    { src: 'https://res.cloudinary.com/ddbfgigsu/image/upload/v1735581825/project-insums/carrousel/confot-pads_t8yte1.png', alt: 'Ração Pads' },
    { src: 'https://res.cloudinary.com/ddbfgigsu/image/upload/v1735581824/project-insums/carrousel/boro-solo_owhcbn.png', alt: 'Boro Solo' },
    { src: 'https://res.cloudinary.com/ddbfgigsu/image/upload/v1735581825/project-insums/carrousel/erva-mate_rotiim.png', alt: 'Erva-Mate' }
  ];

  currentIndex = 0;

  // Acesso aos elementos DOM das imagens
  @ViewChildren('sliderItem') sliderItems!: QueryList<ElementRef>;

  // Método para navegar entre as imagens
  navigate(direction: 'prev' | 'next') {
    if (direction === 'prev') {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }

    // Atualiza o scroll para centralizar o item atual
    this.scrollToCurrentItem();
  }

  // Método para centralizar a imagem atual
  private scrollToCurrentItem() {
    const itemsArray = this.sliderItems.toArray();
    const currentItem = itemsArray[this.currentIndex].nativeElement;

    currentItem.scrollIntoView({
      
      inline: 'center',
      block: 'nearest'
    });
  }

  private scrollToCurrentItem() {
    const gallery = document.querySelector('.gallery') as HTMLElement;
    if (!gallery) return;

    const itemWidth = gallery.querySelector('.item')?.clientWidth || 0;
    const gap = 20; // Mesmo valor definido no CSS
    
    // Calcula a posição de scroll necessária
    const scrollPosition = (itemWidth + gap) * this.currentIndex;
    
    // Aplica a transformação
    gallery.style.transform = `translateX(-${scrollPosition}px)`;
}

// Adicione este método para calcular a posição inicial
ngAfterViewInit() {
    // Chama o método para posicionar corretamente no início
    this.scrollToCurrentItem();
    
    // Opcional: Adicionar redimensionamento responsivo
    window.addEventListener('resize', () => {
        this.scrollToCurrentItem();
    });
}

  

    
  }
