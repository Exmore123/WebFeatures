import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

// Container fluid - делает страницу width 100%

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <NavMenu />
                {/*<Container fluid>*/}
                <Container>
                    {this.props.children}
                </Container>
            </React.Fragment>
        );
    }
}