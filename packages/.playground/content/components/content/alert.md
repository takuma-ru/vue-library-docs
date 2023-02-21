::componentPage
---
componentName: Alert
description: Used to convey important information to the viewer
---

#Demo
::alert{type="info"}
Info message.
::

::alert{type="warn"}
Warn message.
::

::alert{type="err"}
Error message.
::

::alert{type="default" customIcon="shopping_cart_checkout"}
Default message + Custom icon.
::

::alert{type="default" :isIcon="false" customIcon="shopping_cart_checkout"}
Default message + Custom icon.
::

#Usage

```md{}[**.md]
::alert{type="info"}
Info message.
::
::alert{type="warn"}
Warn message.
::
::alert{type="err"}
Error message.
::
::alert{type="default" customIcon="shopping_cart_checkout"}
Default message + Custom icon.
::
```

#Props
| name | des | init value |
| -- | -- | -- |
| type | Specify background color and icon theme | `info` |
| customIcon | Designate your own icons. [Available Icons](https://fonts.google.com/icons) | `undefined` |
| isIcon | Flag whether the icon should be displayed or not | `true` |

::