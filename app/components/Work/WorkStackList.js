import React from 'react'

const WorkStackList = (props) => {

    props.func(props.tech)
  return (
    <>
        <li key={props.id}>{props.tech}</li>
    </>
  )
}

export default WorkStackList