import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Users } from './../users.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = "http://localhost:3001/users"

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  showMenssage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  creatUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.baseUrl, user)
  }

}

