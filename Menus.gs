var ui = SpreadsheetApp.getUi();

//Add menu items on Google Sheets
function onOpen() {
  ui.createMenu('Book Inventory')
      .addItem('Add Books', 'menuItemAddBooks')
      .addItem('Search', 'menuItemSearchBooks')
      .addToUi();
}

//Action when the Book Inveontory -> Book Inventory menu item is selected.
function menuItemAddBooks() {
  var html = HtmlService.createHtmlOutputFromFile('AddBooks')
  .setWidth(600)
  .setHeight(800);
  
  SpreadsheetApp.getUi() 
     .showModalDialog(html, 'Add Books');
}

//Action when the Book Inveontory -> Book Inventory menu item is selected.
function menuItemSearchBooks() {
  var html = HtmlService.createHtmlOutputFromFile('Search')
  .setWidth(600)
  .setHeight(800);
  SpreadsheetApp.getUi() 
     .showModalDialog(html, 'Search');
}