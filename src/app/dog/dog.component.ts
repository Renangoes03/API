import { DogService } from './../dog.service';

import { Component, OnInit } from '@angular/core';

import { Dog } from '../dog';




@Component({

 selector: 'app-dog',

templateUrl: './dog.component.html',

styleUrls: ['./dog.component.css']

})

export class DogComponent implements OnInit {




constructor(private DogService: DogService){ }


ngOnInit(): void {

    this.loadDog();

  }

  loadDog() {

    this.DogService.getRandomDog().subscribe(

      {

        next: dog => this.dog = dog

      }

    );

  }




  dog: Dog = {} as Dog;




   getName(): string[]{

      return this.dog.message.split("/")[4].split("-");

    }




}

function loadDog() {

  throw new Error('Function not implemented.');

}