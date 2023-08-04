import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',

    styleUrls: ['app.component.scss']
})
export class AppComponent{
    title='test'
}
export class LoginFormComponent {
    username: string = '';
    password: string = '';
    rememberMe: boolean = false;

    submitForm() {
  
        
    }
}
export class LoginComponent{
    
}