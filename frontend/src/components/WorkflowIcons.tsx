import React from 'react';
import SvgIcon from './SvgIcon';
import {IconProps} from "./CustomIcons";

export const PlayIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Play">
    <polygon points="5,3 19,12 5,21" />
  </SvgIcon>
);

export const PauseIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Pause">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </SvgIcon>
);

export const RefreshIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Reset">
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </SvgIcon>
);

export const SaveIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Save">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </SvgIcon>
);

export const FileTextIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="File Text">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </SvgIcon>
);

export const UserIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="User">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </SvgIcon>
);

export const CalendarIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Calendar">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </SvgIcon>
);

export const ActivityIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Activity">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </SvgIcon>
);

export const ToolIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Tool">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </SvgIcon>
);


export const ChevronDownIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Chevron Down">
    <polyline points="6 9 12 15 18 9" />
  </SvgIcon>
);

export const ChevronUpIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Chevron Up">
    <polyline points="18 15 12 9 6 15" />
  </SvgIcon>
);

export const ArrowRightIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Arrow Right">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </SvgIcon>
);

export const ClockIcon: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
  <SvgIcon size={size} color={color} title="Clock">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </SvgIcon>
);
