import * as React from 'react';
import Multiselect from 'multiselect-react-dropdown';

export default class MultiDropDown extends React.PureComponent<{}, { children?: React.ReactNode }> {

    public render() {
        return (
            <Multiselect
                displayValue="key"
                hideSelectedList
                onKeyPressFn={function noRefCheck() { }}
                onRemove={function noRefCheck() { }}
                onSearch={function noRefCheck() { }}
                onSelect={function noRefCheck() { }}
                options={[
                    {
                        cat: 'Group 1',
                        key: 'Option 1'
                    },
                    {
                        cat: 'Group 1',
                        key: 'Option 2'
                    },
                    {
                        cat: 'Group 1',
                        key: 'Option 3'
                    },
                    {
                        cat: 'Group 2',
                        key: 'Option 4'
                    },
                    {
                        cat: 'Group 2',
                        key: 'Option 5'
                    },
                    {
                        cat: 'Group 2',
                        key: 'Option 6'
                    },
                    {
                        cat: 'Group 2',
                        key: 'Option 7'
                    }
                ]}
                showCheckbox
            />
        );
    }
}