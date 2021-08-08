export interface GetTreeItemChildren {
  done: (children: TreeItem[]) => void
  node: TreeItem
  path: NumberOrStringArray
  lowerSiblingCounts: number[]
  treeIndex: number
}

export type GetTreeItemChildrenFn = (data: GetTreeItemChildren) => void

export type GetNodeKeyFunction = (data: TreeIndex & TreeNode) => string | number

export type NumberOrStringArray = Array<string | number>

export interface TreeItem {
  title?: React.ReactNode | undefined
  subtitle?: React.ReactNode | undefined
  expanded?: boolean | undefined
  children?: TreeItem[] | GetTreeItemChildrenFn | undefined
  [x: string]: any
}

export interface TreeNode {
  node: TreeItem
}

export interface TreePath {
  path: NumberOrStringArray | number
}

export interface TreeIndex {
  treeIndex: number
}

export interface FullTree {
  treeData: TreeItem[] | undefined | null
}

export interface NodeData extends TreeNode, TreePath, TreeIndex {}

export interface SearchData extends NodeData {
  searchQuery: any
}

export const defaultGetNodeKey = ({ treeIndex }: TreeIndex) => treeIndex

// Cheap hack to get the text of a react object
const getReactElementText = (parent: any) => {
  if (typeof parent === 'string') {
    return parent
  }

  if (
    parent === null ||
    typeof parent !== 'object' ||
    !parent.props ||
    !parent.props.children ||
    (typeof parent.props.children !== 'string' &&
      typeof parent.props.children !== 'object')
  ) {
    return ''
  }

  if (typeof parent.props.children === 'string') {
    return parent.props.children
  }

  return parent.props.children
    .map((child: any) => getReactElementText(child))
    .join('')
}

// Search for a query string inside a node property
const stringSearch = (
  key: string,
  searchQuery: string,
  node: TreeItem,
  path: NumberOrStringArray | number,
  treeIndex: number
) => {
  if (typeof node[key] === 'function') {
    // Search within text after calling its function to generate the text
    return (
      String(node[key]({ node, path, treeIndex })).indexOf(searchQuery) > -1
    )
  }
  if (typeof node[key] === 'object') {
    // Search within text inside react elements
    return getReactElementText(node[key]).indexOf(searchQuery) > -1
  }

  // Search within string
  return node[key] && String(node[key]).indexOf(searchQuery) > -1
}

export const defaultSearchMethod = ({
  node,
  path,
  treeIndex,
  searchQuery,
}: SearchData): boolean => {
  return (
    stringSearch('title', searchQuery, node, path, treeIndex) ||
    stringSearch('subtitle', searchQuery, node, path, treeIndex)
  )
}
