start =
  pass / fail

pass =
  "PASS?" { return { pass: true }; }

fail =
  .* { return { pass: false }; }
