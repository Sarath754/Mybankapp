import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 

    this.route.paramMap.subscribe((params:any)=>{

const userId= params.params.id;

// bankService.getUser()
// .subscribe((data: any) => {

//   this.profileform.patchValue({

//     username: data.username,
//     acno: data.acno,
//     balance: data.balance


//   })

// })

    })
      
      
  }

  ngOnInit(): void {
  }

}
