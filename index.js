var data = require("sdk/self").data;
var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Exibi Senhas",
  icon: "./ico-16.png",
  onClick: function() {
    require("sdk/tabs").activeTab.attach({
		contentScriptFile: data.url("showpass.js")
    });
  }
});
