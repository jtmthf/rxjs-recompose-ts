import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, pluck, startWith, switchMap } from 'rxjs/operators';

import Layout from '../Layout';
import { componentFromStream } from '../utils/rx-recompose';

const personById = (id: number) => `https://swapi.co/api/people/${id}`;

interface CardProps {
  name: string;
  homeworld: string;
}

const Card: React.SFC<CardProps> = ({ name, homeworld }) => (
  <div>
    <h1>{name}</h1>
    <h2>{homeworld}</h2>
  </div>
);

const loadByid = (id: number) =>
  ajax(personById(id)).pipe(
    pluck<{ response: any }, { name: string; homeworld: string }>('response'),
    switchMap(
      response =>
        ajax(response.homeworld).pipe(
          pluck<any, {name: string}>('response'),
          startWith({ name: '' }),
        ),
      (person, homeworld) => ({ ...person, homeworld: homeworld.name }),
    ),
  );

const CardStream = componentFromStream<{ id: number }>(props$ =>
  props$.pipe(switchMap(props => loadByid(props.id)), map(Card)),
);

const App = () => (
  <Layout>
    <Card name="Jack" homeworld="Earth" />
    <CardStream id={1} />
  </Layout>
);

export default App;
