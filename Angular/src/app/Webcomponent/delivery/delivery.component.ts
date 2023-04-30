import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  

  constructor(private router: Router) {}
  time: number = 5;
  ngOnInit() {
    
  
      setTimeout(() => {
          this.router.navigate(['']);
      }, 5000);  //5s
  }
 
  
  

}
