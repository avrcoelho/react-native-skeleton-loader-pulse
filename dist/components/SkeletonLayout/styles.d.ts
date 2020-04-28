interface PropsContainer {
    width: number | string;
    direction: 'column' | 'row';
    align: 'center' | 'left' | 'right';
}
interface PropsLoader {
    color: string;
    width: number | string;
    height: number | string;
    borderRadius: number;
    marginTop: number | string;
    marginBottom: number | string;
    marginLeft: number | string;
    marginRight: number | string;
}
export declare const container: (props: PropsContainer) => {
    container: {
        width: string | number;
        flexDirection: "column" | "row";
        alignItems: "center" | "flex-start" | "flex-end";
    };
};
export declare const loader: (props: PropsLoader) => {
    loader: {
        width: string | number;
        height: string | number;
        borderRadius: number;
        marginTop: string | number;
        marginBottom: string | number;
        marginLeft: string | number;
        marginRight: string | number;
        backgroundColor: string;
    };
};
export {};
//# sourceMappingURL=styles.d.ts.map