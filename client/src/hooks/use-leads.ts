import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput, type LeadResponse } from "@shared/routes";

export function useCreateLead() {
  return useMutation({
    mutationFn: async (data: LeadInput): Promise<LeadResponse> => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
  });
}
