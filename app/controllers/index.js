function openPref(){
  Ti.UI.Android.openPreferences();
}
function listprops(e) {
  var props = Ti.App.Properties.listProperties();

for (var i=0, ilen=props.length; i<ilen; i++){
    var value = Ti.App.Properties.getString(props[i]);
     var propline =props[i] + ' = ' + value
     var proplinelabel = Ti.UI.createLabel({ color:"black", top:3, text:propline});
     $.results.add(proplinelabel);
   }
   var WhatsInR = Ti.UI.createLabel({ top:3, text: "What is in my R.xml object: " +JSON.stringify(Ti.Android.R)});
   $.results.add(WhatsInR);
  }



$.index.open();
