import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

let application;

module('Acceptance | tooltip as component', {

  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  },

});

test('Rendering tooltips set using {{tooltip-on-parent}}', function(assert) {
  visit('/tooltip-as-component');

  assert.expect(21);

  assertTooltipProperties(assert, 'in-component-and-block', {
    content: 'Using a component in the template',
    usingComponent: true,
  });

  assertTooltipProperties(assert, 'in-component-and-block-htmlbars', {
    content: '<a href="/" class="ember-view">Using HTMLBars</a> in content',
    usingComponent: true,
  });

  assertTooltipProperties(assert, 'in-component-and-inline', {
    content: 'Using a component in the template',
    usingComponent: true,
  });

});
