import React from "react"
import ContentLoader from "react-content-loader"

const CrauselLoader = () => (
  <>
  <div className='conatainer hidden md:block mx-auto p-4 w-full h-90'>
  <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
  <ContentLoader 
    speed={2}
    // width={1300}
    // height={700}
    viewBox="0 0 1360 700"
    backgroundColor="#322514"
    foregroundColor="#676565"
    className="md:col-span-9"
  >

    <rect x="12" y="35" rx="15" ry="15" className="w-full h-96" /> 
  </ContentLoader>

  <ContentLoader 
    speed={2}
    // width={1300}
    // height={700}
    viewBox="0 0 1360 700"
    backgroundColor="#322514"
    foregroundColor="#676565"
    className="md:col-span-3 h-full"
  >

    <rect x="10" y="35" rx="15" ry="15" className="w-96 h-96" /> 
  </ContentLoader>
  </div>
  </div>

  {/* Mobile View */}
  <div className="flex flex-row items-center justify-center md:hidden p-4 w-full mb-8">
  <ContentLoader 
    speed={2}
    width={2464}
    height={400}
    // viewBox="0 0 0 0"
    backgroundColor="#322514"
    foregroundColor="#676565"
    className="md:col-span-9"
  >

    <rect x="12" y="35" rx="15" ry="15" width={424} height={464} /> 
  </ContentLoader>
  </div>
  </>
)

export default CrauselLoader