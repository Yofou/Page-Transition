import type { WrapGridArguments } from "animate-css-grid/dist/types"

export const flip_grid = async (node: HTMLElement, args: WrapGridArguments ) => {
    const { wrapGrid  } = await import("animate-css-grid")
    wrapGrid( node, args )
}