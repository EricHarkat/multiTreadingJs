// sumWorker.js
self.onmessage = function(e) {
    const num = e.data;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    self.postMessage(sum);
};
