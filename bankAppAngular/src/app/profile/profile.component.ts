import { analyzeAndValidateNgModules, FormattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileform = this.fb.group({
    username: ["", [Validators.required]],
    acno: ["", [Validators.required]],
    balance: ["", [Validators.required]],


  });

  profile: any = {}

  constructor(private fb: FormBuilder, private bankService: BankService) {

    bankService.getProfile()
      .subscribe((data: any) => {

        this.profileform.patchValue({

          username: data.username,
          acno: data.acno,
          balance: data.balance


        })

      })




  }

  ngOnInit(): void {
  }

}
