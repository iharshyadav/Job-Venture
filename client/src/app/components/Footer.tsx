import { FC } from 'react'
import { Button, Divider, Input } from "@nextui-org/react";

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return <div>
    <footer className="bg-[#202430] flex flex-col gap-8 py-8">
        <div className="mx-auto w-10/12 py-8 grid lg:grid-cols-12 sm:grid-cols-6 grid-cols-1 gap-10">
          <div className="flex flex-col gap-12 col-span-4">
            <h1 className="text-xl font-black text-white">Vision</h1>
            <p className="text-white">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier and enhance your skills with the help
              of personalized AI driven path.
            </p>
          </div>
          <div className="flex flex-col gap-12 col-span-2">
            <h1 className="text-xl font-semibold text-white">About</h1>
            <ul className="flex flex-col gap-4 text-white">
              <li>Companies</li>
              <li>Pricing</li>
              <li>Terms</li>
              <li>Advice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-12 col-span-2">
            <h1 className="text-xl font-semibold text-white">Resources</h1>
            <ul className="flex flex-col gap-4 text-white">
              <li>Help Docs</li>
              <li>Guide</li>
              <li>Updates</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-12 col-span-4 self-center">
            <p className="text-white">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex gap-2">
              <Input placeholder="Email address" />
              <Button className="bg-[#4640DE] text-white font-bold px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Divider className="bg-zinc-500 w-10/12 mx-auto" />
        <div className="mx-auto w-10/12">
          <p className="text-white">2024. All rights reserved.</p>
        </div>
      </footer>
  </div>
}

export default Footer