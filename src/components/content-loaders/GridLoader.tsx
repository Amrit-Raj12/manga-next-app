import ContentLoader from "react-content-loader";
import LoadingGif from "./Loading";


const GridLoader = () => (

    <div className="mx-auto max-w-screen-xl lg:items-center mt-10">
    <div className="hiiden justify-center mt-12 hidden">
    <ContentLoader 
    speed={2}
    width={340}
    // height={424}
    viewBox="0 0 1000 424"
    backgroundColor="#322514"
    foregroundColor="#676565"
    
  >
    <rect x="156" y="80" rx="8" ry="8" width="650" height="42" /> 
    <rect x="0" y="256" rx="0" ry="0" width="1360" height="96" /> 
    </ContentLoader>
    </div>
    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 items-center mt-12"> 
    {[...Array(12)].map((_, index) => (
      <ContentLoader
        key={index}
        speed={2}
        width={300}
        height={400}
        viewBox="0 0 300 400"
          backgroundColor="#322514"
        foregroundColor="#676565"
        className="w-full"
      >
        <rect x="0" y="0" rx="8" ry="8" width="100%" height="390" />
      </ContentLoader>
    ))}
  </div>

    <div className="md:hidden block">
      <LoadingGif />
    </div>
  </div>
)

export default GridLoader