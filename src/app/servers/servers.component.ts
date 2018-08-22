import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: string ='SerV5P4200';
  serverStatus: string='';
  today: number = Date.now();
  color: string = '';
  allowNewServer: boolean=false;
  serverCreationStatus:string ='There are no servers created.';
  serverName:string='Awesome';
  servers:string[]=['Test1'];
  serverAdded:boolean=false;

  constructor() {
    setTimeout(() =>{
      this.allowNewServer=true;
    },3000); //These are in milliseconds.

    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  onCreateServer(serverName){
    this.serverAdded=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='The Server with id: '+serverName+', name: '+this.serverName+' created successfully.';
  }
  getColor(){
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  onUpdateServerName(event: Event){
    this.serverName=((<HTMLInputElement>event.target).value);
  }

  getServerStatus(){
    // if(this.today%2==0){
    //   this.serverStatus='Online';
    //   this.color='green';
    // }
    // else{
    //   this.serverStatus='Offline';
    //   this.color='red';
    // }
    return this.serverStatus;
  }

  ngOnInit() {
  }

}
