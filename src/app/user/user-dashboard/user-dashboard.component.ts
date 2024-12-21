import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  userInfo$ = this.userService.userInfo$;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   
    const userId = Number(localStorage.getItem('user_id'));
    this.userService.fetchUserInfo(userId).subscribe(userInfo => {
      this.userService.setUserInfo(userInfo);
    });
  }
}
