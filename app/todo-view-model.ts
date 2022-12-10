import{ Observable} from "@nativescript/core";
import{ TodoItem} from "./todo";
import items from "./assets/todo.json";

export class TodoViewModel extends Observable{
  private _items: TodoItem[];
  constructor() {
      super();
      //LoadinitialdatafromJSON
      this._items= this.load();
      }

    load(): TodoItem[] {
    return items.todos;
    }
  get title(): string {
    return `A list of ${this._items.length} todo items`;
  }
  get todos(): TodoItem[] {
    return this._items;
    }
    
  remove(indexToDelete: number) {
    this._items.splice(indexToDelete, 1);
    }

}