import { FileValidatorRowComponent } from '../../components/FileValidatorRow.component'
import type { IFileValidatorItem } from '../..'

describe('FileValidatorRowComponent', () => {
  it(`should return a defined instance`, () => {
    const params = {
      index: 0,
      totItemsCount: 1,
      roundedCorners: false,
      model: {
        key: 'name',
        name: 'Name',
        value: '',
        displayValue: '',
        hasError: false,
        iconSuccess: '',
        iconError: ''
      } as IFileValidatorItem
    }
    const instance = FileValidatorRowComponent(params)
    expect(instance).toBeDefined()
    expect(instance.type).toEqual('div')
    expect(instance.props).toBeDefined()
    expect(instance.props.className).toEqual('file-validator-item px-4 py-2 flex items-center text-white bg-green-600')
    console.log('instance', instance)
  })
})
