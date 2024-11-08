import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,  
  imports: [CommonModule, ProductAlertsComponent, RouterModule] 
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}
