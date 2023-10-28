import { Component } from 'react';

type State = {
  hasError: boolean;
  error: { name: string; message: string };
};

type Props = {
  children: JSX.Element;
};

export default class ErrorBoundary extends Component<Props, State> {
  children;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: { name: '', message: '' } };
    this.children = props.children;
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: { name: error.name, message: error.message },
    };
  }

  render() {
    const { hasError, error } = this.state;
    // eslint-disable-next-line no-console
    console.log(`${error.name}: ${error.message}`);
    if (hasError) {
      return (
        <div className="error__block">
          <p className="error__message">{`${error.name}: ${error.message}`}</p>
        </div>
      );
    }

    return this.children;
  }
}
