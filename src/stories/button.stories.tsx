/**
 * @author WMXPY
 * @namespace Neon_Stories
 * @description Button
 */

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { NeonButton } from "../components/button";

storiesOf('Button', module).add('Hello', () => <NeonButton />);
