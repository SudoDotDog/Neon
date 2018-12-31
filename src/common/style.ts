/**
 * @author WMXPY
 * @namespace Neon_Common
 * @description Style
 */

export type JSSStyle = Record<string, React.CSSProperties>;

export const getClasses = <T extends JSSStyle>(props: any):
    Record<keyof T, string> =>
    props.classes as Record<keyof T, string>;
