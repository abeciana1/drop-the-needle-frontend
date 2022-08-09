import Image from 'next/image'
import CustomHead from '../components/core/CustomHead'

const Home = () => {
  return (
    <>
      <CustomHead
        title="Drop The Needle"
        description="Homepage"
      />
      <section>
        <h1 className="sr-only">Drop The Needle</h1>
        <div
          className="md:w-10/12 mx-auto md:py-10"
        >
          <Image
            src="/Scripps.jpg"
            layout="responsive"
            width={500}
            height={281}
          />
        </div>
      </section>
      {/* <section
        className="mx-20 text-6xl font-medium py-2"
      >
        <h2>Upcoming...</h2>
        <ul
          className="py-5"
        ></ul>
      </section> */}
    </>
  )
}

export default Home
