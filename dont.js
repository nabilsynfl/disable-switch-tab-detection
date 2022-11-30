for (nama_event of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
  window.addEventListener(nama_event, function(event) {
        event.stopImmediatePropagation();
    }, true);
}
