function getSheet(name) {
  const SPREADSHEET_ID = '1lgWEIbZXFADgppRvCs8H2L6NTZn9diKxv47vCODyl-U'
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    throw new Error('シートが見つかりません');
  }

  return sheet;
}

function getLastData(name) {
  return getSheet(name).getDataRange().getValues().length;
}