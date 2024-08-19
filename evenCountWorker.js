// evenCountWorker.js
self.onmessage = function(e) {
    const num = e.data;
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    self.postMessage(count);
};
