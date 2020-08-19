import React from 'react'
import renderer from 'react-test-renderer'

import Face from './../components/Face'
import FaceList from './../components/FaceList'
import mockData from './mockData'

describe('<FaceList />', () => {
  it('has 0 rows if an empty array is provided', () => {
    const instance = renderer.create(<FaceList data={[]} />)

    expect(instance?.root.findAllByType(Face).length).toBe(0)
  })

  it('has as many rows as the number of faces provided', () => {
    const instance = renderer.create(<FaceList data={mockData.faceList} />)

    expect(instance?.root.findAllByType(Face).length).toBe(5)
  })

  it('should show the faces in the same order as the data provided', () => {
    const instance = renderer.create(<FaceList data={mockData.faceList} />)
    const facesInstances = instance?.root.findAllByType(Face)

    facesInstances.forEach((instance, i) => {
      expect(instance.props.data.id).toBe(mockData.faceList[i].id)
    })
  })
})
