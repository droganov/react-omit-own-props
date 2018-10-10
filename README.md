# A factory to omit react props by propTypes

A case is when you don't have destruction in class render method and want to keep in clean and readable.

```javascript
import makeOmitter from 'react-omit-own-props';

const PROP_TYPES = { children: PropTypes.node };
const omit = makeOmitter(PROP_TYPES);

export default class ExampleComponent extends Component {
  static propTypes = PROP_TYPES;
  render = () =>
    <div {...omit(this.props)}>
      {this.props.children}
    </div>
}
```

In functions you normally use destruction:
```javascript
const MyComponent = ({ children, ...rest }) =>
  <div {...rest}>
    {children}
  </div>;
```
