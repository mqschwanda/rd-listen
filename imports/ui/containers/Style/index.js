import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';

const timestamp = () => {
  const current = Date.now();
  const previous = timestamp.previous || current;

  return timestamp.previous = current > previous ? current : previous + 1;
}

const { isProduction } = Meteor;
const beautify = css => css.replace(/}\s*/ig, '\n}\n');
const minify = css => css.replace(/\n/g, '').replace(/\s\s+/g, ' ');

export default class Style extends React.PureComponent {
  static propTypes = {
    stylesheet: PropTypes.string.isRequired,
    children: PropTypes.any,
    namespace: PropTypes.string, // the html id used to scope css inside this container
    type: PropTypes.string, // the html tag type for the wrapping element
    selector: PropTypes.string, // the symbol in css that is converted to this html id when generating css
  }

  static defaultProps = {
    namespace: 'Stylesheet', // generate a unique id for the container
    type: 'div',
    selector: '&', // the symbol in css that is converted to this html id when generating css
  }

  constructor(props) {
    super(props);
    const uniqueId = `${timestamp()}`;
    this.buildHtmlId = this.buildHtmlId.bind(this);
    this.feedProps = this.feedProps.bind(this);
    this.feedStylesheet = this.feedStylesheet.bind(this);
    this.state = { htmlId: this.buildHtmlId({ ...props, uniqueId }), uniqueId };
  }

  componentWillReceiveProps(nextProps) {
    const update = nextProps.namespace !== this.props.namespace;
    if (update) this.setState({ htmlId: this.buildHtmlId({ ...nextProps }) });
  }

  buildHtmlId({ namespace, uniqueId }) {
    return `${namespace}-${uniqueId || this.state.uniqueId}`;
  }

  feedProps() {
    const props = { ...this.props, id: this.state.htmlId };
    ['namespace', 'selector', 'stylesheet', 'type'].forEach(prop => delete props[prop]);

    return props;
  }

  feedStylesheet() {
    const { stylesheet, selector } = this.props;
    const { htmlId } = this.state;
    const nameSpace = /(^|{|}|;|,)\s*([&a-z0-9\-~_=\.:#^\|\(\)\[\]\$'",>*\s]+)\s*(\{)/ig;
    const id = string => string.replace(new RegExp(selector, 'g'), `#${htmlId}`);
    const css = stylesheet.replace(nameSpace, id);
    const __html = isProduction ? minify(css) : beautify(css);

    return { scoped: true, dangerouslySetInnerHTML: { __html } };
  }

  render() {
    const { type, children } = this.props;
    const style = React.createElement('style', this.feedStylesheet());

    return React.createElement(type, this.feedProps(), children, style);
  }
}
