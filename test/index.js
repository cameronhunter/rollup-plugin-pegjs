import test from 'ava';
import { rollup } from 'rollup';
import pegjs from '..';
import path from 'path';

test(t => (
  rollup({
    entry: path.join(__dirname, 'grammar.pegjs'),
    plugins: [
      pegjs()
    ]
  }).then(bundle => {
    const { parse } = eval(bundle.generate().code);
    const pass = parse('PASS?');
    const fail = parse('FAIL!');

    t.deepEqual(pass, { pass: true });
    t.deepEqual(fail, { pass: false });
  })
));
