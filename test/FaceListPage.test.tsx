import { filterFaces } from './../pages/FaceListPage'
import mockData from './mockData'

describe('<FaceListPage />', () => {
  describe('Face filter', () => {
    it('should filter the face list by the text provided', () => {
      const filteredList = filterFaces(mockData.faceList, 'Mor')

      expect(filteredList.length).toBe(2)
    })

    it('should not filter the face list if the filter string is empty', () => {
      const filteredList = filterFaces(mockData.faceList, '')

      expect(filteredList.length).toBe(mockData.faceList.length)
    })

    it('should return an empty array if all the faces are filtered', () => {
      const filteredList = filterFaces(mockData.faceList, 'AAAAA')

      expect(filteredList.length).toBe(0)
    })

    it('should be case insensitive', () => {
      const filteredList = filterFaces(mockData.faceList, 'MOR')

      expect(filteredList.length).toBe(2)
    })

    it('should support full name search', () => {
      const filteredList = filterFaces(mockData.faceList, 'Morgan James')

      expect(filteredList.length).toBe(2)
    })

    it('should support reverse full name search', () => {
      const filteredList = filterFaces(mockData.faceList, 'James Morgan')

      expect(filteredList.length).toBe(2)
    })
  })
})
