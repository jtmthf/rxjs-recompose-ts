import * as React from 'react';
import { from } from 'rxjs/observable/from';
import { interval } from 'rxjs/observable/interval';
import { zip } from 'rxjs/observable/zip';
import { map, scan, switchMap } from 'rxjs/operators';

import Layout from '../Layout';
import { componentFromStream } from '../utils/rx-recompose';

interface Props {
  message: string;
}

const App: React.SFC<Props> = props => (
  <div>
    <h1>{props.message}</h1>
  </div>
);

const createTypewriter = (message: string, speed: number) =>
  zip(from(message), interval(speed), letter => letter).pipe(
    scan((acc, curr) => acc + curr),
  );

interface StreamingProps extends Props {
  speed: number;
}

const StreamingApp = componentFromStream<StreamingProps>(props$ =>
  props$.pipe(
    switchMap(props => createTypewriter(props.message, props.speed)),
    map(message => ({ message })),
    map(App),
  ),
);

export default () => (
  <Layout>
    <StreamingApp message="I'm a streaming App!" speed={100} />
  </Layout>
);
