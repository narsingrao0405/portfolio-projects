export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    features: string[];
    screenshotFolder: string;
    screenshots: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        id: 'syncomdesk',
        name: 'SyncomDesk',
        description: 'A comprehensive customer support and ticket management system with multi-channel communication capabilities.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
        features: [
            'Multi-channel support (Email, WhatsApp, Chat)',
            'Ticket management and escalation',
            'Department-wise routing',
            'Real-time dashboard with analytics',
            'Customer management system',
            'Escalation matrix configuration'
        ],
        screenshotFolder: 'SyncomDesk',
        screenshots: [
            'Dashboard.png',
            'New Ticket.png',
            'TicketDetails.png',
            'CustomersList.png',
            'DepartmentList.png',
            'ChannelListDepartment.png',
            'EmailChannelConfiguration.png',
            'EscalationMatrix.png',
            'EscalationsList.png',
            'GraphicalDashboard.png',
            'Whatsapp.png'
        ],
        githubUrl: 'https://github.com/narsingrao0405/syncomdesk',
        liveUrl: 'https://syncom-desk.vercel.app/'
    },
    {
        id: 'callmintbct',
        name: 'CallMint BCT',
        description: 'A Business Communication Tool for managing customer interactions and route optimization.',
        technologies: ['React', 'Node.js', 'MySQL', 'Express'],
        features: [
            'Customer management system',
            'Route planning and optimization',
            'Bulk customer upload functionality',
            'Audience segmentation',
            'User authentication and authorization'
        ],
        screenshotFolder: 'callmintBCT',
        screenshots: [
            'UserLogin.png',
            'CustoemerList.png',
            'AudienceList.png',
            'UploadCustomers.png',
            'AddRoute.png'
        ],
        githubUrl: 'https://github.com/narsingrao0405/callmint-bct',
        liveUrl: 'https://callmint-bct.vercel.app/'
    },
    {
        id: 'clingapp',
        name: 'ClingApp',
        description: 'A social networking application focused on connecting people with shared interests.',
        technologies: ['React Native', 'Firebase', 'Node.js'],
        features: [
            'User profiles and authentication',
            'Real-time messaging',
            'Interest-based matching',
            'Location-based services',
            'Media sharing capabilities'
        ],
        screenshotFolder: 'ClingApp',
        screenshots: [], // No screenshots provided yet
        githubUrl: ''
    },
    {
        id: 'licensemanager',
        name: 'License Manager',
        description: 'A comprrehensive software license management system for tracking and managing software licenses.',
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
        features: [
            'License tracking and monitoring',
            'Automated renewal reminders',
            'Usage analytics and reporting',
            'Multi-tenant support',
            'Integration with popular software vendors'
        ],
        screenshotFolder: 'LicenseManager',
        screenshots: [], // No screenshots provided yet
        githubUrl: 'https://license-manager-xi.vercel.app/'
    }
];
