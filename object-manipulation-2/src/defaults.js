/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!target.hasOwn(key)) {
      target[key] = source[key];
    }
  }
}
