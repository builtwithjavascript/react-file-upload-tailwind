# @builtwithjavascript/react-file-upload-tailwind
A React file upload component with validation, styled with Tailwind CSS.

[![npm version](https://badge.fury.io/js/@builtwithjavascript%2Freact-file-upload-tailwind.svg)](https://badge.fury.io/js/@builtwithjavascript%2Freact-file-upload-tailwind)

## Screenshot

<img src="readme-files/react-screenshot.png" alt="React Screenshot" style="width:300px;"/>

## NOTE
If you need an unstyled version of this component, you can find it here:
https://www.npmjs.com/package/@builtwithjavascript/react-file-upload

## External Dependencies
- React
- Tailwind CSS

## Other Dependencies
- @builtwithjavascript/file-input-validator

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
  // do what you need to do with fileInfo.file
  // i.e. create form data and post it to an API endpoint
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
  roundedCorners={true}
  onUploadClick={onUploadClick}
/>
```

NOTE: if you pass `showOnlyErrors` true, that only the validator items that fail will be displayed.

