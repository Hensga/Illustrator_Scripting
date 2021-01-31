function main () {
    
    var idoc = app.activeDocument;
    var itext = idoc.selection[0];
    var itextInfo = itext.textRange.characterAttributes;
    alert("TextFrame Font Name : " + itextInfo.textFont.name);
    //$.writeln(itextInfo.textFont.name);
}

main();