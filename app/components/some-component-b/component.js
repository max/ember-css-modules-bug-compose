import Ember from 'ember';

export default Ember.Component.extend({
  bar: true,
  localClassNames: ['component'],
  localClassNameBindings: ['bar']
});
