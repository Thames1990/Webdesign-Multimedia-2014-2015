/**
 * Created by Media Markt on 08.02.2015.
 */
function refreshExample(){
    var color = document.getElementById("cssExampleColorInput").value;
    var backgroundColor = document.getElementById("cssExampleBackground-ColorInput").value;
    var fontSize = document.getElementById("cssExampleFont-SizeInput").value;
    var fontStyle = document.getElementById("cssExampleFont-StyleInput").value;
    var fontWeight = document.getElementById("cssExampleFont-WeightInput").value;
    var lineHeight = document.getElementById("cssExampleLine-HeightInput").value;
    var display = document.getElementById("cssExampleDisplayInput").value;

    document.all.cssExample.style.color = color;
    document.all.cssExample.style.backgroundColor = backgroundColor;
    document.all.cssExample.style.fontSize = fontSize;
    document.all.cssExample.style.fontStyle = fontStyle;
    document.all.cssExample.style.fontWeight = fontWeight;
    document.all.cssExample.style.lineHeight = lineHeight;
    document.all.cssExample.style.display = display;
}