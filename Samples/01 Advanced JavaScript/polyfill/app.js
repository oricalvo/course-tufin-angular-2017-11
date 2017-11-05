function checkBrowserCompatibility() {
    if(typeof JSON == "undefined") {
        //
        //  browser does not support JSON
        //
        window.JSON = {
            parse: function() {
            },
            stringify: function() {
            }
        };
    }
}

checkBrowserCompatibility();

var contacts = [
    {id:1, name: "Ori"},
    {id:2, name: "Roni"},
];

var str = JSON.stringify(contacts);

console.log(str);