define('src/Trap', [], function() {

  function trapBasic(action) {
    let info = {}
    try {
      action();
    } catch (e) {
      info.exception = e;
    } finally {
      info.fail = info.exception !== null;

    }
  }

});
