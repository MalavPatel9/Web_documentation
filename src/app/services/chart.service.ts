import { Injectable } from '@angular/core';

export class Data {
  ScheduledEvents!: string;
  Events!: number;
  title!:any
  text!:any
}

const data: Data[] = [{
  ScheduledEvents: 'Pending',
  Events: 4,
  title:'Records Pending My Approval',
  text:'Records Awaiting Review and Approval'
}, 
{
  ScheduledEvents: 'Upcoming',
  Events: 2,
  title:'Records assigned To me',
  text:'Records Assigned to you for work',
}, 
{
  ScheduledEvents: 'Overdue',
  Events: 3,
  title:'My flagged Records',
  text:'Potentially problamatic or attention-requiring records',
}, {
  ScheduledEvents: 'Draft',
  Events: 8,
  title:'Draft-Records',
  text:'List of records not yet submitted for review and approval',
}, 
{ ScheduledEvents:'Records Accessed',
  Events: 2,
  title:'Records you accessed today',
  text:'Records you`ve accessed or worked on today'
}
];


export class Task {
  Task!: string;

  tasks!: number;
}

const task: Task[] = [{
  Task: 'pending',
  tasks: 5,
}, {
  Task: 'completed',
  tasks: 15,
}, {
  Task: 'void',
  tasks: 8,
}, {
  Task: 'overdue',
  tasks: 5,
}, ];


@Injectable({
  providedIn: 'root'
})
export class ChartService {
  forEach(arg0: (title: any, index: any) => void) {
    throw new Error('Method not implemented.');
  }
  getData(): Data[] {
   return data
  }
  getTask(): Task[] {
    return task;
  }
  getobj(i:number){
    return data[i]
  }

  getPending():any{
   let obj= this.getData()
   let filterObj= obj.find(i=>i.ScheduledEvents=='Pending');
   return filterObj
  }

  getUpcoming():any{
    let obj=this.getData()
    let filterObj=obj.find(i=>i.ScheduledEvents=='Upcoming');
    return filterObj
  }

  getOverdue():any{
    let obj=this.getData()
    let filterObj=obj.find(i=>i.ScheduledEvents=='Overdue');
    return filterObj
  }

  getDraft():any{
    let obj=this.getData()
    let filterObj=obj.find(i=>i.ScheduledEvents=='Draft');
    return filterObj
  }

  getrecordsaccessed():any{
    let obj=this.getData()
    let filterObj=obj.find(i=>i.ScheduledEvents=='Records Accessed');
    return filterObj
  }


  
  constructor() { }
}
