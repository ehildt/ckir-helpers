// src/object-io/clone.helper.ts
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// src/object-io/is-empty.helper.ts
function isEmpty(obj) {
  if (!obj || typeof obj !== "object") throw new TypeError("Expected a JSON object or array");
  return Object.keys(obj).length === 0;
}

// src/object-io/merge.helper.ts
var merge = (a, b, deep = false) => {
  if (!deep) return { ...a, ...b };
  const result = { ...a };
  for (const key in b) {
    const valB = b[key];
    const valA = a[key];
    if (valA && typeof valA === "object" && !Array.isArray(valA) && valB && typeof valB === "object" && !Array.isArray(valB))
      result[key] = merge(valA, valB, true);
    else result[key] = valB;
  }
  return result;
};

// src/object-io/omit.helper.ts
function omit(obj, keys) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key)) {
      const safeKey = key;
      result[safeKey] = obj[safeKey];
    }
  });
  return result;
}

// src/object-io/pick.helper.ts
function pick(obj, keys) {
  const result = {};
  keys.forEach((key) => {
    if (key in obj) result[key] = obj[key];
  });
  return result;
}

export { clone, isEmpty, merge, omit, pick };
