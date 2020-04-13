export default (subject: string, message: string, callback?: (response: any) => void) => {
  fetch('/api/sendmail', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subject, message }),
  })
    .then((response) => response.json())
    .then(
      (result) => {
        callback && callback(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log('error: ', error);
      },
    );
};
