function waitFor(name) {
    return new Promise((resolve) => {
        function run() {
            if (window[name]) {
                resolve();
            } else {
                requestAnimationFrame(run);
            }
        }

        run();
    });
}

export default waitFor;