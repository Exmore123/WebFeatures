import * as React from 'react';
import { connect } from 'react-redux';
import ReactiveImage from './Resources/ReactiveImage.png';

import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../../store';
import * as MultithreadingStore from '../../../store/Multithreading';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type MultithreadingProps =
    MultithreadingStore.MultithreadingState &
    typeof MultithreadingStore.actionCreators &
    RouteComponentProps<{}>;

class Multithreading extends React.PureComponent<MultithreadingProps> {
    public render() {
        return (
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Reactive</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <img src={ReactiveImage} alt="ReactiveImage" />
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.multithreading,
    MultithreadingStore.actionCreators
)(Multithreading);