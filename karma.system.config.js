System.config({
    transpiler: 'typescript',
    paths: {
        'babel': 'node_modules/babel-core/browser.js',
        'typescript': 'node_modules/typescript/lib/typescript.js',
        'systemjs': 'node_modules/systemjs/dist/system.src.js',
        'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
        'angular-ui-router': 'src/ng1.ts',
    },
    map: {
        'ui-router-core': 'node_modules/ui-router-core/lib',
    },
    packages: {
        'src':                  { defaultExtension: 'ts' },
        'ui-router-core':       { main: 'index.js', defaultExtension: 'js' },
    }
});
