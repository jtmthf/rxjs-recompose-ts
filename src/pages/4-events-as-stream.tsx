import * as React from "react";
import { map, startWith } from "rxjs/operators";

import Layout from '../Layout';
import { componentFromStream, createEventHandler } from "../utils/rx-recompose";

interface SimpleFormProps {
  text: string;
  onInput: React.FormEventHandler<HTMLInputElement>;
}

const SimpleForm: React.SFC<SimpleFormProps> = ({ text, onInput }) => (
  <div>
    <input type="text" onInput={onInput} />
    <h2>{text}</h2>
  </div>
);

const SimpleFormStream = componentFromStream(() => {
  const { stream: onInput$, handler: onInput } = createEventHandler<
    React.FormEvent<HTMLInputElement>
  >();

  const text$ = onInput$.pipe(map(e => e.currentTarget.value), startWith(""));

  return text$.pipe(map(text => ({ text, onInput })), map(SimpleForm));
});

const App = () => (
  <Layout>
    <SimpleFormStream />
  </Layout>
);

export default App;