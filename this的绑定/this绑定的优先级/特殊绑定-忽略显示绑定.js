var foo = function () {
  console.log(this);
};

foo.bind(null);
foo.bind(undefined);

foo.apply(null);
foo.apply(undefined);

foo.call(null);
foo.call(undefined);
