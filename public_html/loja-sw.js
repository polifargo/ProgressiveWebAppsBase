'use strict';

importScripts('js/libs/sw-toolbox/sw-toolbox.js');

toolbox.options.debug = true;

toolbox.precache([
    'index.html',
    'js/loja.js',
    'produtos.json',
    'views/principal.html',
    'views/produto.html'
]);

toolbox.router.get('indext.html', toolbox.cacheFirst);
toolbox.router.get('js/libs/*', toolbox.cacheFirst);
toolbox.router.get('js/loja.js', toolbox.cacheFirst);
toolbox.router.get('produtos.json', toolbox.cacheFirst);
toolbox.router.get('views/*', toolbox.cacheFirst);
toolbox.router.get('icons/*', toolbox.cacheFirst);

toolbox.router.get('*', toolbox.networkFirst);