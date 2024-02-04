# React-Multi-Selectes

## How to use

```
import { CustomSelectBox } from 'react-multi-selectes'


<CustomSelectBox
    options={[]}
    onChange={e => setSelect(e)}
    ...props
/>
```

## OptionsType

```
type OptionsType = {
    value: string | number
    label: string
}
```

## Props

| Prop                  | Type                   | Requier | Default   |
| --------------------- | ---------------------- | ------- | --------- |
| `options`             | `OptionsType`          | \*      |           |
| `onChange`            | `(e: any) => void`     | \*      |           |
| `defaultValue`        | `number or string`     |         | `0`       |
| `defaultArrayValue`   | `(number or string)[]` |         | `[]`      |
| `isMulti`             | `boolean`              |         | `false`   |
| `isSearchable`        | `boolean`              |         | `false`   |
| `placeholder`         | `string`               |         | Select... |
| `searchPlaceholder`   | `string`               |         | Search... |
| `backgroundColor`     | `string`               |         | `#fff`    |
| `backgroundColorItem` | `string`               |         | `#98c5ff` |
| `borderColor`         | `string`               |         | `#ccc`    |
| `borderHoverColor`    | `string`               |         | `#bebebe` |
| `borderFocusColor`    | `string`               |         | `#2684ff` |
| `textColor`           | `string`               |         | `#2e2d2d` |
| `textColorActiveItem` | `string`               |         | `#2e2d2d` |
| `placeholderColor`    | `string`               |         | `#bebebe` |
| `borderRadius`        | `string`               |         | `0.35rem` |
| `borderRadius`        | `string`               |         | `0.35rem` |
| `borderRadiusItem`    | `string`               |         | `0.35rem` |
| `borderWidth`         | `string`               |         | `2px`     |
| `padding`             | `string`               |         | `0.25rem` |
| `inputHeight`         | `string`               |         | `2.25rem` |
