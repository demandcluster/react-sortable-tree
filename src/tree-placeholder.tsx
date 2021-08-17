import React, { Children, cloneElement } from 'react'
// eslint-disable-next-line import/named
import { ConnectDropTarget } from 'react-dnd'
import { TreeItem } from '.'
// eslint-disable-next-line import/named

const defaultProps = {
  canDrop: false,
  draggedNode: null,
}

type TreePlaceholderProps = {
  children: any
  // Drop target
  connectDropTarget: ConnectDropTarget
  isOver: boolean
  canDrop: boolean
  draggedNode: TreeItem
  treeId: string
  drop: any
}

const TreePlaceholder = (props: TreePlaceholderProps) => {
  props = { ...defaultProps, ...props }
  const {
    children,
    connectDropTarget,
    treeId: _treeId,
    drop: _drop,
    ...otherProps
  } = props

  return connectDropTarget(
    <div>
      {Children.map(children, (child) =>
        cloneElement(child, {
          ...otherProps,
        })
      )}
    </div>
  )
}

export default TreePlaceholder
