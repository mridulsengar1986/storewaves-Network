// src/data/filters.js
import {
  Flame,
  Sparkles,
  Headset,
  Star,
  Repeat,
  BarChart3,
} from 'lucide-react';

export const filters = [
  { id: 'hot', label: 'Hot Tools', icon: Flame },
  { id: 'content', label: 'Content & Creative', icon: Sparkles },
  { id: 'cx', label: 'CX & Support', icon: Headset },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'subs', label: 'Subscription', icon: Repeat },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];
