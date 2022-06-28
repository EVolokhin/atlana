module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'react-hooks/exhaustive-deps': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'react/prop-types': 0,
        'linebreak-style': 0,
        'no-useless-escape': 0,
        'no-console': 'warn',
    }
};
