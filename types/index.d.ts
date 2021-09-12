// import * as React from 'react'
// import { ListProps, Index } from 'react-virtualized'
// import {
//   ConnectDragSource,
//   ConnectDragPreview,
//   ConnectDropTarget,
// } from 'react-dnd'

// export interface GetTreeItemChildren {
//   done: (children: TreeItem[]) => void
//   node: TreeItem
//   path: NumberOrStringArray
//   lowerSiblingCounts: number[]
//   treeIndex: number
// }

// export type GetTreeItemChildrenFn = (data: GetTreeItemChildren) => void

// export interface TreeItem {
//   title?: React.ReactNode | undefined
//   subtitle?: React.ReactNode | undefined
//   expanded?: boolean | undefined
//   children?: TreeItem[] | GetTreeItemChildrenFn | undefined
//   [x: string]: any
// }

// export interface TreeNode {
//   node: TreeItem
// }

// export interface TreePath {
//   path: NumberOrStringArray
// }

// export interface TreeIndex {
//   treeIndex: number
// }

// export interface FullTree {
//   treeData: TreeItem[]
// }

// export interface NodeData extends TreeNode, TreePath, TreeIndex {}

// export interface FlatDataItem extends TreeNode, TreePath {
//   lowerSiblingCounts: number[]
//   parentNode: TreeItem
// }

// export interface SearchData extends NodeData {
//   searchQuery: any
// }

// export interface ExtendedNodeData extends NodeData {
//   parentNode: TreeItem
//   lowerSiblingCounts: number[]
//   isSearchMatch: boolean
//   isSearchFocus: boolean
// }

// export interface OnVisibilityToggleData extends FullTree, TreeNode {
//   expanded: boolean
// }

// export interface OnDragStateChangedData {
//   isDragging: boolean
//   draggedNode: TreeItem
// }

// interface PreviousAndNextLocation {
//   prevTreeIndex: number
//   prevPath: NumberOrStringArray
//   nextTreeIndex: number
//   nextPath: NumberOrStringArray
// }

// export interface OnDragPreviousAndNextLocation extends PreviousAndNextLocation {
//   prevParent: TreeItem | null
//   nextParent: TreeItem | null
// }

// export interface ShouldCopyData {
//   node: TreeNode
//   prevPath: NumberOrStringArray
//   prevTreeIndex: number
// }

// export interface OnMovePreviousAndNextLocation extends PreviousAndNextLocation {
//   nextParentNode: TreeItem | null
// }

// export type NodeRenderer = React.ComponentType<NodeRendererProps>

// export interface NodeRendererProps {
//   node: TreeItem
//   path: NumberOrStringArray
//   treeIndex: number
//   isSearchMatch: boolean
//   isSearchFocus: boolean
//   canDrag: boolean
//   scaffoldBlockPxWidth: number
//   toggleChildrenVisibility?(data: NodeData): void
//   buttons?: JSX.Element[] | undefined
//   className?: string | undefined
//   style?: React.CSSProperties | undefined
//   title?: ((data: NodeData) => JSX.Element | JSX.Element) | undefined
//   subtitle?: ((data: NodeData) => JSX.Element | JSX.Element) | undefined
//   icons?: JSX.Element[] | undefined
//   lowerSiblingCounts: number[]
//   swapDepth?: number | undefined
//   swapFrom?: number | undefined
//   swapLength?: number | undefined
//   listIndex: number
//   treeId: string
//   rowDirection?: 'ltr' | 'rtl' | undefined

//   connectDragPreview: ConnectDragPreview
//   connectDragSource: ConnectDragSource
//   parentNode?: TreeItem | undefined
//   startDrag: any
//   endDrag: any
//   isDragging: boolean
//   didDrop: boolean
//   draggedNode?: TreeItem | undefined
//   isOver: boolean
//   canDrop?: boolean | undefined
// }

// export type PlaceholderRenderer = React.ComponentType<PlaceholderRendererProps>

// export interface PlaceholderRendererProps {
//   isOver: boolean
//   canDrop: boolean
//   draggedNode: TreeItem
// }

// type NumberOrStringArray = Array<string | number>

// export type TreeRenderer = React.ComponentType<TreeRendererProps>

// export interface TreeRendererProps {
//   treeIndex: number
//   treeId: string
//   swapFrom?: number | undefined
//   swapDepth?: number | undefined
//   swapLength?: number | undefined
//   scaffoldBlockPxWidth: number
//   lowerSiblingCounts: number[]
//   rowDirection?: 'ltr' | 'rtl' | undefined

//   listIndex: number
//   children: JSX.Element[]
//   style?: React.CSSProperties | undefined

//   // Drop target
//   connectDropTarget: ConnectDropTarget
//   isOver: boolean
//   canDrop?: boolean | undefined
//   draggedNode?: TreeItem | undefined

//   // used in dndManager
//   getPrevRow: () => FlatDataItem | null
//   node: TreeItem
//   path: NumberOrStringArray
// }

// interface ThemeTreeProps {
//   style?: React.CSSProperties | undefined
//   innerStyle?: React.CSSProperties | undefined
//   reactVirtualizedListProps?: Partial<ListProps> | undefined
//   scaffoldBlockPxWidth?: number | undefined
//   slideRegionSize?: number | undefined
//   rowHeight?: ((info: NodeData & Index) => number) | number | undefined
//   nodeContentRenderer?: NodeRenderer | undefined
//   placeholderRenderer?: PlaceholderRenderer | undefined
// }

// export interface ThemeProps extends ThemeTreeProps {
//   treeNodeRenderer?: TreeRenderer | undefined
// }

