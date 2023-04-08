import { teamMembers } from '@/utils/data/team';

const TeamSection = () => {
  return (
    <section id="team" className="bg-white dark:bg-gray-800 w-full">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-6"
              key={member.name}
            >
              <div className="flex items-center mb-6">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={member.avatar}
                  alt={member.name}
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">{member.title}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {member.bio}
              </p>
              <div className="flex justify-between">
                {member.social.map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={social.url}
                    >
                      <Icon
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        size={24}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
