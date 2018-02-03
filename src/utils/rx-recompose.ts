import * as React from 'react';
import {
  componentFromStreamWithConfig,
  createEventHandlerWithConfig,
} from 'recompose';
import { Observable } from 'rxjs/observable';
import { from } from 'rxjs/observable/from';

const config = {
  fromESObservable: from,
  toESObservable: (stream: any) => stream,
};

export function componentFromStream<T>(
  propsToReactNode: (input: Observable<T>) => Observable<React.ReactNode>,
) {
  // @ts-ignore
  return componentFromStreamWithConfig(config)<T>(propsToReactNode);
}

export function createEventHandler<T>() {
  return createEventHandlerWithConfig(config)<T, Observable<T>>();
}
