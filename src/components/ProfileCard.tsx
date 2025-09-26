interface ProfileCardProps {
    name: string;
    title: string;
    location: string;
    role: string;
    skills: string[];
    website: string;
    email: string;
    github: string;
    bugcrowd: string;
    hackerone: string;
    avatar: string;
}

export default function ProfileCard({
    name, title, location, role, skills,
    website, email, github, bugcrowd, hackerone, avatar
    }: ProfileCardProps) {
    return (
        <div className="max-w-md mx-auto rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-800">
        <div className="h-28 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 relative">
            <div className="absolute -bottom-12 left-6">
            <img
                src={avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
            </div>
        </div>

        <div className="pt-16 px-6 pb-6 text-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{location}</p>

            <div className="flex items-center gap-2 mt-4">
            <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                🌐 Website
            </a>
            <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                ✉️ Email
            </a>
            </div>

            <div className="mt-6">
            <p className="text-xs text-gray-400">Current role</p>
            <p className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block text-sm">{role}</p>
            </div>

            <div className="mt-6">
            <p className="text-xs text-gray-400 mb-2">Skills</p>
            <div className="flex gap-2 flex-wrap">
                {skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">{skill}</span>
                ))}
            </div>
            </div>

            <div className="flex gap-4 mt-6">
            <a href={github} target="_blank" rel="noopener noreferrer">
                <img src="/github-logo.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href={bugcrowd} target="_blank" rel="noopener noreferrer">
                <img src="/bugcrowd-logo.png" alt="Bugcrowd" className="w-6 h-6" />
            </a>
            <a href={hackerone} target="_blank" rel="noopener noreferrer">
                <img src="/hackerone-logo.png" alt="HackerOne" className="w-6 h-6" />
            </a>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6 text-center text-sm">
                <a
                    href="https://bugcrowd.com/h/k-priyansh" // Bug Bounty link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 block"
                >
                    <p className="font-medium">Bug Bounty</p>
                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">Showcase your findings</p> */}
                </a>

                <a
                    href="https://khandal.me/blogs" // Blogs link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 block"
                >
                    <p className="font-medium">Write Blogs</p>
                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">Share knowledge & insights</p> */}
                </a>

                <a
                    href="https://github.com/k-priyansh?tab=repositories" // Projects link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 block"
                >
                    <p className="font-medium">Projects</p>
                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">Highlight your work</p> */}
                </a>
                </div>
        </div>
        </div>
    );
}
