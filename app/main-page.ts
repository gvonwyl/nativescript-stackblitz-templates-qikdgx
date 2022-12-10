import { EventData, Page, ItemEventData } from '@nativescript/core';
import { TodoViewModel } from './todo-view-model';

let model;
let page;

export function navigatingTo(args: EventData) {
  page = <Page>args.object;
  model = new TodoViewModel();
  page.bindingContext = model;
}

export function remove(args: ItemEventData) {
  model.remove(args.index as number);
  const listView= page.getViewById("listView");
  listView.refresh();
  }