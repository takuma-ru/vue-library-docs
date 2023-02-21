::componentPage
---
componentName: BaseButton
description: 
---

#Demo
::base-button
button text
::

<p></p>

::base-button
---
icon: done_all
---
button text
::

<p></p>

::base-button
---
is-icon: true
icon: star
---
::

#Usage
```md{}[**.md]
::base-button
button text
::
```

#Props
| name | des | init value |
| -- | -- | -- |
| type | Specify background color and icon theme | `info` |
| customIcon | Designate your own icons. [Available Icons](https://fonts.google.com/icons) | `undefined` |
| isIcon | Flag whether the icon should be displayed or not | `true` |
::
