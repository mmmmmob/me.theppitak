import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
        <div className="sticky top-0 w-full">
          <Header />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <Title />
          <hr className="m-5 h-px self-center border-0 bg-gray-300 max-sm:w-11/12 md:w-8/12 dark:bg-gray-600" />
          <Info />
          <p className="m-5 text-justify md:w-8/12">
            Tempor ex nostrud culpa sint tempor. Lorem proident non et
            incididunt ullamco quis occaecat labore eiusmod fugiat ea magna
            aliqua cillum. Officia officia elit velit. Officia sint nostrud
            minim anim. Elit duis enim id pariatur sit consectetur non ipsum.
            Nostrud mollit reprehenderit irure fugiat magna. Non incididunt eu
            reprehenderit aute sunt. Et minim irure amet labore labore irure
            eiusmod ipsum voluptate aute cupidatat fugiat proident. Consectetur
            ex culpa culpa adipisicing. Velit exercitation eiusmod commodo do
            amet est in minim consequat veniam. Pariatur aliquip occaecat
            exercitation id nostrud non anim sit excepteur laboris. Mollit culpa
            mollit ea velit aliqua ut eu voluptate in cupidatat ipsum ipsum
            adipisicing minim. Enim non eiusmod sunt minim aliqua ullamco labore
            ea non aliquip. Do incididunt magna laborum mollit aute tempor
            consectetur magna cillum ullamco. Veniam reprehenderit esse cillum
            eiusmod laboris nisi occaecat duis tempor esse adipisicing.
            Reprehenderit in ex tempor aute cillum deserunt fugiat. Proident
            culpa Lorem ex. Minim nostrud sint aliquip sit aute magna amet
            dolore exercitation occaecat in nostrud qui do. Dolor commodo fugiat
            et dolore ut. Ullamco elit nostrud sunt consequat laborum id commodo
            fugiat culpa eu. Ad laborum aliquip duis eiusmod nulla cupidatat
            culpa et ad. Sit reprehenderit sit et excepteur tempor exercitation
            nulla duis. Nisi amet consequat voluptate ipsum eiusmod consectetur
            ut reprehenderit et proident sunt ut tempor. Amet sunt irure nostrud
            non consequat ad. Ad et qui dolor eiusmod id ullamco amet deserunt
            eiusmod aliquip. Nisi cupidatat quis irure laboris est et Lorem
            pariatur sint non nulla. Duis ullamco incididunt quis enim labore
            velit mollit laboris ullamco duis quis aliquip aliqua eu ut. Aute
            aliquip officia excepteur nisi tempor sunt esse minim esse. Esse
            veniam consequat id duis nostrud qui quis officia ea nulla. Mollit
            consectetur ullamco labore anim id labore adipisicing adipisicing
            consequat labore veniam aliqua dolor ipsum. Qui ullamco sint sit
            fugiat dolor consequat magna consectetur nostrud elit cupidatat
            consectetur anim fugiat. Consectetur tempor Lorem id aliquip
            proident non reprehenderit aute voluptate ex est. Deserunt occaecat
            commodo do. In laborum aliqua veniam ut ad ut sit voluptate Lorem in
            et. Dolor esse eiusmod duis ut ipsum enim est velit. Ipsum anim
            cupidatat labore laboris laboris qui sint duis ut aliqua ullamco.
            Incididunt excepteur do dolor. Qui amet sit elit cillum. Magna velit
            esse adipisicing sit enim minim duis sit adipisicing ad dolor nulla.
            Duis ullamco elit et in. Cupidatat nisi aliquip dolor elit ad
            voluptate ea enim anim. Sint velit consequat tempor velit Lorem
            adipisicing officia incididunt nulla ipsum tempor. Dolore cupidatat
            cupidatat ut. Enim ea fugiat irure anim. Nostrud Lorem et excepteur
            velit adipisicing. Pariatur laboris Lorem ad ex occaecat
            exercitation quis occaecat officia nisi dolore id. Adipisicing enim
            laboris nostrud nisi anim sit incididunt anim magna incididunt
            excepteur occaecat anim qui duis. Do tempor sunt nostrud ad
            reprehenderit velit pariatur ipsum consequat in ex est consectetur
            velit ad. Mollit laborum ad sunt anim Lorem reprehenderit nostrud in
            reprehenderit. Sint occaecat duis exercitation fugiat laborum quis
            qui excepteur aute aute non minim enim est sint. Sit ipsum deserunt
            consectetur quis consectetur eiusmod reprehenderit velit mollit
            labore duis laborum non ea dolor. Lorem exercitation fugiat
            exercitation eiusmod. Amet amet nisi reprehenderit nostrud occaecat
            occaecat exercitation consequat sint eiusmod fugiat proident.
            Nostrud ipsum enim consectetur. Commodo laborum cillum mollit duis
            culpa reprehenderit et dolore laboris pariatur ipsum. Laboris amet
            dolor fugiat dolore sint elit. Ullamco nulla nisi sunt voluptate
            nulla ullamco Lorem est. Reprehenderit ex sit in officia cillum.
            Lorem proident elit proident duis et. Occaecat ex reprehenderit
            voluptate sunt sunt consectetur nulla ullamco tempor duis duis do
            magna reprehenderit consequat. Ut dolore duis eiusmod deserunt.
          </p>
        </div>
        <div className="sticky bottom-0 w-full">
          <Footer />
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
