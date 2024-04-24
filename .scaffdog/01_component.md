---
name: 'component'
root: 'src/'
output: '**/*'
ignore: []
questions:
  name: 'コンポーネントの名前を教えてください。'
  hasCssModules:
    confirm: 'CSS Modulesは必要ですか？(Default: false)'
    initial: false
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}'
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
{{ if inputs.hasCssModules }}
import styles from './{{ inputs.name | pascal }}.module.scss'

type {{ inputs.name | pascal }}Props = {
}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props) => {
  return <></>
}
{{else}}
type {{ inputs.name | pascal }}Props = {
}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props) => {
  return <></>
}

{{end}}
```

# `{{ !inputs.hasCssModules && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss

```
