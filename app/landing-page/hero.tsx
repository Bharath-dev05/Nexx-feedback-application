import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn,Github, Layout } from "lucide-react";
import Image from "next/image";
import HoverVideo from "@/components/video";

const Hero = () => {
  return (
    <section className="grow">
      <div className="container mx-auto px-4 mb-24 mt-12 flex flex-col md:flex-row">
      <div className="flex flex-col max-w-sm justify-center">
      <div className=" mb-8 ">
          <h1 className="mb-5 text-5xl font-extrabold ">Collect your feedback seamlessly</h1>
          <p className="text-gray-500 text-lg">Easily integrate Nexx and start collecting feedback today.</p>
        </div>
        <div>
          <SignedOut>
            <SignInButton>
        <div className="flex gap-3">
        <Button >
                <LogIn className="w-4 h-4 mr-2"/
                >Get started
                </Button>
                <Button variant={"secondary"}  asChild>
              <Link href="https://github.com/Bharath-dev05/Nexx-feedback-application">  <Github className="w-4 h-4 mr-1 "/>
              Github</Link>
                    </Button>
        </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button asChild>
              <Link href="/dash-board">Dashboard</Link>
            </Button>
          </SignedIn>
        </div>
      </div>
      <div className="flex-1 max-w-lg">
      <Image src={'./demo.gif'}  alt='demo' height={175} width={175} layout={'responsive'}
        unoptimized={true}/>
      </div>
      </div>
    </section>
  
  );
};

export default Hero;
