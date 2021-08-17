onmessage = (e) => {
  console.log('Message received from main script');

  fetch('http://192.168.0.100/sdk/v1/device?fields=id')
    .then((resp) => resp.json())
    .then((resp) => {
      console.log('Posting message back to main script');
      postMessage(JSON.stringify(resp)); })
    .catch((err) => console.log(`error: ${err.message}`));
}
