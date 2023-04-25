import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  isLoggedIn:boolean=false;
  @Input() searchItem:string="";
  searcher()
  {
    this.isLoggedIn=true;
    console.log(this.searchItem);
  }
  logout()
  {
    this.isLoggedIn=false;
  }
}
