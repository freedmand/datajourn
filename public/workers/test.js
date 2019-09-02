function parse(parseResult) {
  // const data = parseResult.data;
  postMessage({
    type: 'complete',
  });
}

onmessage = function(e) {
  console.log('Message received from main script', e.data);
  const file = e.data.file;

  const n = new Worker('/workers/papaparse.js');
  n.addEventListener('message', e => {
    const data = e.data;
    const type = data.type;
    if (type == 'progress') {
      postMessage(data);
    } else if (type == 'complete') {
      parse(data.results);
    }
  });
  n.postMessage({
    input: file,
  });
};
