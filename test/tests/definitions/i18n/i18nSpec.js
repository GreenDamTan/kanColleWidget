describe("i18n", function() {
  var i18n,config;

  beforeEach(function() {
    i18n = KanColleWidget.i18n;
    config = Config;
  });
  describe("method 't'", function() {
    it("should return raw string.", function() {
        config.set('user-lang', 'ja');
        var japanese = i18n.t('test');
        config.set('user-lang', 'en');
        var english = i18n.t('test');
        expect(english).not.toBe(japanese);
    });
  });
  describe("method 'c'", function() {
    it("should return context.", function() {
        var text = i18n.t('notification-createship-end-prefix');
        console.log(text);
        var context = i18n.c('ntf-createship-end', {primaryId:1});
        console.log(context);
    });
  });
});
