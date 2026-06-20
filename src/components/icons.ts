import React from 'react';
import { Stethoscope, HeartPulse, ClipboardCheck, Activity, Brain, ShieldCheck } from 'lucide-react';

export const serviceIcons: Record<string, React.FC<any>> = {
  primary: Stethoscope,
  consultation: ClipboardCheck,
  preventive: ShieldCheck,
  chronic: HeartPulse,
  wellness: Brain,
  followup: Activity,
};
