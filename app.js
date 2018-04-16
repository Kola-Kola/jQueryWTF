(function(w) {
  const $ = function(selector) {
    return new lib(selector);
  };

  const lib = function(selector) {
    this.el = document.querySelectorAll(selector);
    this.el = toArray(this.el);

    return this;
  };

  lib.prototype.addClass = function(classname) {
    this.el.forEach(function(el) {
      el.classList.add(classname);
    });

    return this;
  };

  lib.prototype.removeClass = function(classname) {
    this.el.forEach(function(el) {
      el.classList.remove(classname);
    });

    return this;
  };

  lib.prototype.toggleClass = function(classname) {
    var bool = true;
    if (bool) {
      this.el.classList.add(classname);
      bool = false;
    } else {
      this.el.classList.remove(classname);
      bool = true;
    }
  };

  /*
  *   Return .html[0] or .html[1], first return value of current element, second replace
  *   the current value with the new value passed in function.
  */
  lib.prototype.html = function(value) {
    let text = "";
    for (let i = 0; i < this.el.length; i++) {
      if (value !== undefined || typeof value === "string") {
        this.el[i].innerHTML = value;
      } else {
        text = text + this.el[i].innerHTML;
      }
    }
    return [this, text];
  };

  /* Convert NodeList into Array */
  function toArray(arrayLike) {
    var arr = [];
    for (var i = 0; i < arrayLike.length; i++) {
      arr.push(arrayLike[i]);
    }
    return arr;
  }

  w.$ = $;
})(window);
