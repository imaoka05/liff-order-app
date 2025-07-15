function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート１');
    const params = JSON.parse(e.postData.contents);
  
    const timestamp = new Date();
    const username = params.name;
    const room = params.room;
    const item = params.item;
    const quantity = params.quantity;
  
    sheet.appendRow([timestamp, username, room, item, quantity]);
  
    return ContentService.createTextOutput(
      JSON.stringify({status: 'success'})
    ).setMimeType(ContentService.MimeType.JSON);
  }
  