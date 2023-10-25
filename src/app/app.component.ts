import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 newMemberName = "";
 members : string [] = [];
 errorMessage= ""
 onInput(member :string){
  this.newMemberName = member;

 }
 addMember(){
  if(!this.newMemberName){
    this.errorMessage ="Name cant be empty"
    return;
  }
  this.errorMessage = "";
  this.members.push(this.newMemberName);
  // addd new commit 
  
  this.newMemberName = ""
  console.log(this.members);
 }
}
