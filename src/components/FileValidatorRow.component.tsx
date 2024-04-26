// @ts-ignore
import React from 'react'
import { IFileValidatorItem } from '@builtwithjavascript/file-input-validator'

type IProps = {
  index: number
  totItemsCount: number
  roundedCorners?: boolean
  model: IFileValidatorItem
}

export function FileValidatorRowComponent({ model, index, totItemsCount, roundedCorners }: IProps) {
  const cssClass = () => {
    const { hasError } = model
    const isFirst = index === 0
    const isLast = index === totItemsCount - 1
    const result = ['file-validator-item px-4 py-2 flex items-center text-white']

    if (roundedCorners) {
      if (isFirst) {
        result.push('rounded-t-lg')
      }
      if (isLast) {
        result.push('rounded-b-lg')
      }

      if (!isLast && totItemsCount > 1) {
        result.push('border-b-0')
      }
    }

    // item success/error class
    result.push(hasError ? 'error bg-red-600' : 'success bg-green-600')

    return result.join(' ').trim()
  }

  return (
    <div className={cssClass()} title={model.value}>
      {/* TODO icon <icon class="h-4 w-4 flex-none" aria-hidden="true" :title="validationIcon" /> */}
      <span className="property-name flex-none w-20">{model.name}</span>
      <span
        className={`property-value flex-initial ${model.hasError ? '' : 'overflow-hidden overflow-ellipsis whitespace-nowrap'}`}
      >
        {model.displayValue}
      </span>
    </div>
  )
}
