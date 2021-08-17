function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
}

/* @Process Form */
function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/141adNCLj2G-kSyPHv51zh2Q807cW0vdoXUq2d5S0RVQ/edit?usp=sharing";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("responses");
  ws.appendRow(
    [
      Utilities.formatDate(new Date(), "UTC", "dd/MM/yyyy HH:mm:ss"),
      formObject.model,
      formObject.availability,
      Number(formObject.lat).toFixed(3) + ", " + Number(formObject.long).toFixed(3)
    ]
  );
}