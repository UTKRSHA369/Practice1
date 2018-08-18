import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: string ='SerV5P4200';
  serverStatus: string='XXX';
  today: number = Date.now();
  color: string = '';
  allowNewServer: boolean=false;
  serverCreationStatus:string ='There are no servers created.';

  onCreateServer(serverName){
    this.serverCreationStatus='The Server '+serverName+' created successfully.';
  }
  getColor(){
    return this.color;
  }

  getServerStatus(){
    if(this.today%2==0){
      this.serverStatus='Online';
      this.color='green';
    }
    else{
      this.serverStatus='Offline';
      this.color='red';
    }
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() =>{
      this.allowNewServer=true;
    },3000); //These are in milliseconds.
  }

  ngOnInit() {
  }

}
