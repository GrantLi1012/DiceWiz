import CSS from 'csstype';

export const dividerContainer = (alignment: string): CSS.Properties => ({
    display: "flex",
    justifyContent: alignment === "left" ? "flex-start" : alignment === "right" ? "flex-end" : "center",
    alignItems: "center",
    width: "100%",
    margin: "1rem 0 1rem 0",
});

export const dividerImage = (size: string, flip: boolean): CSS.Properties => ({
    width: size === "large" ? "80%" : size === "medium" ? "60%" : size === "small" ? "40%" : "20%",
    height: "20%",
    transform: flip ? "rotate(180deg)" : "rotate(0deg)",
});