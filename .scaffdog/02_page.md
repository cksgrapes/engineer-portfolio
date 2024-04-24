---
name: 'page'
root: 'src/app/'
output: '**/*'
ignore: []
questions:
  dir:
    message: '新しいディレクトリを切るなら、ディレクトリ名を記載してください。'
    initial: ' '
  hasCssModules:
    confirm: 'CSS Modulesは必要ですか？(Default false)'
    initial: false
---

# `{{ inputs.dir == ' ' ? "" : inputs.dir + "/"}}page.tsx`

```typescript
import Index from './_components/Index/Index'

export default function Page() {
  return <Index />
}
```


# `{{ inputs.dir == ' ' ? "" : inputs.dir + "/"}}_components/Index/Index.tsx`

```typescript
{{ if inputs.hasCssModules }}import styles from './Index.module.scss'{{end}}
export default function Index() {
  return <></>
}
```

# `{{ !inputs.hasCssModules && '!' }}{{ inputs.dir == ' ' ? "" : inputs.dir + "/"}}_components/Index/Index.module.scss`

```scss
```
