import React from 'react';
interface Item {
    width?: number | string;
    height: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    borderRadius?: number;
}
interface Props {
    /**
     * Skeleton color
     */
    color?: string;
    /**
     * pulse time
     */
    pulseTime?: number;
    /**
     * width container component
     */
    width?: number | string;
    /**
     * flex-direction of layout
     */
    direction?: 'column' | 'row';
    /**
     * align items of layout
     */
    align?: 'center' | 'left' | 'right';
    /**
     * Array of Items:
     *  height: {string|number} - Required
     *  width: {string|number} - Default: 100% - Optional
     *  borderRadius: {number} - Default: 0 - Optional
     *  marginTop: {number|string} - Default: 3px - Optional
     *  marginBottom: {number|string} - Default: 3px - Optional
     *  marginLeft: {number|string} - Default: 0 - Optional
     *  marginRight: {number|string} - Default: 0 - Optional
     */
    items: Item[];
}
export declare const SkeletonLayout: React.FC<Props>;
export {};
//# sourceMappingURL=index.d.ts.map