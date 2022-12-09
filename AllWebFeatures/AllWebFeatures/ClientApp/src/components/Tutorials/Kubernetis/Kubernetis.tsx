import * as React from 'react';

export default class KuberPage extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <h1>
                    There is nothing here so far.
                </h1>
            </React.Fragment>
        );
    }
}