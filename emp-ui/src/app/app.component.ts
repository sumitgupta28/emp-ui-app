import { Component } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp-ui';
  private  userToCreate: User ={
    'name': 'Sumit Gupta',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  };

  private  userForUpdate: User ={
    'id': 2,
    'name': 'Suumit Howell',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  };
  
  private  userForPatch: User ={
    'name': 'Sumit Howell',
    'username': 'Antonette',
    'email': 'sumit@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  };

  constructor(private userService: UserService){}

  ngOnInit() {
    //this.getUsers();
    //this.createUser();
    //this.updateUser();
    //this.doPatchUser();
    this.doDeleteUser();
    this.getUsers();
    this.getUsersEvents();

  }

  getUsersEvents(){
    this.userService.getUsersEvents().subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('Completed Get Users') 
    }
    )
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next: (v) => console.table(v),
      error: (e) => console.error(e),
      complete: () => console.info('Completed Get Users') 
    }
    )
  }

  getUser(){
    this.userService.getUser().subscribe( {
      next: (v) => console.table(v),
      error: (e) => console.error(e),
      complete: () => console.info('Completed Get User') 
    }
    )
  }


  createUser(){
    this.userService.createUser(this.userToCreate).subscribe({
      next: (v) => console.table(v),
      error: (e) => console.error(e),
      complete: () => console.info('Complete Creating the User') 
    }
    )
  }

  updateUser(){
    this.userService.updateUser(this.userForUpdate).subscribe( {
      next: (v) => console.table(v),
      error: (e) => console.error(e),
      complete: () => console.info('Complete Updating the User') 
    }
    )
  }

  doPatchUser(){
    this.userService.patchUser(this.userForPatch).subscribe( {
      next: (v) => console.table(v),
      error: (e) => console.error(e),
      complete: () => console.info('Complete Patch the User') 
    }
    )
  }
  doDeleteUser(){
    this.userService.deleteUser(this.userForPatch).subscribe( {
      next: (v) => console.table(v),
      error: (e) => console.error(e),
      complete: () => console.info('Complete Delete the User') 
    }
    )
  }
}
