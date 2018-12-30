/**
 * @author WMXPY
 * @namespace Stories
 * @description Button
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../src/button";

storiesOf('Button', module).add('Hello', () => <NeonButton />);
