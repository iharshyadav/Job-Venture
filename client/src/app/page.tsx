import Image from "next/image";
import Navtop from "./components/Navtop";
import { Button, Divider, Input } from "@nextui-org/react";
import { CiSearch, CiLocationOn, CiGlobe } from "react-icons/ci";
import { RiPencilRuler2Line } from "react-icons/ri";
import Category from "./components/jobs/Category";
import Featured from "./components/jobs/Featured";
import NewOpening from "./components/jobs/NewOpening";
import Submit from "./components/Submit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <header className="handlady">
        <Navtop />
        <div className="mt-6 flex justify-center px-12 items-center">
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col gap-3 max-w-md">
              <h1 className="text-6xl font-bold text-zinc-700">
                Discover more than{" "}
                <span className="text-[#26A4FF]">5000+ Jobs</span>
              </h1>
              <Image src="/underline.svg" alt="lady" width={400} height={500} />
              <p className="text-black/60">
                Great platform for the job seeker that searching for new career
                heights and willing to learn.
              </p>
            </div>
            <div className="p-4 flex gap-2 bg-white shadow-md">
              <Input
                startContent={<CiSearch size={24} />}
                variant="underlined"
                placeholder="Job title or Keyword"
              />
              <Input
                startContent={<CiLocationOn size={24} />}
                variant="underlined"
                placeholder="Location"
              />
              <Button className="bg-[#4640DE] text-white font-bold px-16">
                Search my Job
              </Button>
            </div>
          </div>
          <Image
            src="/handlady.png"
            alt="lady"
            width={500}
            height={700}
            className="lg:flex hidden"
          />
        </div>
      </header>

      <article className="mx-auto w-10/12 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h1 className="text-3xl font-bold">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h1>
          <span className="text-[#4650DE] font-semibold text-sm">
            Show all jobs &#8594;
          </span>
        </div>

        <div className="flex flex-wrap gap-8">
          <Category
            icon={<RiPencilRuler2Line size={40} />}
            title="Design"
            num="235 jobs available"
          />
          <Category
            icon={<RiPencilRuler2Line size={40} />}
            title="Design"
            num="235 jobs available"
          />
          <Category
            icon={<RiPencilRuler2Line size={40} />}
            title="Design"
            num="235 jobs available"
          />
          <Category
            icon={<RiPencilRuler2Line size={40} />}
            title="Design"
            num="235 jobs available"
          />
          <Category
            icon={<RiPencilRuler2Line size={40} />}
            title="Design"
            num="235 jobs available"
          />
        </div>
      </article>

      <article className="relative">
        <div className="mx-auto w-10/12 flex lg:justify-start justify-center rounded-2xl bg-[#4640DE] px-16 lg:py-32 py-12">
          <div className="flex flex-col gap-3 lg:w-1/3">
            <h1 className="text-5xl font-bold text-white">
              Start posting jobs today
            </h1>
            <p className="text-white">Start posting jobs for free.</p>
            <Button
              radius="none"
              className="bg-white font-bold text-[#4640DE] w-fit"
            >
              Sign Up for free
            </Button>
          </div>
        </div>
        <Image
          src="/bookLady.png"
          alt="booklady"
          width={300}
          height={500}
          className="absolute -top-8 right-[25%] lg:flex hidden"
        />
      </article>

      <article className="mx-auto w-10/12 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h1 className="text-3xl font-bold">
            Featured <span className="text-[#26A4FF]">jobs</span>
          </h1>
          <span className="text-[#4650DE] font-semibold text-sm">
            Show all jobs &#8594;
          </span>
        </div>
        <div className="flex flex-wrap gap-8">
          <Featured
            description="Revolut is looking for Email Marketing to help team ma ..."
            place="Revault - Madrid"
            title="Email marketing"
            type="Full time"
            skills={["Design", "Marketing"]}
            logo={<CiGlobe size={40} />}
          />
          <Featured
            description="Revolut is looking for Email Marketing to help team ma ..."
            place="Revault - Madrid"
            title="Email marketing"
            type="Full time"
            skills={["Design", "Marketing"]}
            logo={<CiGlobe size={40} />}
          />
          <Featured
            description="Revolut is looking for Email Marketing to help team ma ..."
            place="Revault - Madrid"
            title="Email marketing"
            type="Full time"
            skills={["Design", "Marketing"]}
            logo={<CiGlobe size={40} />}
          />
          <Featured
            description="Revolut is looking for Email Marketing to help team ma ..."
            place="Revault - Madrid"
            title="Email marketing"
            type="Full time"
            skills={["Design", "Marketing"]}
            logo={<CiGlobe size={40} />}
          />
        </div>
      </article>

      <article className="handlady py-8">
        <div className="mx-auto w-10/12 flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <h1 className="text-3xl font-bold">
              Latest <span className="text-[#26A4FF]">jobs open</span>
            </h1>
            <span className="text-[#4650DE] font-semibold text-sm">
              Show all jobs &#8594;
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <NewOpening
              place="Revault - Madrid"
              title="Email marketing"
              type="Full time"
              skills={["Design", "Marketing"]}
              icon={<CiGlobe size={40} />}
            />
            <NewOpening
              place="Revault - Madrid"
              title="Email marketing"
              type="Full time"
              skills={["Design", "Marketing"]}
              icon={<CiGlobe size={40} />}
            />
            <NewOpening
              place="Revault - Madrid"
              title="Email marketing"
              type="Full time"
              skills={["Design", "Marketing"]}
              icon={<CiGlobe size={40} />}
            />
            <NewOpening
              place="Revault - Madrid"
              title="Email marketing"
              type="Full time"
              skills={["Design", "Marketing"]}
              icon={<CiGlobe size={40} />}
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
