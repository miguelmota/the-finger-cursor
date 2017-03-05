(function() {
  window.thefinger = {
    activate: function() {
      if (!document.querySelector(`#the_finger_extension_style`)) {
        const css = `:root:root:root:root:root:root:root:root *, :root:root:root:root:root:root:root:root *:hover, :root:root:root:root:root:root:root:root *:active, :root:root:root:root:root:root:root:root *:focus {cursor: url('${chrome.extension.getURL('cursor.cur')}'), auto !important}`;
        const style = document.createElement(`style`);
        style.id = `the_finger_extension_style`;
        style.appendChild(document.createTextNode(css));
        document.body.appendChild(style);
      }
    },
    deactivate: function() {
      const style = document.querySelector(`#the_finger_extension_style`);

      if (style) {
        style.remove();
      }
    },
    toggle: function(activate) {
      if (activate) {
        this.activate();
      } else {
        this.deactivate();
      }
    }
  };

  thefinger.toggle(true);
})();
