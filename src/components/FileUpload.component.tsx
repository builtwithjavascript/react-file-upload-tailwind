// @ts-ignore
import * as React from 'react'
import { useState, useMemo } from 'react'
import { FileInputComponent } from './FileInput.component'
import { FileValidatorComponent } from './FileValidator.component'
import { useFileInputValidator } from '@builtwithjavascript/file-input-validator'
import type { 
  IFileInfo, 
  IFileValidatorItem,
  IFileValidatorOptions
} from '@builtwithjavascript/file-input-validator'

type IProps = {
  id: string
  uploadLabel: string
  validatorOptions?: IFileValidatorOptions
  showOnlyErrors?: boolean
  onUploadClick: (model: IFileInfo) => Promise<any>
}

export function FileUploadComponent(props: IProps) {
  // init FileValidator
  const fileValidator = useFileInputValidator(props.validatorOptions)

  // file info state
  const [fileInfo, setFileInfo] = useState<IFileInfo>({
    file: null,
    lastModified: '',
    fileSelected: false,
    isValid: false,
    name: '',
    displayName: '',
    message: ''
  })

  // validator items state
  const [validatorItems, setValidatorItems] = useState<IFileValidatorItem[]>([])

  const uploadDisabled = useMemo(() => {
    if (!fileInfo.file) {
      return true
    }
    return validatorItems.some(x => x.hasError)
  }, [validatorItems])

  let _resetFunction: () => any
  const setResetFunction = (resetFunction: () => any) => {
    _resetFunction = resetFunction
  }

  const onFileInputChanged = (updatedModel: IFileInfo) => {
    _resetFunction()
    setFileInfo(updatedModel)
    setValidatorItems(fileValidator.validateFile(fileInfo))
  }

  const onUploadClick = async () => {
    await props.onUploadClick(fileInfo)
  }

  return (
    <div className="max-w-96 space-y-2">
      <FileInputComponent 
        id={`${props.id}-input`} 
        model={fileInfo} 
        changed={onFileInputChanged} 
        setResetFunction={setResetFunction} />
      
      <FileValidatorComponent
        model={fileInfo}
        id={`${props.id}-validator`}
        validatorItems={validatorItems}
        showOnlyErrors={props.showOnlyErrors}
      />

      <button onClick={onUploadClick} 
        disabled={uploadDisabled}
        className={`p-2 rounded-md ${ uploadDisabled ? 'bg-gray-400' : 'bg-blue-500'} color-white`}>{ props.uploadLabel }</button>
    </div>
  )
}
