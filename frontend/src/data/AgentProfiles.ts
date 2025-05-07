// Agent profiles data including individual and twin profiles
export interface AgentProfile {
  id: string;
  name: string;
  color: string;
  role: string;
  description: string;
}

export const AgentProfiles: { [key: string]: AgentProfile } = {
  'nat': {
    id: 'nat',
    name: 'Nat',
    color: '#8b5cf6',
    role: 'CEO/AI PM',
    description: 'Overall project management, access to all system components, final decision authority'
  },
  'brian': {
    id: 'brian',
    name: 'Brian',
    color: '#06d6a0',
    role: 'Product Manager',
    description: 'Manages the Pair Programming Widget specifically, coordinates feature development'
  },
  'reqqy': {
    id: 'reqqy',
    name: 'Reqqy',
    color: '#ff9e00',
    role: 'Requirements Agent',
    description: 'Gathers requirements, creates structured issues, manages GitHub integration'
  },
  'josh': {
    id: 'josh',
    name: 'Josh',
    color: '#ff5a5f',
    role: 'Graphic Design Agent',
    description: 'Creates mockups, handles branding, produces visual assets and UI components'
  },
  'james_terrell': {
    id: 'james_terrell',
    name: 'James & Terrell',
    color: '#0084ff',
    role: 'Twin Developer Agents',
    description: 'Collaborate via pair programming, implement features, write code'
  },
  'james': {
    id: 'james',
    name: 'James',
    color: '#3b82f6',
    role: 'Developer',
    description: 'Implements features, writes and fixes code, works with Terrell in pair programming'
  },
  'terrell': {
    id: 'terrell',
    name: 'Terrell',
    color: '#2563eb',
    role: 'Developer',
    description: 'Performs code reviews, provides feedback, works with James in pair programming'
  },
  'antosh': {
    id: 'antosh',
    name: 'Antosh',
    color: '#4c1d95',
    role: 'Testing & Analytics Agent',
    description: 'Writes and runs tests, implements TDD methodology, tracks performance metrics'
  },
  'man-man': {
    id: 'man-man',
    name: 'Man-Man',
    color: '#10b981',
    role: 'Maintenance Agent',
    description: 'Handles DevOps, maintains deployed applications, manages infrastructure'
  },
  'lia': {
    id: 'lia',
    name: 'Lia',
    color: '#ec4899',
    role: 'Email & Social Media Agent',
    description: 'Manages social media presence, email marketing, lead generation'
  },
  'compass': {
    id: 'compass',
    name: 'Compass',
    color: '#f97316',
    role: 'HR Agent',
    description: 'Routes messages, maps workflows, maintains agent roster and capabilities'
  }
};

export default AgentProfiles;
