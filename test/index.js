import test from 'ava';
import { rollup } from 'rollup';
import pegjs from '..';

test(t => (
  rollup({
    entry: "grammar.pegjs",
    plugins: [pegjs()]
  }).then(bundle => {
    const { parse } = eval(bundle.generate().code);
    const pass = parse("PASS?");
    const fail = parse("FAIL!");

    t.same(pass, { pass: true });
    t.same(fail, { pass: false });
  })
));
