import React from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Dropdown trigger="click">
                    <Button type="primary">
                        click <Icon className="ion-arrow-down-b" size="small" />
                    </Button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                        <Dropdown position={{my: 'left top', at: 'right top'}}>
                            <DropdownItem>
                                <span>hover</span>
                                <i className="ion-ios-arrow-right"></i>
                            </DropdownItem>
                            <DropdownMenu>
                                <Dropdown position={{my: 'left top', at: 'right top'}}>
                                    <DropdownItem>
                                        <span>hover</span>
                                        <i className="ion-ios-arrow-right"></i>
                                    </DropdownItem>
                                    <DropdownMenu>
                                        <DropdownItem>item 1</DropdownItem>
                                        <DropdownItem>item 2</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <DropdownItem>item 1</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown trigger="click" position={{my: 'left top', at: 'right top'}}>
                            <DropdownItem>
                                <span>click</span>
                                <i className="ion-ios-arrow-right"></i>
                            </DropdownItem>
                            <DropdownMenu>
                                <Dropdown trigger="click" position={{my: 'left top', at: 'right top'}}>
                                    <DropdownItem>
                                        <span>click</span>
                                        <i className="ion-ios-arrow-right"></i>
                                    </DropdownItem>
                                    <DropdownMenu>
                                        <DropdownItem>item 1</DropdownItem>
                                        <DropdownItem>item 2</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <DropdownItem>item 1</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}