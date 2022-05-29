import { useEffect, useRef } from 'react'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const Crop: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null)
  const previewRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (imageRef.current) {
      const cropper = new Cropper(imageRef.current, {
        aspectRatio: 9 / 16,
        viewMode: 1,
        crop(event: any) {},
        dragMode: 'move',
        preview: previewRef.current!,
      })
      return () => {
        cropper.destroy()
      }
    }
  }, [imageRef])

  return (
    <>
      <div>
        <img
          ref={imageRef}
          src="https://picsum.photos/700/400"
          alt="test image"
          style={{ maxWidth: '100%' }}
        />
      </div>

      <div className="previwContainer">
        <img ref={previewRef} src="" alt="preview" />
      </div>
    </>
  )
}

export default Crop
