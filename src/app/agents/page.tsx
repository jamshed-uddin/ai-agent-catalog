import React, { Suspense } from "react";
import agentsData from "../../../public/mock-agents.json";
import { AgentType } from "@/lib/types";
import AgentCard from "@/components/AgentCard";
import FilterAndSearch from "@/components/FilterAndSearch";
import { Metadata } from "next";
import FadeUpAnimation from "@/components/FadeUpAnimation";

const agents = agentsData as AgentType[];

export const metadata: Metadata = {
  title: "Agents | Agent Index",
  description: "AI Agents Index: Discover your next Automation wizard",
};

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
  // fake delay for loading ui
  await new Promise((resolve) => setTimeout(resolve, 500));

  // we can use server component for SSR instead of getServerSideProps.
  const params = await searchParams;

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

  return (
    <div>
      <div className="mb-8">
        <Suspense>
          <FilterAndSearch />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAgents.map((agent, idx) => (
          <FadeUpAnimation key={agent.id} delay={idx * 0.2}>
            <AgentCard agent={agent} />
          </FadeUpAnimation>
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
