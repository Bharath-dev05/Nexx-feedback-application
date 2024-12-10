import SubscribeBtn from "../subscribe-btn";
import { monthlyPlanId, yearlyPlanId } from "@/lib/payments";

import { ReactNode } from "react";

export default async function page(props: { children: ReactNode; params: Promise<{ plan: string }> }) {
  const { children, params } = props;
  
  // Extract the plan from params
  const { plan } = await params;

  const planId = plan === "monthly" ? monthlyPlanId : yearlyPlanId;

  return (
    <div className="flex border p-4 rounded-md flex-col">
      <h1 className="text-2xl font-bold">Start your subscription now:</h1>
      <div className="w-fit mt-3">
        <SubscribeBtn price={planId} />
      </div>
    </div>
  )
}

// export default page;