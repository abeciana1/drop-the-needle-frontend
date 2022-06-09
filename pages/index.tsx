import Image from 'next/image'

import CustomHead from '../components/core/CustomHead'

const Home = () => {
  return (
    <>
      <CustomHead
        title="Drop The Needle"
        description="Homepage"
      />
      <div
        className="w-10/12 mx-auto py-10"
        onClick={() => console.log('hi')}
      >
        <Image
          src="/Scripps.jpg"
          layout="responsive"
          width={500}
          height={281}
        />
      </div>
    </>
  )
}

export default Home
