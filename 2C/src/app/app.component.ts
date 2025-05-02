import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Management System';

  user: any = {}; // Stores registered user details
  isLoggedIn = false; // Tracks if user is logged in

  // Register User
  register(name: string, address: string, contact: string, email: string, password: string) {
    this.user = { name, address, contact, email, password };
    alert("Registration Successful! Please log in.");
  }

  // Login User
  login(email: string, password: string) {
    if (this.user.email === email && this.user.password === password) {
      this.isLoggedIn = true;
      alert("Login Successful!");
    } else {
      alert("Invalid email or password!");
    }
  }

  // Logout User
  logout() {
    this.isLoggedIn = false;
    alert("Logged Out!");
  }
} 