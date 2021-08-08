import React, { Children, cloneElement } from 'react'
import { TreeItem } from '.'
import { ConnectDropTarget } from 'react-dnd'

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
  const { children, connectDropTarget, treeId, drop, ...otherProps } = props

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
