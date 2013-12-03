var KanColleWidget = KanColleWidget || {};
(function(){
    // static module
    var i18n = KanColleWidget.i18n = {
        t : function(key){
            // see config
            var lang = Config.get("user-lang");
            // get text
            key = "test"//TMP: hard coding
            return KanColleWidget.Resource[lang][key];
        }
    };
})();
