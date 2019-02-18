/**
 * @author WMXPY
 * @namespace Stories_Table
 * @description List
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonSmartList } from "../../src/table";
import { NeonSmartListBase } from "../../src/table/list";
import { wInfo } from "../util";
import ListMDX from "./list.mdx";

const componentStories = storiesOf('Table', module);

class ListStory extends React.Component {

    public state = {
        list: {
            key: 'value',
            key2: 'value2',
        },
    };

    public render() {

        return (<ListMDX

            onChange={(newList: any) => {

                this.setState({
                    list: newList,
                });
            }}
            list={this.state.list}
        />);
    }
}

componentStories.add(
    'Smart List',
    wInfo([NeonSmartListBase], [NeonSmartList, ListStory, ListMDX])(() => {

        return (<ListStory />);
    }),
);
