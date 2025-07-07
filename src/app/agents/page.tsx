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
    search: string;
    status: string;
    category: string;
    pricingModel: string;
  }>;
}) => {
  const params = await searchParams;

  console.log(params);

  const filteredAgents: AgentType[] = agents.filter((agent) => {
    if (params?.status && agent.status !== params.status) {
      return false;
    }
    if (params?.category && agent.category !== params.category) {
      return false;
    }
    if (params?.pricingModel && agent.pricingModel !== params.pricingModel) {
      return false;
    }

    if (params?.search) {
      const searchQuery = params.search;
      const nameMatch = agent.name.includes(searchQuery);
      const descriptionMatch = agent.description.includes(searchQuery);
      if (!nameMatch && !descriptionMatch) {
        return false;
      }
    }

    return true;
  });
  console.log(filteredAgents);

  return (
    <div>
      <div className="mb-8">
        <Suspense>
          <FilterAndSearch />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
