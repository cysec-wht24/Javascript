| **Feature**            | **Normal Function/Function Expression**      | **Arrow Function**                   |
|------------------------|-----------------------------------------------|---------------------------------------|
| **`this` binding**     | Binds to the caller (global if called alone)  | Inherits `this` from parent scope     |
| **Own `this`**         | Yes                                           | No (lexical `this`)                   |
| **Use case**           | Methods, constructors                         | Callbacks, preserving context         |