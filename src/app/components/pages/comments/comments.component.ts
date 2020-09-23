import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  users: User[] = [];

  constructor(private _ms: MyServiceService) {
    this.listUsers();
  }

  ngOnInit(): void {
  }

  listUsers() {
    this._ms.getUsers()
      .toPromise()
      .then((response: any) => {
        this.users = response.data;
      })
      .catch(err => console.log(err));
  }

}
