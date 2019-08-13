import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToDoList } from './ToDoList';
var Tab3Page = /** @class */ (function () {
    function Tab3Page() {
        // this.displayToDo = localStorage.getItem('storedToDo' || '[]');
        this.newToDoList = [];
        this.allToDoList = [];
        this.toDoList = [];
    }
    Tab3Page.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    Tab3Page.prototype.addToDo = function (e, val) {
        if (e.keyCode == 13) {
            if (!val) {
                return false;
            }
            // var storedLists = localStorage.getItem('storedToDo');
            var newToDo = new ToDoList();
            newToDo.text = val;
            this.newToDoList.push(newToDo);
            var storedLists = JSON.parse(localStorage.getItem('storedToDo'));
            localStorage.setItem('storedToDo', JSON.stringify(this.newToDoList));
            console.log(storedLists);
            if (val) {
                this.addTodo = '';
                return false;
            }
        }
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map