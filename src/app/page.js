
import Paragraph from "./UI/Paragraph";
// import {ProviderContext} from '@/app/context/Context'
export default function Home() {
  return (
    <>
    {/* <ProviderContext> */}
      <div className="relative land">
        <div className="absolute section-intro">
          <Paragraph className={"greens text-7xl font-bold z-50 mb-5  capitalize"}>
            dessert
          </Paragraph>
          <Paragraph className={"black capitalize text-3xl z-50 " }>Indulge in Sweet Perfection</Paragraph>
        </div>
      </div>
    {/* </ProviderContext> */}
    </>
  );
}
