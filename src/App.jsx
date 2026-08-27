import { useState } from "react";
import NavLink from "./NavLink";
import Card from "./Card";

function App() {
  const [hamButton, setHamButton] = useState(false);

  function handleClick() {
    setHamButton(!hamButton);
  }

  return (
    <>
      <div className="flex justify-between bg-[rgba(16,62,43,0.7)] backdrop-blur-xs p-2.5 border-b border-b-[rgba(239,225,169,0.3)] shadow-2xl items-center">
        <div className="flex items-center gap-2 self-start">
          <img src="logo2.png" alt="Logo" className="w-12 rounded-md" />
          <h1 className="text-3xl">Nile</h1>
        </div>
        <div className="flex gap-4 xl:flex-row flex-col place-items-end">
          <a onClick={handleClick} className="xl:hidden hover:text-white cursor-pointer">
            {!hamButton ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
                    />
                  </g>
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  className="mt-2"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                    />
                  </g>
                </svg>
              </>
            )}
          </a>
          <NavLink
            name="Nile Delta"
            link="#delta"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="Damietta"
            link="#dami"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="Great Bend"
            link="#bend"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="Bayuda Desert"
            link="#bayu"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="First Cataract"
            link="#cat"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="Philae/Aswan Islands"
            link="#philasw"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="Sudd Wetland"
            link="#sudd"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="Lake Albert"
            link="#alb"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
          <NavLink
            name="Lake Victoria"
            link="#vic"
            hamButton={hamButton}
            setHamButton={setHamButton}
          />
        </div>
      </div>
      <div className="flex mt-35">
        <div className="2xl:w-1/3 lg:w-1/4 sm:w-1/5 w-1/6"></div>
        <Card
          link="delta"
          name="Nile Delta"
          image="delta.jpg"
          text={
            <>
              The Nile Delta is the delta formed in Lower Egypt where the Nile
              River spreads out and drains into the Mediterranean Sea. It is one
              of the world's largest deltas. From Alexandria in the west to Port
              Said in the east; it covers 240 km of the Mediterranean coastline
              and is a rich agricultural region.
            </>
          }
        />
      </div>
      <div className="flex mt-5">
        <div className="2xl:w-1/2 lg:w-9/20 sm:w-7/20 w-1/4"></div>
        <Card
          link="dami"
          name="Damietta"
          image="damietta.jpg"
          text={
            <>
              Damietta is a port city and the capital of the Damietta
              Governorate in Egypt. It is located at the Damietta branch, an
              eastern distributary of the Nile Delta, 15 kilometres (9.3 mi)
              from the Mediterranean Sea, and about 200 kilometres (120 mi)
              north of Cairo.
            </>
          }
        />
      </div>
      <div className="flex mt-5">
        <div className="grow"></div>
        <Card
          link="bend"
          name="Great Bend of the Nile"
          image="bend.jpg"
          text={
            <>
              The Great Bend of the Nile is a dramatic, S-shaped curve in the
              river's path in northern Sudan, near the cities of Abu Hamad and
              Al-Dabba, where the river turns sharply southwest before resuming
              its northward flow towards Egypt.
            </>
          }
        />
      </div>
      <div className="flex mt-5">
        <div className="2xl:w-1/2 lg:w-9/20 sm:w-7/20 w-1/4"></div>
        <Card
          link="bayu"
          name="Bayuda Desert Nile Corridor"
          image="bayuda.jpg"
          text={
            <>
              The Bayuda Desert Nile Corridor refers to the area within the
              great bend of the Nile River in Central Sudan, which has
              historically served as a vital, yet challenging, pathway for human
              movement, trade, and settlement between the Nile Valley
              communities.
            </>
          }
        />
      </div>
      <div className="flex mt-5">
        <div className="2xl:w-1/3 lg:w-1/4 sm:w-1/5 w-1/6"></div>
        <Card
          link="cat"
          name="First Cataract Region"
          image="cataract.jpg"
          text={
            <>
              The First Cataract Region is the area around the First Cataract of
              the Nile River, located just south of modern-day Aswan, Egypt,
              historically marking the southern boundary of Ancient Egypt with
              Nubia (now Sudan).
            </>
          }
        />
        <div className="2xl:w-1/3 lg:w-1/4 sm:w-1/5 w-1/6"></div>
      </div>
      <div className="flex mt-5">
        <div className="grow"></div>
        <Card
          link="philasw"
          name="Philae / Aswan Nile Islands"
          image="island.jpg"
          text={
            <>
              Philae is a historic island near Aswan, Egypt, famous for its
              ancient Temple of Isis, which, along with other monuments, was
              relocated to Agilkia Island to save it from flooding by the Aswan
              Dams; originally a sacred site for Osiris, it became a major
              religious center.
            </>
          }
        />
        <div className="2xl:w-1/2 lg:w-9/20 sm:w-7/20 w-1/4"></div>
      </div>
      <div className="flex mt-5">
        <Card
          link="sudd"
          name="Sudd Wetland"
          image="sudd.jpg"
          text={
            <>
              The Sudd is a vast swamp in South Sudan, formed by the White
              Nile's Baḥr al-Jabal section. The Arabic word sudd is derived from
              sadd, meaning "barrier" or "obstruction". The term "the sudd" has
              come to refer to any large solid floating vegetation island or
              mat.
            </>
          }
        />
      </div>
      <div className="flex mt-5">
        <div className="grow"></div>
        <Card
          link="alb"
          name="Lake Albert Region"
          image="albert.jpg"
          text={
            <>
              The Lake Albert region is a vital area in East Africa, straddling
              the border of Uganda and the Democratic Republic of Congo (DRC)
              within the Albertine Rift (part of the Great Rift Valley), known
              for its rich biodiversity, significant fishing industry,
              subsistence farming, and potential oil/mineral resources.
            </>
          }
        />
        <div className="2xl:w-1/2 lg:w-9/20 sm:w-7/20 w-1/4"></div>
      </div>
      <div className="flex mt-5">
        <div className="2xl:w-1/3 lg:w-1/4 sm:w-1/5 w-1/6"></div>
        <Card
          link="vic"
          name="Lake Victoria Source Region"
          image="victoria.jpg"
          text={
            <>
              The source region for Lake Victoria, Africa's largest freshwater
              lake and a key source of the Nile River, includes the extensive
              drainage basin shared by Uganda, Kenya, Tanzania, Rwanda, and
              Burundi, with the Kagera River system.
            </>
          }
        />
        <div className="2xl:w-1/3 lg:w-1/4 sm:w-1/5 w-1/6"></div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-[rgba(16,62,43,0.7)] backdrop-blur-xs rounded-md shadow-2xl border border-[rgba(239,225,169,0.3)] p-4">
          This is a website template. If you would like to see some of my other
          works, go to my{" "}
          <a
            href="https://arontorok.github.io/"
            className="text-white hover:underline"
          >
            portfolio website
          </a>{" "}
          (https://arontorok.github.io/).
        </div>
      </div>
      <div className="flex justify-center bg-[rgba(16,62,43,0.7)] backdrop-blur-xs p-2.5 border-t border-t-[rgba(239,225,169,0.3)] shadow-2xl mt-5">
        <div className="flex items-center gap-2 self-start">
          <img src="logo2.png" alt="Logo" className="w-12 rounded-md" />
          <h1 className="text-3xl">Nile</h1>
        </div>
      </div>
    </>
  );
}

export default App;
