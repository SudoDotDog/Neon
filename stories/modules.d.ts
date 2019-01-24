/**
 * @author WMXPY
 * @namespace Stories
 * @description Module Declare
 */

declare module '*.md';
declare module '*.css';

declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
}

declare module 'react-jss';
