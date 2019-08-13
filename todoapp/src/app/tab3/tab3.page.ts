import { Component } from '@angular/core';
import { ToDoList } from './ToDoList';
// import { store } from 'rende\\'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  // assign class with new var for new entered to do
  storedToDo: Array<ToDoList> = [];
  // assign class with new var for completed to do
  completedToDo: Array<ToDoList> = [];
  // get the input
  addTodo: string = '';
  // default to all
  filter: string = 'all';

  constructor(private storage: Storage) {
    // get the stored to do list
    this.storedToDo = JSON.parse(localStorage.getItem('storedToDo')) || [];
    // get the completed to do list
    this.completedToDo = JSON.parse(localStorage.getItem('completedToDo')) || [];
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  enterToDo(e) {
    // get the stored to do list
    var oldList = JSON.parse(localStorage.getItem('storedToDo')) || [];
   
    // when 'Enter' is pressed
    if(e.keyCode == 13) {
      // get the value
      var val = e.path[1].children[0].value;

      // make a new toDo
      let newToDo = new ToDoList();
      // assign the val to the text in the obj
      newToDo.text = val;
      // default is false
      newToDo.isCompleted = false;


      // push the new to do to the old list
      oldList.push(newToDo);

      // update the local storage with the newly added todo inside the old list
      localStorage.setItem('storedToDo', JSON.stringify(oldList));

      // updates the frontend automatically 
      // right when you enter a new one
      this.storedToDo = oldList;

      if(val) { // when you entered a new todo
        this.addTodo = ''; // reset the input
        return false; // dont submit
      }

    }
  }

  removeToDo(selectedID) {
    // this function gets the selected id
    // iterate all the stored to do lists
    for(var i=0; i<this.storedToDo.length; i++) {
      // if the selected id is equals to the id in the lists
      if(i == selectedID) {
        // remove that item from the localstorage lists 
        this.storedToDo.splice(i, 1);
      }
    }

    // update the localstorage with the new array
    localStorage.setItem('storedToDo', JSON.stringify(this.storedToDo));
  }

  completeToDo(completeID) {
    // this function stores the selected item
    // to the new localstorage
    // and it removes the completed item from the storedToDo
    for(var i=0; i<this.storedToDo.length; i++) {
      if(i == completeID) {
        
        if(this.storedToDo[completeID].isCompleted === true) {
          // this push the selected item into the new localstorage
          this.completedToDo.push(this.storedToDo[completeID]);
          // selected item is removed from the old storage
          this.storedToDo.splice(i, 1);
        }
      }
    }

    // re-saves the new array
    localStorage.setItem('storedToDo', JSON.stringify(this.storedToDo));
    localStorage.setItem('completedToDo', JSON.stringify(this.completedToDo));

  }

  removeCompleted(completedID) {
    // permanently remove item the completed item
    for(var i=0; i<this.completedToDo.length; i++) {
      if(i == completedID) {
        this.completedToDo.splice(i, 1);
      }
    }

    // updates the localstorage with new array
    localStorage.setItem('completedToDo', JSON.stringify(this.completedToDo));
  }

  onRenderItems(event) {
    // when item is reorder
    let draggedItem = this.storedToDo.splice(event.detail.from,1)[0];
    this.storedToDo.splice(event.detail.to,0,draggedItem)
    event.detail.complete();

    // updates the localstorage
    localStorage.setItem('storedToDo', JSON.stringify(this.storedToDo));
  }
}
