// @ts-ignore
import React, { useRef } from 'react'
import type { IFileInfo } from '@builtwithjavascript/file-input-validator'

type IFileInputProps = {
  id: string
  model: IFileInfo
  cssClass?: string
  setResetFunction: (resetFunction: () => any) => any
  changed: (model: IFileInfo) => any
}

export function FileInputComponent(props: IFileInputProps) {
  // dom input reference:
  const inputFileRef = useRef(null)

  // const labelText = (): string => {
  //   if (props.model.file) {
  //     return `File: ${props.model.displayName}`
  //   }
  //   return `File: Click to select`
  // }
  // <span className="file-info-text hidden" title="Click to choose a file">{ labelText() }</span>

  const cssClasses = () => {
    const classes: string[] = ['cursor-pointer bg-primary w-full border border-red-500 flex flex-col space-y-2 p-2 overflow-hidden overflow-ellipsis whitespace-nowrap']
    if (props.cssClass) {
      classes.push(props.cssClass)
    }
    return classes.join(' ')
  }

  const onInputFileChange = (ev: any) => {
    const el: HTMLInputElement = ev.target
    if (el.files && el.files.length > 0) {
      props.model.file = el.files.item(0)
    } else {
      // no file selected
      props.model.file = null
    }
    props.model.fileSelected = !!props.model.file
    props.changed(props.model)
  }

  const resetInputFile = () => {
    // a way to reset the html input type='file" element
    const inputFile: HTMLInputElement = inputFileRef.current as any
    if (inputFile) {
      inputFile.value = ''
    }
  }

  // Expose the reset function to the parent component
  props.setResetFunction(resetInputFile)

  return (
    <label className={cssClasses()} id={props.id}>
      <input ref={inputFileRef} name="csv-file" type="file" style={{display: 'block'}} onChange={onInputFileChange} />
    </label>
  )
}
