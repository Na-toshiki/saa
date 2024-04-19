function getNatureRemoData(endpoint) {
  const REMO_ACCESS_TOKEN = '69ALSZ18qG3vCo5gDZcrfa7Cl818TTUpeTNgygcxRlQ.Wf0jRP-f7zBAhvKOB75aqyMmdIKZVKJxr2SaEFsbYFI'
  const headers = {
    "Content-Type" : "application/json;",
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };

  const options = {
    "method" : "get",
    "headers" : headers,
  };

  return JSON.parse(UrlFetchApp.fetch("https://api.nature.global/1/" + endpoint, options));
}
