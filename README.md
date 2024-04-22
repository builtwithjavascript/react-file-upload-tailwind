# @builtwithjavascript/react-file-upload-tailwind
A React file upload component with validation, styled with Tailwind CSS.


## Run-time Dependencies
- React

## Install
```
npm i -D @builtwithjavascript/react-file-upload-tailwind
```

## Consume
```
import { FileUploadComponent } from '@builtwithjavascript/react-file-upload-tailwind' 
import type { 
  IFileInfo,
  IFileValidatorOptions
} from '@builtwithjavascript/react-file-upload-tailwind' 
  
const fileValidatorOptions: IFileValidatorOptions = {
  allowedTypes: ['csv', 'xls'],
  maxSize: 50, // in MB
  maxNameLength: 60, // max name length in chars
  nameTruncateMaxLength: 35, // will truncate the display of the name
  propertiesToValidate: ['name', 'type', 'size']
}

const onUploadClick = async (fileInfo: IFileInfo) => {
  // to what you need with fileInfo.file
  // i.e.
  const file = new FormData()
  file.append('file', fileInfo.file as Blob)

  const response = await someApiClient.post({
    file: file
  })

  ...
}

...

<FileUploadComponent id="my-file-upload" 
  uploadLabel="Import file"
  validatorOptions={fileValidatorOptions}
  showOnlyErrors={true}
  onUploadClick={onUploadClick}
/>
```

NOTE: if you pass `showOnlyErrors` true, that only the validator items that fail will be displayed.

