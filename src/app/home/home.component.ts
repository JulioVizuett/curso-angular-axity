import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Dessert } from '../model/postres.model';
import { DataService } from '../services/data.service';
import { DessertsService } from '../services/desserts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource = new MatTableDataSource<Dessert>();
  columns = ['clasification', 'type', 'price', 'actions'];

  constructor(private dataService: DataService, private dessert: DessertsService, private router: Router) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData(): void {
    this.dataService.isLoading.next(true);
    this.dessert.getDesserts().subscribe(desserts =>{
      this.dataSource.data = desserts;
      this.dataService.isLoading.next(false);
    }, () => {
      this.dataService.isLoading.next(false);
      this.dataService.message.next("Lo sentimos, no se pudieron cargar los elementos");
    });
  }

  edit(item: Dessert): void {
    console.log(item);
    this.router.navigate(['postre', item._id]);
  }

  newItem(): void {
    this.router.navigate(['postre'])
  }

}
