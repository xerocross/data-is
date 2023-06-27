# Data-Is

An extremely simple utility for defining and validating data types. You can run the tests by executing `npm run test`. The tests are the official documentation.

Create an instance of DataIs using `data = DataIs.build();`.

You can define arbitrary data types so long as you can pass in a function that evaluates boolean to check whether any input passes or fails. The predicate defines the data type, such as `data.define.type([typeName], [testFunction])`.

Then you can test a particular element using the syntax `data([data]).is.a([typeString]);`.

There are no pre-defined types.