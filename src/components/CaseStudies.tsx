import Image from 'next/image'

const coverImage = '/images/myle-tap.jpg'  // or whatever your image path is

<Image 
  src={coverImage}
  alt="Myle Tap Case Study"
  width={500}  // make sure width and height are specified
  height={300}
  className="w-full h-auto"
/> 