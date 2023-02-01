import { Moment } from './../../../interfaces/Moment';
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;


  constructor(private momentService: MomentService){}

  ngOnInit(): void{

    this.momentService.getMoments().subscribe((itens) => {
      const data = itens.data;

      data.map((item) => {
        item.create_at = new Date(item.create_at!).toLocaleDateString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
      
    })


  }


}
