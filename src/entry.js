if (module.hot) {
    module.hot.accept(function(err) {
        console.error(err);
    });
}

require('./styles.css');
require('./scripts.js');