module.exports = {
        'env': {
                'browser': true,
                'commonjs': true,
                'es2021': true
        },
        'extends': 'eslint:recommended',
        'parserOptions': {
                'ecmaVersion': 12
        },
        'rules': {
                'indent': [
                        'error',
                        8
                ],
                'linebreak-style': [
                        'error',
                        'unix'
                ],
                'quotes': [
                        'off',
                        'single'
                ],
                'semi': [
                        'off',
                        'always'
                ],
                'eqeqeq': 'error',
                'no-trailing-spaces': 'error',
                'object-curly-spacing': [
                        'error',
                        'always'
                ],
                'arrow-spacing': [
                        'error',
                        { 'before': true, 'after': true }
                ],
                'no-console': 0
        }
};
