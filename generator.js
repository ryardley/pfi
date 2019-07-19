function generateOr(left, right) {
  return a => left(a) || right(a);
}

function generateAnd(left, right) {
  return a => left(a) && right(a);
}

function generateNot(input) {
  return a => !input(a);
}

function generateArrayPredicate(...predicates) {
  return a =>
    predicates.reduce((acc, p) => {
      return acc && a.filter(p).length > 0;
    }, true);
}

function generateObjectPredicate(...entries) {
  return a =>
    entries.reduce((acc, [key, predicate]) => {
      return acc && Boolean(a) && predicate(a[key]);
    }, true);
}

const identifierRegEx = /[a-zA-Z]/;

function generator(rpn, funcs) {
  const isOperand = token => /^_E/.test(token);
  const isIdentifier = token => identifierRegEx.test(token);
  const toFunc = token => {
    const index = token.match(/^_E(\d+)/)[1];
    return funcs[index];
  };

  const [runnable] = rpn.reduce((stack, token) => {
    if (isOperand(token)) {
      stack.push(toFunc(token));
    } else if (isIdentifier(token)) {
      stack.push(token);
    }

    if (token === "!") {
      stack.push(generateNot(stack.pop()));
    }

    if (token === ":") {
      const value = stack.pop();
      const key = stack.pop();
      stack.push([key, value]);
    }

    if (token === "&&") {
      stack.push(generateAnd(stack.pop(), stack.pop()));
    }

    if (token === "||") {
      stack.push(generateOr(stack.pop(), stack.pop()));
    }

    if (/^\[/.test(token)) {
      const count = parseInt(token.match(/^\[(\d+)/)[1]);
      const args = stack.splice(-1 * count);
      stack.push(generateArrayPredicate(...args));
    }

    if (/^\{/.test(token)) {
      const count = parseInt(token.match(/^\{(\d+)/)[1]);
      const args = stack.splice(-1 * count);

      const objArgs = args.map(a => {
        return Array.isArray(a) ? a : [a, Boolean];
      });
      stack.push(generateObjectPredicate(...objArgs));
    }

    return stack;
  }, []);

  return runnable;
}

module.exports = { generator, generateArrayPredicate, generateObjectPredicate };
