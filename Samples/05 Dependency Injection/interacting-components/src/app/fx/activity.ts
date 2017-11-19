import {ApplicationRef} from "@angular/core";

let appRef: ApplicationRef;

export function init(app: ApplicationRef) {
  appRef = app;
}

export function Activity() {
  return function(target, propName, propDesc) {
    patchMethod(target, propName);

    return target;
  }
}

function detectChanges() {
  if(appRef) {
    const before = performance.now();
    appRef.tick();
    const after = performance.now();
    console.log("Change detection", (after-before));
  }
}

function patchMethod(target, methodName) {
  const original = target[methodName];

  target[methodName] = function() {
    console.log("BEGIN Activity", methodName);
    const before = performance.now();
    const retVal = original.apply(this, arguments);

    function onEnd() {
      const after = performance.now();
      console.log("END Activity", methodName, (after-before));

      detectChanges();
    }

    if(retVal && retVal.then) {
      retVal.then(onEnd);

      detectChanges();
    }
    else {
      onEnd();
    }
  }
}

