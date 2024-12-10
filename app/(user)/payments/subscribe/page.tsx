import SubscribeBtn from "../subscribe-btn";
import { monthlyPlanId,yearlyPlanId } from "@/lib/payments";

interface PageProps { searchParams?: { plan?: string; }; }


const page = async ({searchParams}:PageProps)=>{
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const plan = resolvedSearchParams?.plan || "monthly";
    const planId= plan === "monthly" ?monthlyPlanId:yearlyPlanId
    return(
        <div className="flex border p-4 rounded-md flex-col">

          <div className="w-fit mt-3">
            <h1 className="text-2xl font-bold">Start your subscription now:</h1>
          <SubscribeBtn price={planId}/>
          </div>
        </div>
    )
    
}

export default page;