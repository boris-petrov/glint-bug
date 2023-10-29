import type { NativeArray } from '@ember/array';
import { typeTest } from '@glint/type-test';
import { hbs } from 'ember-cli-htmlbars';

typeTest(
  {
    foo: null as unknown as NativeArray<number>,
  },
  hbs`
    {{#each this.foo as |number|}}
      {{@expectTypeOf number @to.beNumber}}
    {{/each}}
  `,
);
