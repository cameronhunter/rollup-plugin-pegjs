import test from 'ava';
import { rollup } from 'rollup';
import pegjs from '..';

test(t => (
  rollup({
    entry: 'grammar.pegjs',
    plugins: [
      pegjs({ target: 'cjs' })
    ]
  }).then(bundle => {
    const { parse } = eval(bundle.generate().code);
    const pass = parse('PASS?');
    const fail = parse('FAIL!');

    t.deepEqual(pass, { pass: true });
    t.deepEqual(fail, { pass: false });
  })
));
