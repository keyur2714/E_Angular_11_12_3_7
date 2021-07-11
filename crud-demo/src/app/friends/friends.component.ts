import { Component, OnInit } from '@angular/core';
import { Friends } from './friends.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends : Friends[] = [];

  editInx : number = -1;

  newFriend : Friends = new Friends();

  constructor() { }

  ngOnInit(): void {
    let friend1 = new Friends("keyur","7387029671");
    let friend2 = new Friends("denish","7387029121");
    let friend3 = new Friends("vinit","7387029432");
    this.friends.push(friend1);
    this.friends.push(friend2);
    this.friends.push(friend3);
  }

  save() : void {
    console.log(this.newFriend.name + " " + this.newFriend.mobileNo);
    if(this.newFriend.name === '' || this.newFriend.mobileNo === ''){
      alert("Please Enter Valid Value.")
    }else{
      let findFriend = this.friends.find((f)=>f.name == this.newFriend.name);      
      if(findFriend !== undefined && findFriend.mobileNo === this.newFriend.mobileNo){
        alert("Friend Already Exists.");
      }else{
        let temp = new Friends(this.newFriend.name,this.newFriend.mobileNo);
        this.friends.push(temp);
        this.newFriend.name = '';
        this.newFriend.mobileNo = '';
        alert("New Friend Added Successfully.");
      }      
    }    
  }
  
  update() : void {
    console.log(this.newFriend.name + " " + this.newFriend.mobileNo);
    if(this.newFriend.name === '' || this.newFriend.mobileNo === ''){
      alert("Please Enter Valid Value.")
    }else{
      let temp = new Friends(this.newFriend.name,this.newFriend.mobileNo);
      this.friends[this.editInx] = temp;
      this.newFriend.name = '';
      this.newFriend.mobileNo = '';
      this.editInx = -1;
      alert("Friend Updated Successfully.");
    }    
  }

  edit(idx : number) : void {
    this.editInx = idx;
    this.newFriend = this.friends[idx];
  }

  delete(idx : number) : void {
    //alert(idx);
    let friend = this.friends[idx];
    let confirmMsg = confirm("Are you sure want to delete "+friend.name+ "?");
    //alert(confirmMsg);
    if(confirmMsg){
      this.friends.splice(idx,1);
      alert("Friend Deleted with name "+friend.name);
    }
    
  }
}
