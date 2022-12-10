import{ Observable, ObservableArray} from "@nativescript/core";
import{ TodoItem} from "./todo";
import items from "./assets/todo.json";

export class TodoViewModel extends Observable{
  private _items: ObservableArray<TodoItem>;
  constructor() {
      super();
      //LoadinitialdatafromJSON
      this._items = this.load();
      }

  load(): ObservableArray<TodoItem> {
  return new ObservableArray([...items.todos]);
  }
  get title(): string {
    return `A list of ${this._items.length} todo items`;
  }
  get todos(): ObservableArray<TodoItem> {
    return this._items;
    }

  remove(indexToDelete: number) {
    this._items.splice(indexToDelete, 1);
    }

  reset() {
    this._items = this.load();
    this.notifyPropertyChange("todos", this._items)
    this.notifyPropertyChange("title", this.title)
    }

}