/**
 * @author WMXPY
 * @namespace Stories_Pill
 * @description Group
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonPillGroup } from "../../src/pill";
import { NeonPillGroupBase } from "../../src/pill/group";
import { wInfo } from "../util";
import GroupMDX from "./group.mdx";

const componentStories = storiesOf('Scenarios', module);

class GroupStory extends React.Component {

    public state = {
        selected: ['a'],
    };

    public render() {

        return (<GroupMDX
            options={['a', 'b', 'c']}
            selected={this.state.selected}
            onChange={(newSelected: string[]) =>
                this.setState({
                    selected: newSelected,
                })}
        />);
    }
}

componentStories.add(
    'Pill Groups',
    wInfo([NeonPillGroupBase], [NeonPillGroup, GroupStory, GroupMDX])(() => {

        return (<GroupStory />);
    }),
);
