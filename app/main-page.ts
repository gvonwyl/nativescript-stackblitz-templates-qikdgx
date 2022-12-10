import { EventData, Page, ItemEventData, SwipeGestureEventData } from '@nativescript/core';
import { TodoViewModel } from './todo-view-model';
import {SwipeDirection} from '@nativescript/core/ui/gestures';
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

export function reload(args: SwipeGestureEventData) {
  console.log('swipe')  ;
  if(args.direction=== SwipeDirection.down) {
      model.reset();
      const listView= page.getViewById("listView");
      listView.refresh();
      }
    }