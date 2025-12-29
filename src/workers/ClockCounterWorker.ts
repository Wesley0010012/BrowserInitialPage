let count = Math.floor(Date.now() / 1000);
let intervalId: number;

self.onmessage = (event: MessageEvent) => {
  if (event.data === "start") {
    intervalId = setInterval(() => {
      count++;
      postMessage(count);
    }, 1000);
  } else if (event.data === "stop") {
    clearInterval(intervalId);
  }
};
