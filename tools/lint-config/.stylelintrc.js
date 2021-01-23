module.exports = {
	"extends": [
		"stylelint-config-recommended-scss",
		"stylelint-config-css-modules",
		"stylelint-config-rational-order",
	],
	 "plugins": [
    "stylelint-declaration-use-variable",
		"stylelint-declaration-block-no-ignored-properties",
		"stylelint-order",
  ],
	"rules": {
		"indentation": [2, {"ignore": ["value"]}],
		"max-nesting-depth": 5,
		"length-zero-no-unit": true,
		"at-rule-no-unknown": null,
		"property-no-unknown":true,
		"no-descending-specificity":null,
		"plugin/declaration-block-no-ignored-properties": true,
		"sh-waqar/declaration-use-variable": [["/color/", "z-index", "font-size","border-radius","font-weight"]],
		"order/order": [["custom-properties", "dollar-variables", "declarations", "rules", "at-rules"]],
	}
}
