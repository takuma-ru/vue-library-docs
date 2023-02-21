::componentPage
---
componentName: BaseButton
description: Used to guide visitors to which page they should view next
---
#Demo
::base-button
default
::

<p></p>

::base-button
---
icon: open_in_browser
---
text + icon
::

<p></p>

::base-button
---
disabled: true
icon: open_in_browser
---
text + icon (disabled)
::

<p></p>

::base-button
---
icon: open_in_browser
isIcon: true
---
::

#Usage

```md{}[**.md]
::base-button
---
disabled: boolean
icon: IconNameType
color: 'transparent' | string
size: 'small' | 'normal' | 'large'
fab: boolean
isIcon: boolean
outlined: boolean
fitContent: boolean
to: string
---
text
::
```

#Props
| name | description | default |
| -- | -- | -- |
| disabled | Flag to make the button unclickable. | `false` |
| icon | Designate your own icons. [Available Icons](https://fonts.google.com/icons) | `undefined` |
| color | Background color (#RRGGBB). | `undefined` |
| size | There are three sizes: `'small'`, `'normal'`, and `'large'`. | `'normal'` |
| fab |  Same shape as floating action button. | `false` |
| isIcon | Flag to make background transparent and show only icons. | `false` |
| outlined | Flag to make background transparent and show only borders. | `false` |
| fitContent | The width of the button is `auto` by default. Flag to make it `fit-content`. | `false` |
| to | Link URL, both in-page and external links can be set. | `undefined` |

::