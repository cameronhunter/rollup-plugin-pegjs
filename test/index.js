import test from 'ava';
import { rollup } from 'rollup';
import pegjs from '..';

test(t => (
  rollup({
    entry: "grammar.pegjs",
    plugins: [pegjs()]
  }).then(bundle => {
    const parser = eval(bundle.generate().code);
    const output = parser.parse("PASS?");

    t.same(output, { pass: true });
  })
));
