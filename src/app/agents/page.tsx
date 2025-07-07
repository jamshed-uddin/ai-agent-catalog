import React, { Suspense } from "react";
import agentsData from "../../../public/mock-agents.json";
import { AgentType } from "@/lib/types";
import AgentCard from "@/components/AgentCard";
import FilterAndSearch from "@/components/FilterAndSearch";

const agents = agentsData as AgentType[];

const AgentsPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{
    status: string;
    category: string;
    priceModel: string;
  }>;
}) => {
  const params = await searchParams;

  console.log(params);

  return (
    <div>
      <div className="mb-8">
        <Suspense>
          <FilterAndSearch />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
