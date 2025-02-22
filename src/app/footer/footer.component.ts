import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    standalone: true, // Adicione esta linha
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'] // Corrija "styleUrl" para "styleUrls"
})
export class FooterComponent {}
