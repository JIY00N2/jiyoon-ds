# `JY DS`

JY DS is an open-source UI component library created by the author [JIY00N2](https://github.com/JIY00N2).

## Usage

```jsx
import { Tooltip } from 'jiyoon-ds';
import styles from './Tooltip.module.css';

export const Tooltip = () => {
  return (
    <Tooltip.Root direction='topLeft' offset={5} enterDelay={1000}>
      <Tooltip.Trigger>
        <div className={styles.trigger}>enterDelay 1s</div>
      </Tooltip.Trigger>
      <Tooltip.Content className={styles.blackContent}>
        <Tooltip.Arrow style={{ marginLeft: '10px' }} />
        <span>content example1</span>
        <span>content example2</span>
        <span>content example3</span>
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
```

## Documentation

See https://jiyoon-ds-web.vercel.app/

## Contact

angella990825@gmail.com
