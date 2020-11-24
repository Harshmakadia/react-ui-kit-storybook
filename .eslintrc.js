module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "globals": {
        "$": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    parser: "babel-eslint",
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-param-reassign": 0,
        "func-names": ["error", "never"],
        "max-len": 0,
        "no-underscore-dangle": 0,
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
        "jsx-a11y/no-onchange": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "prefer-destructuring": ["error", {
            "array": false,
            "object": false
        }],
        "no-nested-ternary": 0,
        "no-console": "error",
        "import/no-cycle": 0,
        'import/prefer-default-export': 0,
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js", "**/*.test.jsx", , "**/*setupTests.js"]}],
        "no-tabs": 0,
        'react/jsx-props-no-spreading': 0
    }
};
