#!/usr/bin/env node

const hyphenslug = require('./index')

const tests = [
  // input-output pairs
  [3.14, "3-14"],
  [['a', '+', 1], "a-1"],
  [{}, ""],
  [null, ""],
  [undefined, ""],
  ["", ""],
  ["test", "test"],
  ["Hello, World!", "hello-world"],
  [" trailing spaces ", "trailing-spaces"],
  ["-many-hyphens---!-", "many-hyphens"],
  ["I've got 'single' quotes and \"double\" quotes", "i-ve-got-single-quotes-and-double-quotes"],
  ["unicode ♥ is ☢", "unicode-love-is-radioactive"],
  ["UpperCase is EVIL!", "uppercase-is-evil"],
  ["*** Évènement DJ machin+truc @ lieu ***", "evenement-dj-machin-truc-lieu"],
]

const ok = tests.every((test) => {
  const slug = hyphenslug(test[0])
  if (slug !== test[1]) {
    console.log(`Test failed: "${test[0]}" gives "${slug}" instead of "${test[1]}"`)
    return false
  }
  return true
})

process.exit(ok ? 0 : 1)
