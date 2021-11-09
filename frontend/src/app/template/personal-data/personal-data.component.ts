import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Users } from './../../users.model';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  personalData: Users = {
    id: null,
    name: '',
    email: '',
    password: ''
  }


  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  addUsers(): void {
    this.service.creatUser(this.personalData).subscribe()
    this.service.showMenssage('Cadastro feito com sucesso!')
  }

}