// export interface ReactSortableTreeProps extends ThemeTreeProps {
//   treeData: TreeItem[]
//   onChange(treeData: TreeItem[]): void
//   getNodeKey?(data: TreeNode & TreeIndex): string | number
//   generateNodeProps?(data: ExtendedNodeData): { [index: string]: any }
//   onMoveNode?(data: NodeData & FullTree & OnMovePreviousAndNextLocation): void
//   onVisibilityToggle?(data: OnVisibilityToggleData): void
//   onDragStateChanged?(data: OnDragStateChangedData): void
//   maxDepth?: number | undefined
//   rowDirection?: 'ltr' | 'rtl' | undefined
//   canDrag?: ((data: ExtendedNodeData) => boolean) | boolean | undefined
//   canDrop?(data: OnDragPreviousAndNextLocation & NodeData): boolean
//   canNodeHaveChildren?(node: TreeItem): boolean
//   theme?: ThemeProps | undefined
//   searchMethod?(data: SearchData): boolean
//   searchQuery?: string | any | undefined
//   searchFocusOffset?: number | undefined
//   onlyExpandSearchedNodes?: boolean | undefined
//   searchFinishCallback?(matches: NodeData[]): void
//   dndType?: string | undefined
//   shouldCopyOnOutsideDrop?:
//     | boolean
//     | ((data: ShouldCopyData) => boolean)
//     | undefined
//   className?: string | undefined
//   isVirtualized?: boolean | undefined
// }

// declare const SortableTree: React.ComponentType<ReactSortableTreeProps>

// export const SortableTreeWithoutDndContext: React.ComponentType<ReactSortableTreeProps>

// export default SortableTree

// export function defaultGetNodeKey(data: TreeIndex): number
// export function defaultSearchMethod(data: SearchData): boolean

// export type GetNodeKeyFunction = (data: TreeIndex & TreeNode) => string | number
// export type WalkAndMapFunctionParameters = FullTree & {
//   getNodeKey: GetNodeKeyFunction
//   callback: Function
//   ignoreCollapsed?: boolean | undefined
// }

// export function getDescendantCount(
//   data: TreeNode & { ignoreCollapsed?: boolean | undefined }
// ): number
// export function getVisibleNodeCount(data: FullTree): number
// export function getVisibleNodeInfoAtIndex(
//   data: FullTree & {
//     index: number
//     getNodeKey: GetNodeKeyFunction
//   }
// ): (TreeNode & TreePath & { lowerSiblingsCounts: number[] }) | null
// export function walk(data: WalkAndMapFunctionParameters): void
// export function map(data: WalkAndMapFunctionParameters): TreeItem[]
// export function toggleExpandedForAll(
//   data: FullTree & {
//     expanded?: boolean | undefined
//   }
// ): TreeItem[]
// export function changeNodeAtPath(
//   data: FullTree &
//     TreePath & {
//       newNode: Function | any
//       getNodeKey: GetNodeKeyFunction
//       ignoreCollapsed?: boolean | undefined
//     }
// ): TreeItem[]
// export function removeNodeAtPath(
//   data: FullTree &
//     TreePath & {
//       getNodeKey: GetNodeKeyFunction
//       ignoreCollapsed?: boolean | undefined
//     }
// ): TreeItem[]
// export function removeNode(
//   data: FullTree &
//     TreePath & {
//       getNodeKey: GetNodeKeyFunction
//       ignoreCollapsed?: boolean | undefined
//     }
// ): (FullTree & TreeNode & TreeIndex) | null
// export function getNodeAtPath(
//   data: FullTree &
//     TreePath & {
//       getNodeKey: GetNodeKeyFunction
//       ignoreCollapsed?: boolean | undefined
//     }
// ): (TreeNode & TreeIndex) | null
// export function addNodeUnderParent(
//   data: FullTree & {
//     newNode: TreeItem
//     parentKey?: number | string | undefined
//     getNodeKey: GetNodeKeyFunction
//     ignoreCollapsed?: boolean | undefined
//     expandParent?: boolean | undefined
//     addAsFirstChild?: boolean | undefined
//   }
// ): FullTree & TreeIndex
// export function insertNode(
//   data: FullTree & {
//     depth: number
//     newNode: TreeItem
//     minimumTreeIndex: number
//     ignoreCollapsed?: boolean | undefined
//     expandParent?: boolean | undefined
//     getNodeKey: GetNodeKeyFunction
//   }
// ): FullTree & TreeIndex & TreePath & { parentNode: TreeItem }
// export function getFlatDataFromTree(
//   data: FullTree & {
//     getNodeKey: GetNodeKeyFunction
//     ignoreCollapsed?: boolean | undefined
//   }
// ): FlatDataItem[]
// export function getTreeFromFlatData<
//   T,
//   K extends keyof T,
//   P extends keyof T,
//   I extends string | number
// >(data: {
//   flatData: T[] | I extends string ? { [key: string]: T } : { [key: number]: T }
//   // tslint:disable-next-line:no-unnecessary-generics
//   getKey?: ((item: T) => T[K]) | undefined
//   // tslint:disable-next-line:no-unnecessary-generics
//   getParentKey?: ((item: T) => T[P]) | undefined
//   rootKey?: I | undefined
// }): TreeItem[]
// export function isDescendant(older: TreeItem, younger: TreeItem): boolean
// export function getDepth(node: TreeItem, depth?: number): number
// export function find(
//   data: FullTree & {
//     getNodeKey: GetNodeKeyFunction
//     searchQuery?: string | number | undefined
//     searchMethod: (data: SearchData) => boolean
//     searchFocusOffset?: number | undefined
//     expandAllMatchPaths?: boolean | undefined
//     expandFocusMatchPaths?: boolean | undefined
//   }
// ): { matches: NodeData[] } & FullTree
