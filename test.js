var myDocument = app.documents.add();


// Reading the file and store it's content in an variable
var testtextfile = File("put_text_file_path_here");

testtextfile.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'

testtextfile.open("r");

var fileContentsString = testtextfile.read();



testtextfile.close();


// Create Background Layer
myDocument.layers[0].name = "Background Layer";

// Create new Layer
var layerTwo = myDocument.layers.add();
layerTwo.name = "Font Layer";
generateText(fileContentsString);


// Generate "Name"
function generateText(text) {
  var doc = app.activeDocument;
  var textFrame = doc.textFrames.add();
  textFrame.name = "Namen";
  // change text
  
  textFrame.textRange.characterAttributes.textFont = app.textFonts.getByName("AmaticSC-Bold");
  textFrame.contents = text;
  var textRange = textFrame.textRange;
  textRange.size = 50;
  textRange.justification = Justification.CENTER;
  textFrame.position = [doc.width*.5-textFrame.width*.5, doc.height*.5+textFrame.width*.5];
}


