module.exports = {
  {{#if_eq stylelintConfig "standard"}}
  'extends': 'stylelint-config-standard',
  {{/if_eq}}
  'plugin': [
    'stylelint-scss'
  ],
  'rules': {
    'at-rule-no-unknown': null
  }
}
