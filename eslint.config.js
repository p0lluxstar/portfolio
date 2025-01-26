import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      react: reactPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': ['warn', { allow: ['info', 'error', 'warn'] }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**/**',
              group: 'parent',
              position: 'before',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true, // Можно включить, если хотите игнорировать регистр
          },
        },
      ],
      'import/no-unresolved': 'error', // Ошибка, если импортированный модуль не существует
      'import/named': 'error', // Проверка на named экспорты
      'import/default': 'error', // Проверка на default экспорты
      'import/namespace': 'error', // Проверка на пространство имён
      '@typescript-eslint/explicit-function-return-type': 'error',
      'react/jsx-uses-react': 'error', // Отслеживание использования React
      'react/jsx-uses-react': 'error', // Отслеживание использования React
      'react/jsx-uses-vars': 'error', // Отслеживание использования переменных в JSX
      'react/jsx-key': 'error', // Проверка на наличие атрибута key в списках
      'react-hooks/rules-of-hooks': 'error', // Проверка правильного использования хуков
      'react-hooks/exhaustive-deps': 'warn', // Проверка зависимостей в хуках useEffect и т.д.
    },
    settings: {
      react: {
        version: 'detect', // Автоматическое определение версии React
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // Указание поддерживаемых расширений
        },
      },
    },
  }
);
