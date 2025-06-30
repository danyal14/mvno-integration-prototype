import { MvnoResponse } from "../types/mvnoResponse.js";
import { InternalResponse } from "../types/internalResponse.js";
export function jsonMapper(input: MvnoResponse): InternalResponse {
  const response = {
    telgea_user_id: input.user_id,
    msisdn: input.msisdn,
    usage_data: {
      total_mb: input.usage.data.total_mb,
      roaming_mb: input.usage.data.roaming_mb,
      country: input.usage.data.country,
      network_type: input.network.type,
      provider_code: input.network.provider_code,
    },
    sms_charges: [
      {
        message_id: "msg789",
        timestamp: "2025-04-01T12:30:00Z",
        amount: 0.05,
        currency: "EUR",
      },
    ],
    billing_period: {
      start: input.usage.period.start,
      end: input.usage.period.end,
    },
  };
  return response;
}
