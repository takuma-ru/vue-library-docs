::componentPage
---
componentName: CodeSandbox
description: Used to illustrate component use cases with CodeSandbox
---
#Demo
::code-sandbox{projectId="wild-forest-ziidmd"}
::

#Usage
```md{}[**.md]
::code-sandbox{projectId="string" height="string"}
::
```

#Props
| name | description | default |
| -- | -- | -- |
| projectId | Project Id. The `xxx` part of `https://codesandbox.io/s/xxx` | `undefined` |
| height | Frame size. | `500px` |
::