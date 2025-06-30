export interface SmsCharge {
  message_id: string;
  timestamp: string;
  amount: number;
  currency: string;
}

export interface BillingPeriod {
  start: string;
  end: string;
}

export interface InternalResponse {
  telgea_user_id: string;
  msisdn: string;
  usage_data: {
    total_mb: number;
    roaming_mb: number;
    country: string;
    network_type: string;
    provider_code: string;
  };
  sms_charges: SmsCharge[];
  billing_period: BillingPeriod;
}
