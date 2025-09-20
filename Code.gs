function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url= "https://docs.google.com/spreadsheets/d/1UYpR7DCVuSdBQt61OI-2GsnzOVlrZF49GdJB79ifvU4/edit#gid=2368821";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Varant");
  var dt = Utilities.formatDate(new Date(), "GMT+5:30", "dd/MM/yyyy HH:mm:ss ");

  ws.appendRow([ formObject.thana , "जनता समंस", formObject.f2 ,formObject.f3 , formObject.f4 ,formObject.f5 , formObject.f6 , formObject.f7 , formObject.f8 , formObject.f9 , formObject.f10 , formObject.f11 , dt ]);
  ws.appendRow([ formObject.thana , "जनता जमानती वारंट", formObject.f12 ,formObject.f13 , formObject.f14 , formObject.f15 , formObject.f16 , formObject.f17 , formObject.f18 , formObject.f19 , formObject.f20 , formObject.f21 , dt ]);
  ws.appendRow([ formObject.thana , "जनता गिरफ्तारी वारंट", formObject.f22 ,formObject.f23 , formObject.f24 , formObject.f25 , formObject.f26 , formObject.f27 , formObject.f28 , formObject.f29 , formObject.f30 , formObject.f31 , dt ]);
  ws.appendRow([ formObject.thana , "स्थाई वारंट", formObject.f32 ,formObject.f33 , formObject.f34 , formObject.f35 , formObject.f36 , formObject.f37 , formObject.f38 , formObject.f39 , formObject.f40 , formObject.f41 , dt ]);
  ws.appendRow([ formObject.thana , "पुलिस समंस", formObject.f42 ,formObject.f43 , formObject.f44 , formObject.f45 , formObject.f46 , formObject.f47 , formObject.f48 , formObject.f49 , formObject.f50 , formObject.f51 , dt ]);
  ws.appendRow([ formObject.thana , "पुलिस जमानती वारंट", formObject.f52 ,formObject.f53 , formObject.f54 , formObject.f55 , formObject.f56 , formObject.f57 , formObject.f58 , formObject.f59 , formObject.f60 , formObject.f61 , dt ]);
  ws.appendRow([ formObject.thana , "पुलिस गिरफ्तारी वारंट", formObject.f62 ,formObject.f63 , formObject.f64 , formObject.f65 , formObject.f66 , formObject.f67 , formObject.f68 , formObject.f69 , formObject.f70 , formObject.f71 , dt ]);
}
