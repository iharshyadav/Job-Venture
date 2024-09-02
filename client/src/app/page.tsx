import Image from "next/image";
import Navtop from "./components/Navtop";
import { Button, Input } from "@nextui-org/react";
import { CiSearch, CiLocationOn, CiGlobe } from "react-icons/ci";
import { RiPencilRuler2Line } from "react-icons/ri";
import Category from "./components/jobs/Category";
import Featured from "./components/jobs/Featured";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
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

      <article className="mx-auto w-10/12 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h1 className="text-3xl font-bold">
            Latest <span className="text-[#26A4FF]">jobs open</span>
          </h1>
          <span className="text-[#4650DE] font-semibold text-sm">
            Show all jobs &#8594;
          </span>
        </div>
      </article>
    </main>
  );
}
