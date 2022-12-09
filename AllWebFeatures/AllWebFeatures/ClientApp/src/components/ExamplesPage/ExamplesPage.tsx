import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

//todo ref-ing

const ExamplesPage = () => (
    <div>        
        <MultiSelectTreeView />        
    </div>
);

export default connect()(ExamplesPage);

function GetNavLink(linkTo: string, label: string) {
    return (
        <Grid container spacing={1}>
            <Grid item xs={1} />
            <Grid item xs={11}>
                <NavLink tag={Link} className="text-dark" to={linkTo}>{label}</NavLink>
                <hr />
            </Grid>
        </Grid>
        )
}

function MultiSelectTreeView() {
    return (
        <TreeView
            aria-label="multi-select"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect         
        >
            <TreeItem nodeId="1" label="Tutorials">
                {GetNavLink("/docker_page", "Docker")}
                {GetNavLink("/jenkins_page", "Jenkins")}
                {GetNavLink("/kuber_page", "Kubernetis")}
            </TreeItem>
            <TreeItem nodeId="2" label="Login Forms">
                {GetNavLink("/glass_login", "GlassLogin")}
            </TreeItem>
            <TreeItem nodeId="3" label="Tables">
                {GetNavLink("/table_with_scroll", "Table With Scroll")}
            </TreeItem>
            <TreeItem nodeId="4" label="DropDowns">
                {GetNavLink("/custom_dropdown", "Custom Drop Down")}
                {GetNavLink("/multi_dropdown", "Multi Drop Down")}
            </TreeItem>
            <TreeItem nodeId="5" label="Just for fun">
                {GetNavLink("/tic_tac_toe", "TicTacToe")}
            </TreeItem>
        </TreeView>
    );
}