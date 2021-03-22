import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'HomeTask',
    to: '/hometask',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Home Task',
        to: '/hometask',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Explanation',
        to: '/explanation',
      },
    ]
  }
]

export default _nav
